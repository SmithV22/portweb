
const jwt = require('jsonwebtoken') ;
const bcrypt = require('bcryptjs') ;
const asyncHandler = require('express-async-handler') ;
const User = require('../models/user.model') ;

const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body ;
    
    if(!firstName || !lastName || !email || !password) {
        res.status(400) ;
        throw new Error('Please complete all fields') ;
    } ;
    
    const userExists = await User.findOne({ email }) ;
    if(userExists) {
        res.status(400)
        throw new Error('Email already exists') ;
    } ;
    
    const salt = await bcrypt.genSalt(10) ;
    const hashedPassword = await bcrypt.hash(password, salt) ;
    
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    }) ;
    if (user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        })
    } else {
        res.status(400) ;
        throw new Error('Invalid user data') ;
    }
}) ;

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body ;
    const user = await User.findOne({ email }) ;
    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                id: user.id,
                email: user.email,
            },
    }, process.env.JWT_SECRET) ;
        res.json(200).json({ accessToken })  ;
    } else {
        res.status(401) ;
        throw new Error('Invalid credentials') ;
    }
}) ;

// const generateToken = () => {
    
//     return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' }) ;
// } ;

const currentUser = asyncHandler(async (req, res) => {
        res.status(200).json(req.user)
    }) ;
    
    const allUsers = asyncHandler(async (req, res) => {
        const users = await User.find({})
        res.status(200).json(users) ;
    })
    
    
    module.exports = {
    registerUser,
    loginUser,
    currentUser,
    allUsers,
    default: registerUser,
    default: loginUser,
    default: currentUser,
    defualt: allUsers,
} ;
