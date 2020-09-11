export default {
  state: {
    menu: [],
    currentMenu: null
  },
  mutations: {
    selectMenu(state, val) {
      val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
    }
  },
  actions: {}
}