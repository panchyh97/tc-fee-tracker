'use client'

import { IoHome, IoSettings, IoPerson, IoLogOut } from 'react-icons/io5';
import { SidebarMenuItem } from '@components';
import { useState } from 'react';

const menuItems = [
    {
        path: '/home',
        icon: <IoHome size={16} />,
        title: 'Inicio',
    },
    {
        path: '/people',
        icon: <IoPerson size={16} />,
        title: 'Personas registradas',
    },
    {
        path: '/configuration',
        icon: <IoSettings size={16} />,
        title: 'Configuración',
    },
    {
        path: '#',
        icon: <IoLogOut size={16} />,
        title: 'Cerrar sesión',
    },
]

export const Sidebar = () => {
    const [showDrawer, setShowDrawer] = useState(true);

    return (

        <div id="menu"
            style={showDrawer ? { width: "400px" } : { width: "80px" }}
            className="bg-gray-200 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll rounded-r-2xl">

            <div id="logo" className="mt-11 px-6">
                <h1 className="text-center text-lg md:text-2xl font-bold text-gray-900">
                    {showDrawer && <span> TC Fee Tracker</span>}
                </h1>
                <button className='text-gray-900' onClick={() => setShowDrawer(!showDrawer)}>
                    esconder
                </button>
            </div>

            <div id="profile" className="px-6 py-6 pb-10">
                {showDrawer && <p className="text-center text-gray-900">¡Hola Fran 😊!</p>}
            </div>


            <div id="nav" className="w-full pl-6 flex flex-col">
                {
                    menuItems.map(item => (
                        <SidebarMenuItem key={item.path} {...item} showDrawer={showDrawer} />
                    ))
                }
            </div>
        </div>
    )
}
