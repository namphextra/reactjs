module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es6: true
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    '@typescript-eslint',
  ],
  extends: ['airbnb-typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: "module"
  },
  globals: {
    olark: true,
  },
};
