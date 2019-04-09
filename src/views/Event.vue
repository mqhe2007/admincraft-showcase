<template>
  <div class="eventShowCase">
    <div class="case">
      <div class="title">事件发送</div>
      <div class="desc">点击按钮触发一个事件, 并且在头部监听这个事件，事件触发时，头部会发送一条消息。</div>
      <span class="btn"
            @click="emitEventSync">发送</span>
      <pre>
          <code class="language-js">
// 事件监听者
this.$eventBus.on('showCase/event/demo1', data => {
  this.$Notice.open({
    title: '监听到一个实时事件',
    content: data
  })
})
// 事件触发
this.$eventBus.emit(
  'showCase/event/demo1',
  'showcase发送了一个事件，事件名：showCase/event/demo1'
)
        </code>
        </pre>
    </div>
    <div class="case">
      <div class="title">事件监听</div>
      <div class="desc">监听消息中心清除全部消息事件，并更新结果。</div>
      <p>结果：{{eventOnCallback}}</p>
      <pre>
          <code class="language-js">
this.$eventBus.on('noticeCenter/clearAll', () => {
  console.log('消息中心已清空')
})
        </code>
        </pre>
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
  mounted() {
    Prism.highlightAll()
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
  flex-flow column

  .case
    display flex
    flex-flow column
    align-items flex-start
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

