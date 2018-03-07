import axios from 'axios'

export function fetchSkillInfo(callback, searchInfo) {

  axios.get('/jobs/skill', {
    params: {
      jobType: searchInfo.jobType
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
