import { Navigate, Route, Routes } from 'react-router-dom'
import ChangePassword from '../pages/changePassword/ChangePassword'
import FormLogin from '../pages/login/formLogin/FormLogin'
import FormRecoverPassword from '../pages/login/formRecoverPassword/FormRecoverPassword'
import Login from '../pages/login/Login'
import Links, { ILink } from './Links'
import { CHANGE_PASSWORD, LOGIN, RECOVER_PASSWORD } from './ListRoutesFlow'
import PrivateRoutes from './PrivateRoutes'

const AppRouter = () => {
  const auth = true

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

  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes admin={auth} />} >
        <Route index element={<Navigate to="/gastos" />} />
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