import Vue from 'vue';
import VueRouter from 'vue-router';
import { router } from './router/router.js';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import store from './store/store.js';
import Vuex from 'vuex';
import { i18n } from './i18n.js';
import Meta from 'vue-meta';
import c3s from 'vuex-c3s';
//import SimpleAnalytics from "simple-analytics-vue";
import VueGtag from "vue-gtag";

// FontAwesomeIcon section
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;


let swaggerURL = 'https://api.citizenscience.ch/api/v2/swagger.json';
//let swaggerURL = 'http://localhost:8080/api/v2/swagger.json';

//const swaggerURL = 'https://api.citizenscience.ch/api/v3/openapi.json'
//const server = 'https://staging.citizenscience.ch/api/v3/'

Vue.use(c3s.plugin, { store, swaggerURL});
Vue.use(VueRouter);
Vue.use(Meta);
Vue.use(VueScrollTo, {
     offset: -32
 });
Vue.use(Vuex);
//Vue.use(SimpleAnalytics, { skip: process.env.NODE_ENV !== "production" });
Vue.use(VueGtag, {
    config: { id: "UA-162894944-2" }
  },router);

store.watch(
    (state) => state.c3s && state.c3s.client,
    (value) => {
        if (value !== null) {
            new Vue({
                store,
                router,
                i18n,
                render: h => h(App)
            }).$mount('#app')
        }
    }
);
