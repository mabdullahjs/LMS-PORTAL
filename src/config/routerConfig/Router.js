import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login'
import Home from '../../pages/Home'
import ProtectedRoutes from './ProtectedRoutes'
import Result from '../../pages/Result'
import Register from '../../pages/Register'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/result' element={<Result />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin/*' element={<ProtectedRoutes component={<Home/>} route="home"/>} />
        <Route path='*' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router