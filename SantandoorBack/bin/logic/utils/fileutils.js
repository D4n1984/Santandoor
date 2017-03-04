/**
 * Created by dgarcia2 on 04/03/2017.
 */

var fs = require('fs');

var paths = function list(path){
    fs.readdir(path, function(err, files) {
        if (err) return;
        files.forEach(function(f) {
            console.log('Imagenes: ' + f);
        });
        return files;
    });
};

module.exports = paths;