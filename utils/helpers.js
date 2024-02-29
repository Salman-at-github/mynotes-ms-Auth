const nodemailer = require('nodemailer');
const SMTPHOST = process.env.SMTP_HOST;
const SMTPUSER = process.env.SMTP_USER;
const SMTPPASS = process.env.SMTP_PASS;
const SMTPPORT = process.env.SMTP_PORT;
const FROMEMAIL = process.env.FROM_EMAIL;

const generateOTP = () => {
    const digits = '0123456789';
    let OTP = '';
  
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * digits.length)];
    }
  
    return OTP;
  };
  
  const sendOTP = async(email, otp) =>{
      let success = false;
      const transporter = nodemailer.createTransport({
          host: SMTPHOST,
          port: SMTPPORT,
          auth: {
              user: SMTPUSER,
              pass: SMTPPASS
          }
      });
      const mailOptions = {
          from: FROMEMAIL,
          to: `${email}`,
          subject: 'One-Time Password (OTP) for MyNotes Account Verification',
          text: `Please use the following OTP code: ${otp}  to verify your MyNotes account. \nDo not share it with anyone else.`
        };
        try {
            await transporter.sendMail(mailOptions);
            success = true;
        } catch (error) {
          console.log(error)
        }
  
        return success
  };
  

module.exports = {
    generateOTP,
    sendOTP
}