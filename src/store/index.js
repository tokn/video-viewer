import config from '@/config'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    moviesLoaded: false
  },
  mutations: {
    storeVideos(state, movieData) {
      state.movies = movieData
    }
  },
  actions: {
    fetchVideos(context) {
      axios.get(config.fetchUrl)
        .then((results) => {
          context.commit('storeVideos', results.data.data)
        })
    }
  },
  modules: {}
})