<template>
  <div class="eventShowCase">
    <div class="case">
      <div class="title">实时注册</div>
      <div class="desc">点击按钮，在头部工具栏插入一个演示按钮</div>
      <span class="btn"
            @click="createHeaderBtn">插入</span>
    </div>
    <div class="case">
      <div class="title">卸载组件</div>
      <div class="desc">点击按钮，把插入头部工具栏的演示组件销毁</div>
      <span class="btn"
            @click="destroyHeaderBtn">销毁</span>
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
  methods: {
    createHeaderBtn() {
      this.$addComponent({
        position: 'headerRightMenus',
        name: 'yanshi',
        component: HeaderBtn
      })
    },
    destroyHeaderBtn() {
      this.$destroyComponent({
        position: 'headerRightMenus',
        name: 'yanshi'
      })
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

