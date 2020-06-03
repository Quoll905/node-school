const http = require('http');

const url = process.argv[2];

http.get(url,callback);

function callback(res) {
    res.setEncoding('utf-8');
    res.on('data' , (data)=>console.log(data));
    res.on('error', (error)=>console.log(error));
}
