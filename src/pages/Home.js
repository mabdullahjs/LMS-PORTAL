import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
// import { auth, sendData, signOutUser } from '../config/Firebase/firebaseMethod'
import { Box, Typography } from '@mui/material'
import { signOutUser } from '../config/Firebase/firebaseMethod'
import Drawer from '../config/components/muiCom/Drawer'
import Institute from './homeScreens/Institute'

function Home() {

  //navigation

  const navigate = useNavigate()

  const signout = () => {
    signOutUser()
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const user = ()=>{
    navigate('/admin/user')
  }
  const institute = ()=>{
    navigate('/admin/')
  }
  return (
    <Box>
     

      <Routes>
        <Route path='/' element={ <Drawer signout={signout} user={user} institute={institute} screen={<Institute/>}/>} />
        {/* <Route path='/' element={<InsForm/>} /> */}
        <Route path='/user' element={<Drawer signout={signout} user={user} institute={institute} screen={<Typography>User</Typography>}/>}  />
      </Routes>
    </Box>
  )
}

export default Home
