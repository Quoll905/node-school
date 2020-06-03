const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

let res1 = '';
let res2 = '';
let res3 = '';

let finito1=false;
let finito2=false;
let finito3=false;

http.get(url1, funzione1);



function funzione1(response){
    response.setEncoding('utf-8');
    response.on('data',(data)=>res1+=data);
    response.on('end',(end)=>{
        console.log(res1);
        http.get(url2, funzione2);
    });
    response.on('error',(error)=>console.log(error));
}

function funzione2(response){
    response.setEncoding('utf-8');
    response.on('data',(data)=>res2+=data);
    response.on('end',(end)=>{
        console.log(res2);
        http.get(url3, funzione3)
    });
    response.on('error',(error)=>console.log(error));
}

function funzione3(response){
    response.setEncoding('utf-8');
    response.on('data',(data)=>res3+=data);
    response.on('end',(end)=>{
        console.log(res3);
    });
    response.on('error',(error)=>console.log(error));
}
