import { Box } from '@mui/system'
import React from 'react'
import MADrawer from '../../../config/components/MADrawer'

function InstituteScreen() {
  return (
    <Box>
      <MADrawer label="Institute" options={['User']}/>
    </Box>
  )
}

export default InstituteScreen