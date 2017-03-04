var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var allowMethods = function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); next();
};

var auth = function(req, res, next) {
    if (req.headers.token === 'password123456') {
        return next();
    }else{
        return next(new Error('No autorizado'));
    }
};

var allowCrossTokenHeader = function(req, res, next) {
    res.header('Access-Control-Allow-Headers', 'token');
    next();
};

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
