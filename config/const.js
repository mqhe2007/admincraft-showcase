let i, serverUrl
if (
  (i = window.document.currentScript) &&
  (i = i.src.match(/(.+\/)[^/]+\.js$/))
) {
  serverUrl = i[1] // eslint-disable-line
}
// 配置应用中所使用的常量
const list = {
  development: {
    API_BASE: '/api',
    URL_BASE: 'http://172.18.238.202:7788/voice/'
  },
  production: {
    test: {
      API_BASE: 'http://47.92.165.170:8003',
      URL_BASE: 'http://47.92.165.170:7788/voice/'
    }
  }
}

let CONST = process.env.VUE_APP_ENV
  ? list[process.env.NODE_ENV][process.env.VUE_APP_ENV]
  : list[process.env.NODE_ENV]
CONST.SERVER_URL = serverUrl
export default CONST
