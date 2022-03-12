import React from 'react'
import Link from 'next/link'
//$ import ConsoleIcons from '../../Components/ConsoleIcons'
//$ import { useGlobalContext } from '../../context'

//! temp
import {FaPlaystation} from 'react-icons/fa'

//$ const FeaturedSlider = ({id, name, background_image, short_screenshots, index, parent_platforms}) => {
const FeaturedSlider = () => {
    //todo const { sliderIndexMain, featuredList, ToTop } = useGlobalContext()

    //todo let position = 'nextSlide'
    //todo if (index === sliderIndexMain) {
    //todo     position = 'activeSlide'
    //todo } 
    //todo if (index === sliderIndexMain - 1 || (sliderIndexMain === 0 && index === featuredList.length - 1)) {
    //todo     position = 'lastSlide'
    //todo }

    return (
        //$ <Link passHref href={`/`} to={`/Detail/${id}`} onClick={() => ToTop()} className={position}>
        <Link passHref href={`/`}>
            <a className='activeSlide'>
                {/*//$ <img src={background_image} alt="" /> */}
                <img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`} alt="" />
                <div>
                    {/*//$ <h4>{name}</h4> */}
                    <h4>{`test`}</h4>
                    {/*//$ {short_screenshots.slice(1, 5).map((item) => {
                        //$ return <img src={item.image} key={item.id} alt={item.id} />
                    })} */}
                    <img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`}/>
                    <img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`}/>
                    <img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`}/>
                    <img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`}/>
                    <div className='home-copoment-extra'>
                        <div>Now available</div>
                        <div>Top seller</div>
                    </div>
                    <div className='home-copomnent-main'>
                        <div className='price-container'>
                            <div className='discount-percent'>-91%</div>
                            <div className='price'>
                                <span>588.000d</span>
                                <p>134.000d</p>
                            </div>
                        </div>
                        {/*//$ <ConsoleIcons parent_platforms={parent_platforms}/> */}
                        <FaPlaystation />
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default FeaturedSlider
