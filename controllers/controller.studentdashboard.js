const _ = require('lodash');
var { mongoose } = require('./../config/database')
var { CourseStudentModel } = require('../model/model.coursestudent');
var express = require('express');
var { CourseModel } = require('../model/model.course');



let getstudentDetails = (req, res) => {
    console.log("hhjkhjkhjkhjkh " + req.params.emailID);


    CourseStudentModel.find({ EmailKey: req.params.emailID }, function (err, course) {
        if (err) {

            res.send(err)
        }

        return res.send(course);
    });
}

let updateACK = (req, res) => {

    CourseStudentModel.findOneAndUpdate({ EmailKey: req.params.emailID, CourseNameKey: req.params.CourseNameKey }, { Acknowledged: true }, function (err, course) {
        if (err) {

            res.send(err)
        }

        return res.send(course);
    });
}

let countACK = (req, res) => {
    CourseStudentModel.find({ CourseNameKey: req.params.CourseNameKey }, function (err, resp) {

        if (err) { res.send(err) }


        return res.send(resp);

    })
}
module.exports.updateACK = updateACK;
module.exports.countACK = countACK;
module.exports.getstudentDetails = getstudentDetails;


let deleteCourseStudents = (req, res) => {
    CourseStudentModel.deleteMany({ CourseNameKey: req.body.CourseNameKey }, function (err, resp) {

        if (err) { res.send(err) }


        return res.send(resp);

    })
}

module.exports.deleteCourseStudents = deleteCourseStudents;