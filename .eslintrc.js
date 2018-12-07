module.exports = {
  env: {
    browser: false,
    node: true
  },
  parser: "babel-eslint",
  extends: "eslint:recommended",
  rules: {
    semi: ["error", "always"],
    indent: ["error", 2],
    'no-console': 'warn',
    'no-var': 'error'
  }
};
