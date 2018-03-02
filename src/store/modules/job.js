import * as jobApi from '../../api/job'

const state = {
  type: 'filter',
  jobList: [],
  filterOrder: '发布日期',
  filterInfo: {
    place: '不限',
    releaseDate: '不限'
  },
  currentPage: 1,
  currentJob: {}
}

// actions 可异步
const actions = {
  fetchJobList({commit}, {searchInfo, onSuccess, onError}) {
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
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
