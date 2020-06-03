const express = require('express')
const app = express()



app.put('/message/:id', function(req, res){
    const id = req.params.id;
    const ris = require('crypto')
          .createHash('sha1')
          .update(new Date().toDateString() + id.toString())
          .digest('hex')
    res.send(ris);
});

app.listen(process.argv[2])
