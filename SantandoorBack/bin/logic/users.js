/**
 * Created by dgarcia2 on 04/03/2017.
 */

var userSelector = function (userId) {

    var response = require('./json/'+userId+'.json');
    return response;
}

module.exports = userSelector;