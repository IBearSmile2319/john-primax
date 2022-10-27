import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Links, { ILink } from '../../../router/Links';
import CustomLinkActive from '../../custromLinkActive/CustomLinkActive';
import Logo from '../../../assets/svg/logo.svg'
import './styleSidebar.css'
interface Props {
  menuOpen: boolean;
  setMenuOpen: () => void;
  setMenuClose: () => void;
}

const Sidebar = ({ menuOpen, setMenuOpen, setMenuClose }: Props) => {
  const [iconMenu, setIconMenu] = React.useState(true)
  const path = window.location.pathname;

  const activeLink = (to: string, item: ILink) => {
    // let resolved = useResolvedPath(to)
    // let match = useMatch({ path: resolved.pathname, end: true })
    // // return match ? item.iconActive : item.icon
    // return match ? item.iconActive : item.icon
    return path.includes(to) ? item.iconActive : item.icon
  }
  const checkActive = (to: string) => {
    return path.includes(to) ? 'active' : ''
  }
  return (
    <div className={`admin-sidebar__container ${!menuOpen ? 'hide' : 'show'}`}
      onMouseLeave={setMenuClose}
    >
      <header
        onClick={setMenuOpen}
      >
        <Link to="/admin" className="logotipe"
          style={{
            opacity: !menuOpen ? '0' : '1',
          }}
        >
          <img src={Logo} alt="logotipe" />
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" className="menu-icon" fill="var(--text-color)"><path d="M2 8C2 6.89543 2.89543 6 4 6H28C29.1046 6 30 6.89543 30 8C30 9.10457 29.1046 10 28 10H4C2.89543 10 2 9.10457 2 8Z"></path><path d="M2 24C2 22.8954 2.89543 22 4 22H28C29.1046 22 30 22.8954 30 24C30 25.1046 29.1046 26 28 26H4C2.89543 26 2 25.1046 2 24Z"></path><path d="M2 16C2 14.8954 2.89543 14 4 14H28C29.1046 14 30 14.8954 30 16C30 17.1046 29.1046 18 28 18H4C2.89543 18 2 17.1046 2 16Z"></path></svg>
      </header>
      <nav >
        <ul>
          <li></li>
          {
            Links.map((item, index) => {
              return (
                <div className={`sidebar-option ${checkActive(item.path) && menuOpen ? 'active' : ''
                  }`} key={index}>
                  <li>
                    <CustomLinkActive
                      to={item.path}
                      // onClick={setMenuClose}
                    >
                      <div>
                        <i className={`${activeLink(item.path, item)} icon`} />
                      </div>
                      <span className="title"
                        style={{
                          opacity: !menuOpen ? '0' : '1',
                        }}
                      >
                        {item.name}
                      </span>
                    </CustomLinkActive>
                  </li>
                  {
                    checkActive(item.path) && menuOpen &&
                    item?.subMenu && item?.subMenu.map((sub, index) => (
                      <li key={index} className="acordion">
                        <CustomLinkActive
                          to={item.path + "/" + sub.path}
                          onClick={setMenuClose}
                        >
                          <div>
                            {/* <i className={`${activeLink(item.path + sub.path, item)} icon`} /> */}
                          </div>
                          <span className="title"
                            style={{
                              opacity: !menuOpen ? '0' : '1',
                            }}
                          >
                            {sub.name}
                          </span>
                        </CustomLinkActive>
                      </li>
                    )
                    )
                  }
                </div>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar