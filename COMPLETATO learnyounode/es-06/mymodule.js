const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback){
  fs.readdir (dir, function(err, lista){
    if(err) return callback(err);
    lista = lista.filter((file) => path.extname(file) === `.${ext}`);
    callback(null,lista);
  })

}
