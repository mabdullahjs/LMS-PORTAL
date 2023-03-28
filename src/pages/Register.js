import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MAInput from '../config/components/MAInput'
import MASelect from '../config/components/MASelect'
import MADatePicker from '../config/components/MADataPicker'

function Register() {
    return (
        <Box>
            <Typography className='text-center mt-3' variant='h5'>Registration Form</Typography>
            <Box className="mt-5 d-flex justify-content-center">
                <Grid className='w-50' container spacing={5}>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MASelect variant="outlined" label="Select City" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MASelect variant="outlined" label="Select Course" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput variant="outlined" label="Full Name" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput variant="outlined" label="Father Name" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput variant="outlined" label="Email" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput variant="outlined" type="number" label="Phone" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput variant="outlined" type="number" label="CNIC" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput variant="outlined" type="number" label="Father CNIC" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MADatePicker variant="outlined" label="mm/dd/yyyy" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MASelect option={["Male", "Female"]} variant="outlined" label="Select Gender" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={12}>
                        <MAInput variant="outlined" label="Address" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={12}>
                    <MAInput variant="outlined" label="Last Qualification" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={12}>
                    <MAInput variant="outlined" label="Do you have a laptop? " />
                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}

export default Register