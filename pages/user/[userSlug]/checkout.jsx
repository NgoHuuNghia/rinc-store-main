import PaypalCheckoutButton from "@components/paypal/PaypalCheckoutButton";
import { collection, onSnapshot, query } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import {FaChevronRight, FaWindows} from 'react-icons/fa'

import CheckoutCartItem from "@components/user/CheckoutCartItem";
import { firestore } from "@lib/firebase";
import { UserContext } from "@lib/globalContext";

const checkout = () => {
    const router = useRouter()
    const [shoppingCart, setShoppingCart] = useState([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        if(user){
            const cartRef = collection(firestore, 'users', user.uid, 'shoppingCart')
            onSnapshot(cartRef, querySnapshot => querySnapshot?.docs.map((doc) => {
                if(!shoppingCart.some(cart => cart.slug === doc.data().slug)){
                    setShoppingCart(shoppingCart => [...shoppingCart, doc.data()])
                }
            }))
        }
    }, [user])

    //! paypal testing
    // const products = [
    //     {
    //         slug: 'paypal-test-game',
    //         title: 'Paypal Test Game',
    //         basePrice: 20,
    //         mainImageUrl: 'https://firebasestorage.googleapis.com/v0/b/rinc-store.appspot.com/o/uploads%2Fimages%2Fgames%2Fdarksouls%2Fmain-image%2Fmain-darksouls?alt=media&token=7a221bbb-69da-41eb-9b05-8988586ff520',
    //     },
    //     {
    //         slug: 'paypal-test-game-2',
    //         title: 'Paypal Test Game 2',
    //         basePrice: 40,
    //         mainImageUrl: 'https://firebasestorage.googleapis.com/v0/b/rinc-store.appspot.com/o/uploads%2Fimages%2Fgames%2Fdarksouls%2Fmain-image%2Fmain-darksouls?alt=media&token=7a221bbb-69da-41eb-9b05-8988586ff520',
    //     },
    // ]

    return (
        <div className="checkout-container">
            <div className='breadcrumbs'>
                <div>
                    <a href='/'>{router.query.userSlug}</a>
                </div>
                <FaChevronRight />
                <div>
                    <a href='/'>{router.asPath.substring(router.asPath.lastIndexOf('/') + 1)}</a>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-item-container">
                    {shoppingCart?.map((cart) => {
                        return <CheckoutCartItem key={cart.slug} {...cart}/>
                    })}
                </div>
                <div className="cart-action-container">
                    <div className="cart-payment">
                        <PaypalCheckoutButton shoppingCart={shoppingCart}/>
                    </div>
                    <div className="cart-calculator">
                        <ul className="table">
                            <li className="title">Total: </li>
                            <li className="number">{
                                `$` +
                                shoppingCart?.reduce((sum, cur) => sum += cur.basePrice, 0)
                            }</li>
                            {/* value: cartData.reduce(
                                (sum, cur) => sum += cur.basePrice, 0
                            ) */}
                            <li className="title">Discount: </li>
                            <li className="number">$420</li>
                            <li className="title">Final total: </li>
                            <li className="number">$420</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default checkout