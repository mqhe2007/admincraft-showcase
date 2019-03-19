// const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const libs = require('./config/libs')
function mapPluginLibAssets() {
  let assets = []
  for (let value of libs) {
    assets.push(`libs/${value}`)
  }
  return assets
}
console.log(process.env.VUE_APP_ENV)
module.exports = {
  publicPath: './',
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
      ]),
      new HtmlWebpackIncludeAssetsPlugin({
        assets: mapPluginLibAssets(),
        publicPath:
          process.env.NODE_ENV === 'production' ? '/' : '//localhost:8080/',
        append: false
      })
    ]
  }
}
