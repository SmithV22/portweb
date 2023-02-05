
import { useState, useEffect } from 'react' ;
import { useSelector, useDispatch } from 'react-redux' ;
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify' ;
import{ FaUser} from 'react-icons/fa' ;

import { register, reset } from '../../features/auth/authSlice' ;
import Spinner from '../components/Spinner' ;
import LogHeader from './LogHeader' ;
import './LoginReg.css' ;

function Reg () {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { firstName, lastName, email, password, confirmPassword } = formData ;

    const navigate = useNavigate() ;
    const dispatch = useDispatch() ;

    const { user, isLoading, isError, isSuccess, message } = useSelector( (state) => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch ])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault() ;
        if(password !== confirmPassword) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                firstName,
                lastName,
                email,
                password,
            }
            dispatch(register(userData)) ;
        }
    }
    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <LogHeader />
            <div className='heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Register to access live demos and download cv</p>
            </div>
            <div className="form">
                <form onSubmit={ onSubmit }>
                    <div className="form-group">
                        <input type="text" className="form-control" id='firstName' name='firstName' placeholder='Enter your first name' value={ firstName } onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id='lastName' name='lastName' placeholder='Enter your last name' value={ lastName } onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id='email' name='email' placeholder='Enter your email' value={ email } onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='password' name='password' placeholder='Enter your password' value={ password } onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='confirmPassword' name='confirmPassword' placeholder='Re-Enter your password' value={ confirmPassword } onChange={onChange} />
                    </div>
                    <div className="formgroup">
                        <button type='submit' className="btn-block">Submit</button>
                    </div>
                </form>
            </div>
        </>
        
    )
}

export default Reg ;