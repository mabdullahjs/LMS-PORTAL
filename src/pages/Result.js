
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MAInput from '../config/components/MAInput'
import MAButton from '../config/components/MAButton'

function Result() {
  return (
    <Box>
       <Typography className='text-center mt-5' variant='h4'>Result</Typography>
       <Box className="d-flex justify-content-center mt-5">
        <MAInput width="25rem" label="roll Number" variant="outlined"/>
       </Box>
       <Box className="d-flex justify-content-center mt-5">
        <MAButton label="Submit"/>
       </Box>
    </Box>
  )
}

export default Result