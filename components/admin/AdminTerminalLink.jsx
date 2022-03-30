import Link from 'next/link'
import React, {useState} from 'react'
import {MdKeyboardArrowLeft} from 'react-icons/md'

const AdminTerminalLink = ({menu, menuIcon, dropDown}) => {
    const [expanded, setExpanded] = useState(false)

    //! li.current is temp till url thing is established

    return (
        <li onClick={() => setExpanded(!expanded)} className={`${expanded ? 'current' : ''}`}>
            <a><span>{menuIcon}{menu}</span><MdKeyboardArrowLeft /></a>
            <ul>
                {/* <li className='current'><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                <li><a href=""><AiOutlineRightSquare />Dashboard</a></li> */}
                {/* //! temp current make query */}
                {dropDown.map((dropdownMenu, index) => {
                    return (
                        <li key={dropdownMenu.label} className={index == 0 ? `current` : null}>
                            <Link passHref href={dropdownMenu.url}>
                                <a >{dropdownMenu.icon}{dropdownMenu.label}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}

export default AdminTerminalLink