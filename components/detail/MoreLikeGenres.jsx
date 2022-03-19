import React, {useState, useEffect} from 'react'
import MoreLikeGenresComponent from './MoreLikeGenresComponent'

const BasicUrl = 'https://api.rawg.io/api/games'
const APIkey = '?key=8988510ce7664ac580a6c3b238a28e69'

const MoreLikeGenres = ({ genres }) => {

    const [ games, setGames ] = useState()

    useEffect(() => {
        try {
            const getGamesGenres = async () => {
                const gameGenresResponse = await fetch(`${BasicUrl}${APIkey}&page_size=3&genres=${genres.map((item) => {return item.slug})}`)
                const gameGenresData = await gameGenresResponse.json()
                const {results} = gameGenresData
                setGames(results)
            }
            getGamesGenres()
        }
        catch (error){
            throw new Error(error)
        }
    }, [])
    
    if(games){
        return (
            <div>
                <div>
                    <h5>More Like this</h5>{/*  output games of same gerne here i think */}
                    <a href="/">See all</a>
                </div>
                <div>
                    {/* map here 6 games */}
                    {games.map((item) => {
                        return <MoreLikeGenresComponent key={item.id} {...item}/>
                    })}
                </div>
            </div>
        )
    }
    else return null
}

export default MoreLikeGenres