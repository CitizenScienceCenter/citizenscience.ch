import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import { routes } from './routes.js'
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueScrollTo, {
     offset: -32
 })
Vue.use(Vuex)

const store = new Vuex.Store();
Vue.use(vuexI18n.plugin, store);

const translationsEn = {
  "cover-heading": "The People's Way of Research",
	"cover-subheading": "Citizen Science Center Zurich"
};
const translationsDe = {
  "cover-heading": "Forschung für dich und mich",
	"cover-subheading": "Citizen Science Center Zürich"
};

Vue.i18n.add('en', translationsEn);
Vue.i18n.add('de', translationsDe);
Vue.i18n.set('en');

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
