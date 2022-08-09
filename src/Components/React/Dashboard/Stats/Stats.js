import { BugReport, EventAvailable, Luggage } from '@mui/icons-material'
import { Box, Card, CardContent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navb from '../Navb'
import Bar from './Bar'

export default function Stats() {
    const [barChart, setBarChart] = useState(true)
    const cardData = [
        {
            id: 1,
            num: 24,
            icon: <Luggage sx={{ fontSize: '50px !important', backgroundColor: 'rgb(252, 239, 199)', padding: '10px' }} />,
            title: 'Pending Applications',
            color: 'rgb(233, 185, 73)',
            borderr: '5px solid rgb(233, 185, 73)'

        },
        {
            id: 2,
            num: 27,
            icon: <EventAvailable sx={{ fontSize: '50px !important', backgroundColor: 'rgb(224, 232, 249)', padding: '10px' }} />,
            title: 'Interviews Scheduled',
            color: 'rgb(100, 122, 203)',
            borderr: '5px solid rgb(100, 122, 203)'
        },
        {
            id: 3,
            num: 24,
            icon: <BugReport sx={{ fontSize: '50px !important', backgroundColor: 'rgb(255, 238, 238)', padding: '10px' }} />,
            title: 'Jobs Declined',
            color: 'rgb(214, 106, 106)',
            borderr: '5px solid rgb(214, 106, 106)'
        }
    ]
    return (
        <>
            <div>
                <Navb />
            </div>
            <div className='container-fluid'>
                <div className='row px-xl-5 py-xl-4 px-sm-3 py-sm-4'>
                    {
                        cardData.map((item) => {
                            const style = {
                                color: item.color,
                                fontWeight: 'bold'
                            }
                            return (
                                <div className='col-sm-4 col-md-6 col-xl-4 '>
                                    <Card sx={{ display: 'flex', p: 3, borderBottom: `${item.borderr}`, mt: 2 }}>
                                        <Box sx={{ width: '100%' }}>
                                            <CardContent>
                                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                                    <Typography variant="h3" sx={{ ...style }}>
                                                        {item.num}
                                                    </Typography>
                                                    <Typography>
                                                        {item.icon}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="h5" component="div" sx={{ pt: 3 }}>
                                                    {item.title}
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h5 className='text-center py-5'>Montly Application</h5>
                    {/* <div className='text-center'>
                        {
                            barChart
                                ?
                                <Bar />
                                :
                                null
                        }
                    </div> */}
                    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*',maxLength:'12' }} />

                </div>
            </div>
        </>
    )
}
