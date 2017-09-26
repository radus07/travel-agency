var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var app = require('../../server');
var accountService = require('../../service/account.service');

router.post('/', (req, res) => {
  accountService.getAccountByUsernameAndPassword(req.body.username, req.body.password, (result) => {
    if (result === null) {
      res.send({ status: 404 });
    } else {
      var token = jwt.sign({ account_id: result.dataValues.id }, 'secretWord');
      res.send({ status: 200, data: token });
    }
  });
});

// router.get('/userDetails/:id', (req, res) => {
//   accountService.getAccountById(req.params.id, (result) => {
// 		res.json(new Buffer(JSON.stringify(getPublicDetailsForUser(result))).toString('base64'));
// 	});
// });

// function getPublicDetailsForUser(user) {
//   return {
//     user_id: user.id,
//     user_isEnabled: user.isEnabled,
//     user_role: user.role.name
//   }
// }

module.exports = router;