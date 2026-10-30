# Everyday Economics

Six economics lessons with everyday examples, interactive models, quizzes and browser-local reading progress.

## Website

https://merchantakshay.github.io/everyday-economics/

## GitHub Pages

In Settings → Pages, select **GitHub Actions** as the source. The deployment workflow publishes `dist/` on pushes to `main` and can also be run manually from Actions.

## Local preview

Run `python3 -m http.server 8000 --directory dist` and open http://localhost:8000.

## Validation

```sh
node --check dist/app.js
node --check dist/content.js
node tests/models.mjs
```

No build step or API keys required. Illustrative calculations link to OpenStax further reading. Lesson completion is stored only in the reader’s browser.

