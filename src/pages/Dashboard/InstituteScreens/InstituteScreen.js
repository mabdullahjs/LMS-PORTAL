import { Box } from '@mui/system'
import React from 'react'
import MADrawer from '../../../config/components/MADrawer'

function InstituteScreen() {
  return (
    <Box>
      <MADrawer label="Institute" options={['Course List' , 'Registration' , 'Result' , 'Students List' , 'Quiz']}/>
    </Box>
  )
}

export default InstituteScreen