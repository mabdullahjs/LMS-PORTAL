import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
// import { auth, sendData, signOutUser } from '../config/Firebase/firebaseMethod'
import { Box } from '@mui/material'
import Appbar from '../config/components/muiCom/Appbar'
import { signOutUser } from '../config/Firebase/firebaseMethod'
import MAButton from '../config/components/MAButton'
import InsForm from './homeScreens/InsForm'

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
  return (
    <Box>
      <Appbar logout={signout} />

      <Box className="mt-4 d-flex justify-content-evenly">
        <MAButton onClick={() => navigate('/home/head')} label="Institutes" variant="outlined" />
        <MAButton onClick={() => navigate('/home/head1')} label="Create Institute" variant="outlined" />
        <MAButton onClick={() => navigate('/home/head2')} label="Create User" variant="outlined" />
      </Box>

      <Routes>
        <Route path='/head' element={<h1>Head01</h1>} />
        <Route path='/head1' element={<InsForm/>} />
        <Route path='/head2' element={<h1>Head03</h1>} />
      </Routes>
    </Box>
  )
}

export default Home
