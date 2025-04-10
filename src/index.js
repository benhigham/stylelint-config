/** @import { Config } from 'stylelint' */

/** @type {Config} */
const config = {
  extends: ['stylelint-config-standard-scss'],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-declaration-strict-value',
    'stylelint-high-performance-animation',
    'stylelint-media-use-custom-media',
  ],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'scale-unlimited/declaration-strict-value': [
      ['/color$/', 'font-size', 'z-index'],
      { ignoreValues: ['currentColor', 'inherit', 'transparent'] },
    ],
    'csstools/media-use-custom-media': 'always',
    'plugin/no-low-performance-animation-properties': true,
  },
};

export default config;
