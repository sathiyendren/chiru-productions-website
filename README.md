# Chiru Productions — Website

A cinematic, luxury dark-themed movie production studio website built with **React 18** and **Vite 5**. The site showcases films, production reels, upcoming releases, the production team, and a soundscapes/OST section — all wrapped in a deep black-and-gold aesthetic inspired by high-end cinema house branding.

---

## Table of Contents

1. [Preview](#preview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Sections & Components](#sections--components)
6. [Data Layer](#data-layer)
7. [Animations & Interactions](#animations--interactions)
8. [Getting Started](#getting-started)
9. [Available Scripts](#available-scripts)
10. [Troubleshooting](#troubleshooting)

---

## Preview

The website is a single-page application with the following sections, in order:

| # | Section | Description |
|---|---------|-------------|
| 1 | **Nav** | Fixed top navigation with active scroll highlighting |
| 2 | **Hero** | Full-screen filmstrip animation with headline and stats |
| 3 | **Ticker** | Crimson live news ticker with current announcements |
| 4 | **Films** | Featured film grid with hover play overlays |
| 5 | **Reels** | Production reels with duration tags |
| 6 | **Upcoming** | Numbered pipeline list with status badges |
| 7 | **Awards Ribbon** | Horizontally scrolling awards strip |
| 8 | **Team** | Production team cards with genre tags |
| 9 | **Soundscapes** | Tracklist + featured OST card with live waveform |
| 10 | **Footer** | Brand info, links, social buttons, legal |

---

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| [React](https://react.dev) | 18.3 | UI framework |
| [Vite](https://vitejs.dev) | 5.4 | Dev server & bundler |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | 4.3 | Babel-based React fast refresh |
| CSS (plain) | — | Per-component stylesheets |
| Google Fonts | — | Bebas Neue · DM Sans · Courier Prime |

No CSS preprocessors, no component libraries, no state management libraries. The project is intentionally dependency-light.

---

## Project Structure

```
.
├── index.html                  # Vite HTML entry point (loads fonts, mounts #root)
├── vite.config.js              # Vite configuration
├── package.json
│
└── src/
    ├── main.jsx                # React root — renders <App /> into #root
    ├── App.jsx                 # Top-level composition — assembles all sections
    ├── index.css               # Global CSS: variables, resets, keyframes, utilities
    ├── data.js                 # All site content as JS arrays/objects
    │
    ├── hooks/
    │   └── useFadeIn.js        # IntersectionObserver hook for scroll reveal
    │
    └── components/
        ├── Nav.jsx             # Fixed navigation bar
        ├── Nav.css
        ├── Hero.jsx            # Full-screen hero with filmstrip background
        ├── Hero.css
        ├── Ticker.jsx          # Scrolling news ticker
        ├── Ticker.css
        ├── Films.jsx           # Featured films grid
        ├── Films.css
        ├── Reels.jsx           # Production reels grid
        ├── Reels.css
        ├── Upcoming.jsx        # Upcoming releases list
        ├── Upcoming.css
        ├── AwardsRibbon.jsx    # Horizontally scrolling awards strip
        ├── AwardsRibbon.css
        ├── Team.jsx            # Production team cards
        ├── Team.css
        ├── Audio.jsx           # Soundscapes: tracklist + OST card
        ├── Audio.css
        ├── Footer.jsx          # Site footer
        └── Footer.css
```

Every component owns its CSS file. Global variables, resets, and animations live exclusively in `src/index.css`.

---

## Design System

### Colour Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--black` | `#0A0A0F` | Page background |
| `--black2` | `#0F0F17` | Alternate section background |
| `--panel` | `#12121A` | Card / panel backgrounds |
| `--steel` | `#2A2A35` | Borders, dividers |
| `--steel2` | `#3A3A48` | Muted borders, inactive states |
| `--crimson` | `#C0152A` | Primary action colour (CTAs, active states) |
| `--crimson2` | `#E01830` | Crimson hover state |
| `--gold` | `#C9933A` | Accent — labels, highlights, stats |
| `--gold2` | `#E0AA50` | Gold hover state |
| `--smoke` | `#E8E4DC` | Primary text |
| `--smoke2` | `#C8C4BC` | Secondary / muted text |

All colour tokens are CSS custom properties defined on `:root` in `src/index.css`.

### Typography

| Family | Use |
|--------|-----|
| **Bebas Neue** | All display headings, film titles, stat numbers — wide, filmic tracking |
| **DM Sans** | Body copy, team bios, card descriptions — clean and readable |
| **Courier Prime** | Labels, metadata, navigation, footer links — typewriter / script reference |

Fonts are loaded from Google Fonts in `index.html` and applied via CSS.

### Layout Conventions

- Max content width: `1400px` via `.container` class
- Section vertical padding: `96px 0`
- Card grids use CSS Grid with pixel gaps (`3px`–`4px`) for a film-frame edge look
- Gold rule dividers (`<div className="gold-rule" />`) separate major sections
- `clip-path: polygon(…)` on buttons creates an angled parallelogram shape

---

## Sections & Components

### `<Nav />`

Fixed to the top of the viewport at `z-index: 100`. Uses a `useEffect` with a `scroll` listener to:
- Darken the background and intensify the gold border as the user scrolls down
- Highlight the active navigation link based on which `section[id]` is currently in view

The logo uses a small 4×2 CSS grid to render a film-perforation icon.

---

### `<Hero />`

Full-viewport section with three animated filmstrip tracks stacked vertically, each running at a different speed and opacity:

| Strip | Speed | Opacity | Direction |
|-------|-------|---------|-----------|
| Top | 28s | 35% | Forward |
| Middle | 22s | 25% | Reverse |
| Bottom | 34s | 15% | Forward |

Frames are built from the `FRAME_CONTENT` array in `data.js` and duplicated once to create a seamless loop. A radial + linear gradient overlay sits above the strips to fade them into the background, keeping headline text legible.

The hero content (eyebrow, headline, subtitle, CTAs, stats) is stacked at the bottom of the section using `justify-content: flex-end`.

---

### `<Ticker />`

A single crimson bar with a "Latest" label on the left and a scrolling `ticker` keyframe animation on the right. Items are pulled from `TICKER_ITEMS` in `data.js` and doubled for a seamless infinite scroll.

---

### `<Films />`

An asymmetric CSS Grid:

```
┌─────────────────────┬──────────┬──────────┐
│                     │  Film 2  │  Film 3  │
│   Featured Film     ├──────────┼──────────┤
│   (tall card)       │  Film 4  │  Film 5  │
└─────────────────────┴──────────┴──────────┘
```

Each `FilmCard` component has:
- A gradient background (`film-bg-1` through `film-bg-5`)
- A dark-to-transparent overlay that lightens on hover
- A crimson circular play button that scales in on hover
- A gold award badge (if applicable)
- Film genre, title, director, duration, and star rating in the bottom info bar

The featured card also renders decorative SVG grid lines and circles for a visual reference / targeting motif.

---

### `<Reels />`

Four equal-column cards, each with:
- A background gradient unique to the reel type
- An animated play button (gold ring → crimson fill on hover)
- Reel type label in crimson, title in DM Sans
- A duration badge in the top-right corner with a dark semi-transparent background

---

### `<Upcoming />`

A 2-column grid table with gold/crimson hairline borders. Each row has:
- A large muted gold number (fades from 20% to 50% opacity on hover)
- Film title, director, genre, release date
- A colour-coded status badge:

| Status | Colour |
|--------|--------|
| `In Production` | Crimson |
| `Post Production` | Gold |
| `Announced` | Muted steel |
| `Ready for Release` | Green |

A thin crimson left border slides in on hover using a CSS `::before` pseudo-element.

---

### `<AwardsRibbon />`

A full-width dark steel band with a `ticker` keyframe animation. Awards text from `AWARDS` in `data.js` is doubled for a seamless loop. Separated by gold diamond (`◆`) glyphs.

---

### `<Team />`

Four equal-column cards on a `--black2` background. Each card shows:
- A square avatar with the member's initials (Bebas Neue, gold, steel border)
- Name, role (crimson, uppercase, tracked), bio, and genre tags
- On hover: lightened background + a crimson gradient rule that slides up from the bottom via `::after`

---

### `<Audio />`

Split into two panes:

**Left — Tracklist**
A table-style list with four columns (`#`, title/film, waveform bars, duration). On row hover:
- The track number hides and a crimson play circle appears in its place
- The waveform bars turn crimson

**Right — Featured OST Card**
- Album art rendered as a CSS gradient with a faint title overlay
- Animated waveform: 25 bars driven by five `@keyframes` (`wave1`–`wave5`) with staggered delays and durations, creating an organic "playing" illusion
- A play button, track name, timestamp, and a gradient progress bar

---

### `<Footer />`

Standard four-column footer grid (`2fr 1fr 1fr 1fr`):
- Brand column: logo, tagline, description, social icon buttons
- Three link columns: Films, Studio, Contact
- Bottom bar: copyright + legal links

---

## Data Layer

All site content lives in **`src/data.js`** as plain JavaScript arrays and objects. To update any content on the site, edit this file only — no JSX changes needed for content updates.

```js
// src/data.js — exports:
FRAME_CONTENT   // Film titles shown in the hero filmstrip frames
TICKER_ITEMS    // News ticker announcements
FILMS           // Film catalogue (title, genre, year, director, rating, etc.)
REELS           // Production reels (type, title, duration)
UPCOMING        // Pipeline releases (title, date, director, status)
AWARDS          // Awards ribbon text
TEAM            // Team member profiles
TRACKS          // Soundscape tracklist
WAVE_HEIGHTS    // Tracklist waveform bar heights (decorative)
WAVE_ANIMS      // Keyframe animation names for OST waveform bars
BAR_HEIGHTS     // OST waveform bar heights
```

---

## Animations & Interactions

### CSS Keyframes (defined in `src/index.css`)

| Name | Used by | Description |
|------|---------|-------------|
| `filmroll` | Hero filmstrip | Translates inner strip left by 50% for seamless loop |
| `filmroll-rev` | Hero filmstrip (middle) | Translates inner strip right for reverse direction |
| `ticker` | Ticker, AwardsRibbon | Identical left-scroll loop for both text bands |
| `wave1`–`wave5` | Audio OST card | Height oscillation for animated waveform bars |

### View Transitions

CSS view-transition rules are set globally:

```css
::view-transition-group(*),
::view-transition-old(*),
::view-transition-new(*) {
  animation-duration: 0.25s;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
```

### Scroll Reveal

Each section uses an `IntersectionObserver` (`threshold: 0.08`) to add a `.visible` class to `.fade-in` elements as they enter the viewport. This triggers a CSS transition from `opacity: 0; translateY(24px)` to fully visible. Staggered children use `.fade-in-delay-1` through `.fade-in-delay-4` (0.08s increments).

### Nav Interactions

- **Scroll darkening**: the nav background opacity increases past 60px of scroll
- **Active link**: the current section's nav link is coloured gold as you scroll through sections

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher (the project was built with v24)
- **npm** v9 or higher

> **macOS Apple Silicon note:** The project requires `@rollup/rollup-darwin-arm64`. If you are on an Apple Silicon Mac and npm fails to install it automatically (a [known npm bug](https://github.com/npm/cli/issues/4828)), run the manual fix in the Troubleshooting section below.

---

### Installation

```bash
# 1. Clone or download the project
cd "Chiru Productions/Website"

# 2. Install dependencies
npm install

# 3. If on Apple Silicon Mac and the build fails, run:
npm install @rollup/rollup-darwin-arm64 --registry https://registry.npmjs.org
```

---

### Running the Development Server

```bash
npm run dev
```

The app will start at **http://localhost:5173** with hot module replacement (HMR) enabled. Changes to any `.jsx` or `.css` file are reflected instantly in the browser.

> **If `npm` or `node` is not found in your shell**, prefix the command with the full path:
> ```bash
> PATH="/usr/local/bin:$PATH" npm run dev
> ```

---

### Building for Production

```bash
npm run build
```

The optimised static output is written to the `dist/` directory:

```
dist/
├── index.html
└── assets/
    ├── index-[hash].js    (~163 kB raw, ~52 kB gzip)
    └── index-[hash].css   (~24 kB raw, ~5 kB gzip)
```

---

### Previewing the Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally at **http://localhost:4173** so you can verify the production build before deploying.

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start Vite dev server at `localhost:5173` with HMR |
| `build` | `npm run build` | Bundle and optimise for production into `dist/` |
| `preview` | `npm run preview` | Serve the `dist/` build at `localhost:4173` |

---

## Troubleshooting

### `Cannot find module @rollup/rollup-darwin-arm64`

This is a [known npm bug](https://github.com/npm/cli/issues/4828) with optional dependencies on Apple Silicon Macs. Fix it by installing the package directly from the public npm registry:

```bash
npm install @rollup/rollup-darwin-arm64 --registry https://registry.npmjs.org
```

Then re-run `npm run build` or `npm run dev`.

---

### `node: No such file or directory` / `npm: command not found`

If your shell cannot find `node` or `npm`, use the full path explicitly:

```bash
PATH="/usr/local/bin:$PATH" npm run dev
PATH="/usr/local/bin:$PATH" npm run build
```

To make this permanent, add the following to your `~/.zshrc` or `~/.bashrc`:

```bash
export PATH="/usr/local/bin:$PATH"
```

Then run `source ~/.zshrc` to reload.

---

### Fonts not loading

The Google Fonts link is in `index.html`. If you are running the app in an offline environment or a restricted network, the fonts will fall back to system defaults. To bundle the fonts locally:

1. Download the font files from [Google Fonts](https://fonts.google.com)
2. Place them in `public/fonts/`
3. Replace the `<link>` tag in `index.html` with `@font-face` declarations in `src/index.css`

---

### Animations appear janky

All filmstrip and ticker animations use `will-change: transform` and run on the compositor thread. If you see dropped frames, check that hardware acceleration is enabled in your browser (`chrome://settings/system`).
