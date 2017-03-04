/**
 * Created by dgarcia2 on 04/03/2017.
 *  recuperar detalle inmuebles en base al id del inmueble devuelto
 *  solicitar acceso al inmueble
 *  notificar la salida del inmueble.
 */

var file = require('./utils/fileutils.js');

var buildingSelector = function (buildId) {

    var response = require('./json/'+buildId+'.json');
console.log('./images/'+buildId);
    var paths = file('../images/'+buildId);
    console.log(paths);
    return response;
};

module.exports = buildingSelector;