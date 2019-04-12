const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  css: {
    extract: false,
    loaderOptions: {
      postcss: {
        path: __dirname
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'public'
        }
      ])
    ]
  }
}
