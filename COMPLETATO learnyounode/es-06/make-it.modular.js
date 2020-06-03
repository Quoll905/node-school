const myModule = require('./mymodule.js');

const nomeDir = process.argv[2];
const nomeExt = process.argv[3];

myModule(nomeDir, nomeExt, (err, lista) => {
  if(err) return process.exit(1);
  lista.forEach((file) => console.log(file))
});
