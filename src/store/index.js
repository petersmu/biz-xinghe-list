import Vue from 'vue'

const state = {
  result: {}
}

const getters = {
  results(state) {
    return state.result
  }
}

const mutations = {
  changeList(state, payload) {
    //数组形式
    // let n = state.result.length
    // state.result.map((item, index) => {
    //   if (item.id === payload.id) {
    //     n = index
    //   }
    // })
    // state.result[n] = payload
    //对象形式
    // state.result[payload.id] = payload.cont
    Vue.set(state.result,payload.id,payload.cont)
  },
  addList(state, payload) {
    state.result.push(payload)
  },
  removeList(state, payload) {
    delete state.result[payload.id]
  }
}

const actions = {
  changeList({ commit }, meta) {
    commit('changeList', meta)
  },
  addList({ commit }, meta) {
    commit('addList', meta)
  },
  removeList({commit}, meta){
    commit('removeList', meta)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}