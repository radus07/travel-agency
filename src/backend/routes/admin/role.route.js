const roleService = require('../../service/role.service')

module.exports = (app) => {
  app.get('/api/roles/', (req, res) => {
    roleService.getAllRoles()
      .then((result) => {
        res.json(result)
      })
  })

  app.get('/api/roles/:id', (req, res) => {
    roleService.getRoleById(req.params.id)
      .then((result) => {
        res.json(result)
      })
  })

  app.put('/api/roles/save', (req, res) => {
    roleService.saveRole(req.body)
      .then((result) => {
        res.json(result)
      })
  })

  app.post('/api/roles/update', (req, res) => {
    roleService.updateRole(req.body)
      .then((result) => {
        res.json(result)
      })
  })

  app.delete('/api/roles/delete/:id', (req, res) => {
    roleService.deleteRole(req.params.id)
      .then((result) => {
        res.json(result)
      })
  })
}
