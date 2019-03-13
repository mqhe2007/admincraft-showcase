import { Admincraft } from 'admincraft'
import showCase from './module'
// 创建挂载点
let appElement = document.createElement('div')
document.body.appendChild(appElement)
let admincraft = new Admincraft({ modules: [showCase] })
admincraft.$mount(appElement)
