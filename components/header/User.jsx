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
    const [submenu, setSubmenu] = useState(false)

    return (
        <div className={`user-container`} onMouseOver={() => setSubmenu(true)} onMouseLeave={() => setSubmenu(false)}>
            <img src={user?.photoURL || `icons/hacker.png`} alt="avatar" />
            <div className={`user-sublinks ${submenu && 'display'}`}>
                <ul>
                    <li>
                        <a><p>{user?.displayName || `not login`}</p></a>
                    </li>
                    <SignInButton />
                    <SignOutButton />
                </ul>
            </div>
        </div>
    );
}

function SignInButton() {
    const router = useRouter()
    const { username } = useContext(UserContext)

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider)

            //! link if username is not created yet
            
            if(username != null){
                toast.success('Log in successful!, welcome back 👋')
            }
            if(!username == null){
                toast.success('Sign up successful!, now choose a username')
                router.push(`/admin`);
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    return (
        <>
            <li onClick={signInWithGoogle}>
                <a><p>google</p><FcGoogle /></a>
            </li>
            {/* <button onClick={() => signInAnonymously(auth)}>
                Sign in Anonymously
            </button> */}
        </>
    )
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