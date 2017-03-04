var express = require('express');
var logic = require('../bin/logic/buildings.js');
var router = express.Router();



/* GET building detail */
router.get('/:id', function(req, res, next) {
  console.log("GET /buildings/"+req.params.id)+ " START";
  var uuid = req.params.id;
  console.log(uuid);
  res.json(logic(uuid));
});

module.exports = router;
