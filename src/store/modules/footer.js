import * as types from '../mutation-types'

const state = {
  // 播放列表
  musicList: [],
  // 当前播放歌曲
  currentSong: {
  	timeLong: 245,
  	currentTime: 0,
  	startTime: '00:00',
  	endTime: '',
  	length: null,
    currentPoint: 0,
    currentPosition: null,
  },
  // 暂停
  suspend: true
}

// getters
const getters = {
  musicList: state => state.musicList,
  currentSong: state => state.currentSong,
  suspend: state => state.suspend,
}

// actions
const actions = {
  setCurrentSong({ commit, state }){
    commit(types.SET_CURRENT_SONG);
    commit(types.SET_POINT_POS);
  },

  setTimeProgress({ commit, state }, item){
    commit(types.SET_TIME_PROGREDSS, { item });
    commit(types.SET_POINT_POS);

  },

  musicControl({ commit, state }){
    commit(types.MUSIC_CONTROL)
  },

  setCurntPos({ commit, state }){
    commit(types.SET_CURNT_POS);
    commit(types.SET_POINT_POS);
  }
}

// mutations
const mutations = {

  // 获取当前播放歌曲信息。
  [types.SET_CURRENT_SONG](state){
    let m = parseInt(state.currentSong.timeLong / 60);
    let s = state.currentSong.timeLong % 60

    m = m>9?m:('0' + m);
    s = s>9?s:('0' + s);

    state.currentSong.endTime = m + ":" + s;
    state.currentSong.length = 1 / state.currentSong.timeLong * 100 + '%';

  },

  // 设置进度条。
  [types.SET_TIME_PROGREDSS](state, { item }){
    state.currentSong.currentPoint = item;    
  },

  // 
  [types.SET_POINT_POS](state){
    // 开始计时点
    let m = parseInt(state.currentSong.currentPoint / 60);
    let s = state.currentSong.currentPoint % 60

    m = m>9?m:('0' + m);
    s = s>9?s:('0' + s);

    state.currentSong.startTime = m + ":" + s;

    // 点的位置
    let pos = parseFloat(state.currentSong.length) * state.currentSong.currentPoint;
    state.currentSong.currentPosition = pos - 2 + '%';

  },

  [types.MUSIC_CONTROL](state){
    state.suspend = !state.suspend;
  },

  [types.SET_CURNT_POS](state){
    let curS = state.currentSong;
    curS.currentPoint++;
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}