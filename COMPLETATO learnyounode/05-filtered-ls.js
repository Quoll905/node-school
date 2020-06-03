const fs = require('fs');
const path = require('path');

const nomePercorso = process.argv[2];
//const nomeExt = '.' + process.argv[3];
const nomeExt = `.${process.argv[3]}`;

//console.log(nomeExt);

fs.readdir(nomePercorso, (err, files) => {
    //console.log(files);
    for (var i = 0; i < files.length; i++) {
      if(path.extname(files[i]) === nomeExt) {
        console.log(files[i]);
      }
    }
});
