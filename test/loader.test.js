const path = require('path')
const { webpack } = require('@webpack-utilities/test')

describe('Loader', () => {
  test('Defaults', async () => {
    const config = {
      loader: {
        test: /\.txt$/,
        options: {}
      }
    }

    const stats = await webpack('fixture.js', config)
    const { source } = stats.toJson().modules[1]


    expect(source).toMatchSnapshot()
  })

  describe('Escape', () => {
    test('\\u2028', async () => {
      const config = {
        loader: {
          test: /\.txt$/,
          options: {}
        }
      }

      const stats = await webpack('escape/u2028/fixture.js', config)
      const { source } = stats.toJson().modules[1]


      expect(source).toMatchSnapshot()
    })

    test('\\u2029', async () => {
      const config = {
        loader: {
          test: /\.txt$/,
          options: {}
        }
      }

      const stats = await webpack('escape/u2029/fixture.js', config)
      const { source } = stats.toJson().modules[1]


      expect(source).toMatchSnapshot()
    })
  })
})
