/**
 * Created by dgarcia2 on 04/03/2017.
 */
/**
 *  TODO recuperar listado inmuebles en base a un UUID.
 *  recuperar detalle inmuebles en base al id del inmueble devuelto
 *  solicitar acceso al inmueble
 *  notificar la salida del inmueble.
 */

var buildingSelector = function (buildId) {

    var response = require('./json/'+buildId+'.json');
    return response;
}

module.exports = buildingSelector;