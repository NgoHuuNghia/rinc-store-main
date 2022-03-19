import React from 'react'
import MoreLikeSeriesComponent from './MoreLikeSeriesComponent'

const MoreLikeSeries = ({gameSeries}) => {
    return (
        <div>
            <div>
                <h5>More from the same series</h5>{/*  output Publisher here i think */}
                <a href="/">See all</a>
            </div>
            <div>
                {gameSeries.map((item) => {
                    return <MoreLikeSeriesComponent key={item.id} {...item}/>
                })}
            </div>
        </div>
    )
}

export default MoreLikeSeries
