
const mongoose = require('mongoose') ;
const bcrypt = require('bcryptjs') ;

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter your last name"]
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Invalid email format"
        },
        required: [true, "Please enter your email address"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [8, "Password must be at leasr 8 characters"],
    },
},
{
    timestamps: true,
}) ;

const User = mongoose.model('User', UserSchema) ;
module.exports = {
    User,
    default: User
} 