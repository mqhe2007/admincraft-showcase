import { Vue, admincraft } from 'admincraft'
import showCase from './module'
// 初始化模块
showCase(Vue)
admincraft.$router.push(location.hash.replace('#', ''))
