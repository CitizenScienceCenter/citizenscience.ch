const state = {
    showNavigation: false,
    showSidepanel: false,
    loading: false,
    error: null,
    errTimeout: 5000,
    theme: 'default',
    language: undefined
}

const getters = {
    theme: state => state.theme
}

const actions = {
    setError({state, commit, rootState }, err) {
        console.log(err)
        commit('SET_ERROR', err)
        setTimeout(() => {
            commit('SET_ERROR', null)
        }, state.errTimeout)
    },
    setLanguage({state, commit, rootState}, language) {
        commit('SET_LANGUAGE', language)
    }

}

const mutations = {
    SET_LOADING(state, flag) {
        state.loading = flag
    },
    SET_NAV(state, flag) {
        state.showNavigation = flag
    },
    SET_SIDEPANEL(state, flag) {
        state.showSidepanel = flag
    },
    SET_ERROR(state, err) {
        state.error = err
    },
    SET_THEME(state, theme) {
        state.theme = theme
    },
    SET_LANGUAGE(state, language) {
        state.language = language
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
