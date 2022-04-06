import { SidebarProvider } from '@lib/adminContext'
import { saleData, userData } from '@components/admin/chart/ChartData'
import { useState } from 'react'
import BarChart from '@components/admin/chart/BarChart'
import LineChart from '@components/admin/chart/LineChart'

import { AiOutlineBarChart, AiOutlineLineChart } from 'react-icons/ai'
import {IoIosArrowDown} from 'react-icons/io'

const Admin = () => {
    const [userChartData, setUserChartData] = useState({
        labels: userData.map(data => data.year),
        datasets: [
            {
                id: 1,
                label: "Users gained by year",
                data: userData.map(data => data.userGain),
                backgroundColor: '#6dc849',
                borderColor: 'black',
                borderWidth: 2
            },
            {
                id: 2,
                label: "Users lost by year",
                data: userData.map(data => data.userLost),
                backgroundColor: '#c70000',
                borderColor: 'black',
                borderWidth: 2
            }
        ],
    })
    const [saleChartData, setSaleChartData] = useState({
        labels: saleData.map(data => data.year),
        datasets: [
            {
                id: 1,
                label: "sales gained by year",
                data: saleData.map(data => data.saleGain),
                backgroundColor: '#6dc849',
                borderColor: 'black',
                borderWidth: 2
            },
            {
                id: 2,
                label: "sales lost by year",
                data: saleData.map(data => data.saleLost),
                backgroundColor: '#c70000',
                borderColor: 'black',
                borderWidth: 2
            }
        ],
    })

    return (
        <>
            <div className='title'>
                <h2>{`Dashboard`}</h2>
            </div>
            <div className='dashboard-container'>
                <div className='notification'>
                    <div className='Reports'>
                        <div className='head'>
                            <p>System reports</p>
                            <div>
                                <p>View more</p>
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className='collapse-container'>
                            <div className='active'>
                                <p>lorem report</p>
                            </div>
                            <div className='active'>
                                <p>lorem report</p>
                            </div>
                        </div>
                    </div>
                    <div className='Warnings'>
                        <div className='head'>
                            <p>Warnings</p>
                            <div>
                                <p>View more</p>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                    <div className='Dangers'>
                        <div className='head'>
                            <p>Dangers</p>
                            <div>
                                <p>View more</p>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                    <div className='Success'>
                        <div className='head'>
                            <p>Success</p>
                            <div>
                                <p>View more</p>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='chart-container'>
                    <p><AiOutlineBarChart /> Users report</p>
                    <div>
                        <BarChart chartData={userChartData} />
                    </div>
                </div>
                <div className='chart-container'>
                    <p><AiOutlineLineChart /> Sales report</p>
                    <div>
                        <LineChart chartData={saleChartData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin

Admin.getLayout = function getLayout(page) {
    return <SidebarProvider>{page}</SidebarProvider>
}