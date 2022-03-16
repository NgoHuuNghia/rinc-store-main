import { doc, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth, firestore } from '@lib/firebase'

// Custom hook to read  auth record and user profile doc
export function useUserData() {
    const [user] = useAuthState(auth)
    const [username, setUsername] = useState(null)

    useEffect(() => {
        // turn off realtime subscription
        let unsubscribe

        if (user) {
            const ref = doc(firestore, 'users', user.uid)
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

export function useSliderControl(length, interval){
    const [sliderIndex, setSliderIndex] = useState(0)
    
    const lastIndex = length - 1
    useEffect(() => {
        if (sliderIndex < 0) setSliderIndex(lastIndex)
        if (sliderIndex > lastIndex) setSliderIndex(0)

        let autoSlider = setInterval(() => {
            setSliderIndex(sliderIndex + 1)
        }, interval)
        return () => {clearInterval(autoSlider)}
    }, [sliderIndex])

    return [sliderIndex, setSliderIndex]
}

export function useSliderControlClass(index, sliderIndex, length){
    let position = 'nextSlide'
    if (index === sliderIndex) position = 'activeSlide'
    if (index === sliderIndex - 1 || (sliderIndex === 0 && index === length - 1)) position = 'lastSlide'

    return position
}