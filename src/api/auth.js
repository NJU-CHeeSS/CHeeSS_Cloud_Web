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
  console.log('sign up body: ', body)
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
  console.log('userInfo: ', userInfo)
  axios.post('/users/info',
    userInfo,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': userInfo.token
      }
    })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function modifyPassword(callback, passwordInfo) {
  axios.post('/users/password',
    passwordInfo,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': passwordInfo.token
      }
    })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function followCompany(callback, companyInfo) {
  axios.get('/users/follow', {
    params: {
      companyId: companyInfo.companyId
    },
    headers: {
      'Authorization': companyInfo.token
    }
  })
    .then(function (response) {
      console.log('followCompany', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function unfollowCompany(callback, companyInfo) {
  axios.get('/users/unfollow', {
    params: {
      companyId: companyInfo.companyId
    },
    headers: {
      'Authorization': companyInfo.token
    }
  })
    .then(function (response) {
      console.log('unfollowCompany', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function checkFollowCompany(callback, companyInfo) {
  axios.get('/users/checkFollow', {
    params: {
      companyId: companyInfo.companyId
    },
    headers: {
      'Authorization': companyInfo.token
    }
  })
    .then(function (response) {
      console.log('checkFollowCompany', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function applyJob(callback, jobInfo) {
  axios.get('/users/apply', {
    params: {
      jobId: jobInfo.jobId
    },
    headers: {
      'Authorization': jobInfo.token
    }
  })
    .then(function (response) {
      console.log('applyJob', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function checkApplyJob(callback, jobInfo) {
  axios.get('/users/checkApply', {
    params: {
      jobId: jobInfo.jobId
    },
    headers: {
      'Authorization': jobInfo.token
    }
  })
    .then(function (response) {
      console.log('checkApplyJob', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
