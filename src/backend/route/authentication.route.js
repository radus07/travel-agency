var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var app = require('../server');
var userService = require('../service/user.service');

router.post('/', (req, res) => {
  var data = req.body;
  userService.getUserByUsernameAndPassword(data.username, data.password, (result) => {
    if (result === null) {
      res.json({ result: 'Error: User not found.' });
    } else {
      var token = jwt.sign(result.dataValues, 'secretWord');
      res.json({ result: 'Success', user: result, token: token });
    }
  });
});

module.exports = router;