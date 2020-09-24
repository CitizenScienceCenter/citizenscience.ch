import axios from "axios";
axios.defaults.headers["Content-Type"] = "application/json";

const state = {
  loginOptions: {},
};

const getters = {};

const actions = {
  async getLoginOptions({ commit }) {
    try {
      const res = await fetch(
          process.env.VUE_APP_BASE_ENDPOINT_URL +
          "account/signin",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const info = await res.json();
      commit("setLoginOptions", info);
      return info;
    } catch (error) {
      console.error(error);
      return;
    }
  },
  async signIn({ dispatch }, { email, password }) {
    try {
      const res = await dispatch("getLoginOptions");
      const csrf = await res.form.csrf;
      const log_res = await axios.post(
          process.env.VUE_APP_BASE_ENDPOINT_URL +
          "account/signin",
        {
          email,
          password,
          csrf,
        },
        {
          withCredentials: true,
          headers: {
            "X-CSRFToken": csrf,
          },
        }
      );
      console.log(log_res);
    } catch (error) {}
  },
};

const mutations = {
  setLoginOptions(state, options) {
    state.loginOptions = options;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
