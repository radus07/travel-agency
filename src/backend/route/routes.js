var jwt = require('jsonwebtoken');

module.exports = (app) => {
  app.use('/api/authenticate', require('./authentication.route'));

  app.use((req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    validateToken(req, res, next, token);
  });

  app.use('/api/users', require('./user.route'));
  app.use('/api/roles', require('./role.route'));

  function validateToken(req, res, next, token) {
    if (token) {
      jwt.verify(token, 'secretWord', (err, decoded) => {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }
  }
  
}