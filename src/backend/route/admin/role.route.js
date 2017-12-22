const express = require('express');

const router = express.Router();
const roleService = require('../../service/role.service');

router.get('/', (req, res) => {
  roleService.getAllRoles()
    .then((result) => {
      res.json(result);
    });
});

router.get('/:id', (req, res) => {
  roleService.getRoleById(req.params.id)
    .then((result) => {
      res.json(result);
    });
});

router.put('/save', (req, res) => {
  roleService.saveRole(req.body)
    .then((result) => {
      res.json(result);
    });
});

router.post('/update', (req, res) => {
  roleService.updateRole(req.body)
    .then((result) => {
      res.json(result);
    });
});

router.delete('/delete/:id', (req, res) => {
  roleService.deleteRole(req.params.id)
    .then((result) => {
      res.json(result);
    });
});

module.exports = router;
