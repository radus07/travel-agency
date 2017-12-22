const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const accountService = require('../../service/account.service');

router.post('/', (req, res) => {
  accountService.getAccountByUsernameAndPassword(req.body.username, req.body.password)
    .then((result) => {
      const token = jwt.sign({ account_id: result.dataValues.id }, 'secretWord');
      res.send({ status: 200, data: token });
    })
    .catch(() => {
      res.json(404);
    });
});

// router.get('/userDetails/:id', (req, res) => {
//  accountService.getAccountById(req.params.id, (result) => {
// res.json(new Buffer(JSON.stringify(getPublicDetailsForUser(result))).toString('base64'));
// });
// });

// function getPublicDetailsForUser(user) {
//   return {
//     user_id: user.id,
//     user_isEnabled: user.isEnabled,
//     user_role: user.role.name
//   }
// }

module.exports = router;
