import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from '../../data/SidebarData';
import '../../Styles/navbar.css'
import { IconContext } from 'react-icons';
import logo from '../../assets/img/LogoWhite.png'

export const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                        <img className="logo-nav" src={logo} alt="" />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <img className="logo-menu-bar" src={logo} alt="" />
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
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

