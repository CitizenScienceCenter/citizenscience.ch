import Vue from "vue";
import VueRouter from "vue-router";
import { router } from "./router/router.js";
import VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import store from "./store/store.js";
import Vuex from "vuex";
import { i18n } from "./i18n.js";
import Meta from "vue-meta";
//import SimpleAnalytics from "simple-analytics-vue";
import VueGtag from "vue-gtag";

// FontAwesomeIcon section
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader

// vue sweetalert2 resources
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.config.productionTip = false;
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

Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
