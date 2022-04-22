import { useSidebar } from '@lib/adminContext'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {MdKeyboardArrowLeft} from 'react-icons/md'

const AdminTerminalLink = ({menu, menuIcon, dropDown, crumbList}) => {
    const [expanded, setExpanded] = useState(false)
    const {setSidebar} = useSidebar()

    useEffect(() => {
        if(crumbList[1]?.title == menu){setExpanded(true)}
        else setExpanded(false)
    }, [crumbList, menu])
    

    //! li.current is temp till url thing is established

    return (
        <li onClick={() => setExpanded(!expanded)} className={`${expanded ? 'current' : ''}`}>
            <a><span>{menuIcon}{menu}</span><MdKeyboardArrowLeft /></a>
            <ul>
                {dropDown.map((dropdownMenu, index) => {
                    return (
                        // <li key={dropdownMenu.label} className={index == 0 ? `current` : null}>
                        <li key={dropdownMenu.label} className={
                            crumbList[1]?.href == dropdownMenu.url ? "current" : crumbList[2]?.href == dropdownMenu.url ? 'current' : null
                        }>
                            <Link passHref href={dropdownMenu.url}>
                                {/* <a onClick={
                                    () => {setSidebar(''), setExpanded(current)}
                                }> */}
                                <a>
                                    {dropdownMenu.icon}{dropdownMenu.label}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}

export default AdminTerminalLink