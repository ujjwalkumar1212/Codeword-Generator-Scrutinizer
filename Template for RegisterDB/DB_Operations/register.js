var mongoose = require("mongoose");
var dbconnection=require("../DBconnection/connect-mongodb");
var userschemadetails= require("../DB_schemas/userschema");

var userdetails = userschemadetails.userschema;
var User= mongoose.model("User",userdetails);

function registeruser(request, callback){
    dbconnection.connectToDB(function(connectionresponse){
        if(connectionresponse.status=="Failed"){
            callback(connectionresponse);
        }
    });
    var response = {
        status: null,
        statusText: null,
        failedReason: null

    };
    var user=new User({
        emailID:request.emailID,
        passwd:request.passwd
    });
    user.save()
    .then(function(){
        response.status="Success";
        response.statusText="Successfully stored the detils in DB";
        callback(response);
    })
    .catch(function(error){
        response.status="Failed";
        response.statusText="Failed to stored the detils in DB";
        response.failedReason=error;
        callback(response);
    });
}
module.exports.registeruser=registeruser;