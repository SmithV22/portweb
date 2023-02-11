
const express = require('express') ;
const { registerUser, loginUser, currentUser, allUsers } = require('../controllers/user.controller') ;
const { protect } = require('../middleware/authMiddleware') ;

const routerUser = express.Router() ;
routerUser.post('/register', registerUser) ;
routerUser.post('/login', loginUser) ;
routerUser.get('/currentUser', protect, currentUser ) ;
routerUser.get('/users', allUsers) ;

module.exports = {
    routerUser,
    default: routerUser, 
};