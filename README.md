# Olannta

Marketing site for Olannta, the direct European wholesale distributor for Studio Donegal Irish wool.

## Structure

```
index.html              Single-page site (hero, range, trade enquiries, sample board, story)
assets/css/styles.css   Site styles, incl. mobile navigation
assets/js/main.js       Mobile nav toggle, form submit handling, footer year
assets/images/          Product and lifestyle photography
assets/favicon.svg      Browser tab icon
robots.txt, sitemap.xml Basic SEO plumbing (update the domain in both once live)
```

No build step — it's static HTML/CSS/JS.

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Notes

- The trade enquiry and sample board forms are front-end only right now (no backend submission target). Wire the `<form>` elements in `index.html` up to a form service or backend endpoint before relying on them to actually notify anyone.
- `og:image` and `twitter:image` reuse `assets/images/wool-donegal-spinning-co.jpg`. Swap in a dedicated social-share image if you want something purpose-built.
- `assets/images/hero-heritage.jpg` and `wool-soft-donegal.jpg` are the same source photo, as are `sample-board.jpg` and `wool-darnie.jpg`. They read fine in context but are worth replacing with distinct shots if this goes to production.
