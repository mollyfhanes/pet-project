const router = require('express').Router()
const axios = require('axios')

// matches GET requests to /api/animals
// router.get('/', (req, res, next) => {
//   //do db stuff
// })

// matches POST requests to /api/animals
router.post('/', (req, res) => {
  const { token } = req.body

  axios({
    method: 'get',
    url: 'https://api.petfinder.com/v2/animals',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((result) => {
      const { animals } = result.data
      res.send(animals)
    })
    .catch(err => console.log(err))
})

// matches PUT requests to /api/animals
// router.put('/:puppyId', (req, res, next) => {
//   //do db stuff
// })

// matches DELETE requests to /api/animals
// router.delete('/:puppyId', (req, res, next) => {
//   //do db stuff
// })

module.exports = router
