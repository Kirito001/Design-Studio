import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        drawer: null
    },
    getters: {
        drawer: state => state.drawer
    },
    mutations: {
        toggleDrawer(state, boolean) {
            state.drawer = boolean
        }
    },
    actions: {
        toggleDrawer({ commit }, status) {
            commit('toggleDrawer', status)
        }
    }
})

export default store