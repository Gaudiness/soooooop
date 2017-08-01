import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import List from '@/view/List'
import Picture from '@/view/list/Picture'
import Music from '@/view/list/Music'
import Movie from '@/view/list/Movie'

Vue.use(Router)

export default new Router({
  routes: [{
	  path: '/',
	  name: 'Home',
	  component: Home
	},{
    path: '/home',
    name: 'Home',
    component: Home
  },{
    path: '/list',
    name: 'List',
    component: List,
    children:[{
      path: 'pic',
      name: 'pic',
      component: Picture
    },{
      path: 'music',
      name: 'music',
      component: Music
    },{
      path: 'movie',
      name: 'movie',
      component: Movie
    }]
  },]
})
