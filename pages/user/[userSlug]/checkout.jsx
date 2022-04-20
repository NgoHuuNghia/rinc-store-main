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
import { confirmPasswordReset } from "firebase/auth";

const Checkout = () => {
    const router = useRouter()
    const { shoppingCart } = useContext(UserContext)

    return (
        <div className="checkout-container">
            <div className='breadcrumbs'>
                <div>
                    <Link href='/'><a>{router.query.userSlug}</a></Link>
                </div>
                <FaChevronRight />
                <div>
                    <Link href='/'><a>{router.asPath.substring(router.asPath.lastIndexOf('/') + 1)}</a></Link>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-item-container">
                    {shoppingCart?.map((cart) => {
                        return <CheckoutCartItem key={cart.id} {...cart.item} id={cart.id}/>
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
                                shoppingCart?.reduce((sum, cur) => sum += cur.item.basePrice, 0)
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

export default Checkout