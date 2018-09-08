const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err){
    console.log('Unable to Connect to MongoDB');
}
console.log('Connected to MongoDB Server');
const db= client.db('TodoApp');
//Delete Many
db.collection('Todos').deleteMany({text:'Welcome to MongoDB 1'}).then(result =>{
    console.log(result);
})
});