
import express from 'express' ;
const { registerUser, loginUser, currentUser } = '../controllers/user.controller' ;

const router = express.Router() ;
const { protect } = '../middleware/authMiddleware' ;

router.post('/register', registerUser) ;
router.post('/login', loginUser) ;
router.get('/currentUser', protect, currentUser ) ;

export default router ;