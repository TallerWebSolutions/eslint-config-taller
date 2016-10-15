/* eslint-disable quotes */
module.exports = {
  "env": {
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": [ "standard" ],
  "globals": {
    "describe": false,
    "it": false,
    "expect": false,
    "beforeEach": false,
    "document": false,
    "window": false
  },
  "rules": {
    "object-curly-spacing": [ "error", "always" ],
    "comma-dangle": 0,
    "no-throw-literal": 1,
    "strict": [ 2, "never" ],
    "semi": [ 2, "never" ],
    "quotes": [ 2, "single" ],
    "no-var": 1,
    "brace-style": [ 2, "stroustrup" ],
    "eol-last": 1,
    "no-undef": "error",
    "no-new-require": 1,
    "no-sync": 1,
    "no-mixed-requires": [ 1, false ],
    "no-unsafe-finally": 0,
    "no-useless-computed-key": 0
  }
}
