# Lightning Design System _for_ React

### Accessible, localization-friendly, presentational React components

[![Build Status](https://circleci.com/gh/salesforce/design-system-react.svg?style=svg)](https://circleci.com/gh/salesforce/design-system-react) [![DeepScan grade](https://deepscan.io/api/teams/5738/projects/7558/branches/78938/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5738&pid=7558&bid=78938)
[![Known Vulnerabilities](https://snyk.io/test/github/salesforce/design-system-react/badge.svg?targetFile=package.json)](https://snyk.io/test/github/salesforce/design-system-react?targetFile=package.json) [![Monthly NPM downloads](https://img.shields.io/npm/dm/@salesforce/design-system-react.svg)](https://www.npmjs.com/package/@salesforce/design-system-react)

## Install

```
$ npm install @salesforce-ux/design-system @salesforce/design-system-react
```

## Getting Started

Welcome to this community-supported project! :wave: This library is the [React](https://facebook.github.io/react/) implementation of the [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/). This library has a peer dependency on `@salesforce-ux/design-system`, `react`, and `react-dom`. It is tested with React 16 and has a stable API despite its version number. Please [polyfill](https://github.com/salesforce/design-system-react/blob/master/docs/browser-compatibility.md) this library in order to meet your target environment needs.

- [Usage](#usage)
- [Getting started](https://react.lightningdesignsystem.com/getting-started/)
- [Documentation and interactive examples](https://react.lightningdesignsystem.com)
- [Contributing](CONTRIBUTING.md)
- [Codebase overview](docs/codebase-overview.md)
- [Create React App setup](docs/create-react-app.md)
- [Browser compatibility and polyfills](docs/browser-compatibility.md)
- [Usage with Webpack](docs/webpack.md)
- [Open Sourcing Design System React](https://engineering.salesforce.com/open-sourcing-design-system-react-9be45b8bb127) - Medium article

## Usage

### Quick Setup (ES6 and CJS modules)

For a no hassle setup and compatibility with Create React App, transpiled ES6 and CommonJS module versions have been included within the NPM package. If using this setup, please re-write the `import` statement in the documentation site examples. Use the following named `import` syntax to access the transpiled components from `/lib/index.js`:

```
import { Button } from '@salesforce/design-system-react';

<Button label="Hello Button" />
```

Please view [Create React App Setup](docs/create-react-app.md) for more information on using this library with Create React App.

### Advanced (Source code)

Advanced usage requires that your babel presets are set up correctly. `create-react-app` and environments that do not transpile code within `node_modules` are not compatible with the component import below. All the examples on the [documentation site](https://react.lightningdesignsystem.com/) use this syntax. You can use the Babel preset, `@salesforce/babel-preset-design-system-react`, to get started. [This preset](https://npmjs.com/package/@salesforce/babel-preset-design-system-react) will keep Babel compatible with Design System React and allow ES6 module benefits such as tree-shaking. This library is not browser-ready and should be polyfilled to your target environment.

```
import Button from '@salesforce/design-system-react/components/button';

<Button label="Hello Button" />
```

#### Transpile with `.babelrc` settings

```json
{
	"presets": ["@salesforce/babel-preset-design-system-react"]
}
```

The current preset version is only compatible with Babel 6. Please see this [issue comment for Babel 7](https://github.com/salesforce/design-system-react/issues/1621#issuecomment-513590273).

### Styling

This library does not contain any Cascading Style Sheets (CSS). You will need to add `<link rel="stylesheet" type="text/css" href="/node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css" />` to your page and serve that file from a publicly available folder.

#### Serve icons publicly

Typically, scripts should be downloaded in the background without blocking the DOM. With React, this works best with [server side rendering](https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup). SLDS recommends placeholder stencils while scripts are initializing if the HTML cannot be served immediately. If you can serve the HTML, then icon SVGs should not be bundled and served like any other file. Set a path `context` for all child components with `<IconSettings>` at the top of your render tree:

```
import IconSettings from '@salesforce/design-system-react/components/icon-settings';

ReactDOM.render(
  <IconSettings iconPath="/assets/icons">
    <MyApp />
  </IconSettings>,
  document.getElementById('app')
)

// `/assets/icons` will be prepended to `/standard-sprite/svg/symbols.svg#account` within the SVG path
<svg aria-hidden="true" class="slds-icon">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
</svg>
```

```
// ExpressJS example
app.use('/assets/icons', express.static('node_modules/@salesforce-ux/design-system/assets/icons/'));
```

#### Bundle icons

If you use a module bundler, like Webpack, you can let your module bundler manage SVG sprite file paths and send that path into `<IconSettings>`. This requires configuring your module bundler to manage your public assets.

```
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import standardSprite from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';
...
...

ReactDOM.render(
  <IconSettings standardSprite={standardSprite}>
    <MyApp />
  </IconSettings>,
  document.getElementById('app')
)
```

### Icon Usage

Prior to v0.7.0, SLDS icons were bundled with the JavaScript. The 400KB+ icons bundle from [SLDS](https://www.lightningdesignsystem.com/) is no longer included. You will need to download the SLDS CSS and icons separately.

Bundled script files are provided _only_ for convenience. Do not use in production.

- `design-system-react.min.js` (700KB+) - includes icons in the JavaScript
- `design-system-react-components.min.js` (~400KB) - no icons.

## Contributing to the code base

#### Clone and develop locally with Storybook and in-browser tests

```
git clone git@github.com:salesforce/design-system-react.git
cd design-system-react
npm install
npm start
open http://localhost:9001 http://localhost:8001
```


