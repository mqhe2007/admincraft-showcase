<template>
  <div class="showcaseDep">
    <div class="case">
      <div class="title">使用jQuery</div>
      <div class="desc">点击按钮，使用jquery的hide() API隐藏这段文字</div>
      <span class="btn"
            @click="hide">隐藏</span>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'showcaseDep',
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
