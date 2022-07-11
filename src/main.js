// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vue_head from '@/components/vue_head'
import vue_foot from '@/components/vue_foot'
import vue_foot_router from '@/components/vue_foot_router'

Vue.config.productionTip = false
Vue.component(vue_head.name,vue_head)
Vue.component(vue_foot.name,vue_foot)
Vue.component(vue_foot_router.name,vue_foot_router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
