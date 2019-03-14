/**
 * @author Ujjawal Kumar <S530473@nwmissouri.edu>
 */
const nodemailer = require('nodemailer');
const _ = require('lodash');
var jwt = require('jsonwebtoken');

var sendMail = function (email, temp_password) {
    var decodedvalue = "";
    var decodeJson="";
    nodemailer.createTestAccount((err, account) => {
    var newToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlM1MzA3NDJAbndtaXNzb3VyaS5lZHUiLCJwYXNzd29yZCI6IlN1dmFybmE5JCIsImlhdCI6MTU0MDUwMTAxOSwiZXhwIjoxNTcyMDM3MDE5fQ.Z1RJF2noETqetSDvivi004vp27iMnt2uoCARPqS_6yc';

    jwt.verify(newToken, 'donttry', (err, decoded, res) =>{
        if(err)
        {
            console.log(err);
        }
        decodedvalue = JSON.stringify(decoded);
        decodeJson = JSON.parse(decodedvalue);
        
        let transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false, 
            auth: {
                user: decodeJson.email,
                pass: decodeJson.password
            }
        });
    
        let mailOptions = {
            from: "CodeWord App",
            to: email,
            subject: 'CodeWord Temporary Password',
            text: 'Hello, '+ email,
            html: '<b>Your new temporary Password: </b>'+ temp_password // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            console.log("sent mail");
        });
    });
});
}

module.exports.sendMail = sendMail;

/* Token containing credentials */
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlM1MzA3NDJAbndtaXNzb3VyaS5lZHUiLCJwYXNzd29yZCI6IlN1dmFybmE5JCIsImlhdCI6MTU0MDUwMTAxOSwiZXhwIjoxNTcyMDM3MDE5fQ.Z1RJF2noETqetSDvivi004vp27iMnt2uoCARPqS_6yc"

/* Decode Token */
const getCredentials = () => jwt.verify(token, "donttry")

/* Get Connection for email account provided in token */
const getConnection =  () => {
    const decodeJson = getCredentials()
    return nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, 
        auth: {
            user: decodeJson.email,
            pass: decodeJson.password
        }
    })
}

/* Send reset email using username */
const sendResetEmail = async (username) => {
    const resettoken = jwt.sign({username}, "donttry", { expiresIn: '12h' })
    let mailOptions = {
        from: "CodeWord App",
        to: username,
        subject: 'Reset Password',
        text: 'Hello, '+ username,
        html: 'http://localhost:3000/codeword/resetpassword?token='+resettoken
    }
    try{
        conn = await getConnection()
        return  conn.sendMail(mailOptions)
    } catch (err) {
        console.log(err)
    }
}
module.exports.sendResetEmail = sendResetEmail