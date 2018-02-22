import axios from 'axios'

export function fetchSkillInfo (callback) {
  axios.get('/skillInfo')
    .then((response) =>
      callback(response.data)
    )
    .catch(function (error) {
      console.log(error)
    })
}
