<template>
  <div class="showcaseMenu">
    <div class="case">
      <div class="title">访问一个不存在的页面</div>
      <div class="desc">点击按钮会被强制导航到404错误页面。</div>
      <span class="btn"
            @click="router">访问</span>
      <pre>
          <code class="language-js">
this.$router.push({name: 'error404'})
        </code>
        </pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'showcaseError',
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    router() {
      this.$router.push({ name: 'error404' })
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
    height 150px
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
