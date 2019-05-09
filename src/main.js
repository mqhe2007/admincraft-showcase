import Admincraft from 'admincraft'
import UI from 'admincraft-ui'
import moduleInit from './module-init'
import HeaderBtn from './components/HeaderBtn'
Admincraft.add(UI)
Admincraft.add(moduleInit)
Admincraft.use(Vue => {
  Vue.config.devtools = true
})
// 创建实例
let appElement = document.createElement('div')
let app = new Admincraft({
  title: 'Showcase',
  logo: { text: 'showcase演示' }
})
app.$dynamicComponent.add('HEADER_RIGHT_MENUS', HeaderBtn)
app.$mount(appElement)
document.body.appendChild(app.$el)