import React from 'react'
import { IconContext } from 'react-icons'
import { RiMenuUnfoldFill } from 'react-icons/ri'
// import { FaUserCircle } from 'react-icons/fa'
// import { AiFillCaretDown } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { AuthSlice } from '../../Redux/Auth/AuthSlice'
import logo from '../../../images/logo.svg'
import { Button } from '@mui/material'
import { AccountBox, InsertChart, PostAdd, QueryStats } from '@mui/icons-material'
import './Navb.css'
import { useNavigate } from 'react-router-dom'


export default function Navb() {
    const navigate = useNavigate()
    const { loggedUser } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    console.log(loggedUser);
    return (
        <div style={{backgroundColor:'#fff'}}>
            <div className='container p-3 d-flex justify-content-between' >
                <button className="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                    <IconContext.Provider value={{ color: '#3b82f6', size: '30px' }}>
                        <RiMenuUnfoldFill />
                    </IconContext.Provider>
                </button>
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: '300px' }}>
                    <div className="offcanvas-header">
                        <div className="offcanvas-title" id="offcanvasExampleLabel">
                            <img src={logo} alt='jobster logo' width='150px' className='img-fluid px-3 py-3' />
                        </div>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <h5 className='fw-bolder text-primary text-center pb-3'> Welcome {loggedUser[0].fname} </h5>
                        <div className='py-3'>
                            <Button variant='text' startIcon={<InsertChart />} sx={{ width: '100%' }} onClick={()=>navigate('/stats')}><span className='text-secondary ps-3'>Stats</span></Button>
                        </div>
                        <div className='py-3'>
                            <Button variant='text' startIcon={<QueryStats />} sx={{ width: '100%' }}><span className='text-secondary  ps-3'>All Jobs</span></Button>
                        </div>
                        <div className='py-3'>
                            <Button variant='text' startIcon={<PostAdd />} sx={{ width: '100%' }}><span className='text-secondary  ps-3'>Add Job</span></Button>
                        </div>
                        <div className='py-3'>
                            <Button variant='text' startIcon={<AccountBox />} sx={{ width: '100%' }}><span className='text-secondary ps-3 '>Profile</span></Button>
                        </div>
                    </div>
                </div>
                <h2>Dashboard</h2>
                <button type="button" class="btn text-light fw-bold" style={{ backgroundColor: '#1e40af' }} onClick={() => {
                    dispatch(AuthSlice.reducer.logout)
                }}>Logout</button>
            </div>
        </div>
    )
}
