import routes from './router/routes'
import storeModule from './store/storeModule'
import 'prismjs'
import 'prismjs/themes/prism.css'
let moduleName = require('../package.json').name
export default app => {
  // 注册路由
  app.$addRoutes(routes, () => {})

  // 注册状态树
  app.$addStore(moduleName, storeModule, () => {})

  // 注册菜单
  app.$addMenus(routes, () => {})

  console.log(
    `%c${moduleName}模块加载完成`,
    'background: #4192d9; padding: 5px; color: #fff; border-radius: 5px'
  )
}
