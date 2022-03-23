import React from 'react'
import { toTop } from '@lib/commonFunctions'
import Link from 'next/link'
import Image from 'next/image'

const MoreLikeSeriesComponent = ({ title, slug, mainImageUrl, basePrice }) => {

    return (
        <Link passHref href={`/${slug}`} onClick={() => toTop()}>
            <a>
                <div>
                    <div>
                        {/* <img src={mainImageUrl} alt={slug} /> */}
                        <Image src={mainImageUrl ? mainImageUrl : '/nope-not-here.png'} alt={title} width={800} height={450} quality='50' layout='responsive'/>
                    </div>
                    <h4>{title}</h4>
                </div>
                <div>
                    <p>-70%</p>
                    <p>{basePrice ? basePrice + `$` : "no pricing yet..."}</p>
                </div>
            </a>
        </Link>
    )
}

export default MoreLikeSeriesComponent
