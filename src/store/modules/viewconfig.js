import homePageConfig from "@/assets/view_config/Home.json";
import eventsPageConfig from "@/assets/view_config/Events.json";
import zurich_stylePageConfig from "@/assets/view_config/ZurichStyle.json";
import projectsPageConfig from "@/assets/view_config/Projects.json";
import { getRemoteFile } from "@/minio.js";

const state = {
  home_view: undefined,
  events_view: undefined,
  zurichstyle_view: undefined,
  projects_view: undefined,
  isLoaded: false,
};

const getters = {
  getHomeConfig: (state) => (comp) => {
    return state.home_view[comp];
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
      return res;
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
      return resp;
    } finally {
      await commit("setProjectsConfig", resp);
    }
  },
  async getZurichStyleRemoteConfig({ commit }) {
    let resp = zurich_stylePageConfig;
    try {
      resp = await getRemoteFile("styles/zurichstyle_style.json");
      return resp;
    } catch (error) {
      console.error(error);
      return resp;
    } finally {
      await commit("setZurichStyleConfig", resp);
    }
  },
  async getEventsRemoteConfig({ commit }) {
    let resp = eventsPageConfig;
    try {
      resp = await getRemoteFile("styles/events_style.json");
      return resp;
    } catch (error) {
      console.error(error);
      return resp;
    } finally {
      await commit("setEventsConfig", resp);
    }
  },
};

const mutations = {
  setHomeConfig(state, payload) {
    state.home_view = payload;
    state.isLoaded = true;
  },
  setZurichStyleConfig(state, payload) {
    state.zurichstyle_view = payload;
  },
  setEventsConfig(state, payload) {
    state.events_view = payload;
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
