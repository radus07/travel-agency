const accountService = require('../../service/account.service')

module.exports = (app) => {
  app.get('/api/accounts/', (req, res) => {
    accountService.getAllAccounts()
      .then((result) => {
        res.json(result)
      })
  })

  app.get('/api/accounts/:id', (req, res) => {
    accountService.getAccountById(req.params.id)
      .then((result) => {
        res.json(result)
      })
      .catch(() => {
        res.json(404)
      })
  })

  app.get('/api/accounts/:username/:password', (req, res) => {
    accountService.getAccountByUsernameAndPassword(req.params.username, req.params.password)
      .then((result) => {
        res.json(result)
      })
  })

  app.put('/api/accounts/save', (req, res) => {
    accountService.saveAccount(req.body)
      .then((result) => {
        res.json(result)
      })
  })

  app.post('/api/accounts/update', (req, res) => {
    accountService.updateAccount(req.body)
      .then((result) => {
        res.json(result)
      })
  })

  app.delete('/api/accounts/delete/:id', (req, res) => {
    accountService.deleteAccount(req.params.id)
      .then((result) => {
        res.json(result)
      })
  })
}
