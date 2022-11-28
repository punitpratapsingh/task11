const mongoose = require("mongoose"); 

const QuestionsSchema = new mongoose.Schema({
    question: {type:String, required:true},
    ans: {type:String, required:true},
    options: {type:Array, required:true},
    difficulty: {type:Number, required:true},
},{collection: 'questions'});

const questionModel = mongoose.model('questions', QuestionsSchema); 
module.exports = questionModel; 