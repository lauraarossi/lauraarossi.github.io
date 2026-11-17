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

// Interface strings for the language being built (set in build(), read by the renderers)
let UI = {};

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
    .map((i) => `<button type="button" class="gallery-item" data-full="${esc(i.href)}" aria-label="${esc(UI.enlarge)}: ${esc(i.text)}"><img src="${esc(i.href)}" alt="${esc(i.text)}" loading="lazy" decoding="async"></button>`)
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

// Make site-internal page links point at the current language: "/projects/" -> "/es/projects/".
// Only paths ending in "/" (pages) are rewritten; files such as /downloads/x.pdf are shared.
function localizeLinks(html, prefix) {
  if (!prefix) return html;
  return html.replace(/href="\/((?:[a-z0-9-]+\/)*)(#[^"]*)?"/g, (_, p, hash = "") => `href="${prefix}/${p}${hash}"`);
}

const isObject = (x) => x && typeof x === "object" && !Array.isArray(x);
function merge(base, over) {
  const out = { ...base };
  for (const [k, v] of Object.entries(over || {})) out[k] = isObject(v) && isObject(base[k]) ? merge(base[k], v) : v;
  return out;
}

function build() {
  const t0 = Date.now();
  const baseSite = readMarkdown(path.join(CONTENT, "_site.md")).data;
  const layout = fs.readFileSync(path.join(SRC, "layout.html"), "utf8");
  const languages = baseSite.languages || [{ code: "en", name: "English" }];
  const defaultLang = languages[0].code;

  fs.rmSync(DIST, { recursive: true, force: true });
  copyDir(PUBLIC, DIST);
  fs.mkdirSync(path.join(DIST, "assets"), { recursive: true });
  for (const f of ["styles.css", "main.js"]) fs.copyFileSync(path.join(SRC, f), path.join(DIST, "assets", f));
  const v = { css: hashOf(path.join(SRC, "styles.css")), js: hashOf(path.join(SRC, "main.js")) };
  const base = baseSite.url.replace(/\/$/, "");

  // The English pages define which pages exist; each language may translate any of them.
  const pageFiles = fs.readdirSync(CONTENT).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
  const slugOf = (f, data) => data.slug ?? (f === "index.md" ? "" : f.replace(/\.md$/, ""));
  const prefixOf = (code) => (code === defaultLang ? "" : `/${code}`);
  const urlOf = (code, slug) => `${prefixOf(code)}/${slug ? slug + "/" : ""}`;

  const sitemap = [];
  let count = 0;

  for (const lang of languages) {
    const dir = lang.code === defaultLang ? CONTENT : path.join(CONTENT, lang.code);
    const langSiteFile = path.join(dir, "_site.md");
    const site = lang.code === defaultLang || !fs.existsSync(langSiteFile) ? baseSite : merge(baseSite, readMarkdown(langSiteFile).data);
    UI = site.ui || {};
    const prefix = prefixOf(lang.code);

    const pages = pageFiles.map((f) => {
      const translated = path.join(dir, f);
      const fallback = !fs.existsSync(translated);
      const { data, body } = readMarkdown(fallback ? path.join(CONTENT, f) : translated);
      const english = readMarkdown(path.join(CONTENT, f)).data;
      const slug = slugOf(f, english);
      return { file: f, data, body, slug, fallback, url: urlOf(lang.code, slug) };
    });

    const navHtml = (current) =>
      (site.nav || []).map((n) => {
        const href = n.href.startsWith("/") && n.href.endsWith("/") ? prefix + n.href : n.href;
        return `<li><a href="${esc(href)}"${href === current ? ' aria-current="page"' : ""}>${esc(n.title)}</a></li>`;
      }).join("\n");

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
      if (p.fallback && UI.untranslated) main = `<p class="notice" lang="${esc(lang.code)}">${inline(UI.untranslated)}</p>\n<div lang="${esc(defaultLang)}">\n${main}\n</div>`;
      main = localizeLinks(main, prefix);

      // Same page in every language, for the dropdown and for search engines
      const alternates = languages.map((l) => ({ ...l, url: urlOf(l.code, p.slug) }));
      const isNotFound = p.slug === "404";
      const hreflang = isNotFound ? "" : alternates
        .map((a) => `<link rel="alternate" hreflang="${esc(a.code)}" href="${esc(base + a.url)}">`)
        .concat(`<link rel="alternate" hreflang="x-default" href="${esc(base + urlOf(defaultLang, p.slug))}">`)
        .join("\n");
      const langMenu = alternates
        .map((a) => `<li><a href="${esc(isNotFound ? urlOf(a.code, "") : a.url)}" hreflang="${esc(a.code)}" lang="${esc(a.code)}" data-lang="${esc(a.code)}"${a.code === lang.code ? ' aria-current="true"' : ""}>${esc(a.name)}</a></li>`)
        .join("");

      const title = d.layout === "home" ? `${site.name} · ${site.title}` : `${d.title} · ${site.name}`;
      let html = layout
        .replaceAll("{{lang}}", esc(lang.code))
        .replaceAll("{{langCode}}", esc(lang.code.toUpperCase()))
        .replaceAll("{{langMenu}}", langMenu)
        .replaceAll("{{hreflang}}", hreflang)
        .replaceAll("{{home}}", `${prefix}/`)
        .replaceAll("{{title}}", esc(title))
        .replaceAll("{{description}}", esc(d.description || site.description))
        .replaceAll("{{canonical}}", esc(base + p.url))
        .replaceAll("{{siteName}}", esc(site.name))
        .replaceAll("{{nav}}", navHtml(p.url))
        .replaceAll("{{email}}", esc(site.email))
        .replaceAll("{{github}}", esc(site.github))
        .replaceAll("{{linkedin}}", esc(site.linkedin))
        .replaceAll("{{year}}", String(new Date().getFullYear()))
        .replaceAll("{{bodyClass}}", esc(d.layout || "page"))
        .replaceAll("{{cssv}}", v.css)
        .replaceAll("{{jsv}}", v.js);
      html = html.replace(/\{\{ui\.([a-zA-Z]+)\}\}/g, (_, k) => {
        if (UI[k] === undefined) throw new Error(`Missing interface text "ui.${k}" for language "${lang.code}" (add it under ui: in content/_site.md)`);
        return k === "credit" ? inline(UI[k]) : esc(UI[k]);
      });
      html = html.replace("{{main}}", () => main);

      if (isNotFound) {
        // Cloudflare serves the nearest 404.html: dist/404.html, dist/es/404.html, ...
        fs.mkdirSync(path.join(DIST, prefix), { recursive: true });
        fs.writeFileSync(path.join(DIST, prefix, "404.html"), html);
      } else {
        const outDir = path.join(DIST, prefix, p.slug);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, "index.html"), html);
        sitemap.push({ loc: base + p.url, alternates });
      }
      count++;
    }
  }

  fs.writeFileSync(
    path.join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemap
      .map((u) => `  <url><loc>${u.loc}</loc>${u.alternates.map((a) => `<xhtml:link rel="alternate" hreflang="${a.code}" href="${base}${a.url}"/>`).join("")}</url>`)
      .join("\n")}\n</urlset>\n`
  );
  fs.writeFileSync(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);

  console.log(`Built ${count} pages in ${languages.length} languages into dist/ in ${Date.now() - t0} ms`);
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
