const mongo = require('mongodb').MongoClient;

const firstName = process.argv[2];
const lastName = process.argv[3];

const daAggiungere = {
    firstName: firstName,
    lastName: lastName
    }


mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, client)=>{
    if(err) throw err;

    const db = client.db('learnyoumongo');
    const collection = db.collection('docs');

    collection.insert(daAggiungere,(err, data)=>{
        if (err) throw err;
        console.log(JSON.stringify(daAggiungere));
        client.close();
    });



})
