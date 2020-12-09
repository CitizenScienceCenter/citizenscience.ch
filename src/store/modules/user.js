import { router } from "@/router/router.js";
import axios from "axios";

const state = {
  userInfo: null,
  isLogged: false,
  loginOptions: {},
};

const getters = {
  getUserInfo() {
    return state.userInfo;
  },
};

const actions = {
  async getAccountProfile({ dispatch, commit }) {
    try {
      dispatch("getLoginOptions");
      const res = await fetch(
        `${process.env.VUE_APP_BASE_ENDPOINT_URL}account/profile`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const info = await res.json();
      if (info.hasOwnProperty("user")) {
        commit("setUserInfo", info.user);
        commit("setLogged", true);
      } else {
        commit("setUserInfo", null);
        commit("setLogged", false);
      }
    } catch (error) {
      console.error(error);
      commit("setUserInfo", null);
      commit("setLogged", false);
    }
  },
  async signOut({ commit }) {
    try {
      const res = await fetch(
        `${process.env.VUE_APP_BASE_ENDPOINT_URL}account/signout`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const info = await res.json();
      if (info.hasOwnProperty("status") && info.status === "success") {
        commit("setUserInfo", null);
        commit("setLogged", false);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  },
  async getLoginOptions({ commit }) {
    try {
      const res = await fetch(
        `${process.env.VUE_APP_BASE_ENDPOINT_URL}account/signin`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const info = await res.json();
      commit("setLoginOptions", info);
      return res.data;
    } catch (error) {
      console.error(error);
      return;
    }
  },
  async signIn({ state }, { email, password }) {
    try {
      const csrf = state.loginOptions.form.csrf;
      const log_res = await axios.post(
        `${process.env.VUE_APP_BASE_ENDPOINT_URL}account/signin`,
        { email: email, password: password, csrf: csrf },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrf,
          },
        }
      );
      alert(JSON.stringify(log_res.data, null, 2));
      // const csrf = state.loginOptions.form.csrf;
      // const log_res = await fetch(
      //   `${process.env.VUE_APP_BASE_ENDPOINT_URL}account/signin`,
      //   {
      //     method: "POST",
      //     credentials: "include",
      //     headers: {
      //       "Content-Type": "application/json",
      //       "X-CSRFToken": csrf,
      //     },
      //     body: JSON.stringify({
      //       email: email,
      //       password: password,
      //       csrf: csrf,
      //     }),
      //   }
      // );
      // console.log(await log_res.json());
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  setLoginOptions(state, options) {
    state.loginOptions = options;
  },
  setUserInfo(state, payload) {
    state.userInfo = payload;
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
