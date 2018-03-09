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

export function fetchCompanyInfoByName(callback, companyName) {
  axios.get('/companies/name', {
    params: {
      companyName: companyName
    }
  })
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
      // console.error('relatedCompanies', response.data)
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
      size: 10,
      page: searchInfo.page
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
