import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDUS_x8ZNTPsqLMH9AyF8nHPN9OMsQtHTI",

    authDomain: "rinc-store.firebaseapp.com",

    projectId: "rinc-store",

    storageBucket: "rinc-store.appspot.com",

    messagingSenderId: "904011984920",

    appId: "1:904011984920:web:218b7cdf435f10cb18136d",

    measurementId: "G-86M04WR120"
}

//$ get the app or initialize it 
function createFirebaseApp(config) {
    try {
        return getApp()
    } catch {
        return initializeApp(config)
    }
}
const firebaseApp = createFirebaseApp(firebaseConfig)

//* Auth exports
export const auth = getAuth(firebaseApp)
export const googleAuthProvider = new GoogleAuthProvider()

//* Firestore exports
export const firestore = getFirestore(firebaseApp) //? in firebase version 9+ every firestore's functions is in getFirestore

//* Storage exports
export const storage = getStorage(firebaseApp)
//$ a special firebase event that we can listen to which will tell us the progress of the file being upload
export const STATE_CHANGED = 'state_changed'

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
 export async function getUserWithUsername(username) {
    // const usersRef = collection(firestore, 'users');
    // const query = usersRef.where('username', '==', username).limit(1);

    const q = query(
        collection(firestore, 'users'), 
        where('username', '==', username),
        limit(1)
    )
    const userDoc = ( await getDocs(q) ).docs[0];
    return userDoc;
}

/**`
 * Converts a firestore document to JSON specifically the createdAt and updatedAt 
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
    const data = doc.data();
    return {
        ...data,
        // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
        ...(data.releasedAt) ? {releasedAt: data.releasedAt.toMillis()} : {releasedAt: 0},
        ...(data.updatedAt) ? {updatedAt: data.updatedAt.toMillis()} : {updatedAt: 0},
    };
}

/**`
 * Converts a firestore document to JSON specifically the createdAt and updatedAt 
 * @param  {DocumentData} doc
 */
export function gameDataToJSON(data){
    return {
        ...data,
        ...(data.releasedAt) ? {releasedAt: data.releasedAt.toMillis()} : {releasedAt: 0},
        ...(data.updatedAt) ? {updatedAt: data.updatedAt.toMillis()} : {updatedAt: 0},
    }
}