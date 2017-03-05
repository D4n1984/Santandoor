var express = require('express');
var logic = require('../bin/logic/buildings.js');
var router = express.Router();



/* GET building detail */
router.get('/:id', function(req, res, next) {
  console.log("GET /building/"+req.params.id)+ " START";
  var uuid = req.params.id;
    var host = req.protocol + '://' + req.get('host');
  res.json(logic.detalle(uuid, host));
});

/* POST building reserva */
router.post('/:id/lock', function(req, res, next) {
    console.log("POST /building/"+req.params.id)+ "/lock START";
    var uuid = req.params.id;
    res.json(logic.reserva(uuid));
});

router.post('/:id/unlock', function(req, res, next) {
    console.log("POST /building/"+req.params.id)+ "/unlock START";
    var uuid = req.params.id;
    res.json(logic.desreserva(uuid));
});

module.exports = router;
