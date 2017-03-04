/**
 * Created by dgarcia2 on 04/03/2017.
*/

var estimoteSelector = function (uuid, major) {
    var error = {error:{code:400, status : "estimote not recognized"}};

    if(uuid.toUpperCase() !== "B9407F30-F5F8-466E-AFF9-25556B57FE6D"){
        res.json(error);
        return;
    }

    console.log("estimote reconocido");

    var response;
    try {
        response = require('./json/estimote_' + major + '.json');
    }catch(err){
        response = error;
    }

    return response;
};

module.exports = estimoteSelector;
