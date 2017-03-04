var express = require('express');
var logic = require('../bin/logic/users.js');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(logic("u001"));
});

module.exports = router;
