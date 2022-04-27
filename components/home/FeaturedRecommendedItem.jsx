import { toTop, sliderControlClass } from "@lib/commonFunctions";
import Link from "next/link";
import parse from 'html-react-parser'
import Image from "next/image";
import { useRef, useEffect } from "react";

const FeaturedRecommendedItem = ({
    mainImageUrl, title, slug, description, secondaryImageUrls, description,
    index, sliderIndex, length, getHeight
}) => {
    const position = sliderControlClass(index, sliderIndex, length)

    //$ const slide = useRef(null)
    //$ useEffect(() => {
    //$     if(index == 0) getHeight(slide.current.getBoundingClientRect().height)
    //$ }, [getHeight, index])
    
    //! missing reviews

    return (
        <Link passHref href={`/${slug}`} onClick={() => toTop()}>
            <a 
                className={position} 
                //$ ref={slide}
            >
                <div className="top-review">
                    <div>
                        <h3>{title}</h3>
                        {description}
                    </div>
                    <div>
                        <div className="image-container">
                            <Image src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/2e/2ea08980f32ec568536bf791b0f3986e8b279ccb.jpg" width={40} height={40} quality={50} alt="placeholder avatar"></Image>
                        </div>
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
                <div className="image-container">
                    <Image src={mainImageUrl} alt={slug} width={800} height={500} layout="responsive" quality='75' objectPosition='center' objectFit="cover"/>
                </div>
            </a>
        </Link>
    );
}

export default FeaturedRecommendedItem;