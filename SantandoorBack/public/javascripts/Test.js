/**
 * Created by dgarcia2 on 28/02/2017.
 */

// https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/6.3/advanced-topics/working-with-ibeacons/


var http = require('http');
var server = http.createServer();

var str = '{ "name": "John Doe", "age": 42 }';
var obj = JSON.parse(str);
console.log(obj.name);


function control(petic, resp) {
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('Hola, Mundo!');

    resp.end();
}
server.on('request', control);
server.listen(8080);