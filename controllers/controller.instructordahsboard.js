const _ = require('lodash');
var { CourseStudentModel } = require('../model/model.coursestudent');
var { mongoose } = require('./../config/database')
var { CodeWord } = require('../model/model.codeword')
let XLSX = require('xlsx')
var Course = require('./../controllers/controller.course')
var { CourseModel } = require('../model/model.course');
const fs = require('fs')

let getcourse = (req,res) => {
    var body = _.pick(req.body,['courseNameKey','email','codeWordSet','Startdate','Enddate','PreSurveyURL','PostSurveyURL']);

    CourseModel.findOne({courseName: body.courseNameKey}, function (err, Course) {
        if(err){
            return res.json({ code: 200, message: 'Course Doesnt Exist'});
        }
        return Course;
    })
}
module.exports.getcourse = getcourse;