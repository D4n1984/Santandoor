var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Another Consulting' });
});

router.post('/open', function(req, res, next){
    var exec = require('child_process').exec,
        child;

    child = exec('"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" C:\\Workspaces\\Santandoor\\SantandoorBack\\public\\images\\open.jpg',
        function (error, stdout, stderr) {
            console.log('Image opened');
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });

    res.send('Abierto!');
});

router.post('/close', function(req, res, next){
    var exec = require('child_process').exec,
        child;

    child = exec('"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" C:\\Workspaces\\Santandoor\\SantandoorBack\\public\\images\\cerrado.jpg',
        function (error, stdout, stderr) {
            console.log('Image opened');
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });

    res.send('Cerrado!');
});

module.exports = router;
