
const patient = () => {
  return function (req, res, next) {
    res.set("Content-Type","application/fhir+json; charset=UTF-8");

    const response = {
   "resourceType":"Patient",
   "id":"610218472",
   "meta":{
      "versionId":"1",
      "lastUpdated":"2022-01-10T16:32:49.312+00:00",
      "source":"#vnZPYGWKdIpNTgvG"
   },
   "text":{
      "status":"generated",
      "div":""
   },
   "identifier":[
      {
         "use":"official",
         "system":"http://malakoffhumanis.com/rcu-id",
         "value":"610218472"
      },
      {
         "use":"usual",
         "system":"http://toma.h4p.fr/patient-id",
         "value":"107593ae-2969-4139-89ce-772e9eb9d26d"
      }
   ],
   "name":[
      {
         "use":"official",
         "family":"GUYEN",
         "given":[
            "CHARLES PHUC-ANH"
         ]
      },
      {
         "use":"usual",
         "family":"GUYEN",
         "given":[
            "CHARLES PHUC-ANH"
         ]
      }
   ],
   "telecom":[
      {
         "system":"phone",
         "value":"+33778196308",
         "use":"mobile"
      },
      {
         "system":"email",
         "value":"test_9316@yopmail.com",
         "use":"home"
      }
   ],
   "gender":"male",
   "birthDate":"1972-01-15",
   "address":[
      {
         "use":"home",
         "type":"both",
         "text":"6 Rue DE FONTAINE GRELOT, 92340 BOURG LA REINE",
         "line":[
            "6 Rue DE FONTAINE GRELOT"
         ],
         "city":"BOURG LA REINE",
         "postalCode":"92340",
         "period":{
            "start":"2014-11-18"
         }
      }
   ],
   "managingOrganization":{
      "reference":"Organization/b447151d-e356-421b-837d-a42b82c8b9ad",
      "display":"Organization Malakoff Humanis"
   }
  };
    
    return res.status(200).send(response)
  }
}

module.exports = patient
