# Zebrano Interiors — One-Page Luxury Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dated template site with a single-file warm-editorial luxury one-pager for Zebrano Interiors (Delhi & NCR), using real project photos and verbatim copy.

**Architecture:** Pure static site — one `index.html` (semantic HTML, CSS design tokens, vanilla JS for header/reveal/lightbox/form), local optimized images in `images/`, no build step, no frameworks. Google Fonts (Cormorant Garamond + Inter) with preconnect; JSON-LD LocalBusiness; inline SVG favicon.

**Tech Stack:** HTML5, CSS3 (custom properties, grid/flex), vanilla JS (ES6), ffmpeg (image resize), curl (download). Node available.

**Verification tools:** `python -m http.server` (or `npx serve`) for local preview; headless Chrome screenshot via Puppeteer if available (`node -e` + `puppeteer`), else Playwright/Edge headless; `ffprobe` for image checks.

## Global Constraints

- One deliverable page: `index.html` + `images/` folder; no other pages.
- Copy VERBATIM from the live site (see spec section 3); fix only true errors: duplicated EXTERIOR DESIGNS caption, truncated "designed .", "[Your Design Firm]" placeholder.
- Contact details (exact): Harinder Singh; phone +91 9899995656; email Zebranointeriors@gmail.com; address 18/21, Basement, Old Rajinder Nagar, New Delhi-60; WhatsApp https://web.whatsapp.com/send?phone=+919899995656.
- Stats (exact): 532 happy clients / 15+ Years of Experience / 80+ COMPLETED PROJECTS.
- Design tokens (exact): canvas `#f7f3ec`; ink `#2b2118`; oak `#8a6b4f`; accent bronze `#b98a4e`; paper `#fffdf8`; hairline `rgba(139,107,79,.25)`.
- Fonts: Cormorant Garamond (display serif) + Inter (body). No other fonts.
- Images: real photos only; from the live gallery URLs below; max ~1600px wide; each < 250KB; `width`/`height` attrs set; `loading="lazy"` (hero eager).
- Partners strip: text-only wordmarks (Blum, Häfele, Hettich, Kaff, Prosol, Rehau) — no external logo images.
- Accessibility: WCAG AA contrast; visible focus states; keyboard-accessible lightbox (Esc closes); semantic landmarks; `aria-label`s on icon-only controls.
- SEO: `<title>`, meta description, OG/Twitter cards, canonical, JSON-LD LocalBusiness/ProfessionalService.
- No analytics, no cookies, no external requests except Google Fonts.

---