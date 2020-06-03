const http = require('http');
const url = process.argv[2];
let res = '';

http.get(url, funzione);

function funzione(response){
    response.setEncoding('utf-8');
    response.on('data',(data)=>res+=data);
    response.on('end',(end)=>{
        console.log(res.length);
        console.log(res);
    });
    response.on('error',(error)=>console.log(error));
}
