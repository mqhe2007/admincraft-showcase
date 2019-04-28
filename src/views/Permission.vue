<template>
  <div class="showcasePer">
    <div class="case">
      <div class="title">动态修改权限</div>
      <div class="desc">给当前用户添加权限标签
        <input type="text"
               v-model="permissionTag"
               placeholder="输入预设权限标签">
      </div>
      <span class="btn"
            @click="addPermissionTag">添加</span>
      <pre>
          <code class="language-js">
this.$store.commit('ui/user/addUserPermissionTag', 'showcase_add')
        </code>
        </pre>
    </div>
    <div class="case">
      <div class="title">演示</div>
      <div class="desc">点击按钮添加列表项（需要权限：showcase_add）
        <span class="btn"
              v-permission="'showcase_add'"
              @click="add">添加</span>
        <ul>
          <li v-for="(item, index) in list"
              :key="index">{{item+ index}}</li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'showcasePer',
  data: () => ({
    list: [],
    permissionTag: ''
  }),
  watch: {
    '$store.state.ui.user.permissionTags'(n) {
      console.log(n)
      this.$forceUpdate()
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    add() {
      this.list.push('新数据')
    },
    addPermissionTag() {
      this.$store.commit('ui/user/addUserPermissionTag', this.permissionTag)
    }
  }
}
</script>
<style lang="stylus">
.showcasePer
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
