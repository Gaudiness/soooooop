import * as types from '../mutation-types'

const state = {
	sectionList:[
		{ name: 'Movie', backgroud: '#222' },
		{ name: 'Music', backgroud: '#B82525' },
		{ name: 'Picture', backgroud: '#0099ff' }
	]
}

// getters
const getters = {
	sectionList: state => state.sectionList,
}

// actions
const actions = {

}

// mutations
const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}