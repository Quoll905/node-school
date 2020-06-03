const through = require('through2');

let stream = through(write);

let linea = 1;

function write(buffer, _ , next){
    if(linea%2==0){
        this.push(buffer.toString().toUpperCase());
    }
    else {
        this.push(buffer.toString().toLowerCase());
    }
    linea++;
    next();
}

process.stdin.pipe(stream).pipe(process.stdout);
