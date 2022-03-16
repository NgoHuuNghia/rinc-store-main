import Link from "next/link";
import Image from "next/image";
import { toTop } from "@lib/commonFunctions";

const FeaturedItem = ({index, mainImageUrl, slug, title}) => {
    if(index === 5) console.log(slug)

    return (
        <div> 
            <Link passHref href={`/`} onClick={() => toTop()}>
                <a className="image-container"><Image src={mainImageUrl} alt={slug} quality='50' width={800} height={500} layout='responsive' objectPosition='center' objectFit="cover"/></a>
            </Link>
            <h5>{title}</h5>
            <div>
                <div className='price-container price-2col'>
                    <div className='discount-percent'>-91%</div>
                    <div className='price'>
                        <span>588.000d</span>
                        <p>134.000d</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedItem;