import * as skillApi from '../../api/skill'

const state = {
  keywords: null,
  jobType: ''
}

// actions
const actions = {
  fetchSkillInfo({commit}, {searchInfo}) {
    skillApi.fetchSkillInfo(data => {
      commit('saveSkillInfo', data.keywords)
      console.log(data.keywords)
    }, searchInfo)
  }
}

// mutations 必须同步
const mutations = {
  'saveSkillInfo'(state, keywords) {
    state.keywords = keywords
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
