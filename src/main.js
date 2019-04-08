import Admincraft from 'admincraft'
import UI from 'admincraft-ui'
import showCase from './init'
Admincraft.use(Vue => {
  Vue.config.devtools = true
})
// 创建实例
let appElement = document.createElement('div')
let app = new Admincraft({
  ui: UI,
  modules: [showCase],
  title: 'Showcase',
  logo: { text: 'showcase演示' }
})
app.$mount(appElement)
document.body.appendChild(app.$el)
app.$router.push(location.hash.replace('#', ''))
