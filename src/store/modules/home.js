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
    let ramdom;
    if(adjust){
      ramdom = Math.random() * (high - low - adjust) + low
    }else{
      ramdom = Math.random() * (high - low) + low
    }
    return Math.ceil(ramdom);
  },

  get30DegRandom: function(){
    return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30));
  },

  setListRandom: function(array){
    return array.sort(function(){ return 0.5 - Math.random() })
  }
}

const state = {
	sectionList: [{
    name: 'Picture', 
    background: pic, 
    current: true, 
    mode: 'pic' ,
    list: [{
      id: '1',
      name: '1 come from scout.sun',
      discription: 'discription of pic1',
      src: pic1,
      pos: null,
      isCenter: false
    },{
      id: '2',
      name: '2 come from scout.sun',
      discription: 'discription of pic2',
      src: pic2,
      pos: null,
      isCenter: false
    },{
      id: '3',
      name: '3 come from scout.sun',
      discription: 'discription of pic3',
      src: pic3,
      pos: null,
      isCenter: false
    },{
      id: '4',
      name: '4 come from scout.sun',
      discription: 'discription of pic4',
      src: pic4,
      pos: null,
      isCenter: false
    },{
      id: '5',
      name: '5 come from scout.sun',
      discription: 'discription of pic5',
      src: pic5,
      pos: null,
      isCenter: false
    },{
      id: '6',
      name: '6 come from scout.sun',
      discription: 'discription of pic6',
      src: pic6,
      pos: null,
      isCenter: false
    },{
      id: '7',
      name: '7 come from scout.sun',
      discription: 'discription of pic7',
      src: pic7,
      pos: null,
      isCenter: false
    },{
      id: '8',
      name: '8 come from scout.sun',
      discription: 'discription of pic8',
      src: pic8,
      pos: null,
      isCenter: false
    }]
  },{ 
    name: 'Music',
    background: music, 
    current: false, 
    mode: 'music',
    pos: null,
    list: []
  },{ 
    name: 'Movie', 
    background: movie,
    current: false,
    mode: 'movie',
    list: [{
      left: '0px',
      src: pic3
    }],
    screenPos: { 
      transform: 'rotateY(0deg)',
      src: pic1
    }
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
  },

  picTurnSide({ commit, state }, item){
    commit(types.PIC_TURN_SIDE, { item })
  },

  getMusicItem({ commit, state }){
    commit(types.GET_MUSIC_ITEM)
  },

  setMovieCube({ commit, state }){
    commit(types.SET_MOVIE_CUBE)
  },

  screenMove({ commit, state }, e){
    commit(types.SCREEN_MOVE, { e })
  },

  setMovieList({ commit, state}){
    commit(types.SET_MOVIE_LIST)
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
  // 设置
  [types.SET_SHADOW_MODE](state, { status }){
    state.shadowMode = status;
  },
  // 设置图片位置
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
      yMin, yMax,
      currentItem = item,
      currentIndex = 0;

    // picList = staticFunc.setListRandom(picList);

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

      if(currentItem && currentItem.id === item.id)
        currentIndex = index;

      item.pos = {
        top: staticFunc.getRangeRandom(yMax, yMin, 260) + 'px',
        left: staticFunc.getRangeRandom(xMax, xMin, 388) + 'px',
        right: 'auto',
        bottom: 'auto',
        transform: 'rotate(' + staticFunc.get30DegRandom() + 'deg)',
        zIndex: staticFunc.getRangeRandom(4, 0),
      };
      if(area < 8){
        area ++;
      }else{
        area = 1;
      };
      // 设置非居中标识
      item.isCenter = false;
    });
    picList[currentIndex].pos = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      transform: 'none',
      zIndex: 5,
      width: '500px',
      height: '300px',
      background: 'white'
    }
    picList[currentIndex].isCenter = true;
  },
  // 设置音乐
  [types.GET_MUSIC_ITEM](state){
    let width = document.body.clientWidth,
      height = document.body.clientHeight,
      rowCount = Math.floor(width / 20),
      music = state.sectionList[1];

    rowCount = rowCount % 2 ? (rowCount - 6):(rowCount - 5);

    music.pos = {
      width: rowCount * 20 + 'px',
      height: height - 50 + 'px'
    }

    music.list = [];

    for(let i = 0; i < rowCount; i++){
      if(i%2){
        music.list.push({
          pos: {
            left: i * 20 + 'px',
            height: staticFunc.getRangeRandom(height - 100, 0) + 'px'
          }
        })
      }
    }
  },
  // 设置长方体
  [types.SET_MOVIE_CUBE](state){
    let width = document.body.clientWidth,
      height = document.body.clientHeight,
      zIndex = 400,
      zIndexH = zIndex / 2,
      stageWidth = width / 3 * 2,
      stageHeight = height / 2,
      rightZ = stageWidth - zIndexH,
      bottomZ = stageHeight - zIndexH,
      x,
      w;

    state.sectionList[2].cube = {
      top: height / 4 + 'px',
      left: width / 6 + 'px',
      width: stageWidth + 'px',
      height: stageHeight + 'px',
    }

    state.sectionList[2].top = {
      transform: 'rotateX( 90deg ) translateZ( '+ zIndexH +'px )',
      width: '100%',
      height: zIndex + 'px'
    }

    state.sectionList[2].bottom = {
      transform: 'rotateX( -90deg ) translateZ( '+ bottomZ +'px )',
      width: '100%',
      height: zIndex + 'px'
    }

    state.sectionList[2].left = {
      transform: 'rotateY( -90deg ) translateZ( '+ zIndexH +'px )',
      height: '100%',
      width: zIndex + 'px'
    }

    state.sectionList[2].right = {
      transform: 'rotateY( 90deg ) translateZ( '+ rightZ +'px )',
      height: '100%',
      width: zIndex + 'px'
    }

    state.sectionList[2].front = {
      transform: 'translateZ('+ zIndex / 2 +'px)',
      height: '100%',
      width: '100%'
    }

    state.sectionList[2].back = {
      transform: 'translateZ(-'+ zIndex / 2 +'px)',
      height: '100%',
      width: '100%'
    }

    x = Math.tan(300 / stageWidth) * 360 / 2 / 3.14,
    w = Math.sqrt(stageHeight * stageHeight + stageWidth * stageWidth);
    console.log(stageHeight, stageWidth, x)

    state.sectionList[2].line1 = {
      width: w + 'px',
      transform: 'rotateX(0deg) rotateY('+ x +'deg)'
    }

    state.sectionList[2].line2 = {
      width: 'px',
      transform: 'rotateX(-20deg) rotateY(-40deg)'
    }

    state.sectionList[2].line3 = {
      width: 'px',
      transform: 'rotateX(-20deg) rotateY(-40deg)'
    }

    state.sectionList[2].line4 = {
      width: 'px',
      transform: 'rotateX(-20deg) rotateY(-40deg)'
    }

  },
  // 监听screen移动
  [types.SCREEN_MOVE](state, { e }){
    let screenWidth = 800,
      x = e.offsetX,
      deg = (x - screenWidth/2) / (screenWidth/2),
      dDeg = deg * 2,
      shadowX = -deg * 5;
    state.sectionList[2].screenPos.transform = 'rotateY('+ dDeg +'deg)';
  },

  [types.SET_MOVIE_LIST](state){
    let width = document.body.clientWidth,
      itemW = 80,
      listCount = Math.floor(width / itemW) - 3,
      listW = listCount * itemW + 120;

    state.sectionList[2].list = [];

    for(let i = 0; i < listCount; i++){
      state.sectionList[2].list.push({
        pos:{
          left: i * itemW + 'px',
        },
        src: pic6
      })
    }
    state.sectionList[2].pos = {
      width: listW + 'px'
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}