module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: [ 'vue' ],
  extends: [ 'eslint:recommended', 'immortal', 'plugin:vue/recommended' ],
  rules: {}
};
