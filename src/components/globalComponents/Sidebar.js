import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from '../../data/SidebarData';
import '../../Styles/navbar.css'
import { IconContext } from 'react-icons';
import * as FcIcons from 'react-icons/fc';
import logo from '../../assets/img/LogoNew.png'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({
            type: types.logout
        })
    }
    

    return (
        <>
            <IconContext.Provider value={{ color: '#47772e' }}>
                <nav className="navbar navbar-header navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <form className="me-auto">
                                <img id='logo' className="logo-nav" src={logo} alt="" />
                            </form>
                            <ul className="navbar-nav d-flex">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{user.data[0].descripcion}</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item"> <FcIcons.FcLock /><span onClick={handleLogout}>Cerrar Sesión</span></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className={`navbar-dark bg-dark ${sidebar ? 'nav-menu active' : 'nav-menu'}`}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={`${item.cName} nav-item`}>
                                    <Link className='nav-link' to={item.path}>
                                        {item.icon}
                                        <span className="spanTitle">{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

