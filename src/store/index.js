import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import home from './modules/home'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    home
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
});

if (module.hot) {
  // 使 actions 和 mutations 成为可热重载模块
  module.hot.accept(['./modules/home'], () => {
    // 获取更新后的模块
    // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
    const home = require('./modules/home').default
    // 加载新模块 
    store.hotUpdate({
      modules: {
        home
      }
    })
  })
}