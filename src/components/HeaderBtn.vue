<template>
  <div @click="notice">
    演示
  </div>
</template>
<script>
export default {
  name: 'haderBtn',
  destroyed() {
    this.$Notice.open({
      title: '演示按钮被销毁了',
      content: '演示按钮被销毁后发送了一条消息。'
    })
  },
  methods: {
    notice() {
      this.$Notice.open({
        title: '演示按钮被点击了',
        content: '点击动态添加的演示按钮后发送了一条消息。'
      })
    }
  }
}
</script>

