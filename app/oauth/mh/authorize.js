const querystring = require('querystring')

const authorize = () => {
  return function (req, res, next) {
    const { redirect_uri: redirectUri, scope, code_challenge: codeChallenge } = req.query

    console.log(req.query)
    code=codeChallenge

    if (redirectUri && scope && codeChallenge) {
      return res.redirect(`${redirectUri}?${querystring.stringify({ scope, codeChallenge, code })}`)
    }

    return next(Error('Please provide redirect_uri, scope and code params'))
  }
}

module.exports = authorize
