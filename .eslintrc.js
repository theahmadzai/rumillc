module.exports = {
  extends      : [ 'eslint:recommended', 'immortal', 'plugin:vue/recommended' ],
  plugins      : [ 'vue' ],
  parserOptions: {
    ecmaVersion                : 9,
    sourceType                 : 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures               : {
      jsx: false
    }
  },
  env: {
    browser: true,
    es6    : true
  },
  rules: {
    'key-spacing': [
      'error',
      {
        align: {
          on: 'colon'
        },
        multiLine: {
          beforeColon: false,
          afterColon : true
        }
      }
    ]
  }
};
