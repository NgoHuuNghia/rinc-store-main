import React from 'react'
import Link from 'next/link'
import {FaChevronRight} from 'react-icons/fa'
// import { useGlobalContext } from '../../context'

import { toTop } from '@lib/commonFunctions'
import FeaturedSimItem from './FeaturedSimItem'

// const FeaturedSim = ({name, id, background_image}) => {
const FeaturedSim = ({gamesDesc}) => {

    return (
        <section className='special-card-container'>
            <div>
                <h5>Popular Sim Game</h5>
                <Link href="/"><a>more <FaChevronRight /></a></Link>
            </div>
            <div className='special-card-slider'> {/* map here 6 times */}
                {/* map like i mean 6 here? */}
                {/*//$ {featuredListSim.slice(3).map((item) => {
                    //$ return <FeaturedSim key={item.id} {...item}/>
                })} */}
                {gamesDesc.slice(0,5).map((game) => {
                    return <FeaturedSimItem key={game.slug} {...game}/>
                })}
            </div>
        </section>
    )
}

export default FeaturedSim
