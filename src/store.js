import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false
  },
  mutations: {
    setAuthenticationStatus (state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    }
  },
  actions: {
    login({ commit }) {
      commit('setAuthenticationStatus', true)
    },
    logout({ commit }) {
      commit('setAuthenticationStatus', false)
    }
  },
  getters : {

  }
})