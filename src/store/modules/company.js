import * as companyApi from '../../api/company'

const state = {
  currentShowing: 'companyDetails',
  popularCompanies: [],
  companyInfo: null,
  companyJobs: [],
  relatedCompanies: []
}

// actions 可异步
const actions = {

  fetchPopularCompanies({commit}) {
    companyApi.fetchPopularCompanies(data => {
      commit('savePopularCompanies', data)
    })
  },

  fetchCompanyInfo({commit}, companyId) {
    companyApi.fetchCompanyInfo(data => {
      commit('saveCompanyInfo', data)
    }, companyId)
  },

  fetchCompanyJobs({commit}, companyId) {
    companyApi.fetchCompanyJobs(data => {
      commit('saveCompanyJobs', data.jobList)
    }, companyId)
  },

  fetchRelatedCompanies({commit}, companyId) {
    companyApi.fetchRelatedCompanies(data => {
      commit('saveRelatedCompanies', data.companyList)
    }, companyId)
  }
}

// mutations 必须同步
const mutations = {
  'saveCurrentShowing'(state, currentShowing) {
    state.currentShowing = currentShowing
  },

  'savePopularCompanies'(state, popularCompanies) {
    state.popularCompanies = popularCompanies
  },

  'saveCompanyInfo'(state, companyInfo) {
    state.companyInfo = companyInfo
  },

  'saveCompanyJobs'(state, companyJobs) {
    state.companyJobs = companyJobs
  },

  'saveRelatedCompanies'(state, relatedCompanies) {
    state.relatedCompanies = relatedCompanies
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
