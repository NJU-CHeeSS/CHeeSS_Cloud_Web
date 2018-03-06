import axios from 'axios'

export function fetchPopularCompanies(callback) {
  axios.get('/companies/popular')
    .then(function (response) {
      console.log('popular', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchCompanyInfo(callback, companyId) {
  axios.get(`/companies/id/${companyId}`)
    .then(function (response) {
      console.log('companyInfo', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchCompanyJobs(callback, companyId) {
  axios.get(`/companies/${companyId}/jobs`)
    .then(function (response) {
      console.log('companyJobs', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchRelatedCompanies(callback, companyId) {
  axios.get(`/companies/${companyId}/relate`)
    .then(function (response) {
      console.log('relatedCompanies', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function searchCompany(callback, searchInfo) {
  axios.get('/companies/search', {
    params: {
      keyword: searchInfo.keyword,
      size: 48,
      page: 1
    }
  })
    .then(function (response) {
      console.log('search', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchCompanyRank(callback, industry) {
  axios.get(`/companies/rank/${industry}`)
    .then(function (response) {
      console.log('companyRank', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchCompanySalary(callback, companyId) {
  axios.get(`/companies/${companyId}/analyse`)
    .then(function (response) {
      console.log('companySalary', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
