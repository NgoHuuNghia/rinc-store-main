import { PayPalButtons } from "@paypal/react-paypal-js";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const PaypalCheckoutButton = ({cartData}) => {
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    

    const handleApprove = (orderId) => {
        //todo fulfill the order here with the backend

        //todo if respond is success
        setPaidFor(true)
        setError(null)
        //todo refresh user's account or subscription status

        //todo if the response is an error

    }

    useEffect(() => {
        //todo message email
        {paidFor && toast.success("Thank you for your purchase, your code will be sent to your email")}
    }, [paidFor])
    useEffect(() => {
        {error && toast.error(error)}
    }, [error])

    return <PayPalButtons 
        style={{
            color: "blue",
            shape: "pill",
        }}
        onClick={(data, action) => {
            //todo validate the button clicked on client or server side
            //todo example if the user already own a game (.exist) update the setError to stop transaction
            //todo best if we check before they able to buy it though :\
            const hasAlreadyPurchasedGame = false;

            if (hasAlreadyPurchasedGame){
                setError("You already brought this game, check it in your library!")
                return action.reject()
            } else {
                return action.resolve()
            }
        }}
        createOrder={(data, action) => {
            return action.order.create({
                application_context: {
                    shipping_preference: 'NO_SHIPPING'
                },
                purchase_units: [
                    {
                        description: 'ass',
                        amount: {
                            value: cartData.reduce(
                                (sum, cur) => sum += cur.basePrice, 0
                            )
                        }
                    }
                ]
            })
        }}
        onApprove={ async(data, action) => {
            const order = await action.order.capture();
            console.log("order made: ", order)

            handleApprove(data.orderID);
        }}
        onCancel={() => {
            toast.error("Seem like you had close the checkout")
        }}
        onError={(err) => {
            setError("a critical error has happen please contact our support")
            console.log("Checkout error: ", err)
        }}
    />
}

export default PaypalCheckoutButton;

//! for no shipping preference
// application_context: {
//     shipping_preference: 'NO_SHIPPING'
//   },