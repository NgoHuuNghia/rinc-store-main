import { useRef, useEffect } from "react"
import Link from "next/link"
import {FaPlaystation} from 'react-icons/fa'

import { toTop } from "@lib/commonFunctions"
import Image from "next/image"
import { Timestamp } from "firebase/firestore"
import { useSliderControlClass } from "@lib/hooks"

const FeaturedSliderItem = ({
    mainImageUrl, title, slug, secondaryImageUrls,
    index, sliderIndex, length, getHeight,
}) => {
    const position = useSliderControlClass(index, sliderIndex, length)

    const slide = useRef(null)
    {index === 0 && useEffect(() => getHeight(slide.current.getBoundingClientRect().height), [])}

    return (
        <Link passHref href={`/`}>
            <a onClick={() => toTop()} className={position} ref={slide}>
                <div className="main-image-container">
                    <Image src={mainImageUrl} alt={slug} width={800} height={500} quality='75' layout='responsive' objectPosition='center' objectFit="cover"/>
                </div>
                <div>
                    <h4>{title}</h4>
                    <div className="secondary-image-container">
                        <div><Image src={secondaryImageUrls[0] ? secondaryImageUrls[0] : '/nope-not-here.png'} width={800} height={400} quality='1' layout='responsive'/></div>
                        <div><Image src={secondaryImageUrls[1] ? secondaryImageUrls[1] : '/nope-not-here.png'} width={800} height={400} quality='1' layout='responsive'/></div>
                        <div><Image src={secondaryImageUrls[2] ? secondaryImageUrls[2] : '/nope-not-here.png'} width={800} height={400} quality='1' layout='responsive'/></div>
                        <div><Image src={secondaryImageUrls[3] ? secondaryImageUrls[3] : '/nope-not-here.png'} width={800} height={400} quality='1' layout='responsive'/></div>
                    </div>
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

export default FeaturedSliderItem