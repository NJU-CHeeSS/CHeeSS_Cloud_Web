import axios from 'axios'

export function fetchTreatmentInfo(callback) {

  axios.get('/jobs/analyzeTreatment')
    .then(function (response) {
      console.log(response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
