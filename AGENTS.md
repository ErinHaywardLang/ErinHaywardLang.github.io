# AGENTS.md — Technical Guide

Technical documentation for this repo, for human contributors and AI agents. For the friendly overview, see [README.md](README.md).

## Overview

- Personal portfolio site for Erin Hayward-Lang
- Stack: HTML5, CSS3, vanilla JavaScript — no frameworks, no build step
- Hosted on GitHub Pages, deployed from the repo root on push to main
- Frontend only: no server, no database; persistence is localStorage

## Structure

```
/
├── index.html              # Home (About Me, Projects, Boredom, Contact)
├── cv.html                 # CV page with PDF download
├── blog.html               # Redirect stub → /blog/
├── 404.html                # Custom 404 (sad fish included)
├── robots.txt              # Allow all + sitemap pointer
├── sitemap.xml             # Real pages only (no redirect stub, no 404)
├── style.css               # Single stylesheet, all theming
├── index.js                # Script entry point (loads navbar/footer/contact/glitter)
├── blog/
│   ├── index.html          # Static listing page
│   └── posts/              # blog-post-N.md (source) + blog-post-N.html (rendered)
├── projects/
│   └── fish-tank.html      # Interactive fish tank
├── playlists/
│   ├── index.html          # Spotify embeds + genre filtering
│   ├── monthly.html        # Monthly playlists (year accordion)
│   └── mixes.html          # Curated mixes
├── components/
│   ├── navbar.html         # Injected by js/navbar.js
│   ├── contact.html        # Injected by js/contact.js
│   └── footer.html         # Injected by js/footer.js
├── js/
│   ├── navbar.js           # Fetches + injects navbar, sets aria-current
│   ├── footer.js           # Fetches + injects footer
│   ├── contact.js          # Fetches + injects contact section
│   ├── glitter.js          # Dark mode, sparkles, hearts, seasonal effects
│   ├── fish-tank.js        # Fish tank logic
│   ├── playlists.js        # Genre filtering
│   └── monthly-playlists.js
└── assets/                 # CV PDFs, CV LaTeX source, favicon, fonts, images
```

## Page template

Every page follows the same pattern:

1. `<head>`: gtag snippet, charset/viewport, title, favicon, trimmed Google Fonts link (Poppins 400/500/600/700 + italic 400), an inline dark-mode bootstrap script, then `style.css`
2. `<div id="navbar-placeholder"></div>` at the top of `<body>`
3. Content in `<main>`
4. `<div id="contact-placeholder"></div>` (pages with a contact section) and/or `<div id="footer-placeholder"></div>`
5. `<script src="index.js" defer></script>` plus any page-specific scripts

### Dark mode bootstrap

The inline script in every `<head>` adds `dark-mode` to `<html>` before the CSS loads (reads localStorage `darkMode`, falls back to `prefers-color-scheme`). Do not remove it — it prevents a flash of light theme. Dark styles live under `html.dark-mode` in style.css; the explicit toggle choice always wins over the system preference.

## Component system

- `components/*.html` are fetched and injected by their matching loader in `js/`
- `index.js` is the single entry point — it loads `navbar.js`, `footer.js`, `contact.js`, `glitter.js`
- `glitter.js` listens for the `navbarLoaded`/`footerLoaded` events to wire up toggles
- Components use absolute paths (`/components/...`), so the site must be served over HTTP — `file://` won't load them. Always develop with a local server.

## Theming and CSS

- Single stylesheet (`style.css`), no preprocessor
- All colors come from CSS variables: light values in `:root`, dark overrides in `html.dark-mode` (`--bg-color`, `--text-color`, `--heading-color`, `--accent-color`, `--accent-hover`, `--muted-color`, `--nav-bg`, `--footer-text`)
- No hardcoded colors — if a new shade is needed, add a variable
- `prefers-reduced-motion`: a global kill-switch sits at the end of style.css; JS-driven effects in glitter.js are separately guarded by `reducedMotionQuery`

## Adding a blog post

1. Write `blog/posts/<slug>.md` — the markdown is the source of truth
2. Render it to HTML and paste the result into `blog/posts/<slug>.html` (title goes in the `post-header` as `<h1>`, body in `post-content`; see `blog-post-1.html`). The page is committed as static HTML on purpose — no runtime fetch, so crawlers and no-JS visitors see the content
3. Add a static preview block (date, title link, excerpt) to `blog/index.html` — the listing is static HTML too
4. Add the new URL to `sitemap.xml`

## Adding a playlist

1. Get the embed URL: `https://open.spotify.com/embed/playlist/<ID>?utm_source=generator`
2. Add to `playlists/index.html`:

```html
<div class="playlist-item" data-genre="indie;dream pop">
    <iframe src="https://open.spotify.com/embed/playlist/<ID>?utm_source=generator" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>
```

3. Genre rules: semicolon-separated, multi-word genres are fine, empty `data-genre=""` for untagged. The filter dropdown auto-populates from these tags.

## Easter eggs (intentional — don't fix)

- Glitter cursor trail; floating hearts when clicking the profile icon
- Season toggle in the navbar (reports `aria-pressed`); secret season cycler on the footer globe
- Typing `LOUIS` anywhere triggers heart rain
- Console messages on page load

## Deployment

Push to `main`; GitHub Pages serves the repo root directly, live within minutes. No build step. Google Analytics (gtag) runs on every page.