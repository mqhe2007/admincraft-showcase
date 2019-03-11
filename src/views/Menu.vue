<template>
  <div class="showcaseMenu">
    <div class="case">
      <div class="title">生成一个菜单</div>
      <div class="desc">点击按钮，在主菜单生成一个菜单项。</div>
      <span class="btn"
            @click="addMenu">插入</span>
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
          children: [],
          name: 'guanwang',
          title: '外站连接',
          url: 'http://www.baidu.com', // 站外url
          icon: 'setting'
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
