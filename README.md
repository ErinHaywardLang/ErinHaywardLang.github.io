# Erin Hayward-Lang

Hi! This is my personal portfolio website — part CV, part playground. It's live at [erinhaywardlang.github.io](https://erinhaywardlang.github.io).

## What's in here

- **Home** — a bit about me and what I'm working on
- **CV** — my CV, with a downloadable PDF
- **Blog** — occasional posts about life, work and side quests
- **Playlists** — my Spotify playlists, filterable by genre
- **Projects** — silly things I've built, currently a virtual fish tank
- **Bits and bobs** — glitter cursor, seasonal effects, dark mode, and a couple of easter eggs

## How it's built

Plain HTML, CSS and vanilla JavaScript — no frameworks, no build step — hosted on GitHub Pages. The navbar, footer and contact section are small shared components fetched in at runtime. Built with a healthy amount of AI assistance (see the blog!).

## Running it locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. A local server is needed because the shared components are fetched over HTTP — opening the files directly won't load the navbar.

## More details

If you're contributing (or an AI agent working on this repo), see [AGENTS.md](AGENTS.md) for the technical docs.