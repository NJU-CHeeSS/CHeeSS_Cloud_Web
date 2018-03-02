import * as skillApi from '../../api/skill'

const state = {
  job: '',
  keywords: []
}

// actions
const actions = {
  fetchSkillInfo({commit}) {
    skillApi.fetchSkillInfo(data => {
      commit('saveSkillInfo', data.keywords)
      console.log(data.keywords)
    })
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
