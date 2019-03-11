<template>
  <div @click="alert">
    弹个框
  </div>
</template>
<script>
export default {
  name: 'haderBtn',
  destroyed() {
    console.log('我被销毁了')
  },
  methods: {
    alert(){
      alert('您让浏览器弹了个框')
    }
  }
}
</script>

