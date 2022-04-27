import { toTop } from '@lib/commonFunctions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MoreLikeGenresComponent = ({ title, slug, mainImageUrl, basePrice, discount }) => {
    const truePrice = basePrice - (basePrice * (discount/100))

    return (
        <Link passHref href={`/${slug}`} onClick={() => toTop()}>
            <a>
                <div>
                    <div>
                        {/* <img src={background_image} alt={name} /> */}
                        <Image src={mainImageUrl ? mainImageUrl : '/nope-not-here.png'} alt={title} width={800} height={450} quality='50' layout='responsive'/>
                    </div>
                    <h4>{title}</h4>
                </div>
                <div>
                    {discount >= 1 && <p className='discount'>-{discount}%</p>}
                    <p className='price'>{basePrice ? truePrice + `$` : "no pricing yet..."}</p>
                </div>
            </a>
        </Link>
    )
}

export default MoreLikeGenresComponent
