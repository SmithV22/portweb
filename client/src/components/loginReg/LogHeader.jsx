

import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa' ;
import { Link, useNavigate } from 'react-router-dom' ;
import { useSelector, useDispatch } from 'react-redux' ;
import { logout, reset } from '../../features/auth/authSlice' ;
import './LoginReg.css' ;

const LogHeader = () => {
    const navigate = useNavigate() ;
    const dispatch = useDispatch() ;
    const { user } = useSelector((state) => state.auth) ;

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <div className='logHeader'>
            <div className='logo'>
                <Link to='/'>Home Page</Link>
            </div>
            <ul>
                { user ? (
                    <li>
                        <button className='btn' onClick={ onLogout }>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                ) : (<>
                        <li>
                            <Link to='/login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <FaUser /> Register
                            </Link>
                        </li>
                </>) }
                
            </ul>
        </div>
    )
}

export default LogHeader ;