import * as treatmentApi from '../../api/treatment'

const state = {
  treatment: ''
}

// actions
const actions = {
  fetchTreatmentInfo({commit}) {
    treatmentApi.fetchTreatmentInfo(data => {
      commit('saveTreatmentInfo', data)
      console.log(data)
    })
  }
}

// mutations 必须同步
const mutations = {
  'saveTreatmentInfo'(state, treatment) {
    state.treatment = treatment
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
