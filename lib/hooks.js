import { collection, doc, getDoc, getDocs, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth, firestore } from '@lib/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

// Custom hook to read  auth record and user profile doc
export function useUserData() {
    const [user] = useAuthState(auth)
    const [username, setUsername] = useState(null)

    useEffect(async() => {
        //? turn off realtime subscription
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
        } else {setUsername(null)}

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

export function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        windowWidth: undefined,
        windowHeight: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    windowWidth: window.innerWidth,
                    windowHeight: window.innerHeight,
                });
            }
        
            // Add event listener
            window.addEventListener("resize", handleResize);
        
            // Call handler right away so state gets updated with initial window size
            handleResize();
        
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}