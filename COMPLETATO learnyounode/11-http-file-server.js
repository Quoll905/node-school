const http = require('http');
const fs = require('fs');

const porta = process.argv[2];
const location = process.argv[3];

const server = http.createServer((request,response)=>{
    //response.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(location).pipe(response);
});

server.listen(porta);
