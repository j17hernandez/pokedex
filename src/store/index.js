import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    pokemonesFiltered: [],
    pokemonesList: [],
    favoriteListFiltered: [],
    pokemonesFavoritos: [],
  },
  mutations: {
    setIsLoading(state, data) {
      state.isLoading = data;
    },
    setPokemonesFiltered(state, data) {
      state.pokemonesFiltered = data;
    },
    setPokemonesList(state, data) {
      state.pokemonesList = data;
    },
    setFavoriteListFiltered(state, data) {
      state.favoriteListFiltered = data;
    },
    setPokemonesFavoritos(state, data) {
      state.pokemonesFavoritos = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
