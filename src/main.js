// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Index from './components/index/index.vue'
import Shop from './components/shop/shop.vue'
import Health from './components/health/health-center.vue'
import Comunity from './components/comunity/comunity.vue'
import Personal from './components/personal/personal-center.vue'

Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(VueResource)

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './components/secondcomponent.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/health-center',
      component: Health
    },
    {
      path: '/comunity',
      component: Comunity
    },
    {
      path: '/personal-center',
      component: Personal
    }
  ]
})
router.push('/index')
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
