import routes from './router/routes'
import storeModule from './store/storeModule'
import libs from './libs'
let moduleName = require('../package.json').name
let i, moduleServerUrl
if (
  (i = window.document.currentScript) &&
  (i = i.src.match(/(.+\/)[^/]+\.js$/))
) {
  moduleServerUrl = i[1]
}
export default admincraft =>
  new Promise((resolve, reject) => {
    // 注册路由
    admincraft.$addRoutes(routes, () => {})

    // 注册状态树
    admincraft.$addStore(moduleName, storeModule, () => {})

    // 注册菜单
    admincraft.$addMenus(routes, () => {})

    if (libs.length > 0) {
      // console.log(moduleServerUrl,libs)
      // 注册libs
      let getRemoteLibUrlList = libs => libs.map(item => moduleServerUrl + item)
      admincraft
        .$addRemoteLib(getRemoteLibUrlList(libs))
        .then(() => {
          console.log(
            `%c${moduleName}模块加载完成`,
            'background: #4192d9; padding: 5px; color: #fff'
          )
          resolve()
        })
        .catch(() => {
          reject()
        })
    } else {
      console.log(
        `%c${moduleName}模块加载完成`,
        'background: #4192d9; padding: 5px; color: #fff'
      )
      resolve()
    }
  })
