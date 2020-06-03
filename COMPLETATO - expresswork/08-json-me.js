const express = require('express');
const fs = require('fs');
const app = express();


app.get('/books', (req, res) => {
    let file = process.argv[3];

    fs.readFile(file,(err,data)=>{
        if (err) throw err;
        let ris = JSON.parse(data)
        res.json(ris);
    });
});

app.listen(process.argv[2])
