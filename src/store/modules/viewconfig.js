import homePageConfig from "@/assets/view_config/home_styles.json";
import contributeViewsConfig from "@/assets/view_config/contribute_styles.json";
import startProjectsViewsConfig from "@/assets/view_config/start_projects_styles.json";
import communityViewsConfig from "@/assets/view_config/community_styles.json";
import aboutViewsConfig from "@/assets/view_config/about_styles.json";
import eventsPageConfig from "@/assets/view_config/events_styles.json";

import { getRemoteFile } from "@/minio.js";

const VIEW_FILES = {
  home: {
    remote: "home_styles.json",
    local: homePageConfig,
    state: "home_view",
  },
  // Contribute section
  projects: {
    remote: "contribute_styles.json",
    local: contributeViewsConfig,
    state: "projects_view",
  },
  contribute: {
    remote: "contribute_styles.json",
    local: contributeViewsConfig,
    state: "contribute_view",
  },
  // Before you start section
  start: {
    remote: "start_projects_styles.json",
    local: startProjectsViewsConfig,
    state: "start_view",
  },
  criteria: {
    remote: "start_projects_styles.json",
    local: startProjectsViewsConfig,
    state: "criteria_view",
  },
  checklist: {
    remote: "start_projects_styles.json",
    local: startProjectsViewsConfig,
    state: "checklist_view",
  },
  // Community section
  community: {
    remote: "community_styles.json",
    local: communityViewsConfig,
    state: "community_view",
  },
  members: {
    remote: "community_styles.json",
    local: communityViewsConfig,
    state: "members_view",
  },
  partnerships: {
    remote: "community_styles.json",
    local: communityViewsConfig,
    state: "partnerships_view",
  },
  // About us section
  mission: {
    remote: "about_styles.json",
    local: aboutViewsConfig,
    state: "mission_view",
  },
  zurich_style: {
    remote: "about_styles.json",
    local: aboutViewsConfig,
    state: "zurichstyle_view",
  },
  offer: {
    remote: "about_styles.json",
    local: aboutViewsConfig,
    state: "offer_view",
  },
  people: {
    remote: "about_styles.json",
    local: aboutViewsConfig,
    state: "people_view",
  },
  contact: {
    remote: "about_styles.json",
    local: aboutViewsConfig,
    state: "contact_view",
  },
  // Events section
  events: {
    remote: "events_styles.json",
    local: eventsPageConfig,
    state: "events_view",
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
  // Community Section states
  community_view: undefined,
  members_view: undefined,
  partnerships_view: undefined,
  // About us Section states
  mission_view: undefined,
  zurichstyle_view: undefined,
  offer_view: undefined,
  people_view: undefined,
  contact_view: undefined,
  // Events Section states
  events_view: undefined,
};

const getters = {
  getHomeConfig: (state) => (comp) => {
    return state.home_view[comp];
  },
};

const actions = {
  async getRemoteView({ commit }, { view }) {
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
      res = VIEW_FILES[view].local;
      return res[view];
    } finally {
      const payload = { view: VIEW_FILES[view].state, content: res[view] };
      await commit("setViewState", payload);
    }
  },
};

const mutations = {
  setViewState(state, payload) {
    state[payload.view] = payload.content;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
