import Admincraft from 'admincraft'
import UI from 'admincraft-ui'
import showCase from './init'
Admincraft.add(UI)
Admincraft.add(showCase)
Admincraft.use(Vue => {
  Vue.config.devtools = true
})
// 创建实例
let appElement = document.createElement('div')
let app = new Admincraft({
  title: 'Showcase',
  logo: { text: 'showcase演示' }
})
app.$mount(appElement)
document.body.appendChild(app.$el)
app.$router.push(location.hash.replace('#', ''))
