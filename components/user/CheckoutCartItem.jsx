import { toTop } from "@lib/commonFunctions";
import Link from "next/link";
import { FaWindows } from "react-icons/fa";

const CheckoutCartItem = ({title, mainImageUrl, basePrice}) => {
    return (
        <Link passHref
            href={`/`}
            onClick={() => toTop()}
        >
            <a className={`cart-item`}>
                {/*//$ <img src={background_image} alt="" /> */}
                <img src={mainImageUrl} alt={title}/>
                <div>
                    <div>
                        {/*//$ <h4>{name}</h4> */}
                        <h4>{title}</h4>
                        <i><FaWindows /></i>
                        <small>
                            {/*//$ {genres
                                .slice(0, 3)
                                .map((item, index, array) => {
                                    if( index === array.length - 1){
                                        return item.name
                                    } else return item.name + ', ' 
                            })} */}
                            genres name
                        </small>
                    </div>
                    <div>
                        <div>-10%</div>
                        <div>
                            <p>{`$${basePrice}`}</p>
                            <p>{`$${basePrice}`}</p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default CheckoutCartItem;