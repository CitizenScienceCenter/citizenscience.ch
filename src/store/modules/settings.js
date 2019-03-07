const state = {
    language: undefined
}

const getters = {
};

const actions = {
    setLanguage({state, commit, rootState}, language) {
        commit('SET_LANGUAGE', language)
    }
};

const mutations = {
    SET_LANGUAGE(state, language) {
        state.language = language;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
