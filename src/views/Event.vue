<template>
  <div class="eventShowCase">
    <div class="case">
      <div class="title">事件发送（同步）</div>
      <div class="desc">点击按钮触发一个实时事件</div>
      <span class="btn"
            @click="emitEventSync">发送</span>
    </div>
    <div class="case">
      <div class="title">事件发送（异步）</div>
      <div class="desc">点击按钮触发一个延迟2秒事件</div>
      <span class="btn"
            @click="emitEvent">发送</span>
    </div>
    <div class="case">
      <div class="title">事件监听</div>
      <div class="desc">监听消息中心清除全部消息事件，并触发回调。</div>
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
        'showCase/event/message',
        '这是一条来自于showCase/event演示的事件'
      )
    },
    emitEvent() {
      setTimeout(() => {
        this.$eventBus.emit(
          'showCase/event/message',
          '这是一条来自于showCase/event演示的事件'
        )
        this.$Notice.open({
          title: '直接调用提醒',
          content: '这是一条来自于showCase/event演示的事件'
        })
      }, 2000)
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

