import React, {useState, useEffect} from 'react'
import MoreLikeGenresComponent from './MoreLikeGenresComponent'

const BasicUrl = 'https://api.rawg.io/api/games'
const APIkey = '?key=8988510ce7664ac580a6c3b238a28e69'

const MoreLikeGenres = ({ gamesData }) => {
    //! fetch games of the same series
    
    if(gamesData){
        return (
            <div>
                <div>
                    <h5>More Like this</h5>{/*  output games of same gerne here i think */}
                    <a href="/">See all</a>
                </div>
                <div>
                    {/* map here 6 games */}
                    {gamesData.map((item, index) => {
                        return <MoreLikeGenresComponent key={index} {...item}/>
                    })}
                </div>
            </div>
        )
    }
    else return null
}

export default MoreLikeGenres