import axios from 'axios'

var root = process.env.API_HOST

export function fetchPopularCompanies(callback) {
  axios.get(root + '/companies/popular')
    .then(function (response) {
      console.log('popular', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchCompanyInfo(callback, companyId) {
  axios.get(root + `/companies/id/${companyId}`)
    .then(function (response) {
      console.log('companyInfo', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchCompanyInfoByName(callback, companyName) {
  axios.get(root + '/companies/name', {
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
  axios.get(root + `/companies/${companyId}/jobs`)
    .then(function (response) {
      console.log('companyJobs', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchRelatedCompanies(callback, companyId) {
  axios.get(root + `/companies/${companyId}/relate`)
    .then(function (response) {
      // console.error('relatedCompanies', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function searchCompany(callback, searchInfo) {
  axios.get(root + '/companies/search', {
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
  axios.get(root + `/companies/rank/${industry}`)
    .then(function (response) {
      console.log('companyRank', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchCompanySalary(callback, companyId) {
  axios.get(root + `/companies/${companyId}/analyse`)
    .then(function (response) {
      console.log('companySalary', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
