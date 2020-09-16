// TODO: this would be replaced for flagship projects
import static_projects from "@/assets/static_projects.json";

const state = {
  projects: [],
  is_data_fetched: false,
};

const getters = {
  getProjectList(state) {
    return state.projects;
  },
};

const actions = {
  async getFeaturedProjects({ commit, state }) {
    commit("setIsDataFetched", false);
    try {
      const res = await fetch(
        process.env.VUE_APP_BASE_ENDPOINT_URL + "project/category/featured/",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const info = await res.json();
      await commit("setProjects", info.projects);
    } catch (error) {
      console.error(error);
      return;
    }
  },
  getFlagshipProjects({ commit, state }) {
    commit("setIsDataFetched", false);
    commit("setProjects", static_projects);
  },
};

const mutations = {
  setProjects(state, payload) {
    state.projects = payload;
    state.is_data_fetched = true;
  },
  setIsDataFetched(state, value) {
    state.is_data_fetched = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
