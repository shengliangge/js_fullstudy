import * as type from '../types'
const state = {
  showSidebar: false,
  searchHistory: [],
}

const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}
const mutations = {
  [type.COM_SHOW_SIDE_BAR](state, status) {
    state.showSidebar = status
  },
  [type.COM_DELETE_SEARCH_HISTORY](state, index) {
    state.searchHistory.splice(index, 1)
  },
  [type.COM_DELETE_SEARCH_HISTORYAll](state) {
    state.searchHistory = []
  },
  [type.COM_SAVE_SEARCH_HISTORY](state, payload) {
    state.searchHistory = payload
  }
}
const actions = {
  setShowSidebar({ commit }, status) {
    commit(type.COM_SHOW_SIDE_BAR, status)
  },
  deleteSearchHistory({ commit }, index) {
    commit(type.COM_DELETE_SEARCH_HISTORY, index)
  },
  deleteAll({ commit }) {
    commit(type.COM_DELETE_SEARCH_HISTORYAll)
  },
  saveSearchHistory({ commit, state }, query) {
    let history = state.searchHistory;
    history = history.filter(item => item !== query)  // 历史去重
    history.unshift(query)
    commit(type.COM_SAVE_SEARCH_HISTORY, history)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}