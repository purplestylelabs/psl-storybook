export default {
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-standard-scss' 
  ],
  plugins: ['stylelint-order'],
  rules: {
    /** SCSS-specific tweaks **/
    'at-rule-no-unknown': null,          // disable plain CSS at-rule checking
    'scss/at-rule-no-unknown': true,     // enable SCSS-aware at-rule checking
    'scss/dollar-variable-empty-line-before': null,
    'at-rule-empty-line-before': null,

    /** Property ordering **/
    'order/properties-alphabetical-order': true,

    /** Relaxations **/
    'font-family-no-missing-generic-family-keyword': null,
    'comment-empty-line-before': null,
    'color-function-notation': null,
    'hue-degree-notation': null
  },
};
