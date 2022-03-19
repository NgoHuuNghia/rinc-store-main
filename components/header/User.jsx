import { useContext, useState } from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import {MdLogin, MdLogout} from 'react-icons/md'
import {FcGoogle} from 'react-icons/fc'

import { auth, googleAuthProvider } from '@lib/firebase';
import { UserContext } from '@lib/globalContext';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const User = () => {
    const { user, username } = useContext(UserContext)
    const router = useRouter()
    const [submenu, setSubmenu] = useState(false)

    return (
        <div className={`user-container`} onMouseOver={() => setSubmenu(true)} onMouseLeave={() => setSubmenu(false)}>
            <img src={user?.photoURL || `icons/hacker.png`} alt="avatar" />
            <div className={`user-sublinks ${submenu && 'display'}`}>
                <ul>
                    <li>
                        <a style={{fontWeight: "bold"}}><p>{user?.displayName || `not login`}</p></a>
                    </li>
                    {!user && (
                        <li onClick={() => router.push('/enter')}>
                            <a><p>Sign in</p><FcGoogle /></a>
                        </li>
                    )}
                    {/*//! temp until make admin role */}
                    {!user && (
                        <li onClick={() => router.push('/admin')}>
                            <a><p>Admin</p></a>
                        </li>
                    )}
                    {user && <SignOutButton />}
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