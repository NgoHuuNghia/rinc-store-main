import React from 'react'
import {RiEditBoxFill, RiDeleteBack2Fill} from 'react-icons/ri'

const AdminGamesList = ({id, slug, released, rating, reviews_count}) => {
    return (
        <>
            <li>{id}</li>
            <li>{slug}</li>
            <li>{released}</li>
            <li>{rating}</li>
            <li>{reviews_count}</li>
            <li className='edit'><RiEditBoxFill /></li>
            <li className='delete'><RiDeleteBack2Fill /></li>
        </>
    )
}

export default AdminGamesList