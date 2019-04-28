<template>
  <div class="showcaseEnv">
    <div class="case">
      <div class="title">多环境常量</div>
      <div class="desc">根据构建环境不同获取不同的常量，常量需预先在配置文件中定义。
      </div>
      <pre>
          <code class="language-js">
// 配置常量 /config/envConst.js
const list = {
  development: {
    API_BASE: '/api',
    URL_BASE: 'http://172.18.238.202:7788/voice/'
  },
  production: {
    test: {
      API_BASE: 'http://47.92.165.170:8003',
      URL_BASE: 'http://47.92.165.170:7788/voice/'
    }
  }
}

export default (process.env.VUE_APP_ENV
  ? list[process.env.NODE_ENV][process.env.VUE_APP_ENV]
  : list[process.env.NODE_ENV])

// 使用常量
import envConst from '../config/envConst'
Vue.prototype.$const = CONST

console.log(this.$const.API_BASE)

// 构建模式 .env.test
NODE_ENV=production
VUE_APP_ENV=test

// 构建命令 /package.json
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build --target lib src/module.js",
  "build:test": "vue-cli-service build --mode test --target lib src/module.js"
},
        </code>
        </pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'showcaseEnv',
  data: () => ({
    list: [],
    permissionTag: ''
  }),
  
  mounted() {
    Prism.highlightAll()
  }
}
</script>
<style lang="stylus">
.showcaseEnv
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
