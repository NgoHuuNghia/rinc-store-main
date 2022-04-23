import PaypalCheckoutButton from "@components/Paypal/PaypalCheckoutButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import {FaChevronRight} from 'react-icons/fa'

import CheckoutCartItem from "@components/User/CheckoutCartItem";
import { UserContext } from "@lib/globalContext";

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
                                `$` + shoppingCart?.reduce((sum, cur) => sum += cur.item.basePrice, 0)
                            }</li>
                            <li className="title">Discount: </li>
                            <li className="number">{
                                `$` + shoppingCart?.reduce((sum, cur) => sum += cur.item.basePrice, 0)
                            }</li>
                            <li className="title">Final total: </li>
                            <li className="number">{
                                `$` + shoppingCart?.reduce((sum, cur) => sum += cur.item.basePrice, 0)
                            }</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout