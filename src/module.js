import routes from './router/routes'
import storeModule from './store/storeModule'
let moduleName = require('../package.json').name

export default Vue => {
  // 注册路由
  Vue.prototype.$addRoutes(routes, () => {})

  // 注册状态树
  Vue.prototype.$addStore(moduleName, storeModule, () => {})

  // 注册菜单
  Vue.prototype.$addMenus(routes, () => {})
  console.log(
    `%c${moduleName}模块加载完成`,
    'background: #4192d9; padding: 5px; color: #fff'
  )
}
