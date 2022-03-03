import React from 'react'
import { useSidebar } from '@lib/adminContext'

const AdminOverlay = () => {
    const {sidebar, setSidebar} = useSidebar()

    return (
        <div onClick={() => setSidebar('')} className={`sidebar-overlay ${(sidebar.length > 0 ? 'sidebar-open' : '')}`}></div>
    )
}

export default AdminOverlay