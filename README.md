[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![test][test]][test-url]
[![coverage][cover]][cover-url]
[![code style][style]][style-url]
[![chat][chat]][chat-url]

<div align="center">
  <img width="180" height="180"
    src="https://cdn3.iconfinder.com/data/icons/lexter-flat-colorfull-file-formats/56/raw-256.png">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Raw Loader</h1>
  <p>Import files/contents as a raw {String}</p>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D @webpack-loader/raw
```

<h2 align="center">Usage</h2>

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: '@webpack-loader/raw'
      }
    ]
  }
}
```

```js
import txt from './file.txt'
```


[npm]: https://img.shields.io/npm/v/@webpack-loader/raw.svg
[npm-url]: https://npmjs.com/package/@webpack-loader/raw

[node]: https://img.shields.io/node/v/@webpack-loader/raw.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack-loader/raw.svg
[deps-url]: https://david-dm.org/webpack-loader/raw

[test]: http://img.shields.io/travis/webpack-loader/raw.svg
[test-url]: https://travis-ci.org/webpack-loader/raw

[cover]: https://img.shields.io/coveralls/github/webpack-loader/raw.svg
[cover-url]: https://coveralls.io/github/webpack-loader/raw

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
