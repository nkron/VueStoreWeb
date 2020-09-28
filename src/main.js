import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { routes } from './routes'
Vue.use(VueRouter)

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

const router = new VueRouter({
  routes
})

window.axios = require('axios')
new Vue({
  router,

  mounted: function () {
  },

  render: h => h(App)
}).$mount('#app')
