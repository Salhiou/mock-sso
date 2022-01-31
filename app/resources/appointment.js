
const appointment = () => {
  return function (req, res, next) {

    res.set("Content-Type","application/fhir+json; charset=UTF-8");

    const response = {
      "resourceType":"Bundle",
      "id":"f31accf3-b57d-432a-80cd-0376bc16af03",
     "meta":{"lastUpdated":"2022-01-23T19:16:28.945+00:00"},
     "type":"searchset",
     "total":1,
     "link":[{"relation":"self","url":"http://fhir-demo.bss.h4p.fr/fhir/Appointment?patient=610218472&status=booked"}],
     "entry":[{"fullUrl":"http://fhir-demo.bss.h4p.fr/fhir/Appointment/27eb21f7-68f4-4b44-8d49-5466e89e8272",
      "resource":{"resourceType":"Appointment","id":"27eb21f7-68f4-4b44-8d49-5466e89e8272",
      "meta":{"versionId":"1","lastUpdated":"2022-01-10T16:39:21.238+00:00","source":"#23BLcSVbqpX4xejw"},
      "identifier":[{"system":"http://toma.h4p.fr/appointment-id","value":"PFEIa5914d074b0f2e25a5f6eaafd628e7e4"}],
      "status":"booked",
      "serviceType":[{"coding":[{"system":"http://h4p.fr/knowledge/consultation","code":"20596112","display":"Teleconsultation"}]}],
      "description":"Teleconsultation",
      "start":"2022-01-12T00:00:00+01:00",
      "end":"2022-02-12T00:00:00+01:00",
      "created":"2022-01-10T17:19:30+01:00",
      "participant":[{"actor":{"reference":"Patient/610218472"},
      "required":"required","status":"accepted"},
      {"actor":{"reference":"Location/bf951286-52d0-43a3-9de4-5a0c6b780e87","display":"L'entité Livi"},
      "required":"required","status":"accepted"}]},
      "search":{"mode":"match"}}]};

    return res.status(200).send(response)
  }
}

module.exports = appointment
