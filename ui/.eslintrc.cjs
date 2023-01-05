/* eslint-env node */

module.exports = {
  env: {
    node: false,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['effector'],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:effector/recommended',
    'plugin:effector/scope',
  ],
  rules: {
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
  },
}
