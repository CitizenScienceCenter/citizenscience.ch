import Vue from 'vue';
import VueRouter from 'vue-router';
import { router } from './router/router.js';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import VueI18n from 'vue-i18n';
import { store } from './store/store.js';
import Vuex from 'vuex';
import { i18n } from './i18n.js';

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(VueScrollTo, {
     offset: -32
 })
Vue.use(Vuex)


var vm = new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

if( !store.state.language ) {
  store.dispatch("setLanguage", {vm, language} );
}
