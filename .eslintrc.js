module.exports = {
  root: true,
  env : {
    browser: true,
    es6    : true
  },
  plugins      : [ 'vue', 'html' ],
  extends      : [ 'eslint:recommended', 'immortal' ],
  parserOptions: {
    ecmaVersion                : 2018,
    parser                     : 'babel-eslint',
    sourceType                 : 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures               : {
      jsx: true
    }
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
