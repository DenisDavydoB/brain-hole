module.exports = {
  overrides: [
    {
      files: ['*.{entity,embeddable}.ts'],
      rules: {
        '@typescript-eslint/no-inferrable-types': 'off',
      },
    },
  ],
}
