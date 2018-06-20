module.exports = {
  root: true,
  env : {
    browser : true,
    commonjs: true,
    es6     : true
  },
  plugins      : [ 'flowtype', 'vue', 'html' ],
  extends      : [ 'eslint:recommended', 'plugin:flowtype/recommended' ],
  parserOptions: {
    parser                     : 'babel-eslint',
    sourceType                 : 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures               : {
      jsx: true
    }
  },
  rules: {
    indent           : [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    quotes           : [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    semi             : [ 'error', 'always' ],
    'no-console'     : 'off',
    'no-undef'       : 'off',
    'no-unused-vars' : 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true
      }
    ],
    'semi-spacing' : [ 'error', { before: false, after: true }],
    'comma-spacing': [ 'error', { before: false, after: true }],
    'key-spacing'  : [
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
    ],
    'no-empty'             : [ 'error', { allowEmptyCatch: true }],
    'array-bracket-spacing': [
      'error',
      'always',
      {
        objectsInArrays: false,
        arraysInArrays : false
      }
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects : false,
        objectsInObjects: false
      }
    ],
    'no-duplicate-imports': 'error'
  }
};
