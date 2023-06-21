module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint-config-airbnb-base',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 0,
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    "import/no-unresolved": 0,
    'import/no-unresolved': 'off',
    "import/no-dynamic-require": 0,
    "import/order": 1,
  },
};
