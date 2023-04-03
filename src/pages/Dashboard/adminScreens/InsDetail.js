import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import MAScreenHeader from '../../../config/components/MAScreenHeader'
import { useLocation } from 'react-router-dom'

function InsDetail() {
    //useLocation hook
    const location = useLocation()
    const item = location.state
    return (
        <Box>
            <MAScreenHeader screenTitle="Institute Detail" />
            <Box >
                <Paper className="shadow p-4 mb-3 bg-white rounded">
                    <img className='' src={item.img.replace(/"/g, "")} alt="" />
                    <Typography  className='mt-5' variant='h4'>{`${item.name} (${item.shortName})`}</Typography>
                    <Typography className='mt-5' variant='h4'>{`Total Campuses:  (${item.campus})`}</Typography>
                    <Typography className='mt-5' variant='h4'>{`Address:  (${item.address})`}</Typography>
                    <Typography className='mt-5' variant='h4'>{`Email:  (${item.email})`}</Typography>
                    <Typography className='mt-5' variant='h4'>{`Contact:  (${item.contact})`}</Typography>

                </Paper>
            </Box>
        </Box>
    )
}

export default InsDetail