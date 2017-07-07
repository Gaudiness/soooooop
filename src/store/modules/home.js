import * as types from '../mutation-types'

import movie from '@/images/movie.jpg';
import music from '@/images/music.jpg';
import pic from '@/images/pic.jpg';

const state = {
	sectionList: [
		{ name: 'Movie', background: movie, current: true },
		{ name: 'Music', background: music, current: false },
		{ name: 'Picture', background: pic, current: false }
	],
  currentSection: '0%',
  shadowMode: false
}

// getters
const getters = {
  sectionList: state => state.sectionList,
  currentSection: state => state.currentSection,
	shadowMode: state => state.shadowMode,
}

// actions
const actions = {
  turnHomePage({ commit, state }, item){
    commit(types.TURN_HOME_PAGE, { item });
  },

  setShadowMode({ commit, state }, status){
    commit(types.SET_SHADOW_MODE, { status })
  }
}

// mutations
const mutations = {
  // 点击翻页、滚动翻页
  [types.TURN_HOME_PAGE](state, { item }){
    var list = state.sectionList,
      currentIndex = 0,
      clickOne = item;
    
    list.forEach(function(item, index){
      if(clickOne === 'up' || clickOne === 'down'){
        if(item.current)
          currentIndex = index;
      }else{
        if(clickOne.name == item.name)
          currentIndex = index;
      }
      item.current = false;
    });

    if(clickOne === 'up'){
      if(currentIndex > 0)
        currentIndex--;
    }else if(clickOne === 'down'){
      if(currentIndex < list.length - 1)
        currentIndex++;
    }
    list[currentIndex].current = true;
    state.currentSection = -100 * currentIndex + '%';
  },

  [types.SET_SHADOW_MODE](state, { status }){
    state.shadowMode = status;
    console.log(status)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}