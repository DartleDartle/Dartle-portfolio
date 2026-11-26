# Davide Pintore — Portfolio

Personal portfolio of Davide Pintore, product and UX/UI designer: case studies, background and testimonials, in English and Italian.

Live at [davide-pintore.site](https://www.davide-pintore.site).

## Stack

- [Next.js 15](https://nextjs.org) (Pages Router) and React 18
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Framer Motion](https://www.framer.com/motion/) for page transitions and entrance animations
- [next-i18next](https://github.com/i18next/next-i18next) for English and Italian
- [Swiper](https://swiperjs.com) for the sliders, [tsParticles](https://particles.js.org) for the home background

## Getting started

Requires Node.js 24.

```bash
npm install
npm run dev          # development server on http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
npm run lint         # ESLint
npm run format       # Prettier (format:check to verify only)
```

## Project structure

```
components/   shared UI: layout, navigation, sliders, case study building blocks, SEO
hooks/        small React hooks
pages/        one folder per route, plus 404/500 and the Next.js app/document
public/       static assets, translations, case study images, sitemap and robots.txt
styles/       global CSS on top of Tailwind
```

## Content

### Translations

All copy lives in `public/locales/{en,it}/common.json`. Every key must exist in both files.

### Case studies

Long-form case studies (`lume`, `clinicsoul`, `fisiogest`, `viadiguinceri`) render a list of image and video slices from `public/<project>-project/`.

Images go through `components/CaseStudyImage.js`. Wide screens get the original file untouched; smaller screens get a pre-resized copy named `slice-NN-<width>w.webp`. The widths that exist are listed in the page's `variants` prop. A copy is only worth keeping when it is at least 20% smaller than the original:

```bash
ffmpeg -i slice-01.webp -vf "scale=1200:-2:flags=lanczos" \
  -c:v libwebp -quality 92 -compression_level 6 -preset picture slice-01-1200w.webp
```

Shorter project pages (`brunocambiaso`, `caassicurazioni`) describe the project and link to the live site or the Figma file.

### Adding a project

1. Create the page in `pages/<slug>/index.js`, using an existing case study as a template.
2. Add its card to `components/WorkSlider.js`.
3. Add the route to `caseStudyPages` in `components/Layout.js` (case studies hide the site header and nav).
4. Add the URL to `public/sitemap.xml` and the copy to both locale files.

## Deployment

Deployed on Vercel from the `master` branch.
