import * as jobApi from '../../api/job'

const state = {
  type: 'filter',
  jobList: [],
  filterOrder: '发布日期',
  filterInfo: {
    location: '不限',
    diploma: '不限',
    earlyReleaseDate: '不限',
    property: '不限'
  },
  currentPage: 1,
  currentJob: {},
  relateJobs: [],
  compareResult: {}
}

// actions 可异步
const actions = {
  fetchJobList({commit}, {searchInfo, onSuccess, onError}) {
    console.log('searchInfo', searchInfo)
    jobApi.fetchJobList(data => {
      if (data.message === 'success') {
        if (onSuccess) {
          commit('saveJobList', data.jobList)
          onSuccess('')
        }
      } else {
        onError(data.message)
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
  }
}

// mutations 必须同步
const mutations = {
  'saveType'(state, type) {
    state.type = type
  },
  'saveJobList'(state, jobList) {
    state.jobList = jobList
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
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
