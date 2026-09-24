# JADOM Homes & Properties — Website

A static, no-build website. No npm install, no framework, no backend required.

## Project structure

```
jadom-site/
├── index.html          ← the page itself
├── css/
│   └── style.css        ← all site styling
├── js/
│   └── script.js        ← property data, plot modals, buyer application form, FAQ accordion, filters
├── images/               ← all photos (logo, property photos, plot photos, map)
└── video/
    └── hero-video.mp4    ← hero background video
```

## Opening in VS Code

1. Unzip this folder.
2. In VS Code: File → Open Folder → select `jadom-site`.
3. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel if you don't have it.
4. Right-click `index.html` in the file explorer → "Open with Live Server".
5. The site opens in your browser and auto-reloads whenever you save a change.

That's it — no terminal commands, no build step.

## Editing content

- **Text, sections, layout** → edit `index.html`
- **Colors, spacing, fonts, hover effects** → edit `css/style.css`
- **Property listings, prices, plot sizes, the Buyer Application Form logic** → edit `js/script.js`
  - Property cards are defined in the `properties` array (search for `const properties = [`)
  - Plot-size breakdowns (the "View details" modal contents) are in the `plotSets` object (search for `const plotSets = {`)

## Before going live

1. **Buyer Application Form email** — open `js/script.js`, find this line near the top of the `appSubmit` section:
   ```js
   const JADOM_APPLICATIONS_EMAIL = 'YOUR-EMAIL@gmail.com';
   ```
   Replace with your real email address. Right now, clicking "Submit Application" opens the visitor's email app with everything pre-filled (a `mailto:` link). If you want it to submit silently without opening an email app, look into a free form backend like Formspree or Web3Forms instead.

2. **Contact form** (the general enquiry form near the bottom of the page) — currently doesn't submit anywhere either; same note applies.

3. Rename nothing — the file/folder names are already what most static hosts expect (`index.html` as the homepage).

## Deploying

Any static host works since there's no backend:
- **Netlify** — drag the whole `jadom-site` folder onto netlify.com's deploy page.
- **Vercel** — same drag-and-drop flow.
- **GitHub Pages** — push this folder to a GitHub repo, enable Pages in repo settings.

Then connect your custom domain in the host's dashboard.
