const picomatch = require("picomatch")

function isMatch(patterns, currentPath) {
  const isMatched = picomatch.isMatch(currentPath, patterns)
  return isMatched
}
exports.isMatch = isMatch
