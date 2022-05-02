import { initializeApp, getApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, collection, where, getDocs, query, limit, doc, writeBatch, serverTimestamp, getDoc, increment } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
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
 * Converts a firestore document to JSON specifically the dates 
 * @param  {DocumentData} doc
 */
export function dateToJsonLocal(doc){
    const data = doc?.data();

    if(data && doc){
        const returnData = {
            ...data,
            ...(data.releasedAt  && {releasedAt: data.releasedAt.toDate().toLocaleString() ||  'loading'}),
            ...(data.createdAt  && {createdAt: data.createdAt.toDate().toLocaleString() ||  'loading'}),
            ...(data.joinedAt  && {joinedAt: data.joinedAt.toDate().toLocaleString() ||  'loading'}),
            ...(data.updatedAt  && {updatedAt: data.updatedAt.toDate().toLocaleString() ||  'loading'}),
        }
        const sortedData = Object.keys(returnData)
            .sort()
            .reduce((accumulator, key) => {
                accumulator[key] = returnData[key];

                return accumulator;
            }, {});

        return sortedData
    } else return undefined
}

/**`
 * Converts a firestore document to JSON specifically the dates and id 
 * @param  {DocumentData} doc
 */
export function dateToJsonLocalWithId(doc){
    const data = doc?.data()
    const id = doc?.id

    if(data && doc){
        const returnData = {
            ...(id && {id: id}),
            ...data,
            ...(data.releasedAt  && {releasedAt: data.releasedAt.toDate().toLocaleString() ||  'loading'}),
            ...(data.createdAt  && {createdAt: data.createdAt.toDate().toLocaleString() ||  'loading'}),
            ...(data.joinedAt  && {joinedAt: data.joinedAt.toDate().toLocaleString() ||  'loading'}),
            ...(data.updatedAt  && {updatedAt: data.updatedAt.toDate().toLocaleString() ||  'loading'}),
        }
        const sortedData = Object.keys(returnData)
            .sort()
            .reduce((accumulator, key) => {
                accumulator[key] = returnData[key];

                return accumulator;
            }, {});

        return sortedData
    } else return undefined
}

export async function createFirestoreUserWithUsername(currentUser, username) {
    const userDoc = doc(firestore, 'users', currentUser.uid)
    const usernameDoc = doc(firestore, 'usernames', username)

    const batch = writeBatch(firestore)
    batch.set(userDoc, { 
        username: username, 
        photoURL: currentUser.photoURL, 
        displayName: currentUser?.displayName || username, 
        email: currentUser.email,
        provider: currentUser.providerData[0]?.providerId || "anonymous",
        joinedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        // role: {
        //     label: "customer",
        //     value: "customer"
        // }
        ...(currentUser.providerData[0]?.providerId
            ? {
                role: {
                    label: "customer",
                    value: "customer"
                }}
            : {
                role: {
                    label: "anonymous",
                    value: "anonymous"
                }}
        )
    })
    batch.set(usernameDoc, { uid: currentUser.uid })

    await batch.commit()
}

export async function rate(key, uid, gameRef) {
    const ratingRef = doc(firestore, gameRef.path, 'rating-tracker', uid)
    const ratingDoc = await getDoc(ratingRef)
    const ratingData = ratingDoc.data()
    const batch = writeBatch(firestore);

    if (ratingDoc?.exists()){
        if(key == ratingData?.rating){
            batch.update(gameRef, {
                "userRatings.count": increment(-1),
                ...(key ===  'exceptional'  && {"userRatings.ratings.exceptional.count": increment(-1)}),
                ...(key ===  'recommended'  && {"userRatings.ratings.recommended.count": increment(-1)}),
                ...(key ===  'meh'  && {"userRatings.ratings.meh.count": increment(-1)}),
                ...(key ===  'skip'  && {"userRatings.ratings.skip.count": increment(-1)}),
            });
            batch.delete(ratingRef);
            await batch.commit();
        } else if(key != ratingData?.rating){
            batch.update(gameRef, {
                ...(key ===  'exceptional' 
                    && {
                        ...(ratingData?.rating ===  'recommended'  && {"userRatings.ratings.recommended.count": increment(-1)}),
                        ...(ratingData?.rating ===  'meh'  && {"userRatings.ratings.meh.count": increment(-1)}),
                        ...(ratingData?.rating ===  'skip'  && {"userRatings.ratings.skip.count": increment(-1)}),
                        "userRatings.ratings.exceptional.count": increment(1),
                    }
                ),
                ...(key === 'recommended' 
                    && {
                        ...(ratingData?.rating ===  'exceptional'  && {"userRatings.ratings.exceptional.count": increment(-1)}),
                        ...(ratingData?.rating ===  'meh'  && {"userRatings.ratings.meh.count": increment(-1)}),
                        ...(ratingData?.rating ===  'skip'  && {"userRatings.ratings.skip.count": increment(-1)}),
                        "userRatings.ratings.recommended.count": increment(1),
                    }
                ),
                ...(key ===  'meh' 
                    && {
                        ...(ratingData?.rating ===  'recommended'  && {"userRatings.ratings.recommended.count": increment(-1)}),
                        ...(ratingData?.rating ===  'exceptional'  && {"userRatings.ratings.exceptional.count": increment(-1)}),
                        ...(ratingData?.rating ===  'skip'  && {"userRatings.ratings.skip.count": increment(-1)}),
                        "userRatings.ratings.meh.count": increment(1),
                    }
                ),
                ...(key ===  'skip' 
                    && {
                        ...(ratingData?.rating ===  'recommended'  && {"userRatings.ratings.recommended.count": increment(-1)}),
                        ...(ratingData?.rating ===  'meh'  && {"userRatings.ratings.meh.count": increment(-1)}),
                        ...(ratingData?.rating ===  'exceptional'  && {"userRatings.ratings.exceptional.count": increment(-1)}),
                        "userRatings.ratings.skip.count": increment(1),
                    }
                )
            });
            batch.update(ratingRef, {
                "rating": key,
            });
            await batch.commit();
        }
    }
    else {
        batch.update(gameRef, {
            "userRatings.count": increment(1),
            ...(key ===  'exceptional'  && {"userRatings.ratings.exceptional.count": increment(1)}),
            ...(key ===  'recommended'  && {"userRatings.ratings.recommended.count": increment(1)}),
            ...(key ===  'meh'  && {"userRatings.ratings.meh.count": increment(1)}),
            ...(key ===  'skip'  && {"userRatings.ratings.skip.count": increment(1)}),
        });
        batch.set(ratingRef, {
            uid: uid,
            rating: key,
        });

        await batch.commit();
    }
};