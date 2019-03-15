import {Vue, Admincraft} from 'admincraft'
import showCase from './module'
console.log(Vue, Admincraft)
// 创建挂载点
let appElement = document.createElement('div')
let admincraft = new Admincraft({ modules: [showCase] })
admincraft.$mount(appElement)
document.body.appendChild(admincraft.$el)
admincraft.$router.push('/')