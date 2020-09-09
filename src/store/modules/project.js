// TODO: this would be replaced for flagship projects
import static_projects from "@/assets/static_projects.json";
import axios from "axios";

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
    commit("changeFetchedStatus", false);
    try {
      // TODO: implement env instead
      const res = await fetch(
        "https://pybossa-staging.citizenscience.ch/project/category/featured/",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const info = await res.json();
      await commit("setProjects", info.projects);
      await commit("changeFetchedStatus", true);
    } catch (error) {
      console.error(error);
      return;
    }
  },
  getFlagshipProjects({ commit }) {
    commit("changeFetchedStatus", false);
    commit("setProjects", static_projects);
    commit("changeFetchedStatus", true);
  },
};

const mutations = {
  setProjects(state, payload) {
    state.projects = payload;
  },
  changeFetchedStatus(state, value) {
    // Used to contol renderization with async data
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
