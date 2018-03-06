import * as searchApi from '../../api/search'

const state = {
  keyword: '',
  companySearchResult: [],
  jobSearchResult: []
}

// actions 可异步
const actions = {
  fetchSearchResult({commit}, {searchInfo, onSuccess, onError}) {
    searchApi.fetchJobSearchResult(data => {
      console.error('搜索条件', searchInfo)
      if (onSuccess) {
        commit('saveJobSearchResult', data.result)
        onSuccess('')
      }
    }, searchInfo)
    searchApi.fetchCompanySearchResult(data => {
      console.error('搜索条件', searchInfo)
      if (onSuccess) {
        commit('saveCompanySearchResult', data.result)
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
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
