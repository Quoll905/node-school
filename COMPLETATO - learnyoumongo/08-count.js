const mongo = require('mongodb').MongoClient;
const etaDaSuperare = process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo',(err,client)=>{
    if (err) throw err;
    client.db('learnyoumongo').collection('parrots').count({
        age: {$gt: +etaDaSuperare}
    },(err, count)=>{
        if(err) throw err;
        console.log(count);
        client.close();
    });
})
