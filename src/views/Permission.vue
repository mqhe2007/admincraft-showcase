<template>
  <div class="showcasePer">
    <div class="case">
      <div class="title">动态修改权限</div>
      <div class="desc">给当前用户添加权限标签
        <input type="text" v-model="permissionTag" placeholder="输入预设权限标签">
      </div>
      <span class="btn"
            @click="addPermissionTag">添加</span>
    </div>
    <div class="case">
      <div class="title">演示</div>
      <div class="desc">点击按钮添加列表项（需要权限：showcase_add）
        <ul>
          <li v-for="(item, index) in list"
              :key="index">{{item+ index}}</li>
        </ul>
      </div>
      <span class="btn"
            v-permission="'showcase_add'"
            @click="add">添加</span>
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
    '$store.state.user.permissions'(n) {
      console.log(n)
      this.$forceUpdate()
    }
  },
  methods: {
    add() {
      this.list.push('新数据')
    },
    addPermissionTag() {
      this.$store.commit('user/addUserPermissionTag', this.permissionTag)
    }
  }
}
</script>
<style lang="stylus">
.showcasePer
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
