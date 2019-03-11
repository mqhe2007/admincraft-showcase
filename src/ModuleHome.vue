<!-- 模块主入口，将由webpack打包，承载本模块的所有数据 -->
<template>
  <div class="moduleHome">
    <router-view></router-view>
  </div>
</template>
<script>
let moduleName = require('../package.json').name
export default {
  name: moduleName,
  methods: {
  },
  created() {
  }
}
</script>

<style lang="stylus">
.moduleHome
  height 100%
  overflow auto

  .icon
    width 1em
    height 1em
    vertical-align -0.15em
    fill currentColor
    overflow hidden

  .page-wrapper
    display flex
    padding 10px
    width 100%

  .tableActions
    margin 10px 0

.tableColumnSelect
  width 500px
  white-space normal
</style>
