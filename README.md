# RAP Initiative — Website Redesign

A modern, responsive, accessible redesign of [rapinitiative.org](https://rapinitiative.org/) — a
Nigerian non-profit championing road safety through education, advocacy, and community
engagement. Built as plain HTML / CSS / vanilla JS — no build step, no framework.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, mission, three pillars, story split, impact stats, programs grid, stories, news, newsletter |
| `about.html` | Our story, mission/vision/values, leadership team, by-the-numbers |
| `programs.html` | Four flagship programs (Safer Schools, Safer Drivers, Voices on the Road, Eyes on the Road) |
| `get-involved.html` | Donation tiers, full volunteer registration form, partnerships |
| `contact.html` | Contact form + Abuja and Ibadan office details |

## Programs

- **Safer Schools** — road safety curricula and workshops for primary and secondary students
- **Safer Drivers** — community training for taxi, bus, freight, and motorcycle drivers, in partnership with transport unions
- **Voices on the Road** — public awareness campaigns and policy briefings (FRSC, state lawmakers, local government)
- **Eyes on the Road** — community-led road safety audits and black-spot mapping

## Design system

All design tokens are CSS custom properties at the top of `css/style.css`.

```css
--rap-red:    #D62828;   /* primary — passion, action */
--rap-orange: #F77F00;   /* warm energy */
--rap-gold:   #FCBF49;   /* hope, sun */
--rap-cream:  #FFF6E5;   /* warm neutral */
--rap-navy:   #003049;   /* trust, depth */
```

The palette is inspired by warm earth tones common in African road-safety branding.
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

## Volunteer registration form

Five-section form on `get-involved.html#volunteer`:
1. Personal information
2. Contact details (Abuja, Ibadan, or remote)
3. Areas of interest &amp; skills
4. Experience &amp; availability
5. Motivation + declaration

Currently uses the demo `data-demo` JS handler — wire to your real backend
(Formspree / Netlify Forms / custom endpoint) when ready.

## Modern features

- Responsive: mobile-first layout with a slide-out nav
- Sticky header with subtle scroll shadow
- Reveal-on-scroll animations (IntersectionObserver, respects `prefers-reduced-motion`)
- Animated stat counters
- Marquee strip, gradient hero, floating info cards
- Accessible: skip link, ARIA labels, semantic landmarks, keyboard-friendly nav
- Forms with friendly demo handling (no backend wired in yet)
- No external dependencies beyond a Google Fonts link (Inter + Plus Jakarta Sans)

## Run

Just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8080
```

## Stats &amp; copy — placeholders

The metrics on the home and about pages (28,000+ students, 4,500 drivers, 64 communities,
etc.) and the team names on the about page are illustrative placeholders. Replace with
your real numbers and people before launch.
