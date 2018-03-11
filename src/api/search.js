import axios from 'axios'

var root = process.env.API_HOST

export function fetchJobSearchResult(callback, searchInfo) {
  axios.get('/jobs', {
    params: {
      keyword: searchInfo.keyword,
      order: '',
      page: searchInfo.page,
      size: 10
    }
  })
    .then(function (response) {
      console.log('jobSearchResult', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function fetchCompanySearchResult(callback, searchInfo) {
  axios.get('/companies/search', {
    params: {
      keyword: searchInfo.keyword,
      page: searchInfo.page,
      size: 10
    }
  })
    .then(function (response) {
      console.log('companySearchResult', response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
