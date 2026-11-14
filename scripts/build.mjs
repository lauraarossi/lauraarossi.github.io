// Builds the site: content/*.md  ->  dist/**/index.html
//
//   npm run build          one-off build into dist/
//   npm run dev            build, serve on http://localhost:8788 and rebuild on change
//
// Markdown conventions (see README.md for the full list):
//   - Front matter (between --- lines) sets title, description, layout, etc.
//   - HTML comments <!-- like this --> are removed before publishing, so they are
//     safe for private notes (but they are still visible in the repo itself).
//   - layout: timeline  ->  every "### Heading" starts a timeline entry with a paw marker;
//     an all-italic line straight after it (*2021 – 2025 · Dublin*) becomes the date line.
//   - A paragraph made only of images becomes a photo gallery.

import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import crypto from "node:crypto";
import matter from "gray-matter";
import { marked } from "marked";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const CONTENT = path.join(ROOT, "content");
const PUBLIC = path.join(ROOT, "public");
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist");

marked.use({ gfm: true });

// ---------- helpers ----------

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const slugify = (s) =>
  s.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const stripComments = (md) => md.replace(/<!--[\s\S]*?-->/g, "");

const inline = (md = "") => marked.parseInline(String(md));

function readMarkdown(file) {
  const raw = fs.readFileSync(file, "utf8");
  try {
    const { data, content } = matter(raw);
    return { data, body: stripComments(content) };
  } catch (err) {
    throw new Error(`Could not read the front matter in ${path.relative(ROOT, file)}:\n${err.message}`);
  }
}

function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (entry.name === ".DS_Store") continue;
    const a = path.join(from, entry.name), b = path.join(to, entry.name);
    entry.isDirectory() ? copyDir(a, b) : fs.copyFileSync(a, b);
  }
}

// ---------- markdown -> html with the site's conventions ----------

function isGallery(tok) {
  if (tok.type !== "paragraph") return false;
  const parts = tok.tokens.filter((t) => !(t.type === "text" && !t.text.trim()) && t.type !== "br");
  return parts.length >= 2 && parts.every((t) => t.type === "image");
}

function galleryHtml(tok) {
  const imgs = tok.tokens.filter((t) => t.type === "image");
  return `<div class="gallery">${imgs
    .map((i) => `<button type="button" class="gallery-item" data-full="${esc(i.href)}" aria-label="Enlarge: ${esc(i.text)}"><img src="${esc(i.href)}" alt="${esc(i.text)}" loading="lazy" decoding="async"></button>`)
    .join("")}</div>\n`;
}

function isMeta(tok) {
  // A paragraph that is entirely *italic*
  return tok?.type === "paragraph" && tok.tokens.length === 1 && tok.tokens[0].type === "em";
}

function renderTokens(tokens, links) {
  let html = "";
  let buffer = [];
  const flush = () => {
    if (!buffer.length) return;
    const t = buffer; t.links = links;
    html += marked.parser(t);
    buffer = [];
  };
  for (const tok of tokens) {
    if (isGallery(tok)) { flush(); html += galleryHtml(tok); }
    else if (tok.type === "heading" && tok.depth <= 4) {
      flush();
      const text = marked.parseInline(tok.text);
      html += `<h${tok.depth} id="${slugify(tok.text)}">${text}</h${tok.depth}>\n`;
    } else buffer.push(tok);
  }
  flush();
  return html;
}

// "Role — Company" headings become two lines: the role, and the organisation under it.
function entryHeading(text) {
  const i = text.indexOf(" — ");
  if (i < 0) return `<h3><span class="role">${marked.parseInline(text)}</span></h3>`;
  return `<h3><span class="role">${marked.parseInline(text.slice(0, i))}</span><span class="org">${marked.parseInline(text.slice(i + 3))}</span></h3>`;
}

// "*Aug 2025 – present · Dublin · Python*" -> separate pieces, the first one being the date
function metaLine(text) {
  const [when, ...rest] = text.split(" · ");
  return `<p class="meta"><span class="when">${marked.parseInline(when)}</span>${rest.length ? `<span class="rest">${rest.map((r) => marked.parseInline(r)).join(' <span class="sep">·</span> ')}</span>` : ""}</p>\n`;
}

// Split "a, b (c, d), e" on commas that are not inside brackets
function splitList(text) {
  const out = []; let depth = 0, cur = "";
  for (const ch of text) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) { out.push(cur); cur = ""; } else cur += ch;
  }
  out.push(cur);
  return out.map((x) => x.trim().replace(/\.$/, "")).filter(Boolean);
}

// Lists of "**Label:** a, b, c" become a label with a row of chips
function chipify(html) {
  return html.replace(/<ul>\s*((?:<li><strong>[^<]+:<\/strong>[\s\S]*?<\/li>\s*)+)<\/ul>/g, (_, items) =>
    `<dl class="skills">${items.replace(/<li><strong>([^<]+):<\/strong>([\s\S]*?)<\/li>\s*/g, (_, label, rest) =>
      `<div><dt>${label}</dt><dd>${splitList(rest).map((c) => `<span class="chip">${c}</span>`).join("")}</dd></div>`)}</dl>`);
}

// Timeline: "## Section" headings split sections, "### Entry" headings start entries.
// Sections named in the page's `cards:` list render as a grid of cards instead;
// sections named in `chips:` turn "**Label:** a, b, c" lists into chips.
function renderTimeline(body, { cards = [], chips = [] } = {}) {
  const tokens = marked.lexer(body);
  const links = tokens.links;
  let html = "";
  let pre = [];          // content before any entry in the current section
  let entries = [];      // [{ heading, meta, tokens }]
  let cur = null;
  let section = "";

  const closeSection = () => {
    const preHtml = renderTokens(pre, links);
    html += chips.includes(section) ? chipify(preHtml) : preHtml;
    if (entries.length) {
      const asCards = cards.includes(section);
      html += `<ol class="${asCards ? "cards" : "timeline"}">\n`;
      for (const e of entries) {
        html += `<li class="${asCards ? "card" : "entry"}" id="${slugify(e.heading.text)}">\n${entryHeading(e.heading.text)}\n`;
        if (e.meta) html += metaLine(e.meta.tokens[0].text);
        html += renderTokens(e.tokens, links) + `</li>\n`;
      }
      html += `</ol>\n`;
    }
    pre = []; entries = []; cur = null;
  };

  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (tok.type === "heading" && tok.depth <= 2) {
      closeSection();
      section = tok.text;
      html += renderTokens([tok], links);
    } else if (tok.type === "heading" && tok.depth === 3) {
      let j = i + 1;
      while (tokens[j]?.type === "space") j++;
      const meta = isMeta(tokens[j]) ? tokens[j] : null;
      cur = { heading: tok, meta, tokens: [] };
      entries.push(cur);
      if (meta) i = j;
    } else if (cur) cur.tokens.push(tok);
    else pre.push(tok);
  }
  closeSection();
  return html;
}

function renderDefault(body) {
  const tokens = marked.lexer(body);
  return renderTokens(tokens, tokens.links);
}

const TILE_STYLES = 6;
function renderTiles(tiles = []) {
  return `<section class="tiles">\n${tiles
    .map((t, i) => `<article class="tile style${(i % TILE_STYLES) + 1}">
  <span class="image"><img src="${esc(t.image)}" alt="" loading="${i < 3 ? "eager" : "lazy"}"></span>
  <a href="${esc(t.href)}"><h2>${esc(t.title)}</h2><div class="content"><p>${inline(t.text)}</p></div></a>
</article>`)
    .join("\n")}\n</section>\n`;
}

// ---------- build ----------

function hashOf(file) {
  return crypto.createHash("sha1").update(fs.readFileSync(file)).digest("hex").slice(0, 8);
}

function build() {
  const t0 = Date.now();
  const site = readMarkdown(path.join(CONTENT, "_site.md")).data;
  const layout = fs.readFileSync(path.join(SRC, "layout.html"), "utf8");

  fs.rmSync(DIST, { recursive: true, force: true });
  copyDir(PUBLIC, DIST);
  fs.mkdirSync(path.join(DIST, "assets"), { recursive: true });
  for (const f of ["styles.css", "main.js"]) fs.copyFileSync(path.join(SRC, f), path.join(DIST, "assets", f));
  const v = { css: hashOf(path.join(SRC, "styles.css")), js: hashOf(path.join(SRC, "main.js")) };

  const files = fs.readdirSync(CONTENT).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
  const pages = files.map((f) => {
    const { data, body } = readMarkdown(path.join(CONTENT, f));
    const name = f.replace(/\.md$/, "");
    const slug = data.slug ?? (name === "index" ? "" : name);
    return { file: f, data, body, slug, url: slug ? `/${slug}/` : "/" };
  });

  // Each page takes a colour (1–6, the home tile colours) and a banner image,
  // by its position in the menu unless the front matter sets `color:` / `image:`.
  const navPages = (site.nav || []).filter((n) => n.href.startsWith("/"));
  const navIndex = (url) => navPages.findIndex((n) => n.href === url);
  // Matches the home tiles: Experience is tile 1, Projects tile 2, and so on.
  const colorOf = (p) => p.data.color || (navIndex(p.url) > 0 ? ((navIndex(p.url) - 1) % 6) + 1 : 1);

  const pagerHtml = (p) => {
    const i = navIndex(p.url);
    if (i < 1) return "";
    const prev = navPages[i - 1], next = navPages[i + 1];
    const link = (n, dir) => {
      const target = pages.find((q) => q.url === n.href);
      const c = target ? colorOf(target) : 1;
      return `<a class="pager-${dir}" href="${esc(n.href)}" style="--c: var(--tile${c})"><span class="pager-label">${dir === "prev" ? "Previous" : "Next"}</span><span class="pager-title">${esc(n.title)}</span></a>`;
    };
    return `<nav class="pager" aria-label="More pages">${prev ? link(prev, "prev") : "<span></span>"}${next ? link(next, "next") : ""}</nav>`;
  };

  const actionsHtml = (actions) => actions
    ? `<p class="actions">${actions.map((a) => `<a class="button${a.primary ? " primary" : ""}" href="${esc(a.href)}"${a.print ? " data-print" : ""}>${esc(a.label)}</a>`).join(" ")}</p>`
    : "";

  const navHtml = (current) =>
    (site.nav || []).map((n) => `<li><a href="${esc(n.href)}"${n.href === current ? ' aria-current="page"' : ""}>${esc(n.title)}</a></li>`).join("\n");

  for (const p of pages) {
    const d = p.data;
    let main;
    const color = colorOf(p);
    if (d.layout === "home") {
      main = `<section class="hero">
<div class="hero-text">
${d.eyebrow ? `<p class="eyebrow">${inline(d.eyebrow)}</p>` : ""}
<h1>${esc(d.heading || site.name)}</h1>
${d.tagline ? `<p class="tagline">${inline(d.tagline)}</p>` : ""}
${d.intro ? `<div class="intro">${marked.parse(stripComments(d.intro))}</div>` : ""}
${actionsHtml(d.actions)}
</div>
${d.portrait ? `<figure class="portrait"><img src="${esc(d.portrait)}" alt="${esc(d.portrait_alt || "")}" width="500" height="625"></figure>` : ""}
</section>
${d.highlights ? `<ul class="highlights">${d.highlights.map((h, i) => `<li style="--c: var(--tile${(i % 6) + 1})"><strong>${inline(h.value)}</strong><span>${inline(h.label)}</span></li>`).join("")}</ul>` : ""}
${renderTiles(d.tiles)}
<div class="prose home-more">
${renderDefault(p.body)}
</div>`;
    } else {
      const content = d.layout === "timeline" ? renderTimeline(p.body, { cards: d.cards, chips: d.chips }) : renderDefault(p.body);
      const banner = d.image || `/images/beach${color}.webp`;
      const num = navIndex(p.url);
      main = `<header class="page-header">
<div class="banner">
  <img src="${esc(banner)}" alt="" fetchpriority="high">
  <div class="banner-text">${num > 0 ? `<span class="eyebrow">${String(num).padStart(2, "0")}</span>` : ""}<h1>${esc(d.title)}</h1></div>
</div>
${d.lead ? `<p class="lead">${inline(d.lead)}</p>` : ""}
${actionsHtml(d.actions)}
</header>
<div class="prose">
${content}
</div>
${pagerHtml(p)}`;
    }

    const title = d.layout === "home" ? `${site.name} · ${site.title}` : `${d.title} · ${site.name}`;
    const html = layout
      .replaceAll("{{title}}", esc(title))
      .replaceAll("{{description}}", esc(d.description || site.description))
      .replaceAll("{{canonical}}", esc(site.url.replace(/\/$/, "") + p.url))
      .replaceAll("{{siteName}}", esc(site.name))
      .replaceAll("{{nav}}", navHtml(p.url))
      .replaceAll("{{email}}", esc(site.email))
      .replaceAll("{{github}}", esc(site.github))
      .replaceAll("{{linkedin}}", esc(site.linkedin))
      .replaceAll("{{year}}", String(new Date().getFullYear()))
      .replaceAll("{{bodyClass}}", esc(d.layout || "page"))
      .replaceAll("{{pageColor}}", `var(--tile${color})`)
      .replaceAll("{{cssv}}", v.css)
      .replaceAll("{{jsv}}", v.js)
      .replace("{{main}}", () => main);

    const outDir = path.join(DIST, p.slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html);
  }

  // 404 page (Cloudflare serves dist/404.html for unknown paths)
  const notFound = pages.find((p) => p.slug === "404");
  if (notFound) fs.renameSync(path.join(DIST, "404", "index.html"), path.join(DIST, "404.html")), fs.rmdirSync(path.join(DIST, "404"));

  const base = site.url.replace(/\/$/, "");
  fs.writeFileSync(
    path.join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
      .filter((p) => p.slug !== "404")
      .map((p) => `  <url><loc>${base}${p.url}</loc></url>`)
      .join("\n")}\n</urlset>\n`
  );
  fs.writeFileSync(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);

  console.log(`Built ${pages.length} pages into dist/ in ${Date.now() - t0} ms`);
}

// ---------- dev server ----------

function serve(port = 8788) {
  const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".webp": "image/webp", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".pdf": "application/pdf", ".xml": "application/xml", ".txt": "text/plain", ".ico": "image/x-icon" };
  http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let file = path.join(DIST, p);
    if (!file.startsWith(DIST)) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      if (!p.endsWith("/")) { res.writeHead(301, { Location: p + "/" }); return res.end(); }
      file = path.join(file, "index.html");
    }
    if (!fs.existsSync(file)) { res.writeHead(404, { "Content-Type": types[".html"] }); return res.end(fs.readFileSync(path.join(DIST, "404.html"))); }
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  }).listen(port, () => console.log(`Serving http://localhost:${port}`));
}

try {
  build();
} catch (err) {
  console.error("\nBuild failed:\n" + err.message);
  if (!process.argv.includes("--watch")) process.exit(1);
}

if (process.argv.includes("--watch")) {
  serve();
  let timer;
  for (const dir of [CONTENT, PUBLIC, SRC]) {
    fs.watch(dir, { recursive: true }, () => {
      clearTimeout(timer);
      timer = setTimeout(() => { try { build(); } catch (e) { console.error("Build failed:\n" + e.message); } }, 100);
    });
  }
}
