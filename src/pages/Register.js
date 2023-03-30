import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import MAInput from '../config/components/MAInput'
import MASelect from '../config/components/MASelect'
import MAButton from '../config/components/MAButton'
import MADatePicker from '../config/components/MADataPicker'
import { sendData } from '../config/Firebase/firebaseMethod'

function Register() {
    // form state
    const [city, setCity] = useState("");
    const [course, setCourse] = useState("");
    const [name, setName] = useState("");
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [cnic, setCnic] = useState("");
    const [fcnic, setFcnic] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [qualification, setQualification] = useState("");
    const [laptop, setLaptop] = useState("");
    const [loader , setLoader] = useState(false)

    // register student
    const registerStudent = ()=>{
        setLoader(true);
        const obj = {
            name:name,
            FatherName:fname,
            Email : email,
            phone:phone,
            cnic:cnic,
            FatherCnic:fcnic,
            Gender:gender,
            BirthDate:date.$d,
            Address:address,
            Qualification:qualification,
            Laptop:laptop,
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
            <Typography className='text-center mt-3' variant='h5'>Registration Form</Typography>
            <Box className="mt-5 d-flex justify-content-center">
                <Grid className='w-50' container spacing={5}>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MASelect option={["Karachi", "Lahore" , "Faislabad"]} onChange={(e) => setCity(e.target.value)} value={city} variant="outlined" label="Select City"  />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MASelect option={["TypeScript", "JavaScript"]} onChange={(e) => setCourse(e.target.value)} value={course} variant="outlined" label="Select Course" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setName(e.target.value)} value={name} variant="outlined" label="Full Name" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setFname(e.target.value)} value={fname} variant="outlined" label="Father Name" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setEmail(e.target.value)} type="email" value={email} variant="outlined" label="Email" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setPhone(e.target.value)} value={phone} variant="outlined" type="number" label="Phone" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setCnic(e.target.value)} value={cnic} variant="outlined" type="number" label="CNIC" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setFcnic(e.target.value)} value={fcnic} variant="outlined" type="number" label="Father CNIC" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MADatePicker onChange={(e) => setDate(e)} value={date} variant="outlined" label="Date of Birth" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MASelect onChange={(e) => setGender(e.target.value)} value={gender} option={["Male", "Female"]} variant="outlined" label="Select Gender" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={12}>
                        <MAInput fullWidth={true} onChange={(e) => setAddress(e.target.value)} value={address} variant="outlined" label="Address" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={12}>
                        <MAInput fullWidth={true} onChange={(e) => setQualification(e.target.value)} value={qualification} variant="outlined" label="Last Qualification" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={12}>
                        <MAInput fullWidth={true} onChange={(e) => setLaptop(e.target.value)} value={laptop} variant="outlined" label="Do you have a laptop? " />
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