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

// Timeline: "## Section" headings split sections, "### Entry" headings start entries.
function renderTimeline(body) {
  const tokens = marked.lexer(body);
  const links = tokens.links;
  let html = "";
  let pre = [];          // content before any entry in the current section
  let entries = [];      // [{ heading, meta, tokens }]
  let cur = null;

  const closeSection = () => {
    html += renderTokens(pre, links);
    if (entries.length) {
      html += `<ol class="timeline">\n`;
      for (const e of entries) {
        html += `<li class="entry" id="${slugify(e.heading.text)}">\n<h3>${marked.parseInline(e.heading.text)}</h3>\n`;
        if (e.meta) html += `<p class="meta">${marked.parseInline(e.meta.tokens[0].text)}</p>\n`;
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

  const navHtml = (current) =>
    (site.nav || []).map((n) => `<li><a href="${esc(n.href)}"${n.href === current ? ' aria-current="page"' : ""}>${esc(n.title)}</a></li>`).join("\n");

  for (const p of pages) {
    const d = p.data;
    let main;
    if (d.layout === "home") {
      main = `<header class="page-header home">
<h1>${esc(d.heading || site.name)}</h1>
${d.tagline ? `<p class="tagline">${inline(d.tagline)}</p>` : ""}
</header>
${d.intro ? `<div class="intro">${marked.parse(stripComments(d.intro))}</div>` : ""}
${renderTiles(d.tiles)}
${renderDefault(p.body)}`;
    } else {
      const content = d.layout === "timeline" ? renderTimeline(p.body) : renderDefault(p.body);
      main = `<header class="page-header">
<h1>${esc(d.title)}</h1>
${d.lead ? `<p class="lead">${inline(d.lead)}</p>` : ""}
${d.actions ? `<p class="actions">${d.actions.map((a) => `<a class="button${a.primary ? " primary" : ""}" href="${esc(a.href)}"${a.print ? ' data-print' : ""}>${esc(a.label)}</a>`).join(" ")}</p>` : ""}
</header>
<div class="prose">
${content}
</div>`;
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
