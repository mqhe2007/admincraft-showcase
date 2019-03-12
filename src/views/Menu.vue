<template>
  <div class="showcaseMenu">
    <div class="case">
      <div class="title">添加一个外链菜单项</div>
      <div class="desc">点击按钮，在主菜单生成一个外链菜单。</div>
      <span class="btn"
            @click="addMenu">添加</span>
    </div>
    <div class="case">
      <div class="title">添加一组外链菜单项</div>
      <div class="desc">点击按钮，在主菜单生成一组外链菜单。</div>
      <span class="btn"
            @click="addMenuGroup">添加</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'showcaseMenu',
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
      // 通过菜单构造对象来注册
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
    }
  }
}
</script>
<style lang="stylus">
.showcaseMenu
  display flex

  .case
    flex 0 0 300px
    height 150px
    border 1px solid #eee
    margin-right 10px

    .title
      width 100%
      margin 5px

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
