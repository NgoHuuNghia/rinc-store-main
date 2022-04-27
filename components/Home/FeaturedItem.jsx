import Link from "next/link";
import Image from "next/image";
import { toTop } from "@lib/commonFunctions";

const FeaturedItem = ({ mainImageUrl, basePrice, discount, slug, title }) => {
    const truePrice = basePrice - (basePrice * (discount/100))

    return (
        <div> 
            <Link passHref href={`/${slug}`} onClick={() => toTop()}>
                <a className="image-container"><Image src={mainImageUrl} alt={slug} quality='50' width={800} height={500} layout='responsive' objectPosition='center' objectFit="cover"/></a>
            </Link>
            <h5>{title}</h5>
            <div>
                <div className='price-container price-2col'>
                    {discount >= 1
                        && <div className='discount-percent'>-{discount}%</div>
                    }
                    <div className='price'>
                        {discount >= 1
                            && <span>${basePrice.toFixed(2)}</span>
                        }
                        <p>${truePrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedItem;