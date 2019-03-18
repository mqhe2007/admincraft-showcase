import { Admincraft } from 'admincraft'
import showCase from './module'
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
