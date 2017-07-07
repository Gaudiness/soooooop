import * as types from '../mutation-types'

import movie from '@/images/movie.jpg';
import music from '@/images/music.jpg';
import pic from '@/images/pic.jpg';

const state = {
	sectionList: [
		{ name: 'Movie', backgroud: movie, current: true },
		{ name: 'Music', backgroud: music, current: false },
		{ name: 'Picture', backgroud: pic, current: false }
	],
  currentSection: '0%'
}

// getters
const getters = {
  sectionList: state => state.sectionList,
	currentSection: state => state.currentSection,
}

// actions
const actions = {
  turnHomePage({ commit, state }, item){
    commit(types.TURN_HOME_PAGE, { item });
  },
}

// mutations
const mutations = {
  [types.TURN_HOME_PAGE](state, { item }){
    var list = state.sectionList,
      currentIndex = 0,
      clickOne = item;
    
    list.forEach(function(item, index){
      item.current = false;
      if(clickOne.name == item.name){
        currentIndex = index;
        clickOne.current = true;
      }
    });
    state.currentSection = -100 * currentIndex + '%';
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}