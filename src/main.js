import Admincraft from 'admincraft'
import showCase from './init'
// 创建实例
let appElement = document.createElement('div')
let app = new Admincraft({
  modules: [showCase],
  title: 'Showcase',
  logo: { text: 'showcase演示' }
})
app.$mount(appElement)
document.body.appendChild(app.$el)
app.$router.push(location.hash.replace('#', ''))
