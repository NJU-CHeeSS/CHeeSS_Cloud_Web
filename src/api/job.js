import axios from 'axios'

export function fetchJobList(callback, searchInfo) {
  axios.get('/jobs/search', {
    params: {
      keyword: searchInfo.keyword,
      // order: searchInfo.order,
      // size: 10,
      // page: searchInfo.page
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
