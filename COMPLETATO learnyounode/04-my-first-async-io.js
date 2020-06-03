const fs = require('fs');

//console.log('Inizio');

fs.readFile(process.argv[2] , 'utf-8' , (error,data) => {

  if(error){ throw error; }

  const lines = data.split('\n');
  console.log(lines.length - 1);
});

//console.log('Fine');
