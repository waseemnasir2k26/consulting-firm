# Changelog

All notable changes to this project are documented in this file.

## [2026.09] - 2026-09-16

- Maintenance review of `consulting-firm` — a multi-page marketing website for "Ascend Consulting Group", a demo management-consulting brand.
- Status: React 19 + Vite 7 + Tailwind CSS 4 SPA routed with React Router, animated with Framer Motion and using lucide-react icons. It carries three landing-page variants plus About, Services, Team, Testimonials, Resources, Blog and Contact pages, with all site copy centralised in `src/data/content.js`. `vercel.json` rewrites every path to `/` for SPA hosting. The repo has had a single commit since March 2026.
- Reviewed September 2026: the README, which was still the stock `create-vite` React template text, now describes what this repo actually is; the original template notes were kept below as a clearly labelled section. CHANGELOG added and the project versioned as v2026.09.
- Known gaps: no LICENSE file; no tests or CI workflow (`npm run lint` is the only check); the client name, testimonials and metrics in `src/data/content.js` are demo content, not a real engagement; no live URL is stated anywhere in the repo.
- No application code, styles or dependencies were changed in this release — documentation and version metadata only.
