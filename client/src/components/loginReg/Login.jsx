
import { useState, useEffect } from 'react' ;
import{ FaSignInAlt } from 'react-icons/fa' ;
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify' ;

import { login, reset } from '../../features/auth/authSlice' ;
import Spinner from '../components/Spinner';
import LogHeader from './LogHeader' ;
import './LoginReg.css' ;
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData ;
    const navigate = useNavigate() ;
    const dispatch = useDispatch() ;

    const { user, isLoading, isError, isSuccess, message } = useSelector( (state) => state.auth ) ;

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/') ;
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault() ;
        const userData = {
            email,
            password
        }
        dispatch(login(userData)) ;
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <LogHeader />
            <div className='heading'>
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Log in to access live demos and download cv</p>
            </div>
            <div className="form">
                <form onSubmit={ onSubmit }>
                    <div className="form-group">
                        <input type="email" className="form-control" id='email' name='email' placeholder='Enter your email' value={ email } onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='password' name='password' placeholder='Enter your password' value={ password } onChange={onChange} />
                    </div>
                    <div className="formgroup">
                        <button type='submit' className="btn-block">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login ;