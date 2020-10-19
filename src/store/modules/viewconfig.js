import homePageConfig from "@/assets/view_config/Home.json";
import eventsPageConfig from "@/assets/view_config/Events.json";
import projectsPageConfig from "@/assets/view_config/Projects.json";
import { getRemoteFile } from "@/minio.js";

const state = {
  home_view: undefined,
  events_view: undefined,
  projects_view: undefined,
  isLoaded: false,
};

const getters = {
  getHomeConfig: (state) => (comp) => {
    return state.home_view[comp];
  },
  getEventsConfig: (state) => (comp) => {
    return state.events_view[comp];
  },
  getProjectsConfig: (state) => (comp) => {
    return state.projects_view[comp];
  },
};

const actions = {
  async getHomeRemoteConfig({ commit }) {
    commit("setIsLoaded", false);
    let res = homePageConfig;
    try {
      // Retrieve style from remote
      res = await getRemoteFile("styles/home_style.json");
      return res;
    } catch (error) {
      console.error(error);
    } finally {
      await commit("setHomeConfig", res);
    }
  },
  async getProjectsRemoteConfig({ commit }) {
    let resp = projectsPageConfig;
    try {
      resp = await getRemoteFile("styles/projects_style.json");
      return resp;
    } catch (error) {
      console.error(error);
    } finally {
      await commit("setProjectsConfig", resp);
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
  setProjectsConfig(state, payload) {
    state.projects_view = payload;
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
