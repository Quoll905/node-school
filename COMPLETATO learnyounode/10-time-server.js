const net = require('net');

const porta = process.argv[2];

const server = net.createServer((socket) => {
    let date = new Date();
    let anno = date.getFullYear();
    let mese = zeroFill(date.getMonth()+1);
    let giorno = zeroFill(date.getDate());
    let ora = zeroFill(date.getHours());
    let minuti = zeroFill(date.getMinutes());
    socket.write(`${anno}-${mese}-${giorno} ${ora}:${minuti}`);
    socket.end('\n');
});

function zeroFill (number) {
    if (number < 10) {
        number = `0${number}`
    }
    return number
};

server.listen(porta);
