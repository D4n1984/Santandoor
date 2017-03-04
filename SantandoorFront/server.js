var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.listen(3000, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on http://localhost");
});
