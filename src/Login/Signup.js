import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.svg'
import './Login.css'

export default function Signup() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='container-fluid'>
                <div style={{ height: '100vh' }}>
                    <div className='' style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='col-sm-3 col-lg-5 col-md-6 col-xl-3'>
                            <form className='shadow rounded p-5' style={{backgroundColor:'#fff'}}>
                                <div className='text-center'>
                                    <img src={logo} className='img-fluid' alt='logo' width='150px' />
                                </div>
                                <h4 className='text-center fw-normal p-3 fs-3'>Register</h4>
                                <div>
                                    <label htmlFor='fname' className='my-2 fs-6'>Name </label>
                                    <input type='text' id='fname' name='fname' className='form-control' />
                                </div>
                                <div>
                                    <label htmlFor='email' className='my-2 fs-6'>Email </label>
                                    <input type='email' id='email' name='email' className='form-control' />
                                </div>
                                <div>
                                    <label htmlFor='pass' className='my-2 fs-6'>Password </label>
                                    <input type='password' id='pass' name='pass ' className='form-control' />
                                </div>
                                <div className='d-grid gap-2 mt-3'>
                                    <button className='btn btn-sm' style={{ backgroundColor: '#3b82f6' }} type='submit'>Submit</button>
                                    <button className='btn btn-sm' style={{ backgroundColor: '#bfdbfe' }} type='submit'>Demo App</button>
                                    <p className='text-center py-2'> Already a user? <span onClick={() => navigate('/login', { replace: 'true' })} style={{ color: '#3b82f6', cursor: 'pointer' }}>Login</span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
