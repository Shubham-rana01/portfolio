# Portfolio

Personal portfolio for **Shubham Rana**, Senior Software Engineer — built with Angular 21 (standalone
components, signals, zoneless change detection). Deploys to GitHub Pages for free, and ships with a
hardened Docker image if you'd rather host it yourself.

## Quick start

```bash
npm install
npm start          # http://localhost:4200
```

## Make it yours

All personal content lives in one file — edit it and the whole site updates:

- [src/app/core/portfolio.data.ts](src/app/core/portfolio.data.ts) — name, title, stats, services,
  engagement types, process, skills, projects, experience, testimonials, certifications, education,
  availability, social links, contact details.
- [src/index.html](src/index.html) — page `<title>`, meta description, Open Graph / Twitter tags
  and the Person JSON-LD block. Social tags live here rather than in Angular because crawlers like
  LinkedIn and WhatsApp don't run JavaScript.
- [public/robots.txt](public/robots.txt) and [public/sitemap.xml](public/sitemap.xml) — update the
  URL if you move to a custom domain.
- Drop your CV at `public/resume.pdf` — the hero "Résumé" button picks it up automatically and saves
  it as `Shubham-Rana-Senior-Software-Engineer.pdf`. Clear `resumeUrl` in the data file to hide the
  button.
- Branding assets are generated, not hand-drawn. Re-run them after changing the accent colour,
  initials or tagline:

  ```powershell
  powershell -File .\tools\generate-icons.ps1   # favicon.ico, favicon.svg, apple-touch-icon.png
  powershell -File .\tools\generate-og.ps1      # og.png social preview (1200x630)
  ```

> The testimonials section stays hidden until you add entries to the `testimonials` array, so the
> page never shows an empty block.

### Contact form

By default the form opens the visitor's mail client via `mailto:`. To receive submissions as email
instead, create a free form endpoint (e.g. [Formspree](https://formspree.io)) and set
`contactFormEndpoint` in `portfolio.data.ts`. The form includes a honeypot field to drop naive spam
bots.

## Scripts

| Command                | What it does                            |
| ---------------------- | --------------------------------------- |
| `npm start`            | Dev server with hot reload              |
| `npm run build`        | Production build into `dist/portfolio/` |
| `npm test`             | Unit tests (Vitest), single run         |
| `npm run test:watch`   | Unit tests in watch mode                |
| `npm run format`       | Format the codebase with Prettier       |
| `npm run format:check` | Verify formatting (used by CI)          |
| `npm run docker:build` | Build the production container image    |
| `npm run docker:run`   | Run the image on http://localhost:8080  |

## Deploying to GitHub Pages (free)

1. Create a repository on the GitHub account you want to publish from.

   - Name it `<your-username>.github.io` to serve the site at `https://<your-username>.github.io/`.
   - Name it anything else (e.g. `portfolio`) to serve it at
     `https://<your-username>.github.io/portfolio/`.

   The workflow detects which case applies and sets `--base-href` accordingly — no manual config.

2. Push this project to that repository's `main` branch:

   ```bash
   git init
   git add .
   git commit -m "feat: portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

3. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

4. Every push to `main` now builds and publishes automatically. The live URL appears in the
   **Actions** run summary and under **Settings → Pages**.

### Custom domain (optional)

Add a file named `CNAME` to `public/` containing just your domain (e.g. `www.example.com`), point a
`CNAME` DNS record at `<your-username>.github.io`, then set the domain under **Settings → Pages**
and tick **Enforce HTTPS**.

## Workflows

| Workflow                                   | Trigger                  | Purpose                                                                     |
| ------------------------------------------ | ------------------------ | --------------------------------------------------------------------------- |
| [ci.yml](.github/workflows/ci.yml)         | PRs and pushes to `main` | Format check, unit tests, production build, Docker image build + smoke test |
| [deploy.yml](.github/workflows/deploy.yml) | Pushes to `main`, manual | Builds and publishes to GitHub Pages                                        |
| [dependabot.yml](.github/dependabot.yml)   | Scheduled                | Dependency updates for npm, Actions and Docker                              |

`deploy.yml` also copies `index.html` to `404.html` so deep links are handled by the Angular router
rather than GitHub's default 404 page.

## Docker

```bash
# Build and run
docker compose up --build        # http://localhost:8080

# Or build directly, optionally for a sub-path deployment
docker build --build-arg BASE_HREF=/portfolio/ -t portfolio:latest .
docker run --rm -p 8080:8080 portfolio:latest
```

The image is a multi-stage build: Node compiles the app, then the output is served by nginx as a
non-root user on port 8080 with gzip, long-lived caching for hashed assets, a `/healthz` endpoint
and security headers (CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
`Permissions-Policy`). The compose service runs read-only with `no-new-privileges`.

> If you remove the Google Fonts `<link>` from `index.html`, tighten the `style-src` and `font-src`
> directives in [nginx/default.conf](nginx/default.conf) to `'self'`.

## Other free hosts

The build output in `dist/portfolio/browser` is plain static files, so it also works on Netlify,
Vercel, Cloudflare Pages or Firebase Hosting. Use build command `npm run build` and publish
directory `dist/portfolio/browser`, and make sure the host rewrites unknown routes to `index.html`.

## Project structure

Each component lives in its own folder with its template and styles beside it.

```
src/app/
├── core/                 # profile data, types, theme service
├── layout/
│   ├── header/           # nav, scroll progress, active-section tracking
│   └── footer/
├── pages/home/           # routed page that composes the sections
├── sections/             # hero, about, services, process, projects,
│                         # experience, skills, testimonials, credentials, contact
└── shared/
    ├── icon/             # inline SVG icon component
    └── directives/       # scroll-reveal directive
```
