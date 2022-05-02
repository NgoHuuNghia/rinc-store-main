import Link from "next/link";
import Image from "next/image";

import { toTop } from "@lib/commonFunctions";

const FeaturedSimItem = ({mainImageUrl, slug, basePrice, discount}) => {
    const truePrice = basePrice - (basePrice * (discount/100))

    return (
        <Link passHref href={`/${slug}`} onClick={() => toTop()} className='speical-card-btn'>
            <a>
                <div className="image-container">
                    <Image src={mainImageUrl || '/nope-not-here.png'} alt={slug} width={300} height={300} quality="25" layout="responsive" objectPosition='center' objectFit="cover"/>
                </div>
                <div className="price">
                    <p>{truePrice ? `$${truePrice.toFixed(2)}` : 'Free 2 Play'}</p>
                </div>
            </a>
        </Link>
    );
}

export default FeaturedSimItem;