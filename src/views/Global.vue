<template>
  <div class="showcaseGlobal">
    <div class="case">
      <div class="title">弹出一个消息提示</div>
      <div class="desc">点击按钮，调用框架的Notice组件触发一个消息提示。</div>
      <span class="btn"
            @click="openNotice">发送</span>
      <pre>
          <code class="language-js">
this.$Notice.open({
  title: '弹出了一个消息提示',
  content: '这是一条来自于showcase模块发送的消息。'
})
        </code>
        </pre>
    </div>
    <div class="case">
      <div class="title">弹出一个对话框</div>
      <div class="desc">点击按钮，调用框架的Dialog组件触发一个对话框。<br /> 通过rander函数可以渲染任何内容。比如表单：{{dialogValue}}。并且在对话框的关闭回调中做些什么，比如弹出一条消息。</div>
      <span class="btn"
            @click="openDialog">发送</span>
      <pre>
          <code class="language-js">
this.$Dialog.open({
  title: '编辑：',
  render: h =>
    h('div', [
      h('input', {
        attrs: {
          placeholder: '请输入'
        },
        domProps: {
          value: this.dialogValue
        },
        on: {
          input: e => {
            this.dialogValue = e.target.value
          }
        }
      })
    ]),
  onClosed: () => {
    this.$Notice.open({
      title: '一个新的消息',
      content: '对话框关闭了,刚才输入的内容是：' + this.dialogValue
    })
  }
})
        </code>
        </pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'showcaseGlobal',
  data() {
    return {
      dialogValue: ''
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    openNotice() {
      this.$Notice.open({
        title: '弹出了一个消息提示',
        content: '这是一条来自于showcase模块发送的消息。'
      })
    },
    openDialog() {
      this.$Dialog.open({
        title: '编辑：',
        render: h =>
          h('div', [
            h('input', {
              attrs: {
                placeholder: '请输入'
              },
              domProps: {
                value: this.dialogValue
              },
              on: {
                input: e => {
                  this.dialogValue = e.target.value
                }
              }
            })
          ]),
        onClosed: () => {
          this.$Notice.open({
            title: '一个新的消息',
            content: '对话框关闭了,刚才输入的内容是：' + this.dialogValue
          })
        }
      })
    }
  }
}
</script>
<style lang="stylus">
.showcaseGlobal
  display flex
  flex-flow column

  .case
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
