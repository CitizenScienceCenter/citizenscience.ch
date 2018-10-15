import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import { routes } from './routes.js'


Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(VueScrollTo, {
     offset: -32
 })

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
