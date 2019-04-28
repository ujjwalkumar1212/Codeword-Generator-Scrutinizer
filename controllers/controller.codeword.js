
const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { CodeWord } = require('../model/model.codeword');
var { mongoose } = require('./../config/database')
var mailController = require('../config/user.mail.js')
let XLSX = require('xlsx')


let addcodewords = (req, res) => {
     var codewords = [];
    var body = _.pick(req.body,['CodeWordSetName','Codewords']);
    codewords = body.Codewords;
    codewords = _.map(codewords, function(codeword){
        return {
            CodeWordSetName: req.body.CodeWordSetName,
            Codeword: codeword
        }
    })
    CodeWord.insertMany(codewords).then((user) => {
        if (user)
            return res.json({ code: 200, message: true });
    }).catch((e) => {
        console.log(e);
        return res.json({ code: 400, message: e });
    })
}
module.exports.addcodewords = addcodewords;

let getCodewords = (req,res) => {
    var body = _.map(req.body.CodeWordSetKey, 'CodeWordSetName');
    CodeWord.find({CodeWordSetName : {$in : body}}, function (err, codewords) {
        console.log(codewords)
        data = _.groupBy(codewords, 'CodeWordSetName');
        if(err){
            return res.json({ code: 200, message: 'No codewordset is created!!'});
        }
        if (codewords)
            return res.json({ code: 200, data: data});
        }).catch((e) => {
            return res.json({ code: 400, message: e });
        })
}
module.exports.getCodewords = getCodewords;

let updatecodeword=(req,res) =>{
    var body = _.pick(req.body,['_id','Codeword']);  
    CodeWord.updateOne({_id: body._id}, { $set: { "Codeword" : body.Codeword } }, function(err, updatecodeword){
        if(err){
            return res.json({ code:200, message:'StudentName is updated'});
        }
        return res.json({ code: 400, message:true})
    })
}

module.exports.updatecodeword=updatecodeword;

let deleteCodewords=(req,res) =>{
    var body = _.pick(req.body,['_id','Codeword']);  
    CodeWord.deleteOne({_id: body._id}, function(err,deleteCodewords){
        if(err){
            return res.json({ code:200, message:'Deletion of codewords'});
        }
        return res.json({ code: 400, message:true})
    })
}

module.exports.deleteCodewords=deleteCodewords;

let deleteCodewordsForSet=(req,res) =>{
    
    CodeWord.deleteMany({CodeWordSetName: req.body.id}, function(err,deleteCodewordsForSet){
        if(err){
            return res.json({ code:400, message:'Deletion of codewords'});
        }
        return res.json({ code: 200, message:true})
    })
}

module.exports.deleteCodewordsForSet=deleteCodewordsForSet;