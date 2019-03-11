import ModuleHome from '../ModuleHome'
let moduleName = require('../../package.json').name
export default [
  {
    // 模块主路由通过工程信息自动配置，无需手动更改
    path: '/' + moduleName,
    name: moduleName,
    component: ModuleHome,
    // 路由元数据，包含路由扩展配置信息
    meta: {
      index: 0,
      title: '演示模块', // 页面标题，用于显示在浏览器标题
      icon: 'setting'
    },
    children: [
      {
        path: 'event',
        name: 'event',
        component: () =>
          import(/* webpackChunkName: "event" */ '../views/Event.vue'),
        meta: {
          title: '事件驱动',
          icon: 'setting'
        }
      },
      {
        path: 'component',
        name: 'component',
        component: () =>
          import(/* webpackChunkName: "component" */ '../views/Component.vue'),
        meta: {
          title: '组件注册',
          icon: 'setting'
        }
      },
      {
        path: 'help',
        name: 'help',
        component: () =>
          import(/* webpackChunkName: "help" */ '../views/Help.vue'),
        meta: {
          title: '切换布局',
          layout: 'blank',
          icon: 'setting'
        }
      },
      {
        path: 'menu',
        name: 'menu',
        component: () =>
          import(/* webpackChunkName: "menu" */ '../views/Menu.vue'),
        meta: {
          title: '注册菜单',
          icon: 'setting'
        }
      },
      {
        path: 'error',
        name: 'showcaseError',
        component: () =>
          import(/* webpackChunkName: "menu" */ '../views/Error.vue'),
        meta: {
          title: '错误页面',
          icon: 'setting'
        }
      }
    ]
  }
]
