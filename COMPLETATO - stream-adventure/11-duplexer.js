const duplex = require('duplexer2');

let spawn = require('child_process').spawn;
module.exports = function(cmd,args){
	let stream = spawn(cmd, args);
	return duplex(stream.stdin, stream.stdout);
}
