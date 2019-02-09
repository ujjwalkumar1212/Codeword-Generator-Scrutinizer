var mongoose = require("mongoose");

var userschema = new mongoose.Schema({
    emailID:String,
    passwd:String

});

module.exports.userschema=userschema;