import axios from 'axios'

export function fetchPopularCompanies(callback) {
  axios.get('/company/popular')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
