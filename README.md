# eleventy-bragdoc

[Check out the demo](https://emilyyleung.github.io/eleventy-bragdoc)

A starter site for building your own [brag document](https://jvns.ca/blog/brag-documents/), using [11ty](https://www.11ty.dev/) ([demo](https://emilyyleung.github.io/eleventy-bragdoc)). Inspired by [Julia Evans](https://jvns.ca/) . Bragdoc design by Jonny Burch and Neil Cameron at [bragdocs.com](bragdocs.com).

Built using:
- [11ty](https://www.11ty.dev/)
- Vanilla JS and CSS

## Themes

So far, I've included 2 themes (light and dark). The colours have been assigned at the beginning of `src/css/styles.css` and can be easily changed.

### Light Theme
![light-theme](https://emilyyleung.github.io/eleventy-bragdoc/images/screenshot/light-theme.jpg)

### Dark Theme
![dark-theme](https://emilyyleung.github.io/eleventy-bragdoc/images/screenshot/dark-theme.jpg)

You can switch between them by changing the `data-theme` variable from default **light** to **dark** in `src/includes/layouts/base.njk`

## Features
- [Eleventy](https://www.11ty.dev/) for static site generation
- Nunjucks for templating
- Static [Tags](https://www.11ty.dev/docs/collections/)
- SEO base template can be found in `src/data/site.json`
- Frontmatter property: `Icon` use Segoe UI Emoji inspired by Notion style
- Frontmatter property: `public` can be set to `True` or `False` depending on whether you would like to make it visible to your timeline
- Order is sorted with latest entry at the top

## Dependencies
```bash
# Install dependencies
npm install
```

## Available Scripts
### Development

```bash
# Runs the app in local development mode
npm start
```
Open [http://localhost:8080/](http://localhost:8080/) to view in the browser.

### Production

```bash
# Builds a static copy of your site to the `public/` folder
npm run-script build
```

#### Publish onto Github Pages
Follow this [link](https://pages.github.com/) to create your own Github Pages

```bash
# Push the content on Github Pages
npm run deploy
```

## Credits
- This project's styling was adapted from this timeline [codepen](https://codepen.io/venkat06/pen/yLBeVqZ?editors=0100) by [venkatesh](https://codepen.io/venkat06)
- SEO structure was adapted from [11r](https://github.com/reeseschultz/11r) by [reeseschultz](https://github.com/reeseschultz)

## License
This project is open source and available under the [MIT License](https://github.com/emilyyleung/eleventy-bragdoc/blob/main/LICENSE)