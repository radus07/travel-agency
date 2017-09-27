var express = require('express');
var router = express.Router();
var accountService = require('../../service/account.service');

router.get('/publicDetails/:id', (req, res) => {
  accountService.getAccountById(req.params.id)
    .then(result => {
      res.json({ status: 200, data: getPublicDetails(result) });
    })
    .catch(err => {
      res.json(404);
    });
});

router.get('/personalDetails/:id', (req, res) => {
  accountService.getAccountById(req.params.id)
    .then(result => {
      res.json({ status: 200, data: result });
    })
    .catch(err => {
      res.json(404);
    });
});

function getPublicDetails(account) {
  return {
    id: account.id,
    firstName: account.firstName,
    lastName: account.lastName,
    isEnabled: account.isEnabled,
    role: account.role.code
  }
}

module.exports = router;