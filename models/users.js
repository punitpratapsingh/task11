const mongoose = require("mongoose"); 

const UsersSchema = new mongoose.Schema({
    email: {type:String, required:true},
    password: {type:String, required:true},
    type: {type:Number, required:true},
    // createdOn: {type:Object, required:true},
    // createdBy: {type:Object, required:true},
    // updatedOn: {type:Object, required:true},
    // updatedBy: {type:Object, required:true},

},{collection: 'users'});

const usersModel = mongoose.model('users', UsersSchema); 
module.exports = usersModel; 