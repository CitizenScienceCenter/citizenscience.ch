import homePageConfig from "@/assets/view_config/home_styles.json";
import contributeViewsConfig from "@/assets/view_config/contribute_styles.json";
import startProjectsViewsConfig from "@/assets/view_config/start_projects_styles.json";
import eventsPageConfig from "@/assets/view_config/Events.json";
import zurich_stylePageConfig from "@/assets/view_config/ZurichStyle.json";

import { getRemoteFile } from "@/minio.js";

const VIEW_FILES = {
  home: {
    remote: "home_styles.json",
    local: homePageConfig,
    mutation: "setHomeConfig",
  },
  // Contribute section
  projects: {
    remote: "contribute_styles.json",
    local: contributeViewsConfig,
    mutation: "setProjectsConfig",
  },
  contribute: {
    remote: "contribute_styles.json",
    local: contributeViewsConfig,
    mutation: "setContributeConfig",
  },
  // Before you start section
  start: {
    remote: "start_projects_styles.json",
    local: startProjectsViewsConfig,
    mutation: "setStartConfig",
  },
  criteria: {
    remote: "start_projects_styles.json",
    local: startProjectsViewsConfig,
    mutation: "setCriteriaConfig",
  },
  checklist: {
    remote: "start_projects_styles.json",
    local: startProjectsViewsConfig,
    mutation: "setChecklistConfig",
  },
};

const state = {
  home_view: undefined,
  // Contribute Section states
  projects_view: undefined,
  contribute_view: undefined,
  // Before you Start Section states
  start_view: undefined,
  criteria_view: undefined,
  checklist_view: undefined,

  events_view: undefined,
  zurichstyle_view: undefined,

  isLoaded: false,
};

const getters = {
  getHomeConfig: (state) => (comp) => {
    return state.home_view[comp];
  },
};

const actions = {
  async getRemoteView({ commit }, { view }) {
    commit("setIsLoaded", false);
    let res;
    try {
      // Retrieve style from remote
      res = await getRemoteFile(`styles/${VIEW_FILES[view].remote}`);
      if (res[view] === undefined) {
        throw new Error("Remote undefined");
      } else {
        return res[view];
      }
    } catch (error) {
      console.error(error);
      res = VIEW_FILES[view].local
      return res[view];
    } finally {
      await commit(VIEW_FILES[view].mutation, res[view]);
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
  setProjectsConfig(state, payload) {
    state.projects_view = payload;
    state.isLoaded = true;
  },
  setContributeConfig(state, payload) {
    state.contribute_view = payload;
  },

  setStartConfig(state, payload) {
    state.start_view = payload;
  },
  setCriteriaConfig(state, payload) {
    state.criteria_view = payload;
  },
  setChecklistConfig(state, payload) {
    state.checklist_view = payload;
  },

  setZurichStyleConfig(state, payload) {
    state.zurichstyle_view = payload;
  },
  setEventsConfig(state, payload) {
    state.events_view = payload;
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
