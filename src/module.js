import routes from './router/routes'
import storeModule from './store/storeModule'
let moduleName = require('../package.json').name

export default (Vue, router) => {
  // 注册路由
  Vue.prototype.$addRoutes(routes, () => {
    router.push(location.hash.replace('#', ''))
  })

  // 注册状态树
  Vue.prototype.$addStore(moduleName, storeModule, () => {
    // console.log('状态注册完成')
  })

  console.log(
    `%c${moduleName}模块加载完成`,
    'background: #4192d9; padding: 5px; color: #fff'
  )
}
