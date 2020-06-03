const express = require('express');
const app = express();



app.get('/search', (req, res) => {
    let ris = req.query;

    res.send(ris);
});

app.listen(process.argv[2])
