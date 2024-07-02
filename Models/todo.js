

const mongoose = require('mongoose');

const todoSchema= new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updateAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("Task",todoSchema);