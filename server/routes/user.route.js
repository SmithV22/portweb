
const express = require('express') ;
const router = express.Router() ;
const { registerUser, loginUser, currentUser } = require('../controllers/user.controller') ;

router.post('/register', registerUser) ;
router.post('/login', loginUser) ;
router.get('/currentUser', protect, currentUser ) ;

module.exports = {
    router,
    default: router, 
};