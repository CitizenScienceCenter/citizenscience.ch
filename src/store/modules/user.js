import axios from "axios";
axios.defaults.headers["Content-Type"] = "application/json";

const state = {
  user: {},
  isLogged: false,
};

const getters = {
  getUserInfo(state) {
    return state.user;
  },
};

const actions = {
  async getAccountProfile({ commit }) {
    try {
      const res = await fetch(
        `${process.env.VUE_APP_BASE_ENDPOINT_URL}account/profile`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const info = await res.json();
      console.log(info);
      if (info.hasOwnProperty("user")) {
        commit("setUserInfo", info.user);
        commit("setLogged", true);
      } else {
        commit("setUserInfo", {});
        commit("setLogged", false);
      }
    } catch (error) {
      console.error(error);
      commit("setUserInfo", {});
      commit("setLogged", false);
    }
  },
  // async getLoginOptions({ commit }) {
  //   try {
  //     const res = await fetch(
  //       process.env.VUE_APP_BASE_ENDPOINT_URL + "account/signin",
  //       {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );
  //     const info = await res.json();
  //     commit("setLoginOptions", info);
  //     return info;
  //   } catch (error) {
  //     console.error(error);
  //     return;
  //   }
  // },
  // async signIn({ dispatch }, { email, password }) {
  //   try {
  //     const res = await dispatch("getLoginOptions");
  //     const csrf = await res.form.csrf;
  //     const log_res = await fetch(
  //       process.env.VUE_APP_BASE_ENDPOINT_URL + "account/signin",
  //       {
  //         method: "POST",
  //         mode: "cors",
  //         credentials: "include",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json, text/plain, */*",
  //           "X-CSRFToken": csrf,
  //         },
  //         body: JSON.stringify({
  //           email: email,
  //           password: password,
  //         }),
  //       }
  //     );
  //   } catch (error) {}
  // },
};

const mutations = {
  // setLoginOptions(state, options) {
  //   state.loginOptions = options;
  // },
  setUserInfo(state, payload) {
    state.user = payload;
  },
  setLogged(state, value) {
    state.isLogged = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
