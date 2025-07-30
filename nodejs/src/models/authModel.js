const mongoose = require('mongoose')
const authSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    role:{
        type: String,
        enum: ['user', 'admin', 'superadmin'],
        default: 'user'
    },
})
const Auth = mongoose.model('Auth', authSchema)
module.exports = Auth;