var express = require('express');
var logic = require('../bin/logic/buildings.js');
var router = express.Router();



/* GET building detail */
router.get('/:id', function(req, res, next) {
  console.log("GET /buildings/"+req.params.id)+ " START";
  var uuid = req.params.id;
    var host = req.protocol + '://' + req.get('host');
  res.json(logic(uuid, host));
});

module.exports = router;
