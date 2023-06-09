import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import MADrawer from '../../../config/components/MADrawer'
import Institute from './Institute'
import { signOutUser } from '../../../config/Firebase/firebaseMethod'
import User from './User'
import InsDetail from './InsDetail'

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

  const user = () => {
    navigate('/admin/user')
  }
  const institutes = () => {
    navigate('/admin/')
  }
  return (
    <Box>


      <Routes>
        <Route path='/' element={<MADrawer func0={user} func1={institutes} func2={signout} screen={<Institute />} label="Admin" options={['User', 'Institute', 'Signout']} />} />
        {/* <Route path='/' element={<InsForm/>} /> */}
        <Route path='/user' element={<MADrawer func0={user} func1={institutes} func2={signout} screen={<User />} label="Admin" options={['User', 'Institute', 'Signout']} />} />
        <Route path='/detail' element={<MADrawer func0={user} func1={institutes} func2={signout} screen={<InsDetail />} label="Admin" options={['User', 'Institute', 'Signout']} />} />
      </Routes>
    </Box>
  )
}

export default Home
