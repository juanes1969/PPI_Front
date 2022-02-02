import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Vehículos',
        path: '/Vehicles',
        icon: <FaIcons.FaCarSide />,
        cName: 'nav-text'
    },
    {
        title: 'Conductores',
        path: '/Conducts',
        icon: <BsIcons.BsFillPersonLinesFill />,
        cName: 'nav-text'
    },
    {
        title: 'Rutas',
        path: '/Routes',
        icon: <FaIcons.FaRoute />,
        cName: 'nav-text'
    },
    {
        title: 'Expense',
        path: '/Expense',
        icon: <FaIcons.FaRoute />,
        cName: 'nav-text'
    },
    {
        title: 'Reportes',
        path: '/Reports',
        icon: <FaIcons.FaNewspaper />,
        cName: 'nav-text'
    },
    {
        title: 'Soporte',
        path: '/Supports',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Cerrar sesión',
        path: '/',
        icon: <FcIcons.FcLock />,
        cName: 'nav-text'
    }
]
