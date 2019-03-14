<template>
  <div class="eventShowCase">
    <div class="case">
      <div class="title">事件发送</div>
      <div class="desc">点击按钮触发一个事件, 并且在头部监听这个事件，事件触发时，头部会发送一条消息。</div>
      <span class="btn"
            @click="emitEventSync">发送</span>
    </div>
    <div class="case">
      <div class="title">事件监听</div>
      <div class="desc">监听消息中心清除全部消息事件，并更新结果。</div>
      <p>结果：{{eventOnCallback}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    eventOnCallback: ''
  }),
  created() {
    this.$eventBus.on('noticeCenter/clearAll', () => {
      this.eventOnCallback = '消息中心已清空'
    })
  },
  methods: {
    emitEventSync() {
      this.$eventBus.emit(
        'showCase/event/demo1',
        'showcase发送了一个事件，事件名：showCase/event/demo1'
      )
    }
  }
}
</script>
<style lang="stylus">
.eventShowCase
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

