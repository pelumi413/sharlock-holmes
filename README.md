# RAP Initiative — Website Redesign

A modern, responsive, accessible redesign of [rapinitiative.org](https://rapinitiative.org/), built as
plain HTML / CSS / vanilla JS — no build step, no framework.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, mission, programs, impact, stories, news, newsletter |
| `about.html` | Our story, mission/values, team, by-the-numbers |
| `programs.html` | Four flagship programs (Scholars, She Earns, Voices Forward, Healthy Beginnings) |
| `get-involved.html` | Donation tiers, volunteer flow, partnerships |
| `contact.html` | Contact form + office details |

## Design system

All design tokens are CSS custom properties at the top of `css/style.css`.

```css
--rap-red:    #D62828;   /* primary — passion, action */
--rap-orange: #F77F00;   /* warm energy */
--rap-gold:   #FCBF49;   /* hope, sun */
--rap-cream:  #FFF6E5;   /* warm neutral */
--rap-navy:   #003049;   /* trust, depth */
```

The palette is inspired by typical RAP-style initiative branding (warm earth tones).
**Swap the hex values in `:root` to match the official logo and the entire site retunes.**
The gradient logo at `assets/logo.svg` references the same colors; replace it with the
official artwork at any time.

## Social handles

All five linked across topbar + footer of every page:

- X (Twitter): [@RAPInitiativeHQ](https://x.com/RAPInitiativeHQ)
- Facebook: [@RAPInitiativeHQ](https://facebook.com/RAPInitiativeHQ)
- Instagram: [@RAPInitiativeHQ](https://instagram.com/RAPInitiativeHQ)
- YouTube: [@RAPInitiativeHQ](https://youtube.com/@RAPInitiativeHQ)
- TikTok: [@RAPInitiativeHQ](https://tiktok.com/@RAPInitiativeHQ)

## Modern features

- Responsive: mobile-first layout with a slide-out nav
- Sticky header with subtle scroll shadow
- Reveal-on-scroll animations (IntersectionObserver, respects `prefers-reduced-motion`)
- Animated stat counters
- Marquee strip, gradient hero, floating info cards
- Accessible: skip link, ARIA labels, semantic landmarks, keyboard-friendly nav
- Form with friendly demo handling (no backend wired in)
- No external dependencies beyond a Google Fonts link (Inter + Plus Jakarta Sans)

## Run

Just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8080
```
