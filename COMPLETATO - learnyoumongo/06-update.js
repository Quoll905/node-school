const mongo = require('mongodb').MongoClient;

const database = process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo',(err,client)=>{

    if(err) throw err;

    let db = client.db(database.toString());
    let collection = db.collection('users');

    collection.update({"username" : "tinatime"},{
        $set:{"age":40}},()=>{
            client.close();
    });

})
