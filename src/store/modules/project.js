// TODO: this would be replaced for flagship projects
import static_projects from "@/assets/static_projects.json";

const state = {
  categories: [],
  projectList: [],
  allProjectList: [],
  featuredProjects: [],
  is_data_fetched: false,
};

const getters = {
  getProjectList: (state) => (type) => {
    if (type === "featured") {
      return state.featuredProjects;
    }
    return state.allProjectList;
  },
};

const actions = {
  async getFeaturedProjectsRemote({ commit }, { limit }) {
    commit("setIsDataFetched", false);
    try {
      const featured = await fetch(
        process.env.VUE_APP_BASE_ENDPOINT_URL + "project/category/featured/",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      let info_feat = [];
      if (featured && featured.ok) {
        info_feat = await featured.json();
        await commit("setCategories", info_feat.categories);
      }
      await commit("setFeaturedProjects", info_feat.projects);
      // FIXME: Uncomment if static projects in assets shall be visible again
      // await commit("setFeaturedProjects", static_projects.slice(0, limit));
      return static_projects;
    } catch (error) {
      console.error(error);
      return;
    }
  },
  async getAllProjectsRemote({ state, commit }) {
    commit("setIsDataFetched", false);
    let projects = [];
    try {
      let projectCalls = [];
      state.categories.forEach((x) => {
        projectCalls.push(
          fetch(process.env.VUE_APP_BASE_ENDPOINT_URL + `project/category/${x}/`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          })
        );
      });
      //Multiple call to 2 different projects endpoints
      const regular_projects = await Promise.all(projectCalls);
      // TODO: validate flagship.ok
      // if (flagship && flagship.ok) {
      //   const info_flag = await flagship.json();
      //   projects = projects.concat(info_flag.projects);
      // }
      projects = projects.concat(static_projects);
      for (const regular of regular_projects) {
        if (regular && regular.ok) {
          const info_reg = await regular.json();
          projects = projects.concat(info_reg.projects);
        }
      }
    
      await commit("setAllProjectList", projects);
      return projects;
    } catch (error) {
      console.error(error);
      return;
    }
  },
};

const mutations = {
  setCategories(state, payload) {
    if (payload) {
      state.categories = payload
        .filter((cat) => cat.short_name != "featured")
        .map((x) => x.short_name);
    }
  },
  setAllProjectList(state, payload) {
    state.allProjectList = payload;
    state.is_data_fetched = true;
  },
  setFeaturedProjects(state, payload) {
    state.featuredProjects = payload;
    state.is_data_fetched = true;
  },
  updateProjectList(state, payload) {
    state.projectList = payload;
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
