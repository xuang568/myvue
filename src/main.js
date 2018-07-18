// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import utils from './utils/index.js' // 引用工具文件
import api from './api/index.js' // 引用API文件
import resource from './api/resources.js' // 引用资源列表内容

// Vue.use(iView)

// 将工具方法绑定到全局
Vue.prototype.$utils = utils

// 将API方法绑定到全局
Vue.prototype.$api = api

// 将resource应用到全局
Vue.prototype.$resource = resource

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
