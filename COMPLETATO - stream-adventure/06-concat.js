const concat = require('concat-stream');

process.stdin.pipe(concat((src)=>{
    let ris = src.toString().split('').reverse().join('');
    console.log(ris);
}));
