# Zebrano Interiors — Website Redesign (One-Page Luxury Site)

**Date:** 2026-08-11
**Status:** Design spec (approved direction; awaiting final user sign-off)

---

## 1. Goal & Positioning

Redesign zebranointeriors.com as a **one-page luxury site** that sells **trust + craft** for
**Zebrano Interiors Pvt. Ltd.** (Delhi & NCR, India) — an interior & exterior design and
turnkey-joinery studio with 15+ years of experience, 532 happy clients, and 80+ completed
projects.

**Design direction (user-approved):** Warm editorial — cream/ivory canvas, deep espresso/oak
browns, restrained bronze/gold accents, large serif display type.

**Deliverable shape (user-approved):** single-file static `index.html` (+ local `images/`).

**Imagery (user-approved):** real photos from the live site, downloaded and optimized locally.

**Copy (user-approved):** keep the site's exact wording verbatim; fix only outright typos,
truncated sentences, and placeholder leftovers (e.g. "[Your Design Firm]", "designed .").

---

## 2. Design Language

| Token | Value | Note |
|---|---|---|
| Canvas | warm ivory `#f7f3ec` | page background |
| Ink | deep espresso `#2b2118` | primary text |
| Oak | warm brown `#8a6b4f` | secondary text / borders |
| Accent | bronze `#b98a4e` | CTAs, rules, highlights — **replaces the current raw-red `#ff0000` theme default** |
| Paper | white `#fffdf8` | cards, forms |
| Hairline | `rgba(139,107,79,.25)` | section rules |

**Typography**
- Display: serif (Cormorant Garamond) for headlines — editorial, warm, crafted
- Body: sans (Inter) for readability
- Numbers/stats in the display serif

**Imagery:** 12–14 real photos downloaded from the live site's gallery/portfolio, resized to
~1600px max, compressed (aim < 250KB each).

---

## 3. One-Page Structure (scroll order)

| # | Section | Verbatim copy source | Layout |
|---|---|---|---|
| 1 | **Hero** | "Indulge in the luxury of bespoke interiors." / "Join us on a visual journey through spaces that resonate with timeless elegance." | Full-bleed project image, elegant overlay, serif headline, 2 CTAs (Discover More / WhatsApp) |
| 2 | **About strip** | "Welcome To Zebrano Interior" + intro paragraph; stats: 532 happy clients / 15+ Years / 80+ COMPLETED PROJECTS | Intro + large stats row |
| 3 | **Services** | 6 cards; verbatim lines: 3D VISUALIZATION ("Visualize the future of your space with precision."), DESIGNER BEDROOMS ("Tailored elegance for a dream‐worthy sleeping space."), MODERN MANDIR ("Sacred spaces blending tradition and modern aesthetics."), MODULAR KITCHEN ("A customizable and space-efficient kitchen design."), EXTERIOR DESIGNS (dedupe duplicated line → fix once), BESPOKE FURNITURE ("Furniture as unique as you are..." — repair truncated "designed .") | 3-col card grid, each with image + short line |
| 3b | **Partners strip** | Quality hardware brands from the live site: Blum, Häfele, Hettich, Kaff, Prosol, Rehau (brand names kept verbatim) | Quiet thin strip under services — classic high-end kitchen trust signal |
| 4 | **Portfolio** | Real gallery images (kitchens, bedrooms, mandirs, bar units) | Elegant masonry-ish grid; hover zoom; click → lightbox |
| 5 | **Process** | 4 steps verbatim: 01 Planning Phase / 02 Design Process / 03 Execution Phase / 04 Completed Projects | Numbered timeline |
| 6 | **Testimonial** | Mr Pradeep Kumar (Ashok Vihar) quote, verbatim | Centered oversized quote |
| 7 | **Contact** | "Let's Start a Project"; contact person Harinder Singh; phone +91 9899995656; email Zebranointeriors@gmail.com; address 18/21, Basement, Old Rajinder Nagar, New Delhi-60; WhatsApp button; Instagram @zebranointeriors | Two-column: form + contact details |
| 8 | **Footer** | Company blurb, contact, socials, © 2024 Zebrano Interiors. All Rights Reserved. | Simple elegant |

**Contact form:** fields Name / Phone / Email / Message. Static site — no backend, so form
action is a graceful `mailto:` fallback with front-end validation + clear success/error
states (no data leaves the page except via the user's mail client or WhatsApp link).

---

## 4. Components & Behavior

- **Sticky header:** minimal nav (About / Services / Portfolio / Process / Contact), turns
  solid on scroll; mobile hamburger → full-screen elegant overlay menu
- **Scroll-reveal:** respectful fade/rise on sections (IntersectionObserver); `prefers-reduced-motion` respected
- **Gallery:** hover zoom + lightbox (keyboard accessible, closes on Esc)
- **Form:** client-side validation, error messages inline, `mailto:` submit + WhatsApp CTA
- **Fully responsive** (mobile-first), accessible (contrast, focus states, aria labels), SEO meta tags (title, description, OG, canonical) + JSON-LD structured data (`LocalBusiness`/`ProfessionalService` — the audit confirms the current site has none)

---

## 5. Technology

- **Pure HTML + CSS + vanilla JS** — single `index.html`, zero build step, no frameworks, works offline
- **Fonts:** Google Fonts (Cormorant Garamond + Inter), loaded once with `preconnect`
- **Images:** downloaded from live site into `images/` (e.g. `hero-kitchen.jpg`, `bedroom-1.jpg`), lazy-loaded, `width`/`height` set to prevent layout shift
- **Favicon:** simple inline SVG monogram

---

## 6. What Stays / What's Fixed

**Keeps (verbatim):** name, all copy lines listed above, contact details, WhatsApp number, socials, real photos, the stats.
**Fixes (true errors per user's rule):** raw-red accent → bronze; hero demo image (currently from theme-vendor demo server) → real project photo; duplicated EXTERIOR DESIGNS card copy; truncated "designed ." line; the "[Your Design Firm]" placeholder (replaced once with the company name).

---

## 7. Testing & Verification

1. **HTML validity** — basic parse check + manual spot-check
2. **Responsive** — check at mobile / tablet / desktop widths
3. **Accessibility** — contrast (WCAG AA), focus states, keyboard nav (Esc closes lightbox)
4. **Performance** — confirm lazy-loading + no layout shift
5. **Screenshot verification** — render in a headless browser, review hero / services / gallery / form
6. **Manual QA pass** — click all CTAs (Discover More, WhatsApp, form submit), nav anchors, lightbox

---

## 8. Out of Scope (deliberately)

- Multi-page structure, CMS, real backend form handling, analytics, i18n, dark-mode toggle
- **Add when:** the studio wants a contact form that actually emails them, or multiple real pages