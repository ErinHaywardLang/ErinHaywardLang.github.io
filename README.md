# ErinHaywardLang.github.io

This is my personal portfolio website and fun side project :) 

## 🌟 Features

- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Seasonal Effects**: Animated snowflakes, petals, sunshine, and leaves based on the current season
- **Interactive Elements**: 
  - Glitter cursor trail following mouse movement
  - Floating hearts animation on profile icon click
  - Virtual fish tank with swimming fish, bubbles, and light rays
- **Responsive Design**: Mobile-friendly layout with clean typography

## 📁 Project Structure

```
/
├── index.html              # Home page with About Me, Projects, and Boredom sections
├── blog.html               # Blog page (redirects to /blog/)
├── cv.html                 # CV/Resume page
├── style.css               # Global styles including dark mode, animations, and layouts
├── index.js                # Main script loader (dynamically loads all JS modules)
│
├── blog/
│   ├── index.html          # Blog listing page
│   └── posts/
│       ├── blog-post-1.html     # Individual blog post
│       └── blog-post-1.md       # Blog post markdown source
│
├── projects/
│   └── fish-tank.html      # Virtual fish tank interactive project
│
├── playlists/
│   ├── index.html          # Spotify playlists showcase with genre filtering
│   └── monthly.html        # Monthly playlists with year-based accordion
│
├── components/
│   ├── navbar.html         # Shared navigation bar component
│   └── footer.html         # Shared footer with dark mode & season toggles
│
├── js/
│   ├── navbar.js           # Navbar loader (fetches and injects navbar.html)
│   ├── footer.js           # Footer loader (fetches and injects footer.html)
│   ├── glitter.js          # Interactive features (sparkles, hearts, seasons, dark mode)
│   ├── fish-tank.js        # Fish tank logic (fish movement, bubbles, light rays)
│   ├── playlists.js        # Genre filtering logic for playlists page
│   └── monthly-playlists.js # Monthly playlists accordion logic (if used)
│
├── assets/
│   ├── favicon.svg         # Heart-shaped site icon
│   ├── old-cv.pdf          # Downloadable CV
│   └── images/
│       ├── erin_icon.png           # Navbar profile icon (36x36px)
│       └── erin_icon_frame.png     # Home page profile picture (200x200px)
│
└── README.md               # This file
```

## 🎨 Key Technologies

- **HTML5/CSS3**: Modern semantic markup and styling
- **Vanilla JavaScript**: No frameworks, just pure JS
- **CSS Variables**: For easy theming and dark mode
- **LocalStorage API**: Persisting user preferences
- **RequestAnimationFrame**: Smooth 60fps animations
- **Fetch API**: Async component loading

## 🐠 Interactive Projects

### Virtual Fish Tank
- Click to add fish at any position
- 8 different fish types with random sizes and speeds
- Bubbles continuously rise from the bottom
- Animated light rays shimmer from above
- "Add Random Fish" and "Clear Tank" controls
- Fish counter display

### 🎵 Spotify Playlists Showcase
- Embedded Spotify playlist widgets
- Multi-genre tagging system
- Dynamic genre filter dropdown
- Scrollable genre list (auto-populates from playlist tags)
- Filter by single or multiple genres simultaneously
- Untagged playlists supported (use `data-genre=""`)

**How to Add Playlists:**
1. Get your Spotify playlist URL: `https://open.spotify.com/playlist/PLAYLIST_ID?...`
2. Extract the PLAYLIST_ID and format as embed:
   ```html
   <iframe src="https://open.spotify.com/embed/playlist/PLAYLIST_ID?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
   ```
3. Add to `/playlists/index.html` with genre tags:
   ```html
   <!-- Playlist name/description -->
   <div class="playlist-item" data-genre="indie;dream pop">
       <iframe src="..."></iframe>
   </div>
   ```

**Genre Tagging:**
- Use semicolons (`;`) to separate multiple genres
- Supports multi-word genres: `"indie;dream pop;electronic"`
- Leave blank for untagged: `data-genre=""`
- Genres auto-populate in the filter dropdown

## 🎭 Interactive Features

### Glitter Cursor Effect
- Star-shaped sparkles follow mouse movement
- Throttled to 30ms for performance
- 7 random pastel colors
- Floats up and fades out

### Seasonal Effects System
- **Winter** ❄️: Falling snowflakes
- **Spring** 🌸: Floating cherry blossoms
- **Summer** ☀️: Shining stars
- **Fall** 🍂: Tumbling leaves
- Toggle on/off via navbar button
- Secret season switcher in footer (spinning globe)

### Dark Mode
- Cityscape emoji toggle (🌃/🏙️)
- Smooth color transitions
- CSS variable-based theming
- LocalStorage persistence

## 🏗️ Architecture

### Component System
- **Shared Components**: Navbar and footer loaded dynamically via fetch
- **Event-Based**: Custom events (`navbarLoaded`, `footerLoaded`) coordinate initialization
- **Deferred Scripts**: All JS loaded with `defer` for non-blocking page load
- **Single Entry Point**: `index.js` loads all modules dynamically

### File Organization
- **Root Level**: Main pages (index, cv) and global resources
- **Folders**: Organized by content type (blog, projects, components, js, assets)
- **Absolute Paths**: Critical resources use `/` prefix to work from any directory
- **Relative Paths**: Page-specific resources use `../` for correct resolution

## 🚀 Getting Started

This is a static site - just open `index.html` in a browser or host on any static server.

For local development:
```bash
# Simple HTTP server with Python
python -m http.server 8000

# Or with Node.js
npx http-server
```

## 📝 License

Personal portfolio - all rights reserved.