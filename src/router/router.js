import VueRouter from "vue-router";
import { routes } from "./routes.js";
import store from "../store/store.js";
import { i18n } from "../i18n.js";

export const router = new VueRouter({
  routes: routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    try {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      const [to_path, from_path] = [to.path.split("/"), from.path.split("/")];
      if (to_path.pop() === from_path.pop()) {
        return { x: 0, y: top };
      }
      return { x: 0, y: 0 };
    } catch (error) {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  console.log("navigate to: " + to.path);

  // Get the account profile
  store.dispatch("user/getAccountProfile");

  let filteredPath = to.path.split("/").filter((element) => element.length > 0);

  //if( to.params.lang && to.params.lang.split('/')[0].length === 2 ) {
  if (filteredPath.length > 0 && filteredPath[0].length === 2) {
    let language = to.params.lang;
    store.dispatch("settings/setLanguage", language);
    i18n.locale = language;

    // --- auth / account
    if (to.matched.some((record) => record.meta.requiresAdmin)) {
      if (store.state.user.isLogged && store.state.user.userInfo.admin) {
        next();
      } else {
        next("/");
      }
    }
    // Here is validated if route requires authentication
    else if (to.matched.some((record) => record.meta.requiresAuth)) {
      // if (store.state.c3s.user.currentUser) {
      if (store.state.user.isLogged) {
        // store.dispatch("c3s/user/validate").then((v) => {
        //console.log('validation success');
        // if (v) {
        next();
        // } else {
        //   router.push("/login");
        // }
      } else {
        router.push("/login");
        // store.dispatch("c3s/user/generateAnon").then((u) => {
        //   console.log("generate anon");
        //   next();
        // });
      }
      // } else if (to.matched.some((record) => record.meta.requiresAccount)) {
      //   if (!store.state.c3s.user.currentUser || store.state.c3s.user.isAnon) {
      //     router.push("/login");
      //   } else {
      //     next();
      //   }
    } else {
      next();
    }

    // ----
  } else {
    next("/" + i18n.locale + to.path);
  }
});
