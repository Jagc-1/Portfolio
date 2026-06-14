# Portfolio — CLAUDE.md

> **Read this first on every task.** It contains the project structure, known issues, and constraints that should guide every change.

---

## Project Overview

Personal portfolio for **Johan Campos** (Full Stack Developer). A single-page app deployed to GitHub Pages via `gh-pages`.

- **Live URL**: https://xanthuscode.github.io/Portfolio (gh-pages branch)
- **GitHub**: https://github.com/XanthusCode
- **LinkedIn**: https://www.linkedin.com/in/johan-alexander-garcia/

---

## Tech Stack

| Layer | Tech |
|---|---|
| UI | React 18, Vite, Tailwind CSS, React Icons |
| Routing | React Router (only used in dead code — not active in app) |
| Fonts | Syne (headings), DM Mono (code/mono) |
| Deploy | `npm run deploy` → gh-pages |
| Skills | `frontend-design`, `modern-javascript-patterns`, `vercel-react-best-practices` |

---

## Project Structure

```
src/
├── App.jsx                  # Root — manages activeSection, animation state for CodeBlock
├── main.jsx                 # Entry point
├── index.css                # Global styles, CSS vars, Tailwind, animations
├── assets/                  # Images: pr2.png, pr3.png, airport.png, Todo.png
├── data/
│   ├── config.js            # ← Centralized URLs and constants (added)
│   ├── projects.js          # PROJECTS array — 6 projects
│   └── skills.js            # SKILLS array — 11 skills with icons and colors
├── components/
│   ├── navbar/Navbar.jsx    # Fixed top nav, activeSection prop, smooth scroll
│   ├── footer/Footer.jsx    # Copyright + GitHub/LinkedIn social links
│   ├── layout/Layout.jsx    # ⚠ DEAD CODE — defined but never used
│   ├── CodeBlock/CodeBlock.jsx  # Animated code block (line-by-line reveal)
│   └── projects/projectCard.jsx # ⚠ DEAD CODE — duplicate of inline ProjectCard
└── sections/
    ├── Hero.jsx             # Main hero: name, CTA buttons, skills pills, profile image
    ├── Projects.jsx         # Projects grid + ProjectDrawer (bottom sheet modal)
    └── About.jsx            # Bio, code block, timeline, values, goals, contact
```

---

## CSS Design System

All colors are defined as CSS variables in `index.css` — always use them:

```css
--bg: #080c10           /* page background */
--surface: #0e1420      /* cards, panels */
--surface2: #141c2a     /* nested surfaces */
--border: rgba(99,179,255,0.08)
--border-hover: rgba(99,179,255,0.22)
--accent: #63b3ff       /* primary blue */
--accent2: #a78bfa      /* purple */
--accent3: #34d399      /* green */
--text-primary: #e8f0fe
--text-secondary: #7a8aa0
--text-muted: #3d4f63
```

Fonts: `'Syne', sans-serif` for headings, `'DM Mono', monospace` for body/mono.

Reusable CSS classes defined in `index.css`:
`.nav-link`, `.skill-pill`, `.project-card`, `.btn-primary`, `.btn-secondary`,
`.section-label`, `.tag`, `.tag-accent`, `.tag-green`, `.code-block`,
`.terminal-dots`, `.timeline-item`, `.contact-link`, `.cursor-blink`, `.float`, `.grid-bg`, `.hero-blob`

---

## Known Issues (by priority)

### High Priority — Accessibility
- **No keyboard navigation on hover effects**: skill pills, footer links, and some buttons use `onMouseEnter`/`onMouseLeave` instead of CSS `:hover`/`:focus` — keyboard users can't interact
- **ProjectDrawer has no ESC key support**, no `role="dialog"`, no `aria-modal`
- **No `prefers-reduced-motion`**: animations (blink, float, pulse-dot, CodeBlock reveal) don't respect user OS settings
- **Missing `aria-label`** on social icon links (GitHub, LinkedIn) in Footer and Hero

### Medium Priority — React Patterns
- **Animation state in App.jsx is over-coupled**: `visibleLines` + `showCursor` managed at root, passed as props to About → CodeBlock. Should be extracted to a custom hook inside About/CodeBlock
- **Inline styles everywhere**: Hero.jsx (~300 lines), About.jsx (~600 lines), Projects.jsx — all use inline style objects. Hard to maintain. Prefer CSS classes from `index.css`
- **Layout.jsx is dead code** — defined but never imported. Either use it or remove it
- **projectCard.jsx is dead code** — duplicate of the `ProjectCard` defined inline in `Projects.jsx`

### Low Priority — Data & Config
- **Centralized config missing**: GitHub URL, LinkedIn URL, email, and name are repeated across Hero, Navbar, Footer, About, Projects — use `src/data/config.js`
- **No unique `id` on projects**: `PROJECTS` array uses `title` as React key — breaks if two titles match
- **No PostgreSQL in SKILLS**: `SiPostgresql` import is commented out in `skills.js` with no explanation

### CSS / Performance
- **Noise overlay** (`body::after` with SVG fractalNoise filter at `z-index: 9999`) can cause jank on low-end devices
- **Blob filters** (`filter: blur(80px)`) in Hero are GPU-expensive
- **No lazy loading** on project images

---

## Conventions to Follow

1. **CSS over inline styles**: Add a class to `index.css` rather than writing `style={{...}}` inline
2. **Use CSS variables**: Never hardcode colors — always reference `var(--accent)`, `var(--surface)`, etc.
3. **Accessibility**: Every interactive element needs `:focus-visible` styles and `aria-label` if icon-only
4. **Data goes in `src/data/`**: Any content (projects, skills, timeline, values) belongs in data files, not hardcoded in JSX
5. **No duplicate components**: `ProjectCard` lives in `Projects.jsx`; `projectCard.jsx` is legacy dead code
6. **Centralized links**: Import social URLs from `src/data/config.js`, don't hardcode them

---

## How the CodeBlock Animation Works

1. `App.jsx` sets up an `IntersectionObserver` on `#sobre-mi`
2. When visible, it increments `visibleLines` every 60ms via `setTimeout`
3. `visibleLines` and `showCursor` are passed as props: `App → About → CodeBlock`
4. `CODE_LINES` is an array of token arrays exported from `CodeBlock.jsx`

**Gotcha**: The animation always re-runs when the section scrolls into view. This is intentional.

---

## Deploy

```bash
npm run build   # builds to dist/
npm run deploy  # pushes dist/ to gh-pages branch via gh-pages package
```
