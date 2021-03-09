const express = require('express');
const router = express.Router();

const usersRouter = require('../domains/User/routes/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    name: 'API',
    version: '1.0',
    status: 200,
    message: 'Hello World'
  });
});

router.use('/users', usersRouter);

module.exports = router;
