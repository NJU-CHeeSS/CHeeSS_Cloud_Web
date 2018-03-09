import * as searchApi from '../../api/search'

const state = {
  keyword: '',
  companySearchResult: [],
  jobSearchResult: [],
  jobTotalCount: 0,
  companyTotalCount: 0
}

// actions 可异步
const actions = {
  fetchJobSearchResult({commit}, {searchInfo, onSuccess, onError}) {
    searchApi.fetchJobSearchResult(data => {
      console.error('搜索条件', searchInfo)
      if (onSuccess) {
        commit('saveJobSearchResult', data.result)
        commit('saveJobTotalCount', data.totalCount)
        onSuccess('')
      }
    }, searchInfo)
  },

  fetchCompanySearchResult({commit}, {searchInfo, onSuccess, onError}) {
    searchApi.fetchCompanySearchResult(data => {
      console.error('搜索条件', searchInfo)
      if (onSuccess) {
        commit('saveCompanySearchResult', data.result)
        commit('saveCompanyTotalCount', data.totalCount)
        onSuccess('')
      }
    }, searchInfo)
  }

}

// mutations 必须同步
const mutations = {
  'saveKeyword'(state, keyword) {
    state.keyword = keyword
  },

  'saveCompanySearchResult'(state, companySearchResult) {
    state.companySearchResult = companySearchResult
  },

  'saveJobSearchResult'(state, jobSearchResult) {
    state.jobSearchResult = jobSearchResult
  },

  'saveJobTotalCount'(state, jobTotalCount) {
    state.jobTotalCount = jobTotalCount
  },

  'saveCompanyTotalCount'(state, companyTotalCount) {
    state.companyTotalCount = companyTotalCount
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
