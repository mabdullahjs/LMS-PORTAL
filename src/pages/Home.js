import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
// import { auth, sendData, signOutUser } from '../config/Firebase/firebaseMethod'
import { Box, Typography } from '@mui/material'
import { signOutUser } from '../config/Firebase/firebaseMethod'
import Drawer from '../config/components/muiCom/Drawer'
import Institute from './homeScreens/Institute'

function Home() {



  //send data
  // const dataSend = () => {
  //   const userId = auth.currentUser.uid
  //   sendData({
  //     name: "checking",
  //     email: "checking",
  //     id: userId
  //   }, "datas")
  //     .then((res) => {
  //       console.log(res);
  //       console.log(date);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

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
    navigate('/home/user')
  }
  const institute = ()=>{
    navigate('/home/')
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
