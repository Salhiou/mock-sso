const express = require('express')
const morgan = require('morgan')

const { port, scope, username, emailUserId, token, validateToken } = require('./config')

const oAuthAuthorize = require('./oauth/mh/authorize')
const oAuthToken = require('./oauth/mh/token')
const oAuthGetUserDetails = require('./oauth/mh/user')
const Appointment = require('./resources/mh/appointment')
const Patient = require('./resources/mh/patient')
const EncounterUpdate = require('./resources/mh/encounterUpdate')
const EncounterCreate= require('./resources/mh/encounterCreate')
const Adherent = require('./resources/april/adherent')
const Eligibility = require('./resources/april/eligibility')
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
app.post('/mh/fhir/Encounter', parseFormData(), EncounterCreate())
app.put('/mh/fhir/Encounter/:id', parseFormData(), EncounterUpdate())
app.get('/april/fr/enrollment-tiers/teleconsultation/individual-healthcare/v1/clients/adherents', Adherent())
app.get('/april/fr/enrollment-tiers/teleconsultation/individual-healthcare/v1/teleselections/eligibilites', Eligibility())


app.use(catchAllErrors())

const server = app.listen(port, "127.0.0.1", () => {
  console.log(`listening on port: ${port}`)

})

module.exports = server
