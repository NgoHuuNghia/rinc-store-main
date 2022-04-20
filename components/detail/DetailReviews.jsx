import { firestore } from "@lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineThumbUpOffAlt, MdOutlineThumbDownOffAlt } from "react-icons/md";
import { ReviewForm } from "./ReviewForm";

const DetailReviews = ({ 
    title,
    slug,
    user, 
    username, 
    ratingDoc, 
    ratingData, 
    gameRef, 
    reviews,
    router
}) => {

    return (
        <div onClick={() => console.log(reviews)} className='reviews-container'>

            <ReviewForm 
                user={user}
                username={username}
                ratingDoc={ratingDoc}
                ratingData={ratingData}
                gameRef={gameRef}
                router={router}
            />

            <div className="title-controller">
                {reviews.length >= 1
                    ? (
                        <>
                            <h3>{title} reviews</h3>
                            <button>Newest first <IoMdArrowDropdown/></button>
                        </>
                    )
                    : (
                        <h3>{title} doesn&#x27;t have any reviews yet. Write one!</h3>
                    )
                }
                
            </div>
            {reviews.length >= 1
                ? (
                    <div className="user-reviews-container">
                        {reviews.map( (review) => {
                            return (
                                <div key={review.id} className="review-container">
                                    <div className="rating">
                                        <h4>Skip</h4>
                                        <div><Image src="/icons/ratings/skip.png" width={25} height={25} quality='25' alt="rating-skip"/></div>
                                    </div>
                                    <p>{review.review}</p>
                                    <div className="subsidiary">
                                        <div className="user-container">
                                            <div className='avatar'><Image src="/icons/hacker.png" width={40} height={40} quality='25' alt={review.username}/></div>
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