import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Container from '../components/admin/container/Container'
interface Props {
    admin: boolean
}
const PrivateRoutes = ({
    admin
}   : Props) => {
    const location = useLocation()

  return admin ? (
    <Container>
        <Outlet />
    </Container>
    ) : <Navigate
        to="/login"
        state={{ from: location }}
        replace
    />
}

export default PrivateRoutes
