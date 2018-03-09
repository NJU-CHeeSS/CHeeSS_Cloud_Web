import * as authApi from '../../api/auth'

const state = {
  user: null,
  checkFollow: false,
  checkApply: false,
  followCompanies: []
}

// actions 可异步
const actions = {

  signUp({commit}, {body, onSuccess, onError}) {
    authApi.signUp(data => {
      if (data.result === false) {
        onError(data.message)
      } else {
        if (onSuccess) {
          console.log('success sign up !')
          onSuccess(data.result)
        }
      }
    }, body)
  },

  signIn({dispatch}, {body, onSuccess, onError}) {
    authApi.signIn(data => {
      if (data.result === false) {
        onError(data.message)
      } else {
        localStorage.setItem('token', data.result)
        console.log(data)
        dispatch('fetchUser', {onSuccess})
      }
    }, body)
  },

  fetchUser({commit, state}, {onSuccess, onError}) {
    let token = localStorage.getItem('token')
    authApi.currentUser(data => {
      // console.error('fetchUser', data)
      commit('saveUser', data)
      if (data !== null && data !== undefined) {
        if (onSuccess) {
          onSuccess(state.user.username)
        }
      } else {
        onError('登录已过期，请重新登录！')
      }
    }, token)
  },

  refreshUser({dispatch}, {onSuccess, onError}) {
    const token = localStorage.getItem('token')
    if (token !== null) {
      dispatch('fetchUser', {onSuccess, onError})
    }
  },


  editUserInfo({state}, {userInfo, onSuccess, onError}) {
    let token = localStorage.getItem('token')
    userInfo.token = token
    authApi.editUserInfo((data => {
      if (data.result === true) {
        if (onSuccess) {
          onSuccess('修改成功！')
        }
      } else {
        onError(data.message)
      }
    }), userInfo)
  },

  signOut({commit}, {onSuccess}) {
    const username = state.user.username
    localStorage.setItem('token', null)
    commit('saveUser', null)
    if (onSuccess) {
      onSuccess(username)
    }
  },

  modifyPassword({commit, rootState}, {passwordInfo, onSuccess, onError}) {
    let token = localStorage.getItem('token')
    passwordInfo.token = token
    authApi.modifyPassword(data => {
      if (data.result === true) {
        if (onSuccess) {
          onSuccess('修改成功！')
        }
      } else {
        onError(data.message)
      }
    }, passwordInfo)
  },

  followCompany({commit}, {companyInfo, onSuccess, onError}) {
    companyInfo.token = localStorage.getItem('token')
    authApi.followCompany(data => {
      if (data.message !== 'Success') {
        onError(data.result)
      } else {
        onSuccess(data.result)
      }
    }, companyInfo)
  },

  unfollowCompany({commit}, {companyInfo, onSuccess, onError}) {
    companyInfo.token = localStorage.getItem('token')
    authApi.unfollowCompany(data => {
      if (data.message !== 'Success') {
        onError(data.result)
      } else {
        onSuccess(data.result)
      }
    }, companyInfo)
  },

  checkFollowCompany({commit}, companyInfo) {
    companyInfo.token = localStorage.getItem('token')
    authApi.checkFollowCompany(data => {
      commit('saveCheckFollow', data)
    }, companyInfo)
  },

  applyJob({commit}, {jobInfo, onSuccess, onError}) {
    jobInfo.token = localStorage.getItem('token')
    authApi.applyJob(data => {
      if (data.result !== true) {
        onError(data.message)
      } else {
        onSuccess(data.result)
      }
    }, jobInfo)
  },

  checkApplyJob({commit}, jobInfo) {
    jobInfo.token = localStorage.getItem('token')
    authApi.checkApplyJob(data => {
      commit('saveCheckApply', data)
    }, jobInfo)
  },

  fetchFollowCompanies({commit}, token) {
    token = localStorage.getItem('token')
    authApi.fetchFollowCompanies(data => {
      commit('saveFollowCompanies', data)
    }, token)
  }
}

// mutations 必须同步
const mutations = {
  'saveUser'(state, user) {
    state.user = user
  },
  'saveCheckFollow'(state, checkFollow) {
    state.checkFollow = checkFollow
  },
  'saveCheckApply'(state, checkApply) {
    state.checkApply = checkApply
  },
  'saveFollowCompanies'(state, followCompanies) {
    state.followCompanies = followCompanies
  },
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
