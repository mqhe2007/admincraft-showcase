import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

export default new Router({
  mode: process.env.VUE_APP_ROUTER_MODE === 'hash' ? 'hash' : 'history',
  routes
})
