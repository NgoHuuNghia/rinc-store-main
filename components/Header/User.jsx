import { useContext, useState } from 'react';
import { signOut } from 'firebase/auth';
import {FaShoppingCart} from 'react-icons/fa'
import {MdLogout, MdLogin} from 'react-icons/md'
import {RiAdminFill} from 'react-icons/ri'

import Link from 'next/link'
import { auth } from '@lib/firebase';
import { UserContext } from '@lib/globalContext';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import Image from 'next/image';

const User = () => {
    const { user, username, role, shoppingCart } = useContext(UserContext)
    const router = useRouter()
    const [submenu, setSubmenu] = useState(false)

    return (
        <div className={`user-container`} onMouseOver={() => setSubmenu(true)} onMouseLeave={() => setSubmenu(false)}>
            <Link href={`/user/${username}`}>
                <div className='avatar-container'>
                    <div className='avatar'><Image src={user?.photoURL || `/icons/hacker.png`} width={100} height={100} quality='50' alt={username}></Image></div>
                    {user && shoppingCart.length >= 1 && (
                        <div className='cart-container'>
                            <FaShoppingCart />
                        </div>
                    )}
                </div>
            </Link>
            <div className={`user-sublinks ${submenu && 'display'}`}>
                <ul>
                    <li>
                        <a style={{fontWeight: "bold"}}><p>{user?.displayName || `not login`}</p></a>
                    </li>
                    {!user 
                        ? (
                        <li onClick={() => router.push('/enter')}>
                            <a><p>Sign in</p><MdLogin /></a>
                        </li>
                        )
                        : (
                            <>
                                {role === "admin" && (
                                    <li onClick={() => router.push('/admin')}>
                                        <a><p>Admin</p><RiAdminFill/></a>
                                    </li>
                                )
                                }
                                <SignOutButton />
                                {/*//! cart checkout */}
                                {shoppingCart.length >= 1 && (
                                    <li onClick={() => router.push(`/user/${username}/checkout`)}>
                                        <a><p>{`Checkout: ${shoppingCart.length} items`}</p><FaShoppingCart /></a>
                                    </li>
                                )}
                            </>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

function SignOutButton() {
    return (
        <li onClick={() => {
            signOut(auth)
            toast.error('Logout successful! goodbye 😭');
        }}>
            <a><p>Logout</p><MdLogout /></a>
        </li>
    )
}

export default User;