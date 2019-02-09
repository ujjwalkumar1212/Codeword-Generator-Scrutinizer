var express = require('express');
var app  = express();
var register = require('./DB_Operations/register');

app.post("/register",function(request,response){
    register.registeruser(request, function(registerResponse){
        response.send(registerResponse);
    });

});


app.listen(3030, function(){
    console.log("App running at port 3030");
})