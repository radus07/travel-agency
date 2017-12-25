const jwt = require('jsonwebtoken')

module.exports = (app) => {
  app.use('/api/authenticate', require('./authentication/authentication.route'))

  function validateToken (req, res, next, token) {
    if (token) {
      jwt.verify(token, 'secretWord', (err, decoded) => {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' })
        }
        req.decoded = decoded
        next()
      })
    } else {
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      })
    }
  }

  app.use((req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    validateToken(req, res, next, token)
  })

  app.use('/api/myAccount', require('./my_account/myAccount.route'))

  /**
   * Add permissions for routes by user role.
   */

  app.use('/api/accounts', require('./admin/account.route'))
  app.use('/api/roles', require('./admin/role.route'))
}
