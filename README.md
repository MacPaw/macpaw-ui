# macpaw-ui

## Adding new Component

* Add Component's JSX and styles to [src/%ComponentName%](/src) directory
* Import Component's JS, styles to [ui.js](/src/ui.js) and [ui.scss](/src/ui.scss) correspondingly
* Add document page in `/pages/%component-name%.mdx`

## Adding new Icons

* All common icons should have size 24x24px and dynamic (not hard-coded) `fill` attribute (so it can be changed / overridden later is CSS or React component)
* Add new SVG file icon to `src/Icons/svg/%name%_icon.svg`
* Run `yarn icons` CLI command

## Requirements

* Node 16+
* npm 7+ (lock file v2)

## Release

Package published with Github Actions:

* Update version in [package.json](package.json) file
* Create new release at Github

## Host

* run `yarn build`
* serve `out` and `.next` directories as public
