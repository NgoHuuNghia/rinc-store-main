import React from 'react'
import Link from 'next/link'
import MoreLikeSeriesComponent from './MoreLikeSeriesComponent'

const MoreLikeSeries = ({gamesData}) => {
    if(gamesData){
        return (
            <div>
                <div>
                    <h5>From the same series</h5>
                    <Link href="/"><a>See all</a></Link>
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
