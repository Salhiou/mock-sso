# Taken from https://github.com/uktrade/mock-sso

# Mock SSO

A simple app for testing the cogs involved with SSO integration. Simply replies back with the Bearer you send.

## Table of contents
- [Kudos](#kudos)
- [Environment variables](#environment-variables)
- [Development](#development)
  - [Setup](#setup)
  - [Running](#running)
  - [Tests](#tests)
  - [Linting](#linting)
- [Endpoints](#endpoints)
  - [/mh/authorize](#get-mhauthorize)
    - [Query parameters](#query-parameters)
  - [/mh/token](#post-mhtoken)
    - [Body parameters](#body-parameters)
  - [/mh/userinfo](#get-mhuserinfo)
  - [/mh/Appointment](#get-mhappointment)
  - [/mh/Patient/:patientId](#get-mhpatient)

- [Docker](#docker)
  - [Automated build](#automated-build)

## Kudos
Thanks for the thoughts and influence from [r4vi/fakesso](https://github.com/r4vi/fakesso)

## Environment variables
| Name                    |  Description                                    |
|:------------------------|:------------------------------------------------|
| MOCK_SSO_PORT           | The applications port, defaults to `8888`       |

## Development
### Setup
Recommended setup
- [Node.js](https://nodejs.org/en/) >= 10.16.0
- [npm](https://www.npmjs.com/) >= 6.9.0

To install multiple versions of Node.js, you may find it easier to use a node version manager
- [nvm](https://github.com/creationix/nvm)
- [n](https://github.com/tj/n)

To install dependencies
```
$ npm i
```

## Running
To start the application
```
$ npm start
```

### Tests
To run tests
```
$ npm test
```

### Linting
To run linting
```
$ npm run lint
```

## Endpoints


### /mh/authorize
A `GET` request to `/mh/authorize` will redirect you back to `redirect_uri?state=<state>&code=<code>&code_challenge=<code>`
#### Query parameters
| Name          | Description                                 |
|:--------------|:--------------------------------------------|
|`redirect_uri` | Your applications OAuth callback url        |
|`state`        | Your applications stateId                   |
|`code`         | The token you wish to be sent back from SSO |

### /mh/token

A `POST` request to `/mh/token` will reply with you back to you with a JSON response of
```
{
  access_token: <code>,
  token_type: 'Bearer',
}
```
#### Body parameters
| Name          | Description                                 |
|:--------------|:--------------------------------------------|
|`code`         | The token you wish to be sent back from SSO |

### /mh/userinfo
A `GET` request to `/mh/userinfo` will return a dummy user Id

A `statusCode` of 200 and a JSON response of
```
{
 "RCUID": "1234567890",
}
```

### /mh/Appointment
A `GET` request to `/mh/Appointment` will return a dummy Appointment

A `statusCode` of 200 and a JSON response of
```
{
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
      "search":{"mode":"match"}}]
}
```


### /mh/Patient/:patientId'
A `GET` request to `/mh/Patient/:patientId'` will return a dummy Patient

A `statusCode` of 200 and a JSON response of
```
{
    "resourceType":"Patient",
    "id":"610218472",
    "meta":{"versionId":"1","lastUpdated":"2022-01-10T16:32:49.312+00:00","source":"#vnZPYGWKdIpNTgvG"},
    "text":{"status":"generated","div":""},
    "identifier":[{"use":"official","system":"http://malakoffhumanis.com/rcu-id","value":"610218472"},
    {"use":"usual",
    "system":"http://toma.h4p.fr/patient-id","value":"107593ae-2969-4139-89ce-772e9eb9d26d"}],
    "name":[{"use":"official","family":"GUYEN","given":["CHARLES PHUC-ANH"]},{"use":"usual","family":"GUYEN","given":["CHARLES PHUC-ANH"]}],
    "telecom":[{"system":"phone","value":"+33778196308","use":"mobile"},{"system":"email","value":"test_9316@yopmail.com","use":"home"}],
    "gender":"male","birthDate":"1972-01-15","address":[{"use":"home","type":"both","text":"6 Rue DE FONTAINE GRELOT, 92340 BOURG LA REINE","line":["6 Rue DE FONTAINE GRELOT"],
    "city":"BOURG LA REINE","postalCode":"92340","period":{"start":"2014-11-18"}}],
    "managingOrganization":{"reference":"Organization/b447151d-e356-421b-837d-a42b82c8b9ad","display":"Organization Malakoff Humanis"}
}
```


## Docker
To build a docker image
```
$ docker build -t sso-mock .
```

To run locally
```
$ docker run -p 8080:8080 -d sso-mock
```

## Docker Compose

To run this project under docker-compose, do the following:

1.  Create a `.env` file

    ```shell
    cp sample.env .env
    ```

2.  Set the environment variables within your `.env` file as appropriate.

3.  Run `docker-compose up`

### Automated build
There is also a docker automated build setup for this repository. This can be found at https://hub.docker.com/r/ukti/mock-sso
