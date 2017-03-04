var express = require('express');
var logic = require('../bin/logic/estimotes.js');
var router = express.Router();

/*
Azul
uuid:   B9407F30-F5F8-466E-AFF9-25556B57FE6D
major: 46430
minor: 61890

Celeste:
 uuid:   B9407F30-F5F8-466E-AFF9-25556B57FE6D
 major: 24836
 minor: 48722
 */

/* GET estimote detail */
router.get('/:id', function(req, res, next) {
  console.log("GET /estimote/"+req.params.id)+ " START";

  var uuid = req.params.id;
  var major = req.query.major;


  res.json(logic(uuid,major));
});

module.exports = router;
