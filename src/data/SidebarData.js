import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';


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
        title: 'Mantenimiento vehículos',
        path: '/Maintenance',
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
        cName: 'nav-text', 
        child: true, 
        childName: 'Gastos', 
        childPath: '/Expense', 
        childIcon: <FaIcons.FaShopify />

    },
    {
        title: 'Gastos',
        path: '/Expense',
        icon: <FaIcons.FaShopify />,
        cName: 'nav-text'
    },
    {
        title: 'Reportes',
        path: '/Reports',
        icon: <FaIcons.FaNewspaper />,
        cName: 'nav-text'
    }
]
