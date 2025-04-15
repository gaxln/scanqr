// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['react'],
  rules: {
    // aquí puedes personalizar reglas
  },
};
