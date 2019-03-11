<template>
  <div class="showcaseMenu">
    <div class="case">
      <div class="title">访问一个不存在的页面</div>
      <div class="desc">点击按钮会被强制导航到404错误页面。</div>
      <span class="btn"
            @click="router">访问</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'showcaseError',
  methods: {
    router() {
      // 通过菜单构造对象来注册
      this.$router.push({name: 'pageNotFound'})
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
