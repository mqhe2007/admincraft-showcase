import App from '../App'
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
        name: 'showcaseFrame',
        component: () =>
          import(/* webpackChunkName: "frame" */ '../views/Frame.vue'),
        meta: {
          title: '全局调用'
        }
      },
      {
        path: 'event',
        name: 'showcaseEvent',
        component: () =>
          import(/* webpackChunkName: "event" */ '../views/Event.vue'),
        meta: {
          title: '事件驱动'
        }
      },
      {
        path: 'component',
        name: 'showcaseComponent',
        component: () =>
          import(/* webpackChunkName: "component" */ '../views/Component.vue'),
        meta: {
          title: '组件注册'
        }
      },
      {
        path: 'help',
        name: 'showcaseHelp',
        component: () =>
          import(/* webpackChunkName: "help" */ '../views/Help.vue'),
        meta: {
          title: '切换布局',
          layout: 'layoutBlank'
        }
      },
      {
        path: 'menu',
        name: 'showcaseMenu',
        component: () =>
          import(/* webpackChunkName: "menu" */ '../views/Menu.vue'),
        meta: {
          title: '注册菜单'
        }
      },
      {
        path: 'permission',
        name: 'showcasePer',
        component: () =>
          import(/* webpackChunkName: "permission" */ '../views/Permission.vue'),
        meta: {
          title: '权限控制'
        }
      },
      {
        path: 'dependence',
        name: 'showcaseDep',
        component: () =>
          import(/* webpackChunkName: "dependence" */ '../views/Dependence.vue'),
        meta: {
          title: '第三方库'
        }
      },
      {
        path: 'env',
        name: 'showcaseEnv',
        component: () =>
          import(/* webpackChunkName: "dependence" */ '../views/Env.vue'),
        meta: {
          title: '配置多环境常量'
        }
      }
    ]
  }
]
