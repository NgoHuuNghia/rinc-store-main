import { FaPlaystation, FaXbox, FaWindows  } from 'react-icons/fa'

import { toTop } from "@lib/commonFunctions";
import { firestore } from "@lib/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const CheckoutCartItem = ({title, slug, genres, platforms, mainImageUrl, basePrice, discount, truePrice, cartPath}) => {
    const cartRef = doc(firestore, cartPath)

    return (
        <a className={`cart-item`}>
            {/*//$ <img src={background_image} alt="" /> */}
            <Link passHref href={`/${slug}`} onClick={() => toTop()}>
                <div className='image-container'><Image src={mainImageUrl} alt={title} width={800} height={500} quality='50' layout='responsive' objectPosition='center' objectFit="cover"/></div>
            </Link>
            <div className="item">
                <Link passHref href={`/${slug}`} onClick={() => toTop()}>
                    <div>
                        {/*//$ <h4>{name}</h4> */}
                        <h4>{title}</h4>
                        <i>
                            {platforms.map(platform => {
                                if(platform.value.includes('Playstation')){
                                    return (
                                        <FaPlaystation key={platform.id} />
                                    )
                                }
                                if(platform.value.includes('XBOX')){
                                    return (
                                        <FaXbox key={platform.id} />
                                    )
                                }
                                if(platform.value.includes('Desktop')){
                                    return (
                                        <FaWindows key={platform.id} />
                                    )
                                }
                            })}
                        </i>
                        <small>
                            {genres
                                .slice(0, 3)
                                .map((item, index, array) => {
                                    if( index === array.length - 1){
                                        return item.value
                                    } else return item.value + ', ' 
                            })}
                        </small>
                    </div>
                </Link>
                <div>
                    <Link passHref href={`/${slug}`} onClick={() => toTop()}>
                        <div className="prices">
                            {discount >= 1
                                && <div className='discount-percent'>-{discount}%</div>
                            }
                            <div className='price'>
                                {discount >= 1
                                    && <p className='strikeout'>{`$${basePrice.toFixed(2)}`}</p>
                                }
                                <p className='true-price'>{`$${truePrice.toFixed(2)}`}</p>
                            </div>
                        </div>
                    </Link>
                    <DeleteGameButton cartRef={cartRef}/>
                </div>
            </div>
        </a>
    );
}

function DeleteGameButton({ cartRef }) {
    const deleteCart = async () => {
        await deleteDoc(cartRef);
        toast('removed from cart', { icon: '🗑️' });
    };

    return (
        <div onClick={deleteCart} className="remove">
            <p>Remove</p>
        </div>
    )
}

export default CheckoutCartItem;