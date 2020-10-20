import { createStore } from 'vuex'
import * as types from './action-type'
import * as api from '../api'
export default createStore({
  state: {
    planList: []
  },
  getters: {
    allTime: () => {
      return 0
    }
  },
  mutations: {
    [type.ADD_PLAN](state, payload) {
      state.planList = [...state.planList, payload]
    },
    [type.DELETE_PLAN](state, payload) {
      state.planList.filter(item => {
        return item._id !== payload._id
      })
    },
    [type.GET_PLAN_LIST](state, payload) {
      state.planList = payload
    }
  },
  actions: {
    async [types.ADD_PLAN]({ commit }, payload) {
      let plan = await api.addPlan(payload)
      commit(types.ADD_PLAN, plan)
    },
    async [types.DELETE_PLAN]({ commit }, payload) {
      let plan = await api.deletePlan(payload)
      commit(types.DELETE_PLAN, plan)
    },
    async [types.GET_PLAN_LIST]({ commit }, payload) {
      let plan = await api.getPlanList()
      commit(types.GET_PLAN_LIST, plan)
    },
  },
  modules: {
  }
})
