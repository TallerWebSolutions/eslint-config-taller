/* eslint-disable quotes */
module.exports = {
  "plugins": [ "react" ],
  "extends": [ "taller", "standard-react" ],
  "globals": {
    "jest": false
  },
  "rules": {
    "react/jsx-wrap-multilines": 2,
    "react/jsx-uses-react": 1,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-curly-spacing": [ "error", "always" ]
  }
}
