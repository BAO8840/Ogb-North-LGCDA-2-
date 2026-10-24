# Ogbomoso North Local Government website
Static site: HTML, one CSS file, three small JS files. No build step.
- `assets/js/data.js`: contact details, wards, tables, search index
- `assets/js/main.js`: menu, search, forms, tables, language toggle, hero slideshow
- Hero photos: `assets/img/hero-1.jpg` to `hero-6.jpg`; captions are the `data-cap` attributes in `index.html`
- Bilingual text: `<span data-l="en">..</span><span data-l="yo">..</span>`
## Deploy
Push to GitHub, import in Vercel (Framework Preset: Other, no build command).
## To update
- Add the council's own phone and email when issued (search `+2348033180116` and `ministrylgcm@yahoo.com`)
- Publish Councillor names, notices and tenders in `data.js`
- Have a fluent Yoruba speaker review all Yoruba text
