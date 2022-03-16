import Link from "next/link";
import Image from "next/image";

import { toTop } from "@lib/commonFunctions";

const FeaturedSimItem = ({mainImageUrl, slug}) => {
    return (
        <Link passHref href={`/`} onClick={() => toTop()} className='speical-card-btn'>
            <a>
                <div className="image-container">
                    <Image src={mainImageUrl} alt={slug} width={300} height={300} quality="25" layout="responsive" objectPosition='center' objectFit="cover"/>
                </div>
                <div className="price">
                    <p>220.000d</p>
                </div>
            </a>
        </Link>
    );
}

export default FeaturedSimItem;