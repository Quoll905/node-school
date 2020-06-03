const mongo = require('mongodb').MongoClient;
const db = process.argv[2].toString();
const coll = process.argv[3].toString();
const id = process.argv[4];

mongo.connect(`mongodb://localhost:27017/${db}`,(err,client)=>{
    if (err) throw err;
    let database = client.db(db);
    let collection = database.collection(coll);
    collection.remove({_id:id},()=>{
        client.close();
    });
});
