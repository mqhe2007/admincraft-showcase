<template>
    <router-view></router-view>
</template>
<script>
let moduleName = require('../package.json').name
export default {
  name: moduleName
}
</script>
