var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express1' });
});

/* GET home page. */
router.get('/user', function(req, res, next) {
    res.json({ usuario: 2 });
});

module.exports = router;
