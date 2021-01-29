import Vue from "vue";
import Vuex from "vuex";
import settings from "./modules/settings";
import consts from "./modules/consts";
import gdpr from "./modules/gdpr";
import viewconfig from "./modules/viewconfig";
import project from "./modules/project";
import content from "./modules/content";
import user from "./modules/user";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

let store;
if (window.localStorage) {
  store = new Vuex.Store({
    modules: {
      settings,
      consts,
      gdpr,
      viewconfig,
      project,
      content,
      user,
    },
    strict: debug,
    plugins: [
      createPersistedState({
        storage: {
          getItem: (key) => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: (key) => ls.remove(key),
        },
      }),
    ],
  });
} else {
  store = new Vuex.Store({
    modules: {
      settings,
      consts,
      gdpr,
      viewconfig,
      project,
      content,
      user,
    },
    strict: debug,
  });
}

export default store;
