import * as types from '../mutation-types'
import axios from 'axios'
// import newAxios from '@/axios/config.js'

const state = {
  test: ''
}

const getters = {
  test: stata => stata.test
}

const actions = {
  axiosTest({ commit, state }){
    commit(types.AXIOS_TEST);
  },
}

const mutations = {
  [types.AXIOS_TEST](state){
    axios.get('https://api.douban.com/v2/movie/in_theaters', {
      withCredentials: true,
      responseType:'jsonp',
      xsrfCookieName: 'XSRF-TOKEN',//default
      xsrfHeaderName:'X-XSRF-TOKEN',//default
    }).then(function(res){
      console.log(res);
    }).catch(function(err){
      console.log(err);
    });
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}