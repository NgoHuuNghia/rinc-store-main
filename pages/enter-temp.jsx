import { useContext, useState, useEffect, useCallback } from "react"
import debounce from 'lodash.debounce'
import { doc, writeBatch, getDoc, query, collection, addDoc, where, getDocs } from 'firebase/firestore'
import { signInWithPopup, signInAnonymously, signOut } from 'firebase/auth'

import { UserContext } from "@lib/globalContext"
import { auth, googleAuthProvider, firestore } from "@lib/firebase" //? No difference between firestore and getFirestore

export default function Page({ }) {
    const { user, username } = useContext(UserContext)
    return (
        <section className="user-form-container">
        {user ? 
            !username ? <UsernameForm /> : <SignOutButton /> 
            : 
            <SignInButton />
        }
        </section>
    )
}

//* Sign in with google button
function SignInButton() {
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider)
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    return (
        <>
            <button onClick={signInWithGoogle}>
                <img src={'/google.png'} width="30px" /> Sign in with Google
            </button>
            <button onClick={() => signInAnonymously(auth)}>
                Sign in Anonymously
            </button>
        </>
    )
}

//* Sign out button
function SignOutButton() {
    return <button onClick={() => signOut(auth)}>Sign Out</button>
}

//* User form
function UsernameForm() {
    const [formValue, setFormValue] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [loading, setLoading] = useState(false)

    const { user, username } = useContext(UserContext)

    useEffect(() => checkUsername(formValue), [formValue])

    const onChange = (e) => {
        // Force form value typed in form to match correct format
        const val = e.target.value.toLowerCase()
        const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/

        // Only set form value if length is < 3 OR it passes regex
        if (val.length < 3) {
            setFormValue(val)
            setLoading(false)
            setIsValid(false)
        }
    
        // make sure the value match the format
        if (re.test(val)) {
            setFormValue(val)
            setLoading(true) //? set to true for we will be async checking for that username in the database
            setIsValid(false)
        }
    }

    const checkUsername = useCallback ( //* to use rebounce wrap in useCallBack allow this function to be memorized
        debounce(async (username) => { //? uses a npm helper function to optimize, not calling every time we form change
            if (username.length >= 3) {
                const ref = doc(firestore, 'usernames', username)
                const snap = await getDoc(ref)
                console.log('Firestore read executed!', snap.exists())
                setIsValid(!snap.exists())
                setLoading(false)
            }
        }, 1000), []//? run read after 1 second
    )

    const onSubmit = async (e) => {
        e.preventDefault()
    
        // Create refs for both documents
        const userDoc = doc(firestore, 'users', user.uid)
        const usernameDoc = doc(firestore, 'usernames', formValue)
    
        // Commit both docs together as a batch write. To either succeed or fail together
        const batch = writeBatch(firestore)
        batch.set(userDoc, { username: formValue, photoURL: user.photoURL, displayName: user.displayName })
        batch.set(usernameDoc, { uid: user.uid })
    
        await batch.commit()
    }

    return (
        !username && (
            <div className="username-form">
                <h3>Choose username</h3>
                <form onSubmit={onSubmit}>
                    <input name="username" placeholder="myname" value={formValue} onChange={onChange} />
                    <UsernameMessage username={formValue} isValid={isValid} loading={loading} />
                    <button type="submit" disabled={!isValid}> Choose </button>
                </form>

                <h3>Debug State</h3>
                <div>
                    Username: {formValue}
                    <br />
                    <p className={loading ? 'success' : 'danger'}>Loading: {loading.toString()}</p>
                    <br />
                    <p className={isValid ? 'success' : 'danger'}>Username Valid: {isValid.toString()}</p>
                </div>
            </div>
        )
    )
}

function UsernameMessage({ username, isValid, loading }) {
    if (loading) {
        return <p>Checking...</p>
    } else if (isValid) {
        return <p className="success">{username} is available!</p>
    } else if (username && !isValid) {
        return <p className="danger">That username is taken!</p>
    } else {
        return <p></p>
    }
}