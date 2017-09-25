var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var app = require('../server');
var userService = require('../service/user.service');

router.post('/', (req, res) => {
  userService.getUserByUsernameAndPassword(req.body.username, req.body.password, (result) => {
    if (result === null) {
      res.send({ status: 404 });
    } else {
      var user = result.dataValues;
      var token = jwt.sign(createJWT(user), 'secretWord');
      res.send({ status: 200, data: token });
    }
  });

  function createJWT(user) {
    return {
      user_id: user.id,
      user_isEnabled: user.isEnabled,
      user_role: user.role.name
    }
  }
});

module.exports = router;