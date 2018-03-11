import axios from 'axios'

var root = process.env.API_HOST

export function fetchTreatmentInfo(callback, searchInfo) {

  axios.get('/jobs/analyzeTreatment', {
    params: {
      jobType: searchInfo.jobType,
      city: searchInfo.city
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
