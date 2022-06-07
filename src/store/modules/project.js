// TODO: this would be replaced for flagship projects
import static_projects from "@/assets/static_projects.json";
import { info } from "sass";

/**
 * Get projects by category and page
 * @param category - the category of the project
 * @param [page=1] - 1
 * @returns An object with the following properties:
 */
const _getProjectsByCategory = async (category, page = 1) => {
  const projects_by_category = await fetch(
    process.env.VUE_APP_BASE_ENDPOINT_URL +
      `project/category/${category}${page !== 1 ? "/page/" + page : ""}/`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  return await projects_by_category.json();
};

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
      return static_projects;
    } catch (error) {
      console.error(error);
      return;
    }
  },
  async getAllProjectsRemote({ state, commit }) {
    commit("setIsDataFetched", false);
    commit("clearAllProjectList");
    const multiPagesCategories = {};
    // add the static projects to the list
    commit("setAllProjectList", static_projects);
    try {
      // get first page of project categories
      await Promise.all(
        state.categories.map(async (category) => {
          const info_projects = await _getProjectsByCategory(category);
          /* checking if the category has projects. */
          await commit("setAllProjectList", info_projects.projects);
          /* checking if the category has more than one page. */
          if (
            info_projects.pagination &&
            Math.ceil(
              info_projects.pagination.total / info_projects.pagination.per_page
            ) > 1
          ) {
            multiPagesCategories[category] = await Math.ceil(
              info_projects.pagination.total / info_projects.pagination.per_page
            );
          }
        })
      );      

      // get projects from multi pages categories
      for (const category in multiPagesCategories) {
        for (let i = 2; i <= multiPagesCategories[category]; i++) {
          const info_projects = await _getProjectsByCategory(category, i);
          await commit("setAllProjectList", info_projects.projects);
        }
      }
      await commit("setIsDataFetched", true);
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
  clearAllProjectList(state) {
    state.allProjectList = [];
  },
  setAllProjectList(state, payload) {
    state.allProjectList.push(...payload);
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
