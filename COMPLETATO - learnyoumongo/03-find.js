const mongo = require('mongodb');

let mongo1 = mongo.MongoClient;
mongo1.connect('mongodb://localhost:27017/learnyoumongo',(err,client)=>{

    if (err) throw err;

    let database = client.db('learnyoumongo');
    let collection1 = database.collection('parrots');
    let etaPassata = parseInt(process.argv[2], 10);

    collection1.find({
        age : {$gt : etaPassata}
    }).toArray((err,document)=>{
        if (err) throw err;
		console.log(document);
		client.close();
    });

});
