import React, {useState} from 'react'
import ReturnRatingIcon from '../../Components/ReturnRatingIcon'
import {FaCircle} from 'react-icons/fa'

const DetailChartContainerBar = ({ ratings }) => {

    const chartContainerWidth = ratings.reduce((currentTotal, item) => {
        return item.percent + currentTotal
    }, 0)
    const [ curretRating, setCurretRating ] = useState()

    return (
        <div className='chart-container'>
            <p>Click to rate</p>
            <div className='chart'> {/* this is so gonna take some work might do last */}
                {ratings.map((item, index) => {
                        return (
                            <div
                                onMouseEnter={() => setCurretRating(index)}
                                key={item.id}
                                className={index === curretRating
                                    ? item.title + " active"
                                    : item.title
                                }
                                style={ratings.length - 1 == index || chartContainerWidth > 100
                                    ? {width: `${item.percent - (chartContainerWidth - 100)}%`}
                                    : {width: `${item.percent}%`}
                                }>
                                    {/* <img src={returnRatingIcon(index, true, item.percent)}/> */}
                                    <ReturnRatingIcon title={item.title} chart={true} percent={item.percent}/>
                            </div>
                        )
                    }
                )}
            </div>
            <div className='chart-label'>
                {ratings.map((item, index) => {
                    return (
                        <div
                            onMouseEnter={() => setCurretRating(index)}
                            className={index === curretRating
                                ? item.title + " active"
                                : item.title
                        }>
                            <FaCircle />
                            <p>{item.title}</p>
                            <p>{item.count}</p>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default DetailChartContainerBar
