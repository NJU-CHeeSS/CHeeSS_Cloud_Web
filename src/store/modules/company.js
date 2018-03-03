import * as companyApi from '../../api/company'

const state = {
  currentShowing: 'companyDetails',
  popularCompanies: []
}

// actions 可异步
const actions = {

  fetchPopularCompanies({commit}) {
    companyApi.fetchPopularCompanies(data => {
      commit('savePopularCompanies', data)
    })
  }
}

// mutations 必须同步
const mutations = {
  'saveCurrentShowing'(state, currentShowing) {
    state.currentShowing = currentShowing
  },

  'savePopularCompanies'(state, popularCompanies) {
    state.popularCompanies = popularCompanies
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
