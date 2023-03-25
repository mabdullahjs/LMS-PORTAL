import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { getData } from '../../config/Firebase/firebaseMethod'

function Insitute() {
    useEffect(()=>{
        getInsData()
    } , [])

    const getInsData = async ()=>{
        await getData("Institute")
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <Box>
        <Typography variant='h5'>CHECK CONSOLE</Typography>
    </Box>
  )
}

export default Insitute