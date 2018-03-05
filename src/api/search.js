import axios from 'axios'

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
      console.log(response.data)
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
      console.log(response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
