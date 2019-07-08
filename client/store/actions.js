import axios from 'axios'

const GET_ALL_PETS = 'GET_ALL_PETS'
const GET_TOKEN = 'GET_TOKEN'
const ERROR = 'ERROR'

const getAllPets = token => (dispatch) => {
  axios({
    method: 'post',
    url: '/api/animals',
    data: { token },
  })
    .then((res) => {
      const pets = res.data
      return dispatch({
        type: GET_ALL_PETS,
        payload: pets,
      })
    })
    .catch(err => dispatch({
      type: ERROR,
      payload: err,
    }))
}

const getToken = () => (dispatch) => {
  axios
    .get('/api/token')
    .then((token) => {
      dispatch({
        type: GET_TOKEN,
        payload: token.data.access_token,
      })
    })
    .catch(err => dispatch({
      type: ERROR,
      payload: err,
    }))
}

export default {
  GET_ALL_PETS,
  getAllPets,
  GET_TOKEN,
  getToken,
}
