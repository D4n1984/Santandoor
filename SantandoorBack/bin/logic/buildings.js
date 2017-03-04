/**
 * Created by dgarcia2 on 04/03/2017.
 *  recuperar detalle inmuebles en base al id del inmueble devuelto
 *  solicitar acceso al inmueble
 *  notificar la salida del inmueble.
 */

var fs = require('fs');

var buildingSelector = function (buildId, host) {

    var response = require('./json/inmueble_'+buildId+'.json');
    var path = '/images/inmueble_'+buildId;

    var files = fs.readdirSync("./public/" + path);

    for (var i in files) {
        console.log('File:  ' + host + "/" + files[i]);
        files[i] = host + path + "/" + files[i];
    }

    response.images = files;

    return response;
};

module.exports = buildingSelector;
