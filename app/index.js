const express = require('express')
const morgan = require('morgan')

const { port, scope, username, emailUserId, token, validateToken } = require('./config')

const oAuthAuthorize = require('./oauth/authorize')
const oAuthToken = require('./oauth/token')
const oAuthGetUserDetails = require('./oauth/user')
const Appointment = require('./resources/appointment')
const Patient = require('./resources/patient')
const parseFormData = require('./form-data/parse')
const catchAllErrors = require('./errors/catch-all')

const app = express()
app.use(morgan('dev'))
app.use(function(req, res, next) {
  res.set("Content-Type","application/json; charset=UTF-8");
  next();
})

app.get('/mh/authorize', oAuthAuthorize())
app.post('/mh/token', parseFormData(), oAuthToken())
app.get('/mh/userinfo', oAuthGetUserDetails(token, validateToken === 'true'))
app.get('/mh/fhir/Appointment', Appointment())
app.get('/mh/fhir/Patient/:patientId', Patient())

app.use(catchAllErrors())

const server = app.listen(port, "127.0.0.1", () => {
  console.log(`listening on port: ${port}`)

})

module.exports = server
