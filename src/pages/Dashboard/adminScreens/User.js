import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import MAButton from '../../../config/components/MAButton';
import MAInput from '../../../config/components/MAInput';
import MASelect from '../../../config/components/MASelect';
import { sendData } from '../../../config/Firebase/firebaseMethod';


function Register() {
    // form state

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cnic, setCnic] = useState("");
    const [password, setPassword] = useState("");
    const [type , setType] = useState("")
    const [loader , setLoader] = useState(false)

    // register student
    const registerStudent = ()=>{
        setLoader(true);
        const obj = {
            name:name,
            Email:email,
            cnic:cnic,
            type:type
        }
        sendData(obj , "NewAdmission")
        .then((res)=>{
            console.log(res);
            setLoader(false);
        })
        .catch((err)=>{
            console.log(err);
            setLoader(false);
        })
    }
    return (
        <Box>
            <Typography className='text-center mt-3' variant='h5'>Create User</Typography>
            <Box className="mt-5 d-flex justify-content-center">
                <Grid className='w-50' container spacing={5}>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setName(e.target.value)} value={name} variant="outlined" label="Full Name" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} type="email" onChange={(e) => setEmail(e.target.value)} value={email} variant="outlined" label="Email" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} type="password" onChange={(e) => setPassword(e.target.value)} value={password} variant="outlined" label="Password" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} type="number" onChange={(e) => setCnic(e.target.value)} value={cnic} variant="outlined" label="CNIC" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MASelect option={["Admin", "Student" , "Teacher" , "Institute"]} onChange={(e) => setType(e.target.value)} value={type} variant="outlined" label="Select Course" />
                    </Grid>
                    

                </Grid>

            </Box >
            <Box className="mt-5 d-flex justify-content-center">
                <MAButton className="mb-5" onClick={()=>registerStudent()} loading={loader} label="Submit" />
            </Box>
        </Box>
    )
}

export default Register