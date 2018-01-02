const accountService = require('../../service/account.service')

function getPublicDetails (account) {
  return {
    id: account.id,
    firstName: account.firstName,
    lastName: account.lastName,
    isEnabled: account.isEnabled,
    role: account.role.code
  }
}

module.exports = (app) => {
  app.get('/api/myAccount/publicDetails/:id', (req, res) => {
    accountService.getAccountById(req.params.id)
      .then((result) => {
        res.json({ status: 200, data: getPublicDetails(result) })
      })
      .catch(() => {
        res.json(404)
      })
  })

  app.get('/api/myAccount/personalDetails/:id', (req, res) => {
    accountService.getAccountById(req.params.id)
      .then((result) => {
        res.json({ status: 200, data: result })
      })
      .catch(() => {
        res.json(404)
      })
  })
}
