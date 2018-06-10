const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

// Logging middleware
app.use(morgan('dev'))

//Static middleware
app.use(express.static(path.join(__dirname, '../public')))

//Body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//API routing
app.use('/api', require('./api'))

//Not an API request; send index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

//Error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})
