import { useEffect, useState } from "react";
import { auth, firestore, rate } from "@lib/firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineThumbUpOffAlt, MdOutlineThumbDownOffAlt } from "react-icons/md";
import { useDocument } from "react-firebase-hooks/firestore";

const DetailReviews = ({ userRatings, title, user, username, gameRef}) => {
    // let ratingRef
    // let ratingDoc
    // useEffect(async() => {
    //     if(user){
    //         ratingRef = doc(firestore, gameRef.path, 'rating-tracker', user.uid)
    //         ratingDoc = await getDoc(ratingRef)
    //     }
    // }, [user])
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
            <div className="review-writer-container">
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
                    && (
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
                }
                <form>
                    <textarea type="text" placeholder="writer your review..."></textarea>
                    <button type="submit">Submit review</button>
                </form>
            </div>
            <div className="title-controller">
                <h3>{title} reviews</h3>
                <button>Newest first <IoMdArrowDropdown/></button>
            </div>
            <div className="user-reviews-container">
                <div className="review-container">
                    <div className="rating">
                        <h4>Skip</h4>
                        <div><Image src="/icons/ratings/skip.png" width={25} height={25} quality='25'/></div>
                    </div>
                    <p>desciption Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, laboriosam eligendi officiis saepe eos porro. Consequatur eaque vel quia dolorum placeat alias ad nostrum harum, esse praesentium optio magnam aut.</p>
                    <div className="subsidiary">
                        <div className="user-container">
                            <div className='avatar'><Image src="/icons/hacker.png" width={40} height={40} quality='25'/></div>
                            <div className="username-time">
                                <p>username</p>
                                <span>Mar 30, 2022</span>
                            </div>
                        </div>
                        <div className='review-ratings'>
                            <MdOutlineThumbUpOffAlt className="thumb-up"/>
                            <span>0</span>
                            <MdOutlineThumbDownOffAlt className="thumb-down"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailReviews;