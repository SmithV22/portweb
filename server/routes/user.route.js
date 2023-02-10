
const express = require('express') ;
const { registerUser, loginUser, currentUser } = require('../controllers/user.controller') ;
const protect = require('../middleware/authMiddleware') ;

const router = express.Router() ;
router.post('/register', registerUser) ;
router.post('/login', loginUser) ;
router.get('/currentUser', protect, currentUser ) ;

module.exports = {
    router,
    default: router, 
};