const state = {
    accepted: false
}

const getters = {
    accepted: state => state.accepted
}

const actions = {
    accept({state, commit, rootState}) {
        commit('SET_GDPR', true);
    }
}

const mutations = {
    SET_GDPR(state, value) {
        state.accepted = value;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
