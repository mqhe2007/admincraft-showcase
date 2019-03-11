import routes from './router/routes'
import storeModule from './store/storeModule'
let moduleName = require('../package.json').name

export default (Vue) => {
  // 注册路由
  Vue.prototype.$addRoutes(routes, () => {
    // console.log('路由注册完成', route)
  })

  // 注册状态树
  Vue.prototype.$addStore(moduleName, storeModule, () => {
    // console.log('状态注册完成')
  })
  // 通过路由构造对象来注册
  Vue.prototype.$addMenus(routes)

  console.log(
    `%c${moduleName}模块加载完成`,
    'background: #4192d9; padding: 5px; color: #fff'
  )
}
