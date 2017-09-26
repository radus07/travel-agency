var express = require('express');
var router = express.Router();
var accountService = require('../../service/account.service');

router.get('/:id', (req, res) => {
  /**
   * Find account by id in the myAccountService and return it.
   */
  accountService.getAccountById(req.params.id, (result) => {
    res.json(result);
  });
});

module.exports = router;