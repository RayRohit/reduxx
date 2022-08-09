import React from 'react'
import logo from '../../../images/logo.svg'
import homeimage from '../../../images/homeimage.svg'
import { useNavigate } from 'react-router-dom'


export default function Home() {
    const navigate = useNavigate()
    return (
        <>
            <div className='container p-5'>
                <div>
                    <img className='img-fluid' src={logo} width='150px' alt='logo' />
                </div>
            </div>
            <div className='container'>
                <div className='row mx-auto' style={{ height: '85vh' }}>
                    <div className='col-sm-6'>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
                            <h1 style={{ fontSize: '48px' }}>Job <span className='text-primary'>Tracking</span> App</h1>
                            <p className='px-3 py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            <div>
                                <button className='btn btn-primary text-start px-4 py-1 fw-bold' onClick={()=>navigate('/login')}>Login / Register</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
                            <img src={homeimage} className='image-fluid ' alt="home logo" width='300px' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
