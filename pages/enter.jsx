import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import {BiFace} from 'react-icons/bi'
import {MdLogin, MdLogout} from 'react-icons/md'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '@lib/globalContext'
import { createUserWithEmailAndPassword, signInAnonymously, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth, createFirestoreUserWithUsername, firestore, googleAuthProvider } from '@lib/firebase'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

const enter = () => {
    const {user, username} = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
        {username && router.push('/')}
    }, [username])
    

    return (
        <section className="enter-container">
            <div>
                <EnterForm user={user} username={username}/>
                <AuthButtons user={user} username={username}/>
            </div>
        </section>
    );
}

function EnterForm({user, username, router}) {
    const [enter, setEnter] = useState(true)

    return (
        <div className="user-form">
            {enter 
                ? <>
                    <h2>
                        {user 
                            ? username ? 'You already got a username' : 'Choose a username to create an account'
                            : 'Sign up'
                        }
                    </h2>
                    {!user
                        ? (<><SignUpForm /></>)
                        : (!username
                            ? (<><UsernameForm /></>) 
                            : (
                                <div className='silly'>you already got an account silly!</div>
                            )
                        )
                    }
                    <a onClick={() => setEnter(false)}>Have an account already? Log in</a>
                </> 
                : <>
                    <h2>
                        login
                    </h2>
                    <LoginForm router={router}/>
                    <a onClick={() => setEnter(true)}>Don't have an account? Sign up.</a>
                </>
            }
        </div>
    )
}

function SignUpForm() {
    const { register, handleSubmit, formState, reset } = useForm({ mode: 'onChange' })
    const { isValid, isDirty } = formState

    const signUp = async({email, password, username}) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await createFirestoreUserWithUsername(auth.currentUser, username)

            toast.success(`${email} account created, verification not implemented yet`)
        } catch (error) {
            console.log(error)
            toast.error("something went wrong")
        }
        reset({email, password, username})
    }
    
    return (
        <form onSubmit={handleSubmit(signUp)}>
            <input type="email" name='email' placeholder="Email"
                {...register('email', {
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                    },
                })}
            />
            <input type="text" name='username' placeholder="Username"
                {...register('username', {required: true})}/>
            <input type="password" name='password' placeholder="Password"
                {...register('password', {
                    required: true,
                    minLength: { value: 6, message: 'password too short' },
                })}
            />
            <button type='submit' disabled={!isValid || !isDirty}>Sign up</button>
        </form>
    )
}
function UsernameForm() {
    const { register, handleSubmit, formState, reset } = useForm({ mode: 'onChange' })
    const { isValid, isDirty } = formState

    const chooseUsername = async({username}) => {
        try {
            await createFirestoreUserWithUsername(auth.currentUser, username)

            toast.success(`${auth.currentUser.email} account created, verification not implemented yet`)
        } catch (error) {
            console.log(error)
            toast.error("something went wrong")
        }
        reset({username})
    }

    return (
        <form onSubmit={handleSubmit(chooseUsername)}>
            <input type="text" name='username' placeholder="Username"
            {...register('username', {required: true})}/>
            <button type='submit' disabled={!isValid || !isDirty}>Choose username</button>
        </form>
    )
}
function LoginForm() {
    const { register, handleSubmit, formState, reset } = useForm({ mode: 'onChange' })
    const { isValid, isDirty } = formState

    const login = async({email, password}) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast.success(`${email} Logged in, welcome`)
        } catch (error) {
            console.log(error)
            toast.error("something went wrong")
        }
        reset({email, password})
    }

    return (
        <form onSubmit={handleSubmit(login)}>
            <input type="email" name='email' placeholder="Email"
                {...register('email', {
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                    },
                })}
            />
            <input type="password" name='password' placeholder="Password"
                {...register('password', {required: true})}/>
            <button type='submit' disabled={!isValid || !isDirty}>Login <MdLogin/></button>
        </form>
    )
}

function AuthButtons({user}) {
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider)
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }
    

    return (
        <div className="social-sign-up">
            <p>Sign up with socials</p>
            <button onClick={signInWithGoogle}><span>Sign in with Google</span> <FcGoogle/></button>
            <button><span>Sign in with Facebook</span> <FaFacebook/></button>
            <button onClick={() => signInAnonymously(auth)}><span>Sign in Anonymously</span> <BiFace/></button>
            {user && (
                <button className='sign-out' onClick={() => {
                        signOut(auth)
                        toast.error('Logout successful! goodbye 😭');
                    }}><span>Sign out</span> <MdLogout/>
                </button>
            )}
        </div>
    )
}

export default enter;