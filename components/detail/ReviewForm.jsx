import { useEffect, useState } from "react";
import { dateToJsonLocal, firestore, rate } from "@lib/firebase";
import { doc, getDoc, increment, serverTimestamp, writeBatch } from "firebase/firestore";
import toast from "react-hot-toast";
import Image from "next/image";

import BsTrash from "react-icons/bs"

export function ReviewForm({ user, ratingDoc, username, gameRef }) {
    const [reviewController, setReviewController] = useState();

    const [reviewRef, setReviewRef] = useState()
    const [reviewDoc, setReviewDoc] = useState()
    const [reviewData, setReviewData] = useState()
    const [ratingData, setratingData] = useState()
    // useEffect( async() => {
    //     if(user){
    //         reviewRef = doc(firestore, gameRef.path, 'review-tracker', user.uid);
    //         reviewDoc = await getDoc(reviewRef);
    //     }
    // }, [user])

    useEffect( async() => {
        if(user && ratingDoc){
            const tempRef = doc(firestore, gameRef.path, 'review-tracker', user.uid)
            const tempDoc = await getDoc(tempRef)
            setReviewRef(tempRef)
            setReviewDoc(tempDoc)
            setReviewData(dateToJsonLocal(tempDoc))
            setratingData(dateToJsonLocal(ratingDoc))
        }
    }, [user, ratingDoc])
    

    const setReview = async(e) => {
        e.preventDefault();
        const batch = writeBatch(firestore);
        
        batch.update(gameRef, {
            "reviewsCount": increment(1),
        })
        batch.set(reviewRef, {
            uid: user.uid,
            username: username,
            review: reviewController,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        })

        await batch.commit();
        toast.success("Review posted, thank you!")
    };

    return (
        <div className="review-writer-container">
            {
                user
                ? (
                    <>
                        <div className="title">
                            <p>Writer a review</p>
                            <div className="current-user">
                                <p>{username || "no username!"}</p>
                                <div className="avatar">
                                    <Image src={user?.photoURL || `/icons/hacker.png`} width={40} height={40} quality='40'/>
                                </div>
                            </div>
                        </div>
                        {!ratingDoc?.exists()
                            ? (
                                <div className="rating-selector">
                                    <div onClick={() => rate("exceptional", user.uid, gameRef)}>
                                        <Image src="/icons/ratings/exceptional.png" width={35} height={35} quality='35'/>
                                        <p>Exceptional</p>
                                    </div>
                                    <div onClick={() => rate("recommended", user.uid, gameRef)}>
                                        <Image src="/icons/ratings/recommended.png" width={35} height={35} quality='35'/>
                                        <p>Recommended</p>
                                    </div>
                                    <div onClick={() => rate("meh", user.uid, gameRef)}>
                                        <Image src="/icons/ratings/meh.png" width={35} height={35} quality='35'/>
                                        <p>Meh</p>
                                    </div>
                                    <div onClick={() => rate("skip", user.uid, gameRef)}>
                                        <Image src="/icons/ratings/skip.png" width={35} height={35} quality='35'/>
                                        <p>Skip</p>
                                    </div>
                                </div>
                            )
                            : (
                                <div className="rating-selector">
                                    <div onClick={() => rate(ratingData?.rating, user.uid, gameRef)}>
                                        <Image src={`/icons/ratings/${ratingData?.rating}.png`} width={35} height={35} quality='35'/>
                                        <p>You rated {ratingData?.rating}</p>
                                    </div>
                                </div>
                            )
                        }
                        {/* {!reviewDoc?.exists()
                            ? (
                                <form 
                                    onSubmit={setReview}
                                >
                                    <textarea
                                        type="text"
                                        placeholder="writer your review..."
                                        value={reviewController}
                                        onChange={(e) => setReviewController(e.target.value)}
                                    />
                                    <div>
                                        <button type="submit">Submit review</button>
                                    </div>
                                </form>
                            )
                            : (
                                <form 
                                    className="review-viewer" 
                                    onSubmit={setReview}
                                >
                                    <textarea
                                        type="text"
                                        value={reviewData?.review}
                                        // onChange={(e) => setReviewController(e.target.value)} />
                                        disabled 
                                    />
                                    <div>
                                        <button>Edit your review <BsTrash /></button>
                                        <button>Delete your review</button>
                                    </div>
                                </form>
                            )
                        } */}
                    </>
                )
                : (
                    <div className="title">
                        <p>Login to review</p>
                    </div>
                )
            }
        </div>
    );
}
