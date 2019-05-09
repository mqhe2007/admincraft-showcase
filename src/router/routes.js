import showcaseGlobal from '../views/Global.vue'
import showcaseEvent from '../views/Event.vue'
import showcaseComponent from '../views/Component.vue'
import showcaseHelp from '../views/Help.vue'
import showcaseMenu from '../views/Menu.vue'
import showcasePer from '../views/Permission.vue'
import showcaseEnv from '../views/Env.vue'
export default [
  {
    path: '/frame',
    name: '/frame',
    component: showcaseGlobal,
    meta: {
      title: '全局调用'
    }
  },
  {
    path: '/event',
    name: '/event',
    component: showcaseEvent,
    meta: {
      title: '事件驱动'
    }
  },
  {
    path: '/component',
    name: '/component',
    component: showcaseComponent,
    meta: {
      title: '组件注册'
    }
  },
  {
    path: '/help',
    name: '/help',
    component: showcaseHelp,
    meta: {
      title: '切换布局',
      layout: 'layoutBlank'
    }
  },
  {
    path: '/menu',
    name: '/menu',
    component: showcaseMenu,
    meta: {
      title: '注册菜单'
    }
  },
  {
    path: '/permission',
    name: '/permission',
    component: showcasePer,
    meta: {
      title: '权限控制'
    }
  },
  {
    path: '/env',
    name: '/env',
    component: showcaseEnv,
    meta: {
      title: '配置多环境常量'
    }
  }
]
