module.exports = {
  extends      : [ 'eslint:recommended', 'immortal' ],
  plugins      : [ 'vue', 'html' ],
  parserOptions: {
    ecmaVersion                : 2018,
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
