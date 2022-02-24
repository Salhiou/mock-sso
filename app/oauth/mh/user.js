const bearerPrefix = 'Bearer '

function invalidRequest (res, error) {
  console.log('Invalid request: ' + error)
  return res.status(400).json({ error: 'invalid_request' })
}

const user = (configToken, validateToken) => {
  return function (req, res, next) {


    const response = {
      "RCUID": "1234567890",
    }

    return res.status(200).send(response)
  }
}

module.exports = user
