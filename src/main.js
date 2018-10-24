import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import { routes } from './routes.js'
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'
//import VueI18n from 'vue-i18n'

//Vue.use(VueI18n);

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueScrollTo, {
     offset: -32
 })
Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})
const store = new Vuex.Store({
  plugins: [vuexPersist.plugin]
});

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    vm.$children[0].scrollTop();
    return { x: 0, y: 0 }
  }
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

var vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
