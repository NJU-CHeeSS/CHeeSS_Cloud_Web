// import * as authApi from '../../api/auth'

const state = {
  currentShowing: 'companyDetails',
}

// actions 可异步
const actions = {}

// mutations 必须同步
const mutations = {
  'saveCurrentShowing' (state, currentShowing) {
    state.currentShowing = currentShowing
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
