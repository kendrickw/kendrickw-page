module.exports = {
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-jsdoc',
    /**
     * Must be last in plugin list
     *
     * See:
     * https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#compatibility-with-other-prettier-plugins
     */
    'prettier-plugin-tailwindcss',
  ],
  arrowParens: 'always',
  singleQuote: true,
  trailingComma: 'es5',
  /**
   * `prettier-plugin-organize-imports`:
   *
   * - Don't want destructive code actions (like removing unused imports)
   */
  organizeImportsSkipDestructiveCodeActions: true,
  /**
   * `prettier-plugin-jsdoc`
   *
   * See: https://github.com/hosseinmd/prettier-plugin-jsdoc
   */
  tsdoc: true,
  /**
   * `prettier-plugin-tailwindcss`
   *
   * See: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
   */
  tailwindConfig: './tailwind.config.js',
  tailwindFunctions: ['cn'],
};
