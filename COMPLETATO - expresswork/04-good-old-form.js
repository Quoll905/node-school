const port = process.argv[2];
const bodyparser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form',(req,res)=>{
    const ris = req.body.str.split('').reverse().join('');
    res.end(ris);
});

app.listen(port);
