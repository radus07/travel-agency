const express = require('express');

const router = express.Router();
const accountService = require('../../service/account.service');

router.get('/', (req, res) => {
  accountService.getAllAccounts()
    .then((result) => {
      res.json(result);
    });
});

router.get('/:id', (req, res) => {
  accountService.getAccountById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch(() => {
      res.json(404);
    });
});

router.get('/:username/:password', (req, res) => {
  accountService.getAccountByUsernameAndPassword(req.params.username, req.params.password)
    .then((result) => {
      res.json(result);
    });
});

router.put('/save', (req, res) => {
  accountService.saveAccount(req.body)
    .then((result) => {
      res.json(result);
    });
});

router.post('/update', (req, res) => {
  accountService.updateAccount(req.body)
    .then((result) => {
      res.json(result);
    });
});

router.delete('/delete/:id', (req, res) => {
  accountService.deleteAccount(req.params.id)
    .then((result) => {
      res.json(result);
    });
});

module.exports = router;
