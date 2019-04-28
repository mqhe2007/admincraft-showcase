<template>
  <div class="showcaseMenu">
    <div class="case">
      <div class="title">通过路由定义生成菜单</div>
      <div class="desc">应用实例化时或运行中使用添加菜单方法，传入路由定义可以根据路由生成菜单。</div>
      <pre>
          <code class="language-js">
// 导入路由定义的数组
import routes from './router/routes'

// 模块安装时使用路由定义注册菜单
app.$addRoutes(routes, () => {})

// 运行时组件内使用路由定义注册菜单
this.$addRoutes(routes, () => {})
        </code>
        </pre>
    </div>
    <div class="case">
      <div class="title">添加一个菜单项</div>
      <div class="desc">点击按钮，在主菜单生成一个菜单。</div>
      <span class="btn"
            @click="addMenu">添加</span>
      <pre>
          <code class="language-js">
this.$addMenus([
  {
    index: 3,
    title: '百度搜索',
    name: 'baidu',
    url: 'http://www.baidu.com',
    icon: 'setting',
    children: []
  }
])
        </code>
        </pre>
    </div>
    <div class="case">
      <div class="title">添加一组菜单项</div>
      <div class="desc">点击按钮，在主菜单生成一组外链菜单。</div>
      <span class="btn"
            @click="addMenuGroup">添加</span>
      <pre>
          <code class="language-js">
this.$addMenus([
  {
    index: 4,
    title: '导航工具',
    name: 'daohang',
    icon: 'setting',
    children: [
      {
        index: 0,
        title: 'iconfont',
        name: 'iconfont',
        url: 'https://www.iconfont.cn/', // 站外url
        icon: 'setting',
        children: []
      },
      {
        index: 0,
        title: '每日灵感',
        name: 'meirilinggan',
        url: 'https://uiiiuiii.com/inspiration', // 站外url
        icon: 'setting',
        children: []
      }
    ]
  }
])
        </code>
        </pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'showcaseMenu',
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    addMenu() {
      // 通过菜单构造对象来注册
      this.$addMenus([
        {
          index: 3,
          title: '百度搜索',
          name: 'baidu',
          url: 'http://www.baidu.com', // 站外url
          icon: 'setting',
          children: []
        }
      ])
    },
    addMenuGroup() {
      // 通过菜单构造对象来添加菜单
      this.$addMenus([
        {
          index: 0,
          title: '租户管理',
          name: 'ZHGL',
          children: [
            {
              index: 0,
              title: '技能组管理',
              name: 'ZHUGL_JNZGL'
            },
            {
              index: 1,
              title: '套餐管理',
              name: 'ZHUGL_TCGL'
            },
            {
              index: 2,
              title: '站外导航',
              url: 'http://www.baidu.com'
            }
          ]
        },
        {
          index: 3,
          title: '角色管理',
          name: 'ZHUGL_JSGL',
          parents: 'ZHGL' // 任何一个菜单指定了父级就会去查找，行业应用限制左侧只有两级，所以这种用法意义不大了。
        }
      ])
    }
  }
}
</script>
<style lang="stylus">
.showcaseMenu
  display flex
  flex-flow column

  .case
    flex 0 0 300px
    margin-right 10px

    .title
      width 100%
      margin 5px
      font-size 25px
      font-weight bold

    .desc
      margin 5px

    .btn
      padding 5px
      margin 5px
      background #ddd
      cursor pointer

      &:active
        background #999
</style>
