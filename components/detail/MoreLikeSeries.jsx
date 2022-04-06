import React from 'react'
import MoreLikeSeriesComponent from './MoreLikeSeriesComponent'

const MoreLikeSeries = ({gamesData}) => {
    if(gamesData){
        return (
            <div>
                <div>
                    <h5>From the same series</h5>{/*  output games of same gerne here i think */}
                    <a href="/">See all</a>
                </div>
                <div>
                    {/* map here 6 games */}
                    {gamesData.map((item, index) => {
                        return <MoreLikeSeriesComponent key={index} {...item}/>
                    })}
                </div>
            </div>
        )
    }
    else return null
}

export default MoreLikeSeries
