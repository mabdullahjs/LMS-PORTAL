import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import Drawer from '../../../config/components/muiCom/Drawer'
import Institute from './Institute'
import { signOutUser } from '../../../config/Firebase/firebaseMethod'

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
  const institutes = ()=>{
    navigate('/admin/')
  }
  return (
    <Box>
     

      <Routes>
        <Route path='/' element={ <Drawer func0={user}  func1={institutes} func2={signout}  screen={<Institute/>} label="Admin"/>} />
        {/* <Route path='/' element={<InsForm/>} /> */}
        <Route path='/user' element={<Drawer func0={user}  func1={institutes} func2={signout} screen={<Typography>User</Typography>} label="Admin"/>}  />
      </Routes>
    </Box>
  )
}

export default Home
