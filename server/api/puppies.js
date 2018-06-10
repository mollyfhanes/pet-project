const router = require('express').Router()

// matches GET requests to /api/puppies
router.get('/', (req, res, next) => {
  //do db stuff
})

// matches POST requests to /api/puppies
router.post('/', (req, res, next) => {
  //do db stuff
})

// matches PUT requests to /api/puppies
router.put('/:puppyId', (req, res, next) => {
  //do db stuff
})

// matches DELETE requests to /api/puppies
router.delete('/:puppyId', (req, res, next) => {
  //do db stuff
})

module.exports = router
