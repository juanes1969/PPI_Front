import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from '../../data/SidebarData';
import '../../Styles/navbar.css'
import { IconContext } from 'react-icons';
import * as FcIcons from 'react-icons/fc';
import logo from '../../assets/img/LogoWhite.png'

export const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                        <div class="collapse navbar-collapse" id="navbarColor02">
                            <form class="me-auto">
                                <img id='logo' className="logo-nav" src={logo} alt="" />
                            </form>
                            <ul class="navbar-nav d-flex">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Administrador</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="/"> <FcIcons.FcLock /><span>Cerrar Sesión</span></a>
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

