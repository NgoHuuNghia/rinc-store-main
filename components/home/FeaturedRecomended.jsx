// import React, {useState, useEffect} from 'react'
import Link from 'next/link'
// import { useGlobalContext } from '../../context'
// import parse from 'html-react-parser'

// const FeaturedRecomended = ({id, background_image, index}) => {
const FeaturedRecomended = () => {
    // const { sliderIndexRecomended, featuredList, ToTop } = useGlobalContext()
    // const [ desc, setDesc ] = useState()

    // useEffect(() => {
    //     const getDetails = async() => {
    //         const detailResponse = await fetch(`${detailUrl}${id}${APIkey}`)
    //         const detailData = await detailResponse.json()
    //         setDesc(detailData.description)
    //     }
    //     getDetails()
    // }, [])

    // let position = 'nextSlide'
    // if (index === sliderIndexRecomended) {
    //     position = 'activeSlide'
    // } 
    // if (index === sliderIndexRecomended - 1 || (sliderIndexRecomended === 0 && index === featuredList.length - 1)) {
    //     position = 'lastSlide'
    // }
    return (
        //$ <Link to={`/Detail/${id}`} onClick={() => ToTop()} className={position}> {/* map here 3 times */}
        <Link passHref href={`/`}>
            <a className='activeSlide'>
                <div>
                    <div>
                        {/*//$ {desc ? parse(desc) : "loading description"} */}
                        loading description
                    </div>
                    <div>
                        <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/2e/2ea08980f32ec568536bf791b0f3986e8b279ccb.jpg" alt="" />
                        <div>
                            <h6>Zuluf</h6>
                            <p>
                                Played 10.1 hrs at review time<br />
                                127 people found this review helpful
                            </p>
                        </div>
                    </div>  
                </div>
                {/*//$ <img src={background_image} alt="" /> */}
                <img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`} alt="" />
            </a>
        </Link>
    )
}

export default FeaturedRecomended
