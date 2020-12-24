const express = require('express')
const promiseRouter = require('express-promise-router')
const nnnRouter = require('nnn-router')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const corsOptionsDelegate = function (req, callback) {
  const corsOption = { origin: true }

  return callback(null, corsOption)
}

app.use(cors(corsOptionsDelegate))
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))
app.use(nnnRouter({ routeDir: '/routes', baseRouter: promiseRouter() }))

const port = process.env.PORT || 8002

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
