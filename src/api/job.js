import axios from 'axios'

export function fetchJobList(callback, searchInfo) {
  axios.get('/jobs/search', {
    params: {
      order: searchInfo.order,
      size: 10,
      page: searchInfo.page,
      conditionBean: searchInfo.conditionBean
    }
  })
    .then(function (response) {
      console.log('jobList', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchJobInfo(callback, jobId) {
  axios.get(`/jobs/${jobId}`)
    .then(function (response) {
      console.log('jobInfo', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchRelateJobs(callback, jobId) {
  axios.get(`/jobs/${jobId}/relate`)
    .then(function (response) {
      console.log('relateJobs', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchCompareResult(callback, jobIds) {
  axios.get('/jobs/compare', {
    params: {
      jobId1: jobIds.jobId1,
      jobId2: jobIds.jobId2
    }
  })
    .then(function (response) {
      console.log('compareResult', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
