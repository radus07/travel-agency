const jwt = require('jsonwebtoken')

function validateToken (req, res, next, token) {
  if (token && token.split(' ')[0] === 'Bearer') {
    jwt.verify(token.split(' ')[1], 'secretWord', (err, decoded) => {
      if (err) {
        return res.json(401)
      }
      req.decoded = decoded
      next()
    })
  } else {
    return res.json(401)
  }
}

module.exports = (app) => {
  /**
   * Add here public routes
   */
  require('./authentication/authentication.route')(app)

  app.use((req, res, next) => {
    const token = req.headers['authorization']
    validateToken(req, res, next, token)
  })

  /**
   * Add here protected with token routes
   */
  require('./my_account/myAccount.route')(app)

  /**
   * Add permissions for routes by user role.
   */
  require('./admin/account.route')(app)
  require('./admin/role.route')(app)
}
