<template>
  <div class="showcaseDep">
    <div class="case">
      <div class="title">使用jQuery</div>
      <div class="desc">点击按钮，使用jquery的hide() API隐藏这段文字</div>
      <span class="btn"
            @click="hide">隐藏</span>
      <pre>
          <code class="language-js">
import $ from 'jquery'
$('.desc').fadeToggle()
        </code>
        </pre>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'showcaseDep',
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    hide() {
      $('.desc').fadeToggle()
    }
  }
}
</script>
<style lang="stylus">
.showcaseDep
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
