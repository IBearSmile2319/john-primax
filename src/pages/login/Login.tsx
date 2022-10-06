import React from 'react'
import './Login.css'
import ImgBanner from '../../assets/tanques_primax.png'
import Logo from '../../assets/svg/logo.svg'
import { Outlet } from 'react-router-dom'
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-banner">
                <img src={
                    ImgBanner
                } alt="" />
            </div>
            <div className="login-content">
                <div className="login-content-logo">
                    <img src={
                        Logo
                    } alt="" />
                </div>
                <div className="login-content-form">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Login
