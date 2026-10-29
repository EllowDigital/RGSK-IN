# RGSK Technologies Website

The public-facing website for RGSK Technologies Pvt Ltd, a digital solutions business. The site presents the company, its services, and ways for prospective customers to make contact.

## Project overview

The codebase is a modern single-page web application intended to provide a responsive experience across desktop and mobile devices.

## Technology stack

- React and TypeScript
- Vite
- Tailwind CSS and reusable UI components
- React Router and supporting UI libraries
- Netlify-compatible static build configuration

See `package.json` for the complete dependency list and supported scripts.

## Getting started

### Requirements

- A supported Node.js release
- npm

### Install and run

```bash
git clone https://github.com/EllowDigital/RGSK-IN.git
cd RGSK-IN
npm ci
npm run dev
```

Open the local URL printed by Vite.

### Build and quality checks

```bash
npm run build
npm run lint
npm run format
npm run preview
```

The exact available commands are defined in `package.json`. Run a production build before deploying.

## Deployment

The project includes Netlify configuration. Connect the repository to the intended Netlify site and confirm the build command, output directory, domain, and deployment environment before publishing changes.

## Maintenance

- Keep dependencies and the lockfile in sync.
- Check responsive behavior and keyboard accessibility for changed UI.
- Test forms, external links, contact details, and mobile navigation.
- Keep production credentials out of browser-side variables and source control.
- Do not overwrite verified SEO metadata, canonical URLs, verification tags, or branding without confirming the impact.

## Privacy and security

Treat every browser-bundled value as public. Do not include passwords, private API keys, server credentials, customer records, or internal company data in client-side code. Report a suspected security issue privately to the site maintainer rather than publishing working exploit details.

## License

See [LICENSE](LICENSE). This repository does not grant open-source reuse of company branding, copy, or project-specific code unless the relevant rights holder provides written permission. Third-party packages remain under their own licenses.
