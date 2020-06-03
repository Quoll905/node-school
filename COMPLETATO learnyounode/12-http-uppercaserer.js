const http = require('http');
const map = require('through2-map');

const porta = process.argv[2];

const server = http.createServer((req,res) => {
    if(req.method !== 'POST') {
        return res.end('I need a POST request');
    }
    else{
        req.pipe(map((chunk)=>chunk.toString().toUpperCase())).pipe(res);
    }
});

server.listen(Number(porta));
