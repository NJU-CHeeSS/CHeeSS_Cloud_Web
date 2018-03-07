import * as treatmentApi from '../../api/treatment'

const state = {
  treatment: null
}

// actions
const actions = {
  fetchTreatmentInfo({commit}, {searchInfo}) {
    treatmentApi.fetchTreatmentInfo(data => {
      commit('saveTreatmentInfo', data)
      console.log(data)
    }, searchInfo)
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
