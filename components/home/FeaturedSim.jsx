import React from 'react'
import Link from 'next/link'
// import { useGlobalContext } from '../../context'

import { toTop } from '@lib/commonFunctions'

// const FeaturedSim = ({name, id, background_image}) => {
const FeaturedSim = () => {
    return (
        //$ <Link to={`/Detail/${id}`} onClick={() => ToTop()} className='speical-card-btn'>
        <Link passHref href={`/`} onClick={() => toTop()} className='speical-card-btn'>
            <a>
                {/*//$ <img src={background_image} alt={name} /> */}
                <img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`} />
                <div>
                    <p>220.000d</p>
                </div>
            </a>
        </Link>
    )
}

export default FeaturedSim
