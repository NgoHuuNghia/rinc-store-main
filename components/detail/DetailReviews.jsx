import { useEffect, useState } from "react";
import { auth, firestore, rate } from "@lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineThumbUpOffAlt, MdOutlineThumbDownOffAlt } from "react-icons/md";
import { useDocument } from "react-firebase-hooks/firestore";
import { ReviewForm } from "./ReviewForm";

const DetailReviews = ({ userRatings, title, user, username, gameRef, reviews}) => {
    const [ratingDoc, setRatingDoc] = useState()
    useEffect(() => {
        let unsubscribe
        if(user){
            unsubscribe = onSnapshot(doc(firestore, gameRef.path, 'rating-tracker', user.uid), 
                (doc) => { 
                    setRatingDoc(doc) 
                }
            )
        } else setRatingDoc()

        return unsubscribe
    }, [user])

    // console.log(auth.currentUser?.uid)

    return (
        <div className='reviews-container'>

            <ReviewForm user={user} username={username} ratingDoc={ratingDoc} gameRef={gameRef}/>

            <div className="title-controller">
                {reviews.length >= 1
                    ? (
                        <>
                            <h3>{title} reviews</h3>
                            <button>Newest first <IoMdArrowDropdown/></button>
                        </>
                    )
                    : (
                        <h3>{title} doesn't have any reviews yet. Write one!</h3>
                    )
                }
                
            </div>
            {reviews.length >= 1
                ? (
                    <div className="user-reviews-container">
                        {reviews.map(review => {
                            return (
                                <div key={review.uid} className="review-container">
                                    <div className="rating">
                                        <h4>Skip</h4>
                                        <div><Image src="/icons/ratings/skip.png" width={25} height={25} quality='25'/></div>
                                    </div>
                                    <p>{review.review}</p>
                                    <div className="subsidiary">
                                        <div className="user-container">
                                            <div className='avatar'><Image src="/icons/hacker.png" width={40} height={40} quality='25'/></div>
                                            <div className="username-time">
                                                <p>{review.username}</p>
                                                <span>{review.createdAt}</span>
                                            </div>
                                        </div>
                                        <div className='review-ratings'>
                                            <MdOutlineThumbUpOffAlt className="thumb-up"/>
                                            <span>0</span>
                                            <MdOutlineThumbDownOffAlt className="thumb-down"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : null
            }
        </div>
    )
}
export default DetailReviews;