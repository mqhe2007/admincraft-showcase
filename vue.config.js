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
    }
  }
}