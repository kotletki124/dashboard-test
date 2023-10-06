/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: { parser: '@typescript-eslint/parser', ecmaVersion: 'latest' },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended']
}
