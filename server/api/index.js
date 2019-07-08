const router = require('express').Router()
const axios = require('axios')
require('dotenv').config()

router.use('/animals', require('./animals'))

router.get('/token', (req, res) => {
  const dataString = `grant_type=client_credentials&client_id=${
    process.env.PETFINDER_API_KEY
  }&client_secret=${process.env.PETFINDER_API_SECRET}`

  axios({
    method: 'post',
    url: 'https://api.petfinder.com/v2/oauth2/token',
    data: dataString,
  })
    .then((result) => {
      const token = result.data
      res.send(token)
    })
    .catch(err => console.log(err))
})

// API route not found
router.use((req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

module.exports = router
