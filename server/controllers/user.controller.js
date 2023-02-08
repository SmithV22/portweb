
import jwt from 'jsonwebtoken' ;
import bcrypt from 'bcryptjs' ;
import asyncHandler from 'express-async-handler' ;
const User = '../models/user.model' ;

export const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    if(!firstName || !lastName || !email || !password) {
        res.status(400)
        throw new Error('Please complete all fields')
    } ;
    
    const userExists = await User.findOne({ email })
    if(userExists) {
        res.status(400)
        throw new Error('Email already exists')
    } ;
    
    const salt = await bcrypt.genSalt(10) ;
    const hashedPassword = await bcrypt.hash(password, salt) ;

    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
}) ;

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.find({ email })
    
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
}) ;

export const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
}) ;

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
} ;

