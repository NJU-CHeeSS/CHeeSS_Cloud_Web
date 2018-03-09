import * as companyApi from '../../api/company'

const state = {
  currentShowing: 'companyDetails',
  popularCompanies: [],
  companyInfo: null,
  companyJobs: [],
  relatedCompanies: [],
  searchResult: [''],
  companyRank: [],
  companySalary: null,
}

// actions 可异步
const actions = {

  fetchPopularCompanies({commit}) {
    companyApi.fetchPopularCompanies(data => {
      commit('savePopularCompanies', data)
    })
  },

  fetchCompanyInfo({commit}, {companyId, onSuccess}) {
    companyApi.fetchCompanyInfo(data => {
      if (onSuccess) {
        commit('saveCompanyInfo', data)
        onSuccess('')
      }
    }, companyId)
  },

  fetchCompanyInfoByName({commit}, {companyName, onSuccess}) {
    companyApi.fetchCompanyInfoByName(data => {
      if (onSuccess) {
        commit('saveCompanyInfo', data)
        onSuccess('')
      }
    }, companyName)
  },

  fetchCompanyJobs({commit}, companyId) {
    companyApi.fetchCompanyJobs(data => {
      commit('saveCompanyJobs', data)
    }, companyId)
  },

  fetchRelatedCompanies({commit}, companyId) {
    console.log('fetchRelatedCompanies!')
    companyApi.fetchRelatedCompanies(data => {
      commit('saveRelatedCompanies', data)
    }, companyId)
  },

  searchCompany({commit}, {searchInfo}) {
    console.log(searchInfo)
    companyApi.searchCompany(data => {
      commit('saveSearchResult', data.result)
    }, searchInfo)
  },

  fetchCompanyRank({commit, state}) {
    let industry = state.companyInfo === null ? null : state.companyInfo.industry
    let firstIndustry = industry.split('/')[0]
    companyApi.fetchCompanyRank(data => {
      commit('saveCompanyRank', data)
    }, firstIndustry)
  },

  fetchCompanySalary({commit}, companyId) {
    companyApi.fetchCompanySalary(data => {
      commit('saveCompanySalary', data)
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
  },

  'saveSearchResult'(state, searchResult) {
    state.searchResult = searchResult
  },

  'saveCompanyRank'(state, companyRank) {
    state.companyRank = companyRank
  },

  'saveCompanySalary'(state, companySalary) {
    state.companySalary = companySalary
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
