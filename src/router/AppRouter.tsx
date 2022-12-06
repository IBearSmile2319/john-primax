import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/useReducer'
import ChangePassword from '../pages/changePassword/ChangePassword'
import FormLogin from '../pages/login/formLogin/FormLogin'
import FormRecoverPassword from '../pages/login/formRecoverPassword/FormRecoverPassword'
import Login from '../pages/login/Login'
import { refreshToken } from '../store/userSlice/user.thunks'
import Links, { ILink } from './Links'
import { CHANGE_PASSWORD, LOGIN, RECOVER_PASSWORD } from './ListRoutesFlow'
import PrivateRoutes from './PrivateRoutes'

const AppRouter = () => {
  const dispatch = useAppDispatch()
  const {
    user,
    loading,
    token,
  } = useAppSelector(state => state.user)

  useEffect(() => {
      dispatch(refreshToken())
  }, [dispatch])

  const renderRoutes = (item: ILink, index: number) => {
    if (item.subMenu) {
      if (item.path === "") {
      } else {
        return (
          <Route key={index} path={item.path} element={<item.element />}>
            <Route index element={<item.subElement />} />
            {
              item.subMenu.map((subItem, subIndex) => {
                if (subItem.path !== "") {
                  return <Route path={subItem.path} key={subIndex} element={<subItem.element />} />
                }
              })
            }
          </Route>
        )
      }
    } else {
      return (
        <Route key={index} path={item.path} element={<item.element />} />
      )
    }
  }
  // "email": "jhon.espino@gmailcom",
  // "password": "123456jh"

  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes admin={
        token ? true : false
        // true
        } />}>
        <Route index element={<Navigate to="/mantenimiento" />} />
        {
          Links.map((link, index) => renderRoutes(link, index))
        }
      </Route>
      <Route path={LOGIN} element={<Login />}>
        <Route index element={<FormLogin />} />
        <Route path={RECOVER_PASSWORD} element={<FormRecoverPassword />} />
      </Route>
      <Route path={CHANGE_PASSWORD} element={<ChangePassword />} />
    </Routes >
  )
}

export default AppRouter