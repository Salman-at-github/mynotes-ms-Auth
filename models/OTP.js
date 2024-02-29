const mongoose = require('mongoose');

const OPTSchema = new mongoose.Schema({
    email: {type:String, required: true},
    OTP: {type:String, required: true},
    verified: {type: Boolean, required: true, default: false},
    createdAt : {type: Date, default : Date.now, expires: "10m"}
})

const OTPModel = mongoose.model('OTPwithEmail', OPTSchema)

module.exports = OTPModel;