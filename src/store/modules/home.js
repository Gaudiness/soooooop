import * as types from '../mutation-types'

import movie from '@/images/movie.jpg'
import music from '@/images/music.jpg'
import pic from '@/images/pic.jpg'
import pic1 from '@/images/1.jpg'
import pic2 from '@/images/2.jpg'
import pic3 from '@/images/3.jpg'
import pic4 from '@/images/4.jpg'
import pic5 from '@/images/5.jpg'
import pic6 from '@/images/6.jpg'
import pic7 from '@/images/7.jpg'
import pic8 from '@/images/8.jpg'

const staticFunc = {
  getRangeRandom: function(high, low, adjust){
    return Math.ceil(Math.random() * (high - low - adjust) + low);
  },

  get30DegRandom: function(){
    return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30));
  }
}

const state = {
	sectionList: [{
    name: 'Picture', 
    background: pic, 
    current: true, 
    mode: 'pic' ,
    list: [{
      name: '1 come from scout.sun',
      discription: 'discription of pic1',
      src: pic1,
      pos: null,
    },{
      name: '2 come from scout.sun',
      discription: 'discription of pic2',
      src: pic2,
      pos: null,
    },{
      name: '3 come from scout.sun',
      discription: 'discription of pic3',
      src: pic3,
      pos: null,
    },{
      name: '4 come from scout.sun',
      discription: 'discription of pic4',
      src: pic4,
      pos: null,
    },{
      name: '5 come from scout.sun',
      discription: 'discription of pic5',
      src: pic5,
      pos: null,
    },{
      name: '6 come from scout.sun',
      discription: 'discription of pic6',
      src: pic6,
      pos: null,
    },{
      name: '7 come from scout.sun',
      discription: 'discription of pic7',
      src: pic7,
      pos: null,
    },{
      name: '8 come from scout.sun',
      discription: 'discription of pic8',
      src: pic8,
      pos: null,
    }]
  },{ 
    name: 'Music',
    background: music, 
    current: false, 
    mode: 'music',
    list: [{
      name: '1',
      discription: '',
      pic: '',
      pos: null,
    },{
      name: '2',
      discription: '',
      pic: '',
      pos: null,
    },{
      name: '3',
      discription: '',
      pic: '',
      pos: null,
    }]
  },{ name: 'Movie', 
    background: movie,
    current: false,
    mode: 'movie',
    list: [{
      name: 'movie1',
      discription: 'this is the discription of movie1',
      pic: '',
      top: '170px',
      left: '23px',
    },{
      name: 'movie2',
      discription: 'this is the discription of movie2',
      pic: '',
      top: '340px',
      left: '397px',
    },{
      name: 'movie3',
      discription: 'this is the discription of movie3',
      pic: '',
      top: '194px',
      left: '800px',
    }]
  }],
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
  },

  setPicPostion({ commit, state }, item){
    commit(types.SET_PIC_POSITION, { item })
  }
}

// mutations
const mutations = {
  // 点击翻页、滚动翻页
  [types.TURN_HOME_PAGE](state, { item }){
    let list = state.sectionList,
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
  },

  [types.SET_PIC_POSITION](state, {item}){
    let picList = state.sectionList[0].list,
      width = document.body.clientWidth,
      height = document.body.clientHeight,
      area = 1, 
      // 1: top left, 
      // 2: top middle, 
      // 3: top right, 
      // 4: middle left,  
      // 5: middle right
      // 6: bottom left, 
      // 7: bottom middle, 
      // 8: bottom right
      xMin, xMax, 
      yMin, yMax;

    picList.forEach(function(item, index){
      if(area === 1 || area === 2 || area === 3){
        yMin = 0;
        yMax = height / 2;
        if(area === 1){
          xMin = 0;
          xMax = width / 2;
        }else if(area === 2){
          xMin = width / 4;
          xMax = width / 4 * 3;
        }else if(area === 3){
          xMin = width / 2;
          xMax = width;
        }
        
      }else if(area === 4 || area === 5){
        yMin = height / 4;
        yMax = height / 4 * 3;
        if(area === 4){
          xMin = 0;
          xMax = width / 2;
        }else if(area === 5){
          xMin = width / 2;
          xMax = width;
        }
      }else if(area === 6 || area === 7 || area === 8){
        yMin = height / 2;
        yMax = height;
        if(area === 6){
          xMin = 0;
          xMax = width / 2;
        }else if(area === 7){
          xMin = width / 4;
          xMax = width / 4 * 3;
        }else if(area === 8){
          xMin = width / 2;
          xMax = width;
        }
      }

      item.pos = {
        top: staticFunc.getRangeRandom(yMax, yMin, 260) + 'px',
        left: staticFunc.getRangeRandom(xMax, xMin, 388) + 'px',
        transform: 'rotate(' + staticFunc.get30DegRandom() + 'deg)',
        zIndex: staticFunc.getRangeRandom(4, 0)
      }

      console.log(area, yMax, yMin, xMax, xMin, item.pos)

      if(area < 8){
        area ++;
      }else{
        area = 1;
      }
    });
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}