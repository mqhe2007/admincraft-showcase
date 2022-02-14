<template>
  <div class="eventShowCase">
    <div class="case">
      <div class="title">实时注册</div>
      <div class="desc">点击按钮，在头部工具栏插入一个演示按钮</div>
      <span class="btn" @click="createHeaderBtn">插入</span>
      <pre>
          <code class="language-js">
this.$dynamicComponent.add(HeaderBtn, 'HEADER_RIGHT_MENUS')
        </code>
        </pre>
    </div>
    <div class="case">
      <div class="title">卸载组件</div>
      <div class="desc">点击按钮，把插入头部工具栏的演示组件销毁</div>
      <span class="btn" @click="destroyHeaderBtn">销毁</span>
      <pre>
          <code class="language-js">
this.$dynamicComponent.remove('haderBtn', 'HEADER_RIGHT_MENUS')
        </code>
        </pre>
    </div>
  </div>
</template>

<script>
import HeaderBtn from '../components/HeaderBtn'
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
    // eslint-disable-next-line no-undef
    Prism.highlightAll()
  },
  methods: {
    createHeaderBtn() {
      this.$dynamicComponent.add(HeaderBtn, 'HEADER_RIGHT_MENUS')
    },
    destroyHeaderBtn() {
      this.$dynamicComponent.remove('haderBtn', 'HEADER_RIGHT_MENUS')
    }
  }
}
</script>
<style lang="stylus">
.eventShowCase
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
