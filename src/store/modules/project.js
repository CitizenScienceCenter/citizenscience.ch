const state = {
  projects: [],
};

const getters = {};

const actions = {
  async getFeaturedProjects({ commit }) {
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
      await commit("setFeaturedProjects", info.projects);
    } catch (error) {
      console.error(error);
      return;
    }
  },
};

const mutations = {
  setFeaturedProjects(state, payload) {
    state.projects = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
