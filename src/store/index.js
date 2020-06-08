import config from '@/config'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [],
    videosLoaded: false
  },
  mutations: {
    storeVideos(state, movieData) {
      state.videos = movieData
      state.videosLoaded = true
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