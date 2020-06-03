const http = require('http');
const through = require('through2');

const porta = process.argv[2];



let server = http.createServer((req,res)=>{
    if(req.method==='POST'){
        req.pipe(through(write)).pipe(res);
    }
    else res.end();
});


function write (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
}

server.listen(porta);
