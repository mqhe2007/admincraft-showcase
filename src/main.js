import {Vue, Admincraft } from 'admincraft'
import showCase from './module'
import CONST from '../config/const'
Vue.prototype.$const = CONST
// 创建挂载点
let appElement = document.createElement('div')
let app = new Admincraft({
  modules: [showCase],
  title: 'Showcase',
  logo: { text: 'showcase演示' }
})
app.$mount(appElement)
document.body.appendChild(app.$el)
app.$router.push(location.hash.replace('#', ''))
