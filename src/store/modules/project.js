// TODO: this would be replaced for flagship projects
import static_projects from "@/assets/static_projects.json";

const state = {
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
  async getAllProjectsRemote({ commit }) {
    commit("setIsDataFetched", false);
    let projects = [];
    try {
      const projectCalls = [
        // TODO: Static file, replace with dynamic one
        static_projects,
        fetch(
          process.env.VUE_APP_BASE_ENDPOINT_URL + "project/category/thinking/",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        ),
      ];
      //Multiple call to 2 different projects endpoints
      const [flagship, regular] = await Promise.all(projectCalls);  
      // TODO: validate flagship.ok
      // if (flagship && flagship.ok) {
      //   const info_flag = await flagship.json();
      //   projects = projects.concat(info_flag.projects);
      // }      
      if (regular && regular.ok) {
        const info_reg = await regular.json();
        projects = projects.concat(info_reg.projects);
      }
      // FIXME: Set at the beginning place after featured websites will be good again
      if (flagship) {
        const info_flag = await flagship;
        projects = projects.concat(info_flag);
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
