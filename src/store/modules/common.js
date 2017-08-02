import * as types from '../mutation-types'
import newAxios from '@/axios/config.js'

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
    newAxios({
      url: 'https://api.douban.com/',
      baseURL: '/v2/movie/in_theaters',
      then(res){
        console.log(res);
      },
      catch(res){
        console.log(res);
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}