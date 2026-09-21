# Nirbhay Insurance Marketing — Website

A 5-page static website: `index.html` (Home), `about.html`, `services.html`,
`partners.html`, `contact.html`, plus a `404.html` error page.

No build step, no framework, no server required — pure HTML/CSS/JS. This
folder is ready to upload as-is to any static host.

## Folder structure

```
nirbhay-website/
├── index.html
├── about.html
├── services.html
├── partners.html
├── contact.html
├── 404.html
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── images/ (logo, photo, partner banner, favicon)
```

## Before you deploy

1. **Domain** — `sitemap.xml`, `robots.txt` and the `<link rel="canonical">`
   tags in each page use `https://www.nirbhayinsurance.co.in/` as a
   placeholder. Find-and-replace this with your real domain once you have one.
2. **Contact form** — the form on `contact.html` currently opens the
   visitor's email app pre-addressed to `care@nirbhayinsurance.co.in`
   (no backend needed). If you'd rather have submissions land directly in
   an inbox or spreadsheet, swap in a form service such as Formspree,
   Getform, or Netlify Forms (a few lines of change in `assets/js/main.js`
   and the `<form>` tag).
3. **Google Maps link** — the "Get directions" link on the Contact page
   opens a Maps search for the address. If you want an embedded map instead,
   add a Google Maps Embed `<iframe>` (requires no API key for basic embeds).

## Deploy options

### Netlify / Vercel (easiest, free)
Drag and drop this whole folder onto the Netlify or Vercel dashboard, or:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir .
```

### GitHub Pages
1. Push this folder's contents to a GitHub repo.
2. Repo Settings → Pages → set source to the `main` branch, root folder.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

### Any shared hosting / cPanel
Upload the entire contents of this folder into `public_html` (or your
site's web root) via FTP/SFTP or the file manager. No server-side setup
needed.

## Notes
- All five pages share one stylesheet (`assets/css/style.css`) and one
  script (`assets/js/main.js`) — edit copy directly in each `.html` file;
  edit shared look-and-feel once in `style.css`.
- Images are referenced as relative files (not inlined), so the site loads
  fast and assets are cached by the browser across page visits.
- Tested responsive from 320px (small phones) up through 1920px desktops.
