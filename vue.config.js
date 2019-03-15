// const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
// const plugins = require('./config/plugins')
// function mapPluginLibAssets() {
//   let assets = []
//   for (let value of plugins) {
//     assets.push(`plugins/${value}`)
//   }
//   console.log(assets)
//   return assets
// }
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
      // new HtmlWebpackIncludeAssetsPlugin({
      //   assets: mapPluginLibAssets(),
      //   publicPath:
      //     process.env.NODE_ENV === 'production' ? '/' : '//localhost:8080/',
      //   append: false
      // })
    ]
  }
}
