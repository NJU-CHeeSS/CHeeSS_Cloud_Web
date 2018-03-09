import * as jobApi from '../../api/job'

const state = {
  pageType: 'filter',
  jobList: [],
  totalCount: null,
  filterOrder: 'date',
  filterInfo: {
    location: '不限',
    diploma: '不限',
    earlyReleaseDate: '不限',
    property: '不限'
  },
  currentPage: 1,
  currentJob: {},
  relateJobs: [],
  compareResult: null,
  jobApply: 0
}

// actions 可异步
const actions = {
  fetchJobList({commit}, {searchInfo, onSuccess, onError}) {
    console.log('searchInfo', searchInfo)
    jobApi.fetchJobList(data => {
      if (data !== null && data !== undefined) {
        if (onSuccess) {
          commit('saveJobList', data.result)
          commit('saveTotalCount', data.totalCount)
          onSuccess('成功获得招聘信息！')
        }
      } else {
        onError('获得招聘信息错误')
      }
    }, searchInfo)
  },
  fetchJobInfo({commit}, jobId) {
    jobApi.fetchJobInfo(data => {
      commit('saveCurrentJob', data)
    }, jobId)
  },
  fetchRelateJobs({commit}, jobId) {
    jobApi.fetchRelateJobs(data => {
      commit('saveRelateJobs', data)
    }, jobId)
  },
  fetchCompareResult({commit}, jobIds) {
    jobApi.fetchCompareResult(data => {
      commit('saveCompareResult', data)
    }, jobIds)
  },
  fetchJobApply({commit}, jobId) {
    jobApi.fetchJobApply(data => {
      commit('saveJobApply', data.message)
    }, jobId)
  },
  fetchRecommendJobList({commit, rootState}, {searchInfo, onSuccess, onError}) {
    let userId = rootState.auth.user === null ? null : rootState.auth.user.userId
    let token = localStorage.getItem('token')
    searchInfo.token = token
    searchInfo.userId = userId
    jobApi.fetchRecommendJobList(data => {
      commit('saveJobList', data.result)
      commit('saveTotalCount', data.totalCount)
    }, searchInfo)
  }
}

// mutations 必须同步
const mutations = {
  'savePageType'(state, type) {
    state.pageType = type
  },
  'saveJobList'(state, jobList) {
    state.jobList = jobList
  },
  'saveTotalCount'(state, totalCount) {
    state.totalCount = totalCount
  },
  'saveFilterOrder'(state, filterOrder) {
    state.filterOrder = filterOrder
  },
  'saveCurrentPage'(state, currentPage) {
    state.currentPage = currentPage
  },
  'saveFilterInfo'(state, filterInfo) {
    state.filterInfo = filterInfo
  },
  'saveCurrentJob'(state, currentJob) {
    state.currentJob = currentJob
  },
  'saveRelateJobs'(state, relateJobs) {
    state.relateJobs = relateJobs
  },
  'saveCompareResult'(state, compareResult) {
    state.compareResult = compareResult
  },
  'saveJobApply'(state, jobApply) {
    state.jobApply = jobApply
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
