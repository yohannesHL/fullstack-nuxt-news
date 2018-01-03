import Vue from 'vue'
import Router from 'vue-router'
import NewsFeed from '@/components/NewsFeed'
import SourcesList from '@/components/SourcesList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewsFeed',
      component: NewsFeed
    },{
      path: '/sources',
      name:'SourcesList',
      component: SourcesList
    }
  ]
})
