const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo',(err,client)=>{
    if (err) throw err;

    let db = client.db('learnyoumongo');
    let eta = parseInt(process.argv[2],10);

    let collection = db.collection('parrots');
    collection.find({
        age : {$gt : eta}
    },{fields:{
        name: 1,
        age: 1,
        _id: 0,
    }}).toArray((err,documents)=>{
        if (err) throw err;
        console.log(documents);
        client.close();
    });

});
