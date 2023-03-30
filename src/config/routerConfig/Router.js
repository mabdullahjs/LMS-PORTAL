import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login'
import Home from '../../pages/Dashboard/adminScreens/Home'
import ProtectedRoutes from './ProtectedRoutes'
import Result from '../../pages/Result'
import Register from '../../pages/Register'
import InstituteScreen from '../../pages/Dashboard/InstituteScreens/InstituteScreen'
import Student from '../../pages/Dashboard/studentScreens/Student'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/result' element={<Result />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin/*' element={<ProtectedRoutes component={<Home/>} />} />
        <Route path='/institute/*' element={<ProtectedRoutes component={<InstituteScreen/>} />} />
        <Route path='/student/*' element={<ProtectedRoutes component={<Student/>}/>} />
        <Route path='*' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router