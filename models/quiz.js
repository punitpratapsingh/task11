const mongoose = require("mongoose"); 

// quiz schema
const QuizSchema = new mongoose.Schema({
    name: {type:String, required:true},
});

const Quiz = mongoose.model('quiz', QuizSchema); 
module.exports = Quiz; 