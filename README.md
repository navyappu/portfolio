# A Navya — SDET Portfolio

A dark, minimal personal portfolio for a Software Engineer in Test, built with **React 19 + TypeScript + Tailwind CSS v4 + Vite**.

Everything you'd normally want to change lives in **one file**: `src/data/profile.ts`.

---

## Running it locally

```bash
npm install     # once
npm run dev     # http://localhost:5173
npm run build   # type-check + production build into dist/
npm run preview # serve the production build locally
```

Node 18+ is required (developed on Node 24).

---

## Folder structure

```
portfolio/
├─ index.html                 # <title>, meta description, Open Graph tags, JSON-LD
├─ public/
│  ├─ favicon.svg             # green check mark
│  ├─ resume.pdf              # ← add your resume here (see below)
│  └─ profile.jpg             # ← add your photo here (see below)
├─ src/
│  ├─ main.tsx                # React entry point
│  ├─ App.tsx                 # section order for the whole page
│  ├─ index.css               # design tokens, base styles, keyframes
│  ├─ data/
│  │  └─ profile.ts           # ★ ALL CONTENT LIVES HERE
│  ├─ hooks/
│  │  ├─ useInView.ts         # scroll-reveal observer
│  │  ├─ useActiveSection.ts  # highlights the current navbar link
│  │  └─ usePrefersReducedMotion.ts
│  ├─ lib/
│  │  └─ cn.ts                # className joiner
│  └─ components/
│     ├─ Navbar.tsx           # sticky nav + mobile menu
│     ├─ Hero.tsx             # headline, rotating taglines, CTAs
│     ├─ Terminal.tsx         # animated `npm run test:e2e` terminal
│     ├─ About.tsx            # bio, principles, photo slot, quick facts
│     ├─ Experience.tsx       # expandable timeline
│     ├─ Pipeline.tsx         # CI/CD band
│     ├─ Skills.tsx           # skill category cards
│     ├─ Projects.tsx         # QA project cards + case studies
│     ├─ Education.tsx        # degree card + academic projects
│     ├─ Contact.tsx          # email / LinkedIn / GitHub / resume
│     ├─ Footer.tsx
│     └─ ui/                  # Section, Reveal, icons
└─ vite.config.ts
```

---

## 1. Adding your photo

1. Save your photo as `public/profile.jpg` (a **4:5 portrait** crop looks best — e.g. 800 × 1000 px, under ~300 KB).
2. Open `src/data/profile.ts` and set:

```ts
export const links = {
  ...
  photoUrl: '/profile.jpg',
}
```

Until `photoUrl` is set, the About section shows a monogram placeholder (`AN`) instead — the layout does not shift when you swap it in. Any web image works (`.jpg`, `.png`, `.webp`); just match the filename.

---

## 2. Adding your resume

1. Drop the PDF into the `public/` folder as `public/resume.pdf`.
2. That's it — the navbar **Resume** button and the **Download Resume** button in the Contact section already point at `/resume.pdf`.

To use a different filename or an external link (Google Drive, Dropbox), change one line in `src/data/profile.ts`:

```ts
resumeUrl: '/A-Navya-SDET-Resume.pdf',      // file in public/
// or
resumeUrl: 'https://drive.google.com/…',    // hosted elsewhere
```

> Until you add the file, the download buttons will 404 — add the PDF before deploying.

---

## 3. Adding LinkedIn, GitHub and email

All three are placeholders in `src/data/profile.ts`:

```ts
export const links = {
  email: 'your.email@example.com',
  linkedin: 'https://www.linkedin.com/in/your-linkedin-handle',
  github: 'https://github.com/your-github-handle',
  resumeUrl: '/resume.pdf',
  photoUrl: '',
}
```

Replace the values with your real ones. They feed the Contact cards, the footer icons and the `mailto:` links automatically — nothing else needs editing.

While you're in that file, also update `index.html`:

- `<link rel="canonical" href="https://example.com/" />` → your real domain
- the two `og:url` / `og:image` tags → your real domain

---

## 4. Other content you may want to edit

Everything below is in `src/data/profile.ts`:

| What | Export |
| --- | --- |
| Name, role, location, headline taglines | `profile` |
| Navbar links | `navItems` |
| Hero terminal lines | `terminalScript` |
| About text + principles | `about` |
| Jobs and internship (timeline) | `experience` |
| Skill categories | `skillGroups` |
| QA project case studies | `projects` |
| Degree, CGPA, academic projects | `education` |
| Contact heading and blurb | `contact` |

### Changing the colours

The palette is defined once as CSS variables in `src/index.css` under `@theme` — `--color-accent`, `--color-canvas`, `--color-surface`, etc. Change a value there and every component follows.

---

## 5. Deploying to Vercel

**Option A — Git (recommended)**

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite. Confirm the settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
4. Click **Deploy**. Every later push to the default branch redeploys automatically.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

**Custom domain:** Vercel → your project → *Settings* → *Domains* → add your domain and follow the DNS instructions. Afterwards, update the canonical and Open Graph URLs in `index.html`.

The site is fully static, so Netlify, Cloudflare Pages or GitHub Pages work just as well — build with `npm run build` and serve `dist/`.

---

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `section`, `footer`), one `h1`, labelled sections.
- "Skip to content" link, visible focus rings, full keyboard operation, `aria-expanded` / `aria-controls` on every disclosure.
- All motion respects `prefers-reduced-motion` — animations stop and the terminal renders complete.
- No animation libraries and no icon packages: icons are inline SVG and effects are CSS. The whole bundle is ~82 KB gzipped.
