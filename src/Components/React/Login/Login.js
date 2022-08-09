import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../../../images/logo.svg'
import { AuthSlice, LogCheck } from '../../Redux/Auth/AuthSlice'
import './Login.css'


export default function Login() {
    const { loggedUser, isLoggedIn, error } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [people, setPeople] = useState({
        email: '',
        pass: ''
    })

    console.log(error)

    useEffect(() => {
        if (loggedUser[0] !== undefined) {
            if (loggedUser[0].email === people.email && loggedUser[0].pass === people.pass) {
                dispatch(AuthSlice.actions.Login(true))
                navigate('/stats', { replace: true })
            }
        }
    }, [loggedUser])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(LogCheck(people))
    }
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setPeople({ ...people, [name]: value })
    }
    return (
        <div>
            <div className='container-fluid'>
                <div style={{ height: '100vh' }}>
                    <div className='' style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='col-sm-3 col-lg-5 col-md-6 col-xl-3'>
                            <form className='shadow rounded p-5' onSubmit={handleSubmit} style={{ backgroundColor: '#fff' }}>
                                <div className='text-center'>
                                    <img src={logo} className='img-fluid' alt='logo' width='150px' />
                                </div>
                                <h4 className='text-center p-3 fs-3'>LOGIN</h4>
                                <div>
                                    <label htmlFor='email' className='my-2 fs-6'>Email </label>
                                    <input type='email' id='email' name='email' value={people.email} onChange={handleChange} className='form-control' />
                                </div>
                                <div>
                                    <label htmlFor='pass' className='my-2 fs-6'>Password </label>
                                    <input type='password' id='pass' name='pass' minLength={8} maxLength={16} value={people.pass} onChange={handleChange} className='form-control' />
                                </div>
                                <div>
                                    {error === '' ? null : <p>{error}</p>}
                                </div>
                                <div className='d-grid gap-2 mt-3'>
                                    <button className='btn btn-sm' style={{ backgroundColor: '#3b82f6' }} type='submit'>Submit</button>
                                    <button className='btn btn-sm' style={{ backgroundColor: '#bfdbfe' }} type='submit'>Demo App</button>
                                    <p className='text-center pt-1'> Not a member yet? <span onClick={() => navigate('/signup', { replace: 'true' })} style={{ color: '#3b82f6', cursor: 'pointer' }}>Register</span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
