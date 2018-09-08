var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:false
    }
});

var othernewTodo = new Todo(
    {
        text:'Learn RestAPI',
    },
);

othernewTodo.save().then((doc)=>{
    console.log('Saved Todo',doc);
},(err)=>{
    console.log('Unable to Save');
});