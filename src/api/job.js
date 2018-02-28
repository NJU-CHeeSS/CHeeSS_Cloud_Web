import axios from 'axios'

export function fetchJobList (callback, searchInfo) {

  axios.get('/jobs/search', {
    params: {
      keyword: searchInfo.keyword,
      order: searchInfo.order,
      size: searchInfo.size,
      page: searchInfo.page
    }
  })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
