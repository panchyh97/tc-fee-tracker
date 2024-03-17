import { IoHome, IoSettings, IoPerson, IoLogOut } from 'react-icons/io5';
import { SidebarMenuItem } from '@components';

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
    return (

        <div id="menu"
            style={{ width: '400px' }}
            className="bg-gray-200 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll rounded-r-2xl">

            <div id="logo" className="mt-11 px-6">
                <h1 className="text-center text-lg md:text-2xl font-bold text-gray-900">
                    <span> TC Fee Tracker</span>
                </h1>
            </div>

            <div id="profile" className="px-6 py-6 pb-10">
                <p className="text-center text-gray-900">¡Hola Fran 😊!</p>
            </div>


            <div id="nav" className="w-full pl-6 flex flex-col">
                {
                    menuItems.map(item => (
                        <SidebarMenuItem key={item.path} {...item} />
                    ))
                }
            </div>
        </div>
    )
}
