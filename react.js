/* eslint-disable no-sync */
module.exports = JSON.parse(require('fs').readFileSync(require('path').resolve(__dirname, '.react.eslintrc'), 'utf8'))
