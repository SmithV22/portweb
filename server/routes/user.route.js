
import express from 'express' ;
import { registerUser, loginUser, currentUser } from '../controllers/user.controller' ;

const router = express.Router() ;
const { protect } = '../middleware/authMiddleware' ;

router.post('/register', registerUser) ;
router.post('/login', loginUser) ;
router.get('/currentUser', protect, currentUser ) ;

export default router ;