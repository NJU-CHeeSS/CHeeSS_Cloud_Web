import * as skillApi from '../../api/skill'

const state = {
  skillInfo: {
    'industry': '',
    'job': '',
    'keywords': [],
    'figure': []
  }
}

// actions
const actions = {
  fetchSkillInfo ({commit}) {
    skillApi.fetchSkillInfo((data) => {
      commit('fetchSkillInfo', {skillInfo: data})
    })
  }
}

export default {
  state,
  actions
}
