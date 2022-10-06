import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ChangePassword from '../pages/changePassword/ChangePassword'
import FormLogin from '../pages/login/formLogin/FormLogin'
import FormRecoverPassword from '../pages/login/formRecoverPassword/FormRecoverPassword'
import Login from '../pages/login/Login'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>}>
            <Route index element={<FormLogin/>}/>
            <Route path="recover-password" element={<FormRecoverPassword/>}/>
        </Route>
        <Route path="/change-password" element={<ChangePassword/>}/>
        
    </Routes>
  )
}

export default AppRouter