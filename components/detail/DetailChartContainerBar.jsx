import React, {useState} from 'react'
import ReturnRatingIcon from '../../Components/ReturnRatingIcon'
import {FaCircle} from 'react-icons/fa'
import { doc, getDoc, increment, writeBatch } from 'firebase/firestore'
import { firestore } from '@lib/firebase'
import { useDocument } from 'react-firebase-hooks/firestore'

const DetailChartContainerBar = ({ userRatings, gameRef, user, username }) => {
    const [ curretRating, setCurretRating ] = useState()
    const ratings = userRatings.ratings
    const ratingsKeys = Object.keys(ratings)
    const chartContainerWidth = ratingsKeys.reduce((cum, key) => {
        return cum + ratings[key].percent
    }, 0)

    return (
        // <div>ass</div>
        <div className='chart-container'>
            {username
                ? <p>Click to rate</p>
                : <p>Login to rate</p>
            }
            <div className='chart'> {/* this is so gonna take some work might do last */}
                {ratingsKeys.map((key, index) => {
                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setCurretRating(index)}
                            onMouseLeave={() => setCurretRating()}
                            onClick={() => rate(key, user.uid, gameRef)}
                            className={index == curretRating
                                ? key + " active"
                                : key
                            }
                            //$ style={ratingsKeys.length - 1 == index || chartContainerWidth > 100
                            //     ? {width: `${ratings[key].percent - (chartContainerWidth - 100)}%`}
                            //     : {width: `${ratings[key].percent}%`}}
                            style={{width: 25 + "%"}}
                        >
                            <img src={
                                key == 'exceptional'
                                    ? 'icons/ratings/exceptional.png' :
                                key == 'recommended'
                                    ? 'icons/ratings/recommended.png' :
                                key == 'meh'
                                    ? 'icons/ratings/meh.png' 
                                    : 'icons/ratings/skip.png'
                            } alt="" />
                        </div>
                    )}
                )}
            </div>
            <div className='chart-label'>
                {ratingsKeys.map((key, index) => {
                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setCurretRating(index)}
                            onMouseLeave={() => setCurretRating()}
                            className={index === curretRating
                                ? key + " active"
                                : key
                        }>
                            <FaCircle />
                            <p>{key}</p>
                            <p>{ratings[key].count}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default DetailChartContainerBar

const rate = async (key, uid, gameRef) => {
    const ratingRef = doc(firestore, gameRef.path, 'rating-tracker', uid)
    // const userRatingData = (await getDoc(ratingRef)).data()
    const ratingDoc = await getDoc(ratingRef)
    const ratingData = ratingDoc.data()

    const batch = writeBatch(firestore);
    if (ratingDoc?.exists){
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
                        "userRatings.ratings.exceptional.count": increment(1),
                        ...(ratingData?.rating ===  'recommended'  && {"userRatings.ratings.recommended.count": increment(-1)}),
                        ...(ratingData?.rating ===  'meh'  && {"userRatings.ratings.meh.count": increment(-1)}),
                        ...(ratingData?.rating ===  'skip'  && {"userRatings.ratings.skip.count": increment(-1)}),
                    }
                ),
                ...(key === 'recommended' 
                    && {
                        "userRatings.ratings.recommended.count": increment(1),
                        ...(ratingData?.rating ===  'exceptional'  && {"userRatings.ratings.exceptional.count": increment(-1)}),
                        ...(ratingData?.rating ===  'meh'  && {"userRatings.ratings.meh.count": increment(-1)}),
                        ...(ratingData?.rating ===  'skip'  && {"userRatings.ratings.skip.count": increment(-1)}),
                    }
                ),
                ...(key ===  'meh' 
                    && {
                        "userRatings.ratings.meh.count": increment(1),
                        ...(ratingData?.rating ===  'recommended'  && {"userRatings.ratings.recommended.count": increment(-1)}),
                        ...(ratingData?.rating ===  'exceptional'  && {"userRatings.ratings.exceptional.count": increment(-1)}),
                        ...(ratingData?.rating ===  'skip'  && {"userRatings.ratings.skip.count": increment(-1)}),
                    }
                ),
                ...(key ===  'skip' 
                    && {
                        "userRatings.ratings.skip.count": increment(1),
                        ...(ratingData?.rating ===  'recommended'  && {"userRatings.ratings.recommended.count": increment(-1)}),
                        ...(ratingData?.rating ===  'meh'  && {"userRatings.ratings.meh.count": increment(-1)}),
                        ...(ratingData?.rating ===  'exceptional'  && {"userRatings.ratings.exceptional.count": increment(-1)}),
                    }
                )
            });
            batch.set(ratingRef, {
                uid: uid,
                rating: key,
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
    // batch.update(gameRef, {
    //     "userRatings.count": increment(1),
    //     ...(key ===  'exceptional'  && {"userRatings.ratings.exceptional.count": increment(1)}),
    //     ...(key ===  'recommended'  && {"userRatings.ratings.recommended.count": increment(1)}),
    //     ...(key ===  'meh'  && {"userRatings.ratings.meh.count": increment(1)}),
    //     ...(key ===  'skip'  && {"userRatings.ratings.skip.count": increment(1)}),
    // });
    // batch.set(ratingRef, {
    //     uid: uid,
    //     rating: key,
    // });

    // await batch.commit();
};