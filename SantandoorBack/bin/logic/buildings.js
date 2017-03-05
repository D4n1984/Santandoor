/**
 * Created by dgarcia2 on 04/03/2017.
 *  recuperar detalle inmuebles en base al id del inmueble devuelto
 *  solicitar acceso al inmueble
 *  notificar la salida del inmueble.
 */

var fs = require('fs');

var buildingSelector = function get(buildId, host) {
    var response = require('./json/inmueble_'+buildId+'.json');
    var path = '/images/inmueble_'+buildId;
    try {
        var files = fs.readdirSync("./public/" + path);

        for (var i in files) {
            files[i] = host + path + "/" + files[i];
        }

        response.images = files;
    }catch(err){};

    return response;
};

var buildingIsReserved = function isReserved(id) {
    if(id == 1){
        if(reserve1==true){
            return true;
        }
    }

    if(id == 2){
        if(reserve2==true){
            return true;
        }
    }

    return false;
};

var buildingReserve = function reserve(id) {
    if ( typeof reserve1 == 'undefined' ) {
        reserve1 = false;
    }
    if ( typeof reserve2 == 'undefined' ) {
        reserve2 = false;
    }

    if(buildingIsReserved(id)) return false;

    if(id == 1){
        if(reserve1==false){
            reserve1 = true;
        }else return false;
    }
console.log(id + " " + reserve2);
    if(id == 2){
        if(reserve2==false){
            reserve2 = true;
        }else return false;
    }

    return true;
};

var buildingDesreserve = function desreserve(id) {

    if(id == 1){
        reserve1=false;
    }

    if(id == 2){
        reserve2=false;
    }

    return true;
};

module.exports.detalle = buildingSelector;
module.exports.reserva = buildingReserve;
module.exports.desreserva = buildingDesreserve;
