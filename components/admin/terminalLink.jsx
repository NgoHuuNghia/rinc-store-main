import React, {useState} from 'react'
import {MdKeyboardArrowLeft,MdWidgets} from 'react-icons/md'
import {AiOutlineRightSquare} from 'react-icons/ai'

const AdminTerminalLink = () => {
    const [expanded, setExpanded] = useState(false)

    //! li.current is temp till url thing is established

    return (
        <li onClick={() => setExpanded(!expanded)} className={`${expanded ? 'current' : ''}`}>
            <a><span><MdWidgets />test stuff</span><MdKeyboardArrowLeft /></a>
            <ul>
                <li className='current'><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
            </ul>
        </li>
    )
}

export default AdminTerminalLink