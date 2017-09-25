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
      if (user.isEnabled === 0) {
        res.send({ status: 403, data: user });
      } else if (user.isEnabled === 1) {
        var token = jwt.sign(user, 'secretWord');
        res.send({ status: 200, data: { user: user, token: token } });
      }
    }
  });
});

module.exports = router;