
var express = require('express');
var router = express.Router();
var usersController = require('../controllers/controller.user')
var studentDashboardController = require('../controllers/controller.studentdashboard')
var courseController = require('../controllers/controller.course')
var codewordsetController = require('../controllers/controller.codewordset')
var codewordController = require('../controllers/controller.codeword')
var courseStudentController = require('../controllers/controller.coursestudent')
var instructordasrboard=require('../controllers/controller.instructordahsboard')
const bodyParser = require('body-parser');
let multer = require('multer')

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/signup', usersController.signUp);
router.post('/signin', usersController.signIn);
router.post('/details', usersController.details);
router.post('/validateEmail', usersController.validateEmail);
router.post('/sendmail', usersController.tempPassword);
router.post('/changepassword', usersController.changePassword);
router.post('/addnewCourse', courseController.addCourse);
router.get('/getCourseList', courseController.getCourses,courseController.getCoursesAckData);
router.post('/addcodewordset',codewordsetController.addcodewordset);
router.post('/deletecodewordset',codewordsetController.deletecodewordset,codewordController.deleteCodewordsForSet);
router.post('/getdataxlsx',codewordsetController.getDataFromXLS);
router.post('/addnewcodewords',multer().single('file'), codewordController.addcodewords)
router.post('/getCodewords', codewordController.getCodewords)
router.post('/deleteCodewords', codewordController.deleteCodewords)
router.post('/updatecodeword', codewordController.updatecodeword);
router.get('/getcodewordset', codewordsetController.getcodewordset)
router.post('/deleteCourse', courseController.deleteCourse,studentDashboardController.deleteCourseStudents)
// router.post('/addcodewords',multer().single('file'), codewordController.addcodewords);
// router.post('/getdataxlsx',codewordsetController.getDataFromXLS);
// router.post('/addnewcodewords', codewordController.addcodewords);
router.post('/addcoursestudent',multer().single('file'), courseStudentController.addCourseStudent);
router.post('/getcoursestudent', courseStudentController.getCourseStudent);
router.get('/getstudentcodeword', courseStudentController.getstudentcodeword);
router.post('/deletecoursestudent', courseStudentController.deletecoursestudent);
router.post('/updatecoursestudent', courseStudentController.updatecoursestudent);
router.post('/updateCourse', courseController.updateCourse);
router.post('/reset', usersController.sendResetEmail)
router.get('/resetpassword', usersController.resetPassword)
router.post('/resetpassword', usersController.reset)
router.post('/getcourse',instructordasrboard.getcourse)
router.get('/studentdashboard/:emailID',studentDashboardController.getstudentDetails)
router.get('/updateACK/:emailID/:CourseNameKey',studentDashboardController.updateACK)
router.post('/chaithanya',courseStudentController.chaithanya)
router.get('/coursedetails/:CourseNameKey',studentDashboardController.countACK)
module.exports = router;
