var mongoose = require("mongoose");

var userschema = new mongoose.Schema({
    emailID:String,
    passwd:String,
    isInstructor:Boolean

});

module.exports.userschema=userschema;