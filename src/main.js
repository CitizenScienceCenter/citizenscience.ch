import Vue from "vue";
import VueRouter from "vue-router";
import { router } from "./router/router.js";
import VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import store from "./store/store.js";
import Vuex from "vuex";
import { i18n } from "./i18n.js";
import Meta from "vue-meta";
// FIXME: c3s
import c3s from "vuex-c3s";
//import SimpleAnalytics from "simple-analytics-vue";
import VueGtag from "vue-gtag";

// FontAwesomeIcon section
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader

Vue.config.productionTip = false;

let swaggerURL = "https://api.citizenscience.ch/api/v2/swagger.json";
//let swaggerURL = 'http://localhost:8080/api/v2/swagger.json';

//const swaggerURL = 'https://api.citizenscience.ch/api/v3/openapi.json'
//const server = 'https://staging.citizenscience.ch/api/v3/'
// FIXME: c3s
Vue.use(c3s.plugin, { store, swaggerURL });
Vue.use(VueRouter);
Vue.use(Meta);
Vue.use(VueScrollTo, {
  offset: -32,
  duration: 1000,
  easing: "ease-in",
});
Vue.use(Vuex);
//Vue.use(SimpleAnalytics, { skip: process.env.NODE_ENV !== "production" });
Vue.use(
  VueGtag,
  {
    config: { id: "UA-162894944-2" },
  },
  router
);

store.watch(
  // FIXME: c3s
  (state) => state.c3s && state.c3s.client,
  (value) => {
    if (value !== null) {
      new Vue({
        store,
        router,
        i18n,
        render: (h) => h(App),
      }).$mount("#app");
    }
  }
);
