// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb'); //ObjectID restructuring in Mongodb
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if (err){
    console.log('Unable to Connect MongoDB Server');
}
console.log('Connected to MongoDB Server');
const db = client.db('TodoApp');
// db.collection('Todos').insertOne({
//     text:'Something to do second',
//     completed:'false'
// },(err,result)=>{
//     if (err){
//         return console.log('Unable to insert todo',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// });

db.collection('Users').insertOne({
    Name:'Varun',
    Age:'23',
    Password:'Qwerty@1234',
    Location:'Singapore'
},(err,result)=>{
    if(err){
        return console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
});

client.close();
});