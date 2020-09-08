import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const getters = {
  abc: (state) => {
    return state.count += 100
  }
}

const mutations = {
  add(state) {
    state.count++
  },
  reduce(state) {
    // console.log(abc)
    state.count--
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})