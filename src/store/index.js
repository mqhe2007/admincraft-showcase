import Vue from 'vue'
import Vuex from 'vuex'
import storeModule from './storeModule'
Vue.use(Vuex)
let moduleName = require('../../package.json').name
// 导出moduleStore，供主框架挂载
export default new Vuex.Store({
  modules: {
    [moduleName]: storeModule
  }
})
