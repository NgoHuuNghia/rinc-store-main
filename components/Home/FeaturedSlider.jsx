import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { useSliderControl } from '@lib/hooks'
import FeaturedSliderItem from './FeaturedSliderItem'
//$ import { useRef, useEffect } from 'react'

//$ const FeaturedSlider = ({id, name, background_image, short_screenshots, index, parent_platforms}) => {
const FeaturedSlider = ({gamesDesc}) => {
    const [sliderIndex, setSliderIndex] = useSliderControl(gamesDesc.length, 5000)

    //$ const slider = useRef(null)
    //$ const height = null
    //$ function getHeight(data) {height = data}
    //$ useEffect(() => slider.current.style.height = `${height}px`, [])

    return (
        <section className='main-card-container'>
            <div>
                <h5>Featured &#38; Recommended</h5>
            </div>
            <button className='previous' onClick={() => setSliderIndex(sliderIndex - 1)}>
                <FaChevronLeft />
            </button>
            <button className="next" onClick={() => setSliderIndex(sliderIndex + 1)}>
                <FaChevronRight />
            </button>
            <div 
                className='slider' 
                //$ ref={slider}
            >
                {gamesDesc.map((game, index, gamesDesc) => {
                    return <FeaturedSliderItem
                        key={game.slug}
                        // getHeight={getHeight}
                        {...game} 
                        index={index} 
                        length={gamesDesc.length}
                        sliderIndex={sliderIndex}
                    />
                })}
            </div>
        </section>
    )
}

export default FeaturedSlider
