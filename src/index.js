function loader (src) {
  return 'export default ' + JSON.stringify(src)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

module.exports = loader
