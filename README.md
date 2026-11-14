# lauraarossi.com

My personal site: an online CV, projects and a few photos. Every page is a Markdown file. A small build script turns them into static HTML, and Cloudflare serves the result.

## How it fits together

```
content/          ← the words. One Markdown file per page. This is what you edit.
  _site.md          site-wide settings: name, links, menu order
  index.md          home page (intro + coloured tiles)
  experience.md     timeline of roles
  projects.md       personal, Deloitte and academic projects
  education.md      qualifications and degrees
  community.md      SAI, writing, talks, volunteering
  other.md          good reads + photo gallery
  404.md            "page not found"
public/           ← files copied as-is: images, downloads, _headers, _redirects
src/              ← the look: layout.html (page skeleton), styles.css, main.js
scripts/build.mjs ← Markdown → dist/ (about 250 lines, no framework)
wrangler.jsonc    ← Cloudflare config
```

Stack: plain HTML, CSS and a little vanilla JS. The only build dependencies are `marked` (Markdown) and `gray-matter` (front matter). There's no server code, so Cloudflare serves it as static assets on the Workers free plan.

## Updating content

### From the browser (no tools needed)

1. Open the file in `content/` on GitHub and click the pencil icon. Or use **Add file → Upload files** to replace a whole `.md` file.
2. Commit to `main`.
3. Cloudflare rebuilds and deploys automatically in about a minute.

### Locally

```bash
npm install
npm run dev        # http://localhost:8788, rebuilds when you save
```

### Markdown conventions

Everything is ordinary Markdown, plus a few conventions:

| You write | You get |
|---|---|
| The block between `---` lines at the top | Page settings: `title`, `description` (for Google/LinkedIn previews), `lead` (intro sentence) |
| `layout: timeline` in the settings | `###` headings become entries on the paw timeline |
| An all-italic line right under a `###` heading, e.g. `*2021 – 2025 · Dublin*` | The small grey date line |
| `## Heading` | A new section (and a new timeline) |
| `#### Heading` | A small sub-heading inside an entry |
| Several images in one paragraph (no blank lines between them) | A photo grid that opens a lightbox on click |
| `> quote` | A highlighted callout box |
| `<!-- note -->` | **Removed from the published site.** Good for TODOs and private notes, but anyone who can see the repo can still read them. |
| A file whose name starts with `_` | Not a page |

To **add a page**, create `content/whatever.md` (it becomes `/whatever/`) and add it to `nav` in `content/_site.md`.

To **add photos**, put them in `public/images/gallery/` (WebP or JPEG, about 1200 px on the long side) and list them in `content/other.md`.

The home tiles are set in the front matter of `content/index.md`. Their colours rotate through the six beach colours automatically.

### Printing / PDF

Every page has a print stylesheet: no menu or footer, links shown as URLs, and a contact line at the top. **Print this page** on Experience produces the full-length CV. The **Download CV** button serves `public/downloads/Laura_Rossi_CV.pdf`; to update it, upload a new PDF with the same file name.

## Deploying on Cloudflare

### One-time setup (Workers Builds, connected to GitHub)

1. Cloudflare dashboard → **Workers & Pages → Create → Import a repository** → pick `lauraarossi/lauraarossi.github.io`.
2. Build settings:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy` (the default)
   - Production branch: `main`
3. Deploy. You get a `lauraarossi-com.<your-subdomain>.workers.dev` URL to check before switching the domain.

Pushes to other branches get preview URLs, so you can review a branch before merging it.

Alternatively, deploy from your laptop with `npx wrangler login` once, then `npm run deploy`.

### Going live on lauraarossi.com

Today the domain points at GitHub Pages. To move it:

1. Check that the `workers.dev` URL looks right.
2. In Cloudflare DNS, delete the existing records for `lauraarossi.com` and `www` that point at GitHub (the CNAME to `lauraarossi.github.io` and/or the GitHub A records), plus any redirect rule you made for them.
3. Uncomment the `routes` block in `wrangler.jsonc` and push. Alternatively, in the Worker's **Settings → Domains & Routes**, add both `lauraarossi.com` and `www.lauraarossi.com` as custom domains. Cloudflare creates the DNS records and certificates.
4. Turn off GitHub Pages: repo **Settings → Pages → Unpublish**. The repo no longer contains a root `index.html` or `CNAME`, so Pages would serve a broken site anyway.

Optional: to make `www` redirect to the bare domain (or the reverse), add a Cloudflare **Redirect Rule** in the dashboard. Canonical URLs on the site currently use `https://www.lauraarossi.com`, matching the CV.

### Cost

Static assets on Workers are free and unmetered on the free plan. The paid plan (about €5 a month) is only needed if you later add Worker code beyond the free daily request allowance.

## Credits

Design inspired by [Phantom](https://html5up.net/phantom) by HTML5 UP (CC BY 3.0). The CSS was rewritten from scratch.
