import axios from 'axios'

export function fetchPopularCompanies(callback) {
  axios.get('/companies/popular')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchCompanyInfo(callback, companyId) {
  axios.get('/companies', {
    params: {
      companyId: companyId
    }
  })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchCompanyJobs(callback, companyId) {
  axios.get(`/companies?companyId=${companyId}/jobs`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchRelatedCompanies(callback, companyId) {
  axios.get(`/companies?companyId=${companyId}/related`)
    .then(function (response) {
      console.log(response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function searchCompany(callback, searchInfo) {
  axios.get('companies/search', {
    params: {
      keyword: searchInfo.keyword,
      size: 48,
      page: 1
    }
  })
    .then(function (response) {
      console.log(response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
