import { doc, onSnapshot, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '@lib/firebase'

// Custom hook to read  auth record and user profile doc
export function useUserData() {
    const [user] = useAuthState(auth)
    const [username, setUsername] = useState(null)

    useEffect(() => {
        // turn off realtime subscription
        let unsubscribe

        if (user) {
            const ref = doc(getFirestore(), 'users', user.uid)
            //$ define our realtime subscriptions, because when we call ref.onsnapshot firebase return 
            //$ a function when called will unsubscribe from that data
            unsubscribe = onSnapshot(ref, (doc) => { 
                //? provide us with the latest document infomation from the database, and when the database updates it will run with
                //? the latest data
                setUsername(doc.data()?.username) 
            })
        } else {
            setUsername(null)
        }

        return unsubscribe
    }, [user])

    return { user, username }
}
