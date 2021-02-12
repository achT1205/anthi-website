import Vue from 'vue';
import Vuex from 'vuex';
import ResearchModule from './modules/research'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowSize:null
  },
  mutations: {
    SET_WINDOWSIZE: (state, payload) => (state.windowSize = payload),
  },
  actions: {
    setWindowsise({ commit }, payload) {
      commit("SET_WINDOWSIZE",payload)
  }
  },
  getters: {
    windowSize: (state) => state.windowSize
},
  modules: {
    ResearchModule
  },
});
