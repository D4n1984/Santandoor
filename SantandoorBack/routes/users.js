var express = require('express');
var logic = require('../bin/logic/users.js');
var router = express.Router();



/* GET users listing. */
router.get('/:id', function(req, res, next) {
  console.log("GET /user/"+req.params.id)+ " START";

  res.json(logic(req.params.id));
});

module.exports = router;
