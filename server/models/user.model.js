
import mongoose from 'mongoose' ;
import bcrypt from 'bcryptjs' ;

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
    timestamps: true
}) ;

export default mongoose.model('User', UserSchema) ;