const trumpet = require('trumpet');
const through = require('through2');

let tr = trumpet();

let stream = tr.select('.loud').createStream();

stream.pipe(through(write)).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);

function write (buf, _ , next) {
      this.push(buf.toString().toUpperCase());
      next();
};
