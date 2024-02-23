const mongoose = require('mongoose');

const connectDB = mongoose.connect('mongodb://127.0.0.1:27017/todo')
.then((e)=>{console.log("Database is connected")}).catch((e)=>{console.log(e)});

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:Boolean
})

exports.Todo = mongoose.model('Todo',todoSchema);