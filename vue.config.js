// vue-cli配置文件
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
// const libs = require('./src/libs')
function mapPluginLibAssets() {
  let assets = []
  for (let value of libs) {
    assets.push(`libs/${value}`)
  }
  return assets
}
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
      //   append: false
      // })
    ]
  }
}
