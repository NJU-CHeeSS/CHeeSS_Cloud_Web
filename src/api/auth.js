import axios from 'axios'

export function signIn(callback, body) {
  axios.post('/sign-in',
    body,
    {
      headers: {'Content-Type': 'application/json'}
    }
  )
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function signUp(callback, body) {
  axios.post('/sign-up',
    body,
    {
      headers: {'Content-Type': 'application/json'}
    })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function currentUser(callback, token) {
  axios.get('',
    {
      params: {
        token: token
      }
    })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function editUserInfo(callback, userInfo) {
  axios.post('/info',
    userInfo,
    {
      headers: {'Content-Type': 'application/json'}
    })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
