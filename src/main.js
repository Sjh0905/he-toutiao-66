import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import router from './router/index.js'
// @是一个路径的别名 是src路径 在vue-cli项目系有效
// index是目录的索引文件 默认使用的索引文件 index.js index.vue index.json
import router from '@/router'

// 产品级别提示, 不开启 开发阶段, 越详细越好
Vue.config.productionTip = false

Vue.use(ElementUI)

// main.js 入口文件
// 职责一: 引入需要依赖的模块(js 包 css 其他资源)
// 职责二: 创建一个根vue实例
new Vue({
  router,
  // 是一个vue的配置项 指向的是函数
  // renter的优先级最高 相比 el template
  render: h => h(App)
}).$mount('#app')
