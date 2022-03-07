const encounter = () => {
  return function (req, res, next) {

    res.set("Content-Type","application/fhir+json; charset=UTF-8");


      const response = {
       "resourceType":"Encounter",
       "id":"1b54a5e5-22cc-4d75-9f70-5797494fedbf",
       "identifier":[
          {
             "use":"usual",
             "system":"http://livi.fr/meeting-identifier",
             "value":"ebba9b3c-b80e-4986-a84b-f99299d1c679"
          }
       ],
       "status":"planned",
       "class":{
          "system":"http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code":"AMB"
       },
       "type":[
          {
             "coding":[
                {
                   "system":"http://h4p.fr/knowledge/consultation",
                   "code":"20596112",
                   "display":"Téléconsultation"
                }
             ]
          }
       ],
       "subject":{
          "reference":"Patient/1234567890",
          "display":"string string"
       },
       "appointment":[
          {
             "reference":"Appointment/27eb21f7-68f4-4b44-8d49-5466e89e8272"
          }
       ],
       "period":{
          "start":"2022-03-07T15:40:00+00:00",
          "end":"2022-03-07T15:55:00+00:00"
       }
    }

    return res.status(200).send(response)


  }
}

module.exports = encounter