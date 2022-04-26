import { useEffect, useState } from "react";
import { dateToJsonLocal, firestore, rate } from "@lib/firebase";
import { doc, increment, onSnapshot, serverTimestamp, updateDoc, writeBatch } from "firebase/firestore";
import toast from "react-hot-toast";
import Image from "next/image";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import {ImCross} from 'react-icons/im'

export function ReviewForm({ user, ratingDoc, ratingData, username, gameRef, router }) {
    const [reviewController, setReviewController] = useState();

    const [reviewRef, setReviewRef] = useState()
    const [reviewDoc, setReviewDoc] = useState()
    const [reviewData, setReviewData] = useState()
    const [reviewEdit, setReviewEdit] = useState(false)
    
    useEffect(() => {
        let unsubscribe
        if(user){
            const ref = doc(firestore, gameRef.path, 'review-tracker', user.uid)
            unsubscribe = onSnapshot(ref, 
                (doc) => { 
                    setReviewRef(ref)
                    setReviewDoc(doc)
                    setReviewData(dateToJsonLocal(doc))
                }
            )
        } else {
            setReviewRef()
            setReviewDoc()
            setReviewData()
        }

        return unsubscribe
    }, [user, gameRef.path])

    const batch = writeBatch(firestore);

    const setReview = async(e) => {
        e.preventDefault();
        
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
        setReviewController()
        toast.success("Review posted, thank you!")
    };
    const updateReview = async(e) => {
        e.preventDefault();
        
        await updateDoc(reviewRef, {
            "review": reviewController,
            "updatedAt": serverTimestamp(),
        })
        // batch.update(reviewRef, {
        //     "review": reviewController,
        //     "updatedAt": serverTimestamp(),
        // })

        setReviewEdit(false)
        setReviewController()
        toast.success("Review updated, make up your mind!")
    };
    const deleteReview = async() => {
        batch.update(gameRef, {
            "reviewsCount": increment(-1),
        })
        batch.delete(reviewRef)

        await batch.commit();
        toast.success("Review deleted 😔")
    };

    return (
        <div className="review-writer-container">
            {
                user
                ? (
                    <>
                        <div className="title">
                            {!reviewDoc?.exists()
                                ? (
                                    <p>Writer a review</p>
                                )
                                : (
                                    <p>This is your review</p>
                                )
                            }
                            <div className="current-user">
                                <p>{username || "no username!"}</p>
                                <div className="avatar">
                                    <Image src={user?.photoURL || `/icons/hacker.png`} width={40} height={40} quality='40' alt="current-user"/>
                                </div>
                            </div>
                        </div>
                        {!ratingDoc?.exists()
                            ? (
                                <div className="rating-selector">
                                    <div onClick={() => rate("exceptional", user.uid, gameRef)}>
                                        <Image src="/icons/ratings/exceptional.png" width={35} height={35} quality='35' alt='rating-exceptional'/>
                                        <p>Exceptional</p>
                                    </div>
                                    <div onClick={() => rate("recommended", user.uid, gameRef)}>
                                        <Image src="/icons/ratings/recommended.png" width={35} height={35} quality='35' alt='rating-recommended'/>
                                        <p>Recommended</p>
                                    </div>
                                    <div onClick={() => rate("meh", user.uid, gameRef)}>
                                        <Image src="/icons/ratings/meh.png" width={35} height={35} quality='35' alt='rating-meh'/>
                                        <p>Meh</p>
                                    </div>
                                    <div onClick={() => rate("skip", user.uid, gameRef)}>
                                        <Image src="/icons/ratings/skip.png" width={35} height={35} quality='35' alt='rating-skip'/>
                                        <p>Skip</p>
                                    </div>
                                </div>
                            )
                            : (ratingData
                                && (
                                    <div className="rating-selector">
                                        <div className="rated" onClick={() => rate(ratingData?.rating, user.uid, gameRef)}>
                                            <Image src={`/icons/ratings/${ratingData.rating}.png`} width={35} height={35} quality='35' alt={`rating-${ratingData.rating}`}/>
                                            <p>You rated {ratingData?.rating}</p>
                                        </div>
                                    </div>
                                )
                            )
                        }
                        {!reviewDoc?.exists()
                            ? (
                                <form onSubmit={setReview}>
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
                                <form onSubmit={updateReview} className="review-viewer">
                                    <textarea
                                        type="text"
                                        placeholder="writer your review..."
                                        disabled={!reviewEdit}
                                        value={
                                            reviewEdit
                                            ? reviewController
                                            : reviewData?.review
                                        }
                                        onChange={(e) => setReviewController(e.target.value)}
                                    />
                                    {reviewEdit
                                        ? (
                                            <div>
                                                <button type="submit">Submit your updated review <FaCheck /></button>
                                                <button type='button' onClick={(e) => {
                                                    e.preventDefault()
                                                    setReviewController()
                                                    setReviewEdit(false)
                                                }}>Cancel edits<ImCross /></button>
                                            </div>
                                        )
                                        : (
                                            <div>
                                                <button type='button' onClick={(e) => {
                                                    e.preventDefault()
                                                    setReviewController(reviewData.review)
                                                    setReviewEdit(true)
                                                }}>Edit your review <FaEdit /></button>
                                                <button type='button' onClick={(e) => {
                                                    e.preventDefault()
                                                    setReviewController()
                                                    deleteReview()
                                                }}>Delete your review <FaTrash /></button>
                                            </div>
                                        )
                                    }
                                </form>
                            )
                        }
                    </>
                )
                : (
                    <div className="title login">
                        <p onClick={() => router.replace('/enter')}>Login to review</p>
                    </div>
                )
            }
        </div>
    );
}
