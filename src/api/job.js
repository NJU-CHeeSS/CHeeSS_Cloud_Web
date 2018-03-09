import axios from 'axios'

export function fetchJobList(callback, searchInfo) {
  console.error('searchInfo', searchInfo)
  axios.get('/jobs/search', {
    params: {
      order: searchInfo.order,
      size: 10,
      page: searchInfo.page,
      location: searchInfo.location,
      diploma: searchInfo.diploma,
      earlyReleaseDate: searchInfo.earlyReleaseDate,
      property: searchInfo.property
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

export function fetchJobApply(callback, jobId) {
  axios.get('/jobs/apply', {
    params: {
      jobId: jobId
    }
  })
    .then(function (response) {
      console.log('jobApply', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchRecommendJobList(callback, searchInfo) {
  axios.get(`/users/${searchInfo.userId}/jobs`, {
    params: {
      order: searchInfo.order,
      size: 10,
      page: searchInfo.page
    },
    headers: {'Authorization': searchInfo.token}
  })
    .then(function (response) {
      console.log('recommendJobList', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
