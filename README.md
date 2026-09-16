# consulting-firm — Ascend Consulting Group website

A multi-page marketing site for "Ascend Consulting Group", a fictional/demo management-consulting
brand. React 19 + Vite 7 + Tailwind CSS 4, routed with React Router, animated with Framer Motion,
icons from lucide-react. Site copy lives in `src/data/content.js`.

## Status


Last reviewed: September 2026 · release v2026.09

## Pages

`src/pages/` — three landing-page variants (LandingPage1/2/3) plus About, Services, Team,
Testimonials, Resources, Blog and Contact. Shared chrome is in `src/components/layout/`
(Navbar, Footer) and `src/components/ui/ScrollReveal.jsx`.

## Develop

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

Deployed as a SPA — `vercel.json` rewrites every path to `/`.

---

## Vite template notes

The sections below are the stock notes from the `create-vite` React template this project was
scaffolded from.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
