module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'turbo/no-undeclared-env-vars': 'off',
  },
  env: {
    es6: true,
  },
};
