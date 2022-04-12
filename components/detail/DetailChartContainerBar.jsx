import React, {useState} from 'react'
import {FaCircle} from 'react-icons/fa'
import { rate } from '@lib/firebase'

const DetailChartContainerBar = ({ userRatings, gameRef, user, username }) => {
    const [ curretRating, setCurretRating ] = useState("")
    const ratings = userRatings.ratings
    const ratingsKeys = Object.keys(ratings)
    const chartContainerWidth = ratingsKeys.reduce((cum, key) => {
        return cum + ratings[key].percent
    }, 0)

    return (
        // <div>ass</div>
        <div className='chart-container'>
            {username
                ? <p>Click to rate</p>
                : <p>Login to rate</p>
            }
            <div className='chart'> {/* this is so gonna take some work might do last */}
                {ratingsKeys
                    .sort((a, b) => ratings[b].count - ratings[a].count)
                    .map((key, index) => {
                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setCurretRating(key)}
                                onMouseLeave={() => setCurretRating()}
                                onClick={() => rate(key, user.uid, gameRef)}
                                className={
                                    (key == curretRating)
                                        ? key + " active"
                                        : key
                                    
                                }
                                //$ style={ratingsKeys.length - 1 == index || chartContainerWidth > 100
                                //     ? {width: `${ratings[key].percent - (chartContainerWidth - 100)}%`}
                                //     : {width: `${ratings[key].percent}%`}}
                                style={{width: 25 + "%"}}
                            >
                                <img src={
                                    key == 'exceptional'
                                        ? 'icons/ratings/exceptional.png' :
                                    key == 'recommended'
                                        ? 'icons/ratings/recommended.png' :
                                    key == 'meh'
                                        ? 'icons/ratings/meh.png' 
                                        : 'icons/ratings/skip.png'
                                } alt="" />
                            </div>
                        )}
                    )
                }
            </div>
            <div className='chart-label'>
                {ratingsKeys
                    .sort((a, b) => {
                        const ratingOrder = ['exceptional', 'recommended', 'meh', 'skip'];
                        const aRatingIndex = ratingOrder.indexOf( a );
                        const bRatingIndex = ratingOrder.indexOf( b );

                        return aRatingIndex - bRatingIndex
                    })
                    .map((key, index) => {
                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setCurretRating(key)}
                                onMouseLeave={() => setCurretRating()}
                                onClick={() => rate(key, user.uid, gameRef)}
                                className={key === curretRating
                                    ? key + " active"
                                    : key
                            }>
                                <FaCircle />
                                <p>{key}</p>
                                <p>{ratings[key].count}</p>
                            </div>
                        )}
                    )
                }
            </div>
        </div>
    )
}
export default DetailChartContainerBar