import React from 'react'
import Link from 'next/link'
import {FaChevronRight} from 'react-icons/fa'

import FeaturedItem from '@components/Home/FeaturedItem'

// const Featured = ({id, background_image, name}) => {
const Featured = ({games}) => {
    //todo const { ToTop } = useGlobalContext()

    return (
        <section className='secondary-card-container'>
            <div>
                <h5>Special offer</h5>
                <Link href="/"><a><p>More</p> <FaChevronRight /></a></Link>
            </div>
            <div className='slider'>
                {/* map here  8 times */}
                {/*//$ {featuredList.slice(3).map((item) => {
                    //$ return <Featured key={item.id} {...item} />
                })} */}
                {games.slice(0,5).map((game, index) => { //$ temp fix
                    return <FeaturedItem key={game.slug} {...game} index={index}/>
                })}
            </div>
        </section>
    )
}

export default Featured
