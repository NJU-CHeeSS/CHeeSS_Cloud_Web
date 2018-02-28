import * as jobApi from '../../api/job'

const state = {
  jobList: [],
  filterOrder: '发布日期'
}

// actions 可异步
const actions = {
  fetchJobList ({commit}, {searchInfo, onSuccess, onError}) {
    jobApi.fetchJobList((data => {
      if (data.message === 'success') {
        if (onSuccess) {
          commit('saveJobList', data.jobList)
          onSuccess('删除成功！')
        }
      } else {
        onError(data.message)
      }
    }), searchInfo)
  },
}

// mutations 必须同步
const mutations = {
  'saveJobList' (state, jobList) {
    state.jobList = jobList
  },
  'saveFilterOrder' (state, filterOrder) {
    state.filterOrder = filterOrder
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
