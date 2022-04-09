import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'

import { AdminArrow } from 'public/svg/index'
import AdminTerminalLink from '@components/admin/AdminTerminalLink'
import { useSidebar } from '@lib/adminContext'
import { terminalDashboardData, terminalMenuData } from './terminalMenuData'
import { UserContext } from '@lib/globalContext'
import { useRouter } from 'next/router'
import { getCrumbList } from '@lib/commonFunctions'

//todo depend on the url to make a state for dashboard child links

const AdminTerminal = () => {
    const { user, username } = useContext(UserContext)
    const {sidebar, setSidebar} = useSidebar()
    const router = useRouter()
    const crumbList = getCrumbList(router)

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
                        {/* <img src="https://media.rawg.io/media/resize/80/-/avatars/654/6549f85d93a1b4653d6030fe6bd407bf.jpg" alt="avatar" /> */}
                        <img 
                            src={user?.photoURL || `icons/hacker.png`} 
                            alt="avatar" 
                        />
                        <p>{username || "you not suppose to be here"}</p>    
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
                        return <AdminTerminalLink key={terminalMenu.menu} {...terminalMenu} crumbList={crumbList}/>
                    })}
                </ul>
                <p className='label'>label</p>
                <ul>
                    {/* <AdminTerminalLink /> */}
                    {terminalMenuData.map(terminalMenu => {
                        return <AdminTerminalLink key={terminalMenu.menu} {...terminalMenu} crumbList={crumbList}/>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default AdminTerminal