import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    pokemonList: [],
    pokemonSelected: {},
  },
  mutations: {
    setIsLoading(state, data) {
      state.isLoading = data;
    },
    setPokemonList(state, data) {
      state.pokemonList = data;
    },
    setPokemonSelected(state, data) {
      state.pokemonSelected = data;
    },
  },
  actions: {
  },
  modules: {
  }
})
