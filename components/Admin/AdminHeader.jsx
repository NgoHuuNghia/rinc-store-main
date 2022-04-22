import React from 'react'
import { useRouter } from 'next/router'

import { AdminArrow } from 'public/svg'
import { MdWidgets } from 'react-icons/md'
import {AiFillDashboard, AiFillLayout} from 'react-icons/ai'
import { useSidebar } from '@lib/adminContext'
import { getCrumbList } from '@lib/commonFunctions'

const AdminHeader = () => {
    const router = useRouter()
    const crumbList = getCrumbList(router)
    const { setSidebar } = useSidebar()

    return (
        <div className='head'>
            <button onClick={() => setSidebar('terminal')}><AdminArrow /></button>
            <div className='breadcrumbs'>
                {crumbList.map((crumb, index) => {
                    return (
                        <React.Fragment key={crumb.title}>
                            <div>
                                <a onClick={() => router.replace(crumb.href)}>
                                    {crumb.title}
                                </a>
                            </div>
                            {index < crumbList.length - 1 && <span>/</span>}
                        </React.Fragment>
                    )
                })}
            </div>
            <div className='links'>
                <a onClick={() => router.replace('/')}><MdWidgets /></a>
                <a onClick={() => router.replace('/')}><AiFillDashboard /></a>
                <a onClick={() => router.replace('/')}><AiFillLayout /></a>
            </div>
        </div>
    )
}

export default AdminHeader