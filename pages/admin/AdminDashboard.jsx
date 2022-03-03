import React from 'react'
import {FaFilter, FaSearch, FaChevronLeft, FaChevronRight} from 'react-icons/fa'

// import { useGlobalContext } from '../../context'
// import AdminGamesList from '@components/admin/gamesList'
import { useSidebar } from '@lib/adminContext'

const AdminDashboard = () => {
    // const { 
    //     featuredList, 
    //     featuredListRecent
    // } = useGlobalContext()
    const { sidebar, setSidebar } = useSidebar()

    return (
        <>
            <div className='title'>
                <h2>Dash title</h2>
                <button onClick={() => setSidebar('filter')}><FaFilter /></button>
            </div>
            <div className='list-container'>
                <div className='search'>
                    <input type="text" placeholder='Search slug or id...' />
                    <button><FaSearch /></button>
                </div>
                <ul className='table'>
                    <li className='table-head'>id</li>
                    <li className='table-head'>slug</li>
                    <li className='table-head'>released</li>
                    <li className='table-head'>rating</li>
                    <li className='table-head'>reviews</li>
                    <li className='table-head edit'>Edit</li>
                    <li className='table-head delete'>Delete</li>
                    {/* {featuredList.map((item) => {
                        return <AdminGamesList key={item.id} {...item}/>
                    })}
                    {featuredListRecent.map((item) => {
                        return <AdminGamesList key={item.id} {...item}/>
                    })} */}
                </ul>
                <div className='pagination'>
                    <ul>
                        <li><FaChevronLeft /></li>
                        <li className='current'>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li><FaChevronRight /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard