
import express from 'express' ;
import { registerUser, loginUser, currentUser } from '../controllers/user.controller.js' ;
import protect from '../middleware/authMiddleware' ;

const router = express.Router() ;

router.post('/register', registerUser) ;
router.post('/login', loginUser) ;
router.get('/currentUser', protect, currentUser ) ;

export default router ;