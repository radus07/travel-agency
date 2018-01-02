const jwt = require('jsonwebtoken')
const accountService = require('../../service/account.service')

module.exports = (app) => {
  app.post('/api/authenticate', (req, res) => {
    accountService.getAccountByUsernameAndPassword(req.body.username, req.body.password)
      .then((result) => {
        const token = jwt.sign(
          {account_id: result.dataValues.id},
          'secretWord',
          {expiresIn: 86400} /* 24 hours */
        )
        res.json(token)
      })
      .catch(() => {
        res.json(404)
      })
  })
}
