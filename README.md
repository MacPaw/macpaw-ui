# macpaw-ui

## Installation

Install with npm:

```bash
npm install --save @macpaw/macpaw-ui
```

or with yarn:

```bash
yarn add @macpaw/macpaw-ui
```

And import stylesheets manually:

```jsx
import '@macpaw/macpaw-ui/lib/ui.css';
```

## Adding new Component

- Add Component's JSX and styles to [src/%ComponentName%](/src) directory
- Import Component's JS, styles to [ui.js](/src/ui.js) and [ui.scss](/src/ui.scss) correspondingly
- Add document page in `/pages/%component-name%.mdx`

## Adding new Icons

- All common icons should have size 24x24px and dynamic (not hard-coded) `fill` attribute (so it can be changed / overridden later is CSS or React component)
- Add new SVG file icon to `src/Icons/svg/%name%_icon.svg`
- Run `yarn icons` CLI command

## Requirements

- Node 16+
- npm 7+ (lock file v2)

## Release

Package published with Github Actions:

- Update version in [package.json](package.json) file
  - `npm run version:patch` - for patch update e.g. X.X._1_
  - `npm run version:minor` - for minor update e.g. X._1_.0
  - `npm run version:major` - for minor update e.g. _1_.0.0
- Create new release at Github

## Host

- run `yarn build`
- serve `out` directory as public
