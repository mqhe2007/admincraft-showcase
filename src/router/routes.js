import App from '../App'
import showcaseGlobal from '../views/Global.vue'
import showcaseEvent from '../views/Event.vue'
import showcaseComponent from '../views/Component.vue'
import showcaseHelp from '../views/Help.vue'
import showcaseMenu from '../views/Menu.vue'
import showcasePer from '../views/Permission.vue'
import showcaseDep from '../views/Dependence.vue'
import showcaseEnv from '../views/Env.vue'
import showcaseLogin from '../views/Login.vue'
let moduleName = require('../../package.json').name
export default [
  {
    // 模块主路由通过工程信息自动配置，无需手动更改
    path: '/' + moduleName,
    name: moduleName,
    component: App,
    // 路由元数据，包含路由扩展配置信息
    meta: {
      index: 0,
      title: '演示模块' // 页面标题，用于显示在浏览器标题
    },
    children: [
      {
        path: 'frame',
        name: 'showcaseGlobal',
        component: showcaseGlobal,
        meta: {
          title: '全局调用'
        }
      },
      {
        path: 'event',
        name: 'showcaseEvent',
        component: showcaseEvent,
        meta: {
          title: '事件驱动'
        }
      },
      {
        path: 'component',
        name: 'showcaseComponent',
        component: showcaseComponent,
        meta: {
          title: '组件注册'
        }
      },
      {
        path: 'help',
        name: 'showcaseHelp',
        component: showcaseHelp,
        meta: {
          title: '切换布局',
          layout: 'layoutBlank'
        }
      },
      {
        path: 'menu',
        name: 'showcaseMenu',
        component: showcaseMenu,
        meta: {
          title: '注册菜单'
        }
      },
      {
        path: 'permission',
        name: 'showcasePer',
        component: showcasePer,
        meta: {
          title: '权限控制'
        }
      },
      {
        path: 'dependence',
        name: 'showcaseDep',
        component: showcaseDep,
        meta: {
          title: '第三方库'
        }
      },
      {
        path: 'env',
        name: 'showcaseEnv',
        component: showcaseEnv,
        meta: {
          title: '配置多环境常量'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '请登录',
      NonMenu: true,
      layout: 'layoutShowcaseBlank'
    },
    component: showcaseLogin
  }
]
