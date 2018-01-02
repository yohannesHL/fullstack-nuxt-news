import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    feeds: [],
    sources: [],
    config: {},
    lastUpdate: new Date()
  },
  mutations: {
    setFeeds: (state, payload) => {
      state.feeds = payload
    },
    setFeedSources: (state, payload) => {
      state.sources = payload
    },
    setSourcesConfig: (state, payload) => {
      state.config = payload
    },
    lastupdate: (state, payload) => {
      state.lastUpdate = new Date()
    }
  },
  actions: {
    fetchNews({ commit }, filters) {
      let url = '/api/news'
      if (filters){
        url += '?filters=' + JSON.stringify(filters)
      }
      axios.get(url)
          .then((resp) => {
            if (resp.status == 200) {

              commit('setFeeds', resp.data || [])
              commit('lastUpdate')
            }
          }, (err) => {})
    },
    fetchSources({ commit }) {


      axios.get('/api/sources').then((resp) => {
        // console.info('resp', resp)
        if (resp.status == 200) {
          commit('setFeedSources', resp.data || [])
        }
      }, (err) => {

      })
    },
    setSourcesConfig({commit}, payload) {
      commit('setSourcesConfig', payload)
    },
    addNewsSource({commit}, payload){
      axios.post('/api/request', {
          ...payload
      }).then((resp)=> {
        // util.showToast
      })

    }

  },
  getters: {
    getConfig: state => {
      return JSON.parse( localStorage.getItem('feeds-config') )
    }
  }
})

export default store