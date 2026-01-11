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
├── cv.html                 # CV/Resume page
├── style.css               # Global styles including dark mode, animations, and layouts
├── index.js                # Main script loader (dynamically loads all JS modules)
│
├── blog/
│   ├── index.html          # Blog listing page
│   └── posts/
│       └── blog-post-1.html # Individual blog post
│
├── projects/
│   └── fish-tank.html      # Virtual fish tank interactive project
│
├── components/
│   ├── navbar.html         # Shared navigation bar component
│   └── footer.html         # Shared footer with dark mode & season toggles
│
├── js/
│   ├── navbar.js           # Navbar loader (fetches and injects navbar.html)
│   ├── footer.js           # Footer loader (fetches and injects footer.html)
│   ├── glitter.js          # Interactive features (sparkles, hearts, seasons, dark mode)
│   └── fish-tank.js        # Fish tank logic (fish movement, bubbles, light rays)
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