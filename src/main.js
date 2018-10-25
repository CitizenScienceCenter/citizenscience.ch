import Vue from 'vue';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import { router } from './router/router.js';
import VueI18n from 'vue-i18n';
import { store } from './store/store.js';
import Vuex from 'vuex';

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(VueScrollTo, {
     offset: -32
 })
Vue.use(Vuex)
Vue.use(VueI18n)


const i18n = new VueI18n({
  locale: store.state.language
})

var vm = new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

if( !store.state.language ) {
  // no language in store, check browser
  var language = window.navigator.userLanguage || window.navigator.language;
  if (language.indexOf('-') !== -1) {
    language = language.split('-')[0];
  }
  if (language.indexOf('_') !== -1) {
    language = language.split('_')[0];
  }
  store.dispatch("setLanguage", {vm, language} );
}
