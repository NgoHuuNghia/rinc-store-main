import React from 'react'
import {FaBars} from 'react-icons/fa'
import { useRouter } from 'next/router'

import { AdminArrow } from 'public/svg'
import { MdWidgets } from 'react-icons/md'
import {AiFillDashboard, AiFillLayout} from 'react-icons/ai'
import { useSidebar } from '@lib/adminContext'

const AdminHeader = () => {
    const router = useRouter()
    const { slug } = router.query
    
    const { setSidebar } = useSidebar()

    return (
        <div className='head'>
            <button onClick={() => setSidebar('terminal')}><AdminArrow /></button>
            <div className='breadcrumbs'>
                <div>
                    <a onClick={() => router.push('/admin')}>Admin</a>
                </div>
                {slug && (
                    <>
                        <span>/</span>
                        <div>
                            <a >{slug}</a>
                        </div>
                    </>
                )}
            </div>
            <div className='links'>
                <a href="/"><MdWidgets /></a>
                <a href="/"><AiFillDashboard /></a>
                <a href="/"><AiFillLayout /></a>
            </div>
        </div>
    )
}

export default AdminHeader