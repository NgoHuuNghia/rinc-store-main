import React from 'react'
import Link from 'next/link'
import {FaChevronRight} from 'react-icons/fa'

import FeaturedItem from '@components/home/FeaturedItem'

// const Featured = ({id, background_image, name}) => {
const Featured = ({gamesDesc}) => {
    //todo const { ToTop } = useGlobalContext()

    return (
        <section className='secondary-card-container'>
            <div>
                <h5>Special offer</h5>
                <a href="/"><p>More</p> <FaChevronRight /></a>
            </div>
            <div className='slider'>
                {/* map here  8 times */}
                {/*//$ {featuredList.slice(3).map((item) => {
                    //$ return <Featured key={item.id} {...item} />
                })} */}
                {gamesDesc.slice(0,5).map((game, index) => { //$ temp fix
                    return <FeaturedItem key={game.slug} {...game} index={index}/>
                })}
            </div>
        </section>
    )
}

export default Featured
