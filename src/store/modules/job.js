import * as jobApi from '../../api/job'

const state = {
  jobList: [],
  filterOrder: '发布日期',
  filterInfo: {
    place: '不限',
    releaseDate: '不限'
  },
  currentPage: 1,
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
}

// mutations 必须同步
const mutations = {
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
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
