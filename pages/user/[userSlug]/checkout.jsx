import PaypalCheckoutButton from "@components/paypal/PaypalCheckoutButton";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {FaChevronRight, FaWindows} from 'react-icons/fa'

const checkout = () => {
    const router = useRouter()

    //! paypal testing
    const products = [
        {
            slug: 'paypal-test-game',
            title: 'Paypal Test Game',
            basePrice: 20,
            mainImageUrl: 'https://firebasestorage.googleapis.com/v0/b/rinc-store.appspot.com/o/uploads%2Fimages%2Fgames%2Fdarksouls%2Fmain-image%2Fmain-darksouls?alt=media&token=7a221bbb-69da-41eb-9b05-8988586ff520',
        },
        {
            slug: 'paypal-test-game-2',
            title: 'Paypal Test Game 2',
            basePrice: 40,
            mainImageUrl: 'https://firebasestorage.googleapis.com/v0/b/rinc-store.appspot.com/o/uploads%2Fimages%2Fgames%2Fdarksouls%2Fmain-image%2Fmain-darksouls?alt=media&token=7a221bbb-69da-41eb-9b05-8988586ff520',
        },
    ]

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
                    <Link passHref
                        href={`/`}
                        onClick={() => toTop()}
                    >
                        <a className={`cart-item`}>
                            {/*//$ <img src={background_image} alt="" /> */}
                            <img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`} />
                            <div>
                                <div>
                                    {/*//$ <h4>{name}</h4> */}
                                    <h4>{`test name`}</h4>
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
                                        <p>495.000d</p>
                                        <p>445.500d</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link passHref
                        href={`/`}
                        onClick={() => toTop()}
                    >
                        <a className={`cart-item`}>
                            {/*//$ <img src={background_image} alt="" /> */}
                            <img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`} />
                            <div>
                                <div>
                                    {/*//$ <h4>{name}</h4> */}
                                    <h4>{`test name`}</h4>
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
                                        <p>495.000d</p>
                                        <p>445.500d</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="cart-action-container">
                    <div className="cart-payment">
                        <PaypalCheckoutButton products={products}/>
                    </div>
                    <div className="cart-calculator">
                        <ul className="table">
                            <li className="title">Total: </li>
                            <li className="number">$420</li>
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