# @benhigham/stylelint-config

[![npm version](https://img.shields.io/npm/v/@benhigham/stylelint-config.svg)](https://www.npmjs.com/package/@benhigham/stylelint-config)
[![npm downloads](https://img.shields.io/npm/dm/@benhigham/stylelint-config.svg)](https://www.npmjs.com/package/@benhigham/stylelint-config)
[![License](https://img.shields.io/github/license/benhigham/stylelint-config)](LICENSE.md)

My personal [Stylelint](https://stylelint.io/) configuration for maintaining consistent, high-quality CSS/SCSS code.

## Features

This configuration:

- Extends [`stylelint-config-standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss) for SCSS support and best practices
- Uses [`stylelint-config-recess-order`](https://github.com/stormwarning/stylelint-config-recess-order) for consistent property ordering
- Enforces strict value usage for colors, font-sizes, and z-indices
- Prevents performance issues with animations
- Requires proper use of custom media queries and nesting
- Enforces BEM naming conventions with SUIT CSS methodology
- Ensures browser compatibility with [Baseline](https://web.dev/baseline) requirements
- Includes accessibility checks for better a11y compliance
- Detects and prevents indistinguishable colors and out-of-gamut colors
- Provides special handling for CSS modules

## Installation

```bash
# npm
npm install --save-dev @benhigham/stylelint-config

# yarn
yarn add --dev @benhigham/stylelint-config

# pnpm
pnpm add --save-dev @benhigham/stylelint-config
```

## Usage

Create a `stylelint.config.js` file in your project root and extend this configuration:

```javascript
/** @type {import('stylelint').Config} */
export default {
  extends: ['@benhigham/stylelint-config']
};
```

## Configuration Details

### Extended Configs

- [`stylelint-config-standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss): Provides standard rules for SCSS files
- [`stylelint-config-recess-order`](https://github.com/stormwarning/stylelint-config-recess-order): Enforces a consistent property ordering based on the Recess methodology

### Plugins

This configuration includes several plugins:

- [`stylelint-declaration-block-no-ignored-properties`](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties): Prevents using ignored or overridden properties
- [`stylelint-declaration-strict-value`](https://github.com/AndyOGo/stylelint-declaration-strict-value): Enforces the use of variables, functions or custom CSS for specific properties
- [`stylelint-high-performance-animation`](https://github.com/kristerkari/stylelint-high-performance-animation): Prevents using low-performance animation properties
- [`stylelint-media-use-custom-media`](https://github.com/csstools/stylelint-media-use-custom-media): Enforces the use of custom media queries
- [`stylelint-use-nesting`](https://github.com/csstools/stylelint-use-nesting): Enforces proper CSS nesting
- [`stylelint-plugin-require-baseline`](https://github.com/ryo-manba/stylelint-plugin-require-baseline): Disallow CSS features not in [Baseline](https://web.dev/baseline)
- [`stylelint-no-unresolved-module`](https://github.com/niksy/stylelint-no-unresolved-module): Ensures all imported modules can be resolved
- [`stylelint-no-indistinguishable-colors`](https://github.com/ierhyna/stylelint-no-indistinguishable-colors): Prevents colors that are too similar
- [`stylelint-gamut`](https://github.com/csstools/stylelint-gamut): Prevents colors outside of supported gamut range
- [`stylelint-selector-bem-pattern`](https://github.com/simonsmith/stylelint-selector-bem-pattern): Enforces BEM naming convention
- [`stylelint-no-browser-hacks`](https://github.com/stylelint/stylelint-no-browser-hacks): Disallows browser hacks
- [`stylelint-no-unsupported-browser-features`](https://github.com/ismay/stylelint-no-unsupported-browser-features): Warns about unsupported browser features
- [`stylelint-a11y`](https://github.com/YozhikM/stylelint-a11y): Ensures CSS is accessible

### Key Rules

- **Browser Compatibility**: Enforces only widely supported CSS features
- **SCSS Best Practices**: Limits nesting depth, enforces consistent naming patterns
- **BEM Pattern**: Uses SUIT CSS methodology for class naming
- **Accessibility**: Ensures focus styles, supports reduced motion, and more
- **CSS Modules**: Special handling for `.module.scss` files with relaxed naming rules

## License

This project is licensed under the [MIT License](LICENSE.md).
