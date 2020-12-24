const got = require('got')

module.exports = async (req, res) => {
  const apiURL = 'https://laperm-test-cloud-endpoints-bqtjhsqzlq-an.a.run.app/'

  const clientID = process.env.AUTH0_CLIENT_ID
  const clientSecret = process.env.AUTH0_CLIENT_SECRET
  const response = await got.post('https://azoom.jp.auth0.com/oauth/token', {
    json: {
      client_id: clientID,
      client_secret: clientSecret,
      audience: apiURL,
      grant_type: 'client_credentials',
    },
    responseType: 'json',
  })
  const accessToken = response.body
  return res.send({ accessToken })
}
