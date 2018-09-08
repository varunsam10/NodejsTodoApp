const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if (err){
        console.log('Unable to Connect MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b9366a1a03576941a62830e')
    },{
        $set:{
            completed:true
            }
          //Use $inc for incrementing or decrementing the values  
    },  {  
        returnOriginal: false
        }).then(result=>{
        console.log(result);
    });
});