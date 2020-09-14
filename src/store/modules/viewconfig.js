import homePageConfig from "@/assets/view_config/Home.json";
import eventsPageConfig from "@/assets/view_config/Events.json";
import { getRemoteFile } from "@/minio.js";

const state = {
  home_view: undefined,
  events_view: undefined,
  isLoaded: false,
};

const getters = {
  getHomeComponentConfig: (state) => (comp) => {
    return state.home_view[comp];
  },
  getEventsConfig: (state) => (comp) => {
    return state.events_view[comp];
  },
};

const actions = {
  async getHomeConfig({ commit }) {
    commit("setIsLoaded", false);
    try {
      // Replace for final version of json document
      const res = await getRemoteFile("home_style.json");
      return res;
    } catch (error) {
      return homePageConfig;
    }
  },
};

const mutations = {
  setHomeConfig(state, payload) {
    state.home_view = payload;
    state.isLoaded = true;
  },
  setEventsConfig(state) {
    state.events_view = eventsPageConfig;
  },
  setIsLoaded(state, value) {
    state.isLoaded = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
