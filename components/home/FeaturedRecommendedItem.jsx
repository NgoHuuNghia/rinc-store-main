import { toTop, sliderControlClass } from "@lib/commonFunctions";
import Link from "next/link";
import parse from 'html-react-parser'
import Image from "next/image";
import { useRef, useEffect } from "react";

const FeaturedRecommendedItem = ({
    mainImageUrl, title, slug, secondaryImageUrls, description,
    index, sliderIndex, length, getHeight
}) => {
    const position = sliderControlClass(index, sliderIndex, length)

    const slide = useRef(null)
    {index === 0 && useEffect(() => getHeight(slide.current.getBoundingClientRect().height), [])}

    return (
        <Link passHref href={`/${slug}`} onClick={() => toTop()}>
            <a className={position} ref={slide}>
                <div className="top-review">
                    <div>
                        {/* {description ? parse(description) : "loading description"} */}
                        You are a prisoner trapped in a strange facility, filled with deadly traps and whispered secrets. At first the facility and its inhabitants all seem like a mystery to you, but soon you begin to understand: Your only chance to survive is to master the Magnet Gun and stay out of harms way. If you make yourself useful they will let you live a little longer, and sooner or later you will get your chance. As the Warden keeps on telling you: “There is always a way out…”
                    </div>
                    <div>
                        <div className="image-container">
                            <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/2e/2ea08980f32ec568536bf791b0f3986e8b279ccb.jpg" alt="" />
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