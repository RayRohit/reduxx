import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../images/logo.svg'
import './Login.css'
import axios from 'axios'

export default function Signup() {
    const navigate = useNavigate()
    const url = 'http://localhost:3000/Users'
    const [person, setPerson] = useState({
        fname: '',
        email: '',
        pass: ''
    })
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setPerson({ ...person, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url,person).then((res)=>{
            navigate('/login',{replace:'true'})
        }).catch((err)=>console.log(err))
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
                                <h4 className='text-center fw-normal p-3 fs-3'>Register</h4>
                                <div>
                                    <label htmlFor='fname' className='my-2 fs-6'>Name </label>
                                    <input type='text' id='fname' name='fname' value={person.fname} onChange={handleChange} className='form-control' />
                                </div>
                                <div>
                                    <label htmlFor='email' className='my-2 fs-6'>Email </label>
                                    <input type='email' id='email' name='email' value={person.email} onChange={handleChange} className='form-control' />
                                </div>
                                <div>
                                    <label htmlFor='pass' className='my-2 fs-6'>Password </label>
                                    <input type='password' id='pass' name='pass' minLength={8} maxLength={16} value={person.pass} onChange={handleChange} className='form-control' />
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
