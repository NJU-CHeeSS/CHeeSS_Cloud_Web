import axios from 'axios'

export function signIn(callback, body) {
  axios.post('/users/sign-in',
    body,
    {
      headers: {'Content-Type': 'application/json'}
    }
  )
    .then(function (response) {
      console.log('sign-in', body, response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function signUp(callback, body) {
  axios.post('/users/sign-up',
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
  axios.get('/users',
    {
      headers: {'Authorization': token}
    })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function editUserInfo(callback, userInfo) {
  axios.post('/users/info',
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
