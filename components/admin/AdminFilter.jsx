import React, {useState} from 'react'
import {  AiFillPieChart, AiOutlineRightSquare } from'react-icons/ai'
import { FaFilter, FaSearch } from 'react-icons/fa'

import { useSidebar } from '@lib/adminContext'

const AdminFilter = () => {
    const {sidebar, setSidebar} = useSidebar()

    return (
        <div className={`filter-controls ${sidebar === 'filter' ? 'sidebar-open' : ''}`}>
            <div className='head'>
                <p>Submit filter <button onClick={() => setSidebar('')}><FaFilter /></button></p>
            </div>
            <form>
                <div className='option'>
                    <label>By date <AiFillPieChart /></label>
                    <div>
                        <button type="button" className='current'>Oldest</button>
                        <button type="button">Recent</button>
                        <button type="button">Range</button>
                    </div>
                </div>
                <div className='option'>
                    <label>By rating <AiFillPieChart /></label>
                    <div>
                        <button type="button" className='current'>Lowest</button>
                        <button type="button">Highest</button>
                        <button type="button">Range</button>
                    </div>
                </div>
                <div className='option'>
                    <label>By Reviews <AiFillPieChart /></label>
                    <div>
                        <button type="button" className='current'>Lowest</button>
                        <button type="button">Highest</button>
                        <button type="button">Range</button>
                    </div>
                </div>
                <div className='option'>
                    <label>By metacritic <AiFillPieChart /></label>
                    <div>
                        <button type="button" className='current'>Lowest</button>
                        <button type="button">Highest</button>
                        <button type="button">Range</button>
                    </div>
                </div>
                <div className='col-2 selection'>
                    <label>By genres <AiFillPieChart /></label>
                    <div>
                        <div className='applied'>
                            <p>Applied Filters</p>
                            <div>
                                <button>+ Any genres</button>
                                <button>+ genres</button>
                                <button>+ Angry</button>
                                <button>+ Cake</button>
                                <button>+ Shooter</button>
                            </div>
                        </div>
                        <div className='selector'>
                            <div className='search'>
                                <input type="text" placeholder='Search...'/>
                                <button type='button'><FaSearch /></button>
                            </div>
                            <div className='option'>
                                <button>Action</button>
                                <button>Strategy</button>
                                <button>City building</button>
                                <button>Any genres</button>
                                <button>genres</button>
                                <button>Angry</button>
                                <button>Cake</button>
                                <button>Shooter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AdminFilter