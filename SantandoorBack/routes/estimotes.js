var express = require('express');
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

process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log(err)
})

/* GET building detail */
router.get('/:id', function(req, res, next) {
  console.log("GET /estimote/"+req.params.id)+ " START";
  var error = {error:{code:400, status : "estimote not recognized"}};
  var uuid = req.params.id;

  if(uuid !== "B9407F30-F5F8-466E-AFF9-25556B57FE6D"){
      res.json(error);
      return;
  }
  var response = require('./json/estimote_'+req.query.major+'.json');
  if(response === undefined){
      res.json(error);
      return;
  }
  res.json(response);
});

module.exports = router;
