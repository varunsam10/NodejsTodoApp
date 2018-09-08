// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb'); //ObjectID restructuring in Mongodb
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if (err){
    console.log('Unable to Connect MongoDB Server');
}
console.log('Connected to MongoDB Server');
const db = client.db('TodoApp') //Important
// db.collection('Todos').find().toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined,2));
// },(err)=>{
//     console.log('Unable to fetch todo',err);
// });
// db.collection('Users').find().count().then((count)=>{
//     console.log(`Users count : ${count}`);
// },(err)=>{
//     console.log('Unable to fetch todo',err);
// });
// client.close();
db.collection('Users').find({Name:'Varun'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined,2));
},(err)=>{
    console.log('Unable to fetch todo',err);
});

    client.close();
});
