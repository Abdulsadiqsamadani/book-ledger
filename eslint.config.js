module.exports = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
      },
    },
    rules: {
      indent: ['error', 2],
      'no-trailing-spaces': 'error',
      'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    },
  },
];