
import express from 'express' ;
const { registerUser, loginUser, currentUser } = require('../controllers/user.controller') ;

const router = express.Router() ;
const { protect } = require('../middleware/authMiddleware') ;

router.post('/register', registerUser) ;
router.post('/login', loginUser) ;
router.get('/currentUser', protect, currentUser ) ;

module.exports = router ;