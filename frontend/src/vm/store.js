import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    feeds: [],
    sources: []
  },
  mutations: {
    addFeed: (state, payload) => {
      // Assemble data
      const feed = {
        ...payload
      }
      // console.info('feed', feed)
      state.feeds.push(feed);
    },
    addFeedSource: (state, payload) => {
      // Assemble data
      const source = {
        ...payload
      }
      // console.info('addFeedSource', source)
      state.sources.push(source);
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
            // console.info('resp', resp)
            if (resp.status == 200) {
              (resp.data || []).forEach((feed) => {
                commit('addFeed', feed)
              });
            }
          }, (err) => {})
    },
    fetchSources({ commit }) {


      axios.get('/sources').then((resp) => {
        // console.info('resp', resp)
        if (resp.status == 200) {
          (resp.data || []).forEach((src) => {
            commit('addFeedSource', src)
          });
        }
      }, (err) => {

      })
    },
    setConfig({commit}, payload) {
      // localStorage.setItem('feeds-config', JSON.stringify(payload))
    },
    addNewsSource({commit}, payload){
      axios.post('/api/sources',{
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