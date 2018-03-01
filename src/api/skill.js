import axios from 'axios'

export function fetchSkillInfo(callback) {

  axios.get('/jobs/skill')
    .then(function (response) {
      console.log(response.data)
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
