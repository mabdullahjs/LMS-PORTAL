import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'
import Home from '../../pages/Home'
import ProtectedRoutes from './ProtectedRoutes'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='/signup' element={<Signup />} /> */}
        <Route path='/admin/*' element={<ProtectedRoutes component={<Home/>} route="home"/>} />
        <Route path='*' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router