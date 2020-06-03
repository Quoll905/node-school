const mongo = require('mongodb').MongoClient;
const size = process.argv[2];


mongo.connect('mongodb://localhost:27017/learnyoumongo',(err,client)=>{
    if(err) throw err;

    client.db('learnyoumongo').collection('prices').aggregate(
        [
        {$match:{size:size}},
        {$group:{
            _id:'risultato',
            risultato:
            {$avg: '$price'}
            }
        }]
    ).toArray((err, res)=>{
        if(err) throw err;
        if (!res.length) {
			throw new Error('No results found')
		}
        let elementoArrayRitornato = res[0];
        console.log((Number(elementoArrayRitornato.risultato).toFixed(2)).toString());
        client.close();
    });
});
