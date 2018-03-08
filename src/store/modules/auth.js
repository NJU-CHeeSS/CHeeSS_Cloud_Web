import * as authApi from '../../api/auth'

const state = {
  user: null,
}

// actions 可异步
const actions = {

  signUp({commit}, {body, onSuccess, onError}) {
    authApi.signUp(data => {
      if (data.message !== 'Success') {
        onError(data.result)
      } else {
        onSuccess(data.result)
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
    let userId = state.user ? state.user.userId : null
    userInfo.userId = userId
    authApi.editUserInfo((data => {
      if (data.message === 'success') {
        if (onSuccess) {
          onSuccess('修改成功！')
        }
      } else {
        onError(data.message)
      }
    }), userInfo)
  },
}

// mutations 必须同步
const mutations = {
  'saveUser'(state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
