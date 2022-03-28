import { toTop } from "@lib/commonFunctions";
import { firestore } from "@lib/firebase";
import { UserContext } from "@lib/globalContext";
import { deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaWindows } from "react-icons/fa";

const CheckoutCartItem = ({title, slug, mainImageUrl, basePrice, id}) => {
    const { user } = useContext(UserContext)
    const cartRef = doc(firestore, 'users', user.uid, 'shoppingCart', id )

    return (
        <a className={`cart-item`}>
            {/*//$ <img src={background_image} alt="" /> */}
            <Link passHref href={`/${slug}`} onClick={() => toTop()}>
                <img src={mainImageUrl} alt={title}/>
            </Link>
            <div>
                <Link passHref href={`/${slug}`} onClick={() => toTop()}>
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
                </Link>
                <div>
                    <Link passHref href={`/${slug}`} onClick={() => toTop()}>
                        <div className="prices">
                            <div>-10%</div>
                            <div>
                                <p>{`$${basePrice}`}</p>
                                <p>{`$${basePrice}`}</p>
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