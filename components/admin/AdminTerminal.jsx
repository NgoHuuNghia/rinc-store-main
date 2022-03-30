import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'

import { AdminArrow } from 'public/svg/index'
import AdminTerminalLink from '@components/admin/AdminTerminalLink'
import { useSidebar } from '@lib/adminContext'
import { terminalDashboardData, terminalMenuData } from './terminalMenuData'

//todo depend on the url to make a state for dashboard child links

const AdminTerminal = () => {
    const {sidebar, setSidebar} = useSidebar()

    return (
        <nav className={`terminal ${sidebar === 'terminal' ? 'sidebar-open' : ''}`}>
            <div className='head'>
                <Link href='/'>
                    <a>
                        <img src={'/logo/rinc-white-v2.png'} alt="" />
                        <p>Rinc's admin</p>
                    </a>
                </Link>
                <button onClick={() => setSidebar('')}><AdminArrow /></button>
            </div>
            <div className='admin'>
                <Link href='/'>
                    <a>
                        <img src="https://media.rawg.io/media/resize/80/-/avatars/654/6549f85d93a1b4653d6030fe6bd407bf.jpg" alt="avatar" />
                        <p>Admin name</p>    
                    </a>    
                </Link>
            </div>
            <div className='search'>
                <input type="text" placeholder='Search...'/>
                <button><FaSearch /></button>
            </div>
            <div className='dashboard'>
                <ul>
                    {/* <AdminTerminalLink /> */}
                    {terminalDashboardData.map(terminalMenu => {
                        return <AdminTerminalLink key={terminalMenu.menu} {...terminalMenu}/>
                    })}
                </ul>
                <p className='label'>label</p>
                <ul>
                    {/* <AdminTerminalLink /> */}
                    {terminalMenuData.map(terminalMenu => {
                        return <AdminTerminalLink key={terminalMenu.menu} {...terminalMenu}/>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default AdminTerminal