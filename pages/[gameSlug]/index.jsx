import React, { useState, useEffect, useRef, useContext } from 'react'
import parse from 'html-react-parser'
import {FaPlaystation, FaXbox} from 'react-icons/fa'

import { auth, dateToJsonLocal } from "@lib/firebase";
import { firestore } from "@lib/firebase";
import { addDoc, collection, doc, getDoc, getDocs, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import {useMediaQuery} from 'react-responsive'
import MoreLikeGenres from '@components/Detail/MoreLikeGenres'
import MoreLikeSeries from '@components/Detail/MoreLikeSeries'
import DetailBackgrounds from '@components/Detail/DetailBackgrounds'
import ConsoleIcons from '@components/ConsoleIcons'
import DetailAgeRating from '@components/Detail/DetailAgeRating'
import DetailChartContainerBar from '@components/Detail/DetailChartContainerBar'

// import ReturnRatingIcon from '@components/ReturnRatingIcon'
import storeIcons from '@public/icons/storeIcons'

import {FaChevronRight, FaWindows, FaFlag, FaShareAlt, FaStopCircle} from 'react-icons/fa'
import {AiOutlineStop} from 'react-icons/ai'
import { useWindowSize } from '@lib/hooks';
import Image from 'next/image';
import { useCollection, useDocument, useDocumentData } from 'react-firebase-hooks/firestore';
import { UserContext } from '@lib/globalContext';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { icons } from 'react-icons';
import DetailReviews from '@components/detail/DetailReviews';

export async function getStaticProps({ params }) { //? params instead of query like ssr
    const { gameSlug } = params

    const gameRef = doc(firestore, 'games', gameSlug)
    const game = dateToJsonLocal(await getDoc(gameRef))
    const path = gameRef.path //? hydrate data bellow

    return {
        props: { game, path },
        revalidate: 5000,
    };
}
export async function getStaticPaths() {
    // Improve my using Admin SDK to select empty docs
    const q = query(
        collection(firestore, 'games'),
        limit(20)
    )
    const snapshot = await getDocs(q);

    const paths = snapshot.docs.map((doc) => {
        const { slug } = doc.data();
            return {
            params: { gameSlug: slug },
        };
    });

    return {
        //$ must be in this format:
        //$ paths: [
        //$   { params: { slug }}
        //$ ],
        paths,
        
        //? since we are working with dynamic data, static page generation will have no way to knowing we added a new post to
        //? the database so it just default to a 404 page no found. But with adding a fallback value of 'blocking' can solve
        //? this issue for us. Telling next to fallback to regular server side rendering, when it rendered the page than it can
        //? be cached on the cdn like any other pages. Which is awesome since we normally have to rebuild and redeploy your site
        //? with regular static generation 
        fallback: 'blocking',
    };
}

// const index = ({
//     game: {title, mainImageUrl, secondaryImageUrls, releasedAt, updatedAt, metacritic}
// }) => {
//     //! test
//     console.log(mainImageUrl)
    
//     const fromL = useMediaQuery({ minWidth: 800})
//     const fromS = useMediaQuery({ minWidth: 400})

//     return (
//         <div>
//             {fromS && "ass"}
//             {fromL && title}
//         </div>
//     );
// }

// export default index;

//$ source

const GameDetail = ({ game, path }) => {
    //!         const {
    //!             name, description, metacritic, released, updated, background_image, background_image_additional, ratings,
    //!             platforms, parent_platforms, stores, developers, genres, tags, publishers, esrb_rating
    //!         } = detail
    // const {windowWidth} = useWindowSize()
    // const fromXl = useMediaQuery({ minWidth: 1000})
    // const detailContainer = useRef(null)
    
    // const [ readMore, setReadMore ] = useState(false)
    // const [primaryHeight, setPrimaryHeight] = useState(0)
    // const [secondaryHeight, setSecondaryHeight] = useState(0)
    // //? let primaryHeight = 0
    // //? let secondaryHeight = 0
    // let primaryContainer = null
    // let primaryMask = null
    // let primaryReadMore = null

    // useEffect(() => {
    //     setPrimaryHeight(detailContainer.current.children[0].clientHeight)
    //     setSecondaryHeight(detailContainer.current.children[1].clientHeight)
    //     //? primaryHeight = detailContainer.current.children[0].clientHeight
    //     //? secondaryHeight = detailContainer.current.children[1].clientHeight
    //     primaryContainer = detailContainer.current.children[0]
    //     primaryMask = detailContainer.current.children[0]
    //     primaryReadMore = detailContainer.current.children[2]

    //     detailContainer.current.style.height = (primaryHeight > secondaryHeight ? `${secondaryHeight}px` : '')
    //     primaryContainer.style.height = (primaryHeight > secondaryHeight ? `${secondaryHeight}px` : '')
    //     primaryMask.style.maskImage = (primaryHeight > secondaryHeight ? `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, #151515 30%)` : 'none')
    //     primaryReadMore.style.color = 'white'
    // }, [])
    // useEffect(() => {
    //     primaryContainer = detailContainer.current.children[0]
    //     primaryMask = detailContainer.current.children[0]
    //     primaryReadMore = detailContainer.current.children[2]

    //     if(!readMore) {
    //         detailContainer.current.style.height = (primaryHeight > secondaryHeight ? `${secondaryHeight}px` : '')
    //         primaryContainer.style.height = (primaryHeight > secondaryHeight ? `${secondaryHeight}px` : '')
    //         primaryMask.style.maskImage = (primaryHeight > secondaryHeight ? `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, #151515 30%)` : 'none')
    //         primaryReadMore.style.color = 'white'
    //     }
    //     else {
    //         detailContainer.current.style.height = ''
    //         primaryContainer.style.height = ''
    //         primaryReadMore.style.color = '#9b0027'
    //         primaryMask.style.maskImage = `none`
    //     }
    // }, [readMore])
    // useEffect(() => {
    //     primaryContainer = detailContainer.current.children[0]
    //     primaryMask = detailContainer.current.children[0]
    //     primaryReadMore = detailContainer.current.children[2]

    //     if(!fromXl) {
    //         setReadMore(false)
    //         detailContainer.current.style.height = ``
    //         primaryContainer.style.height = ``
    //         primaryMask.style.maskImage = 'none'
    //     } else {
    //         setReadMore(false)
    //         detailContainer.current.style.height = (primaryHeight > secondaryHeight ? `${secondaryHeight}px` : '')
    //         primaryContainer.style.height = (primaryHeight > secondaryHeight ? `${secondaryHeight}px` : '')
    //         primaryMask.style.maskImage = (primaryHeight > secondaryHeight ? `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, #151515 30%)` : 'none')
    //         primaryReadMore.style.color = 'white'
    //     }
    // }, [windowWidth])
    const router = useRouter()
    const { user, username, shoppingCart } = useContext(UserContext)

    const gameRef = doc(firestore, path)
    const [realTimeGame, setRealTimeGame] = useState()

    useEffect(() => {
        let unsubscribe
        if(game){
            unsubscribe = onSnapshot(gameRef, (doc) => { 
                setRealTimeGame(dateToJsonLocal(doc)) 
            })
        } else setRealTimeGame()
        return unsubscribe
    }, [game])
    
    //* value post will default to the realtime data but fallback to prerender data on server
    const gameData = realTimeGame || game
    const {title, slug, mainImageUrl, secondaryImageUrls, releasedAt, updatedAt, metacritic, description, basePrice, userRatings} = gameData

    const addToCart = async() => {
        const cartRef = collection(firestore, 'users', user.uid, 'shoppingCart');
        const data = {
            title: title,
            slug: slug,
            basePrice: basePrice,
            mainImageUrl: mainImageUrl,
        }
    
        await addDoc(cartRef, data);
        toast("game added to cart", {icon: "👌"})
    }

    return (
        <div className='detail-container'>
            <DetailBackgrounds 
                firstBackgroundUrl={secondaryImageUrls[0]}
                secondBackgroundUrl={secondaryImageUrls[secondaryImageUrls.length - 1]}
            />
            <div className='breadcrumbs'>
                <div>
                    {/*//$ <a href='/'>{genres[0].name}</a>
                    {genres[1] && (
                        <>
                            <span>/</span>
                            <a href='/'>{genres[1].name}</a>
                        </>
                    )} */}
                    <a href='/'>{`genres-name`}</a>
                </div>
                <FaChevronRight />
                <div>
                    {/*//$ <a href="/">{developers[0].name}</a> */}
                    <a href="/">{`dev-name`}</a>
                </div>
                <FaChevronRight />
                <div>
                    <p href="/">{title}</p>
                </div>
            </div>
            {/*//$ <div className='detail' ref={detailContainer}> */}
            <div className='detail'>
                <div className='detail-primary'>
                    <section className='trailer-mobile'>
                        <div className='head'>
                            <div className='head-release'>{releasedAt}</div>
                            {/*//$ <ConsoleIcons parent_platforms={parent_platforms}/> */}
                            <div className='consoles'>
                                <FaPlaystation />
                                <FaXbox />
                            </div>
                        </div>
                        <a className="trailer-main">
                            <Image src={mainImageUrl ? mainImageUrl : '/nope-not-here.png'} width={800} height={400} quality='50' layout='responsive'/>
                        </a>
                        <div className='trailer-slider'>{/* map here 8 times */}
                            {secondaryImageUrls
                                .slice(0, 4)
                                .map((item, index) => {
                                    return (
                                        <a key={index}>
                                            <Image src={item ? item : '/nope-not-here.png'} width={800} height={400} quality='1' layout='responsive'/>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </section>
                    <section className='glance'> {/* ADD AGE RATING AND WEBSITE */}
                        <div className='head'>
                            <div className='head-release'>{releasedAt}</div>
                            {/*//$ <ConsoleIcons parent_platforms={parent_platforms}/> */}
                            <div className='consoles'>
                                <FaPlaystation />
                                <FaXbox />
                            </div>
                        </div>
                        <h1>{title}</h1>
                        <div className='glance-info'>
                            <p>Developer:</p>
                            {/* <a href="/">{developers[0].name}</a> */}
                            <a href="/">{`dev-name`}</a>
                            <p>Publisher:</p>
                            {/* <a href="/">{publishers.length >= 1 ? publishers[0].name : developers[0].name}</a> */}
                            <a href="/">{`publisher-name`}</a>
                            <p>Released:</p>
                            <p>{releasedAt}</p>
                        </div>
                        <div className='tag-container'>
                            <p>Tags</p>
                            <div>{/* limit map by 4 */}
                                {/* {tags
                                    .slice(0, 3)
                                    .map((item) => {
                                        return <a href="/"><p>{item.name}</p></a>
                                    })
                                } */}
                                <a href="/"><p>{`tags-name`}</p></a>
                                <a href="/"><p>+</p></a>
                            </div>
                        </div>
                        <div className='ratings-container'>{/* flexbox 2-2 */}
                            <p>Ratings</p>
                            <div className='ratings'>
                                {/*//! gonna make the final rating based on the metacritic, also add in the recommendations */}
                                <div>
                                    <div>
                                        {/*//$ <h4>{ratings[0].title}</h4>
                                        <ReturnRatingIcon title={ratings[0].title} chart={false}/> */}
                                        <h4>{`rating-title`}</h4>
                                        {/*//$ <div>
                                            <Image src={item ? item : '/nope-not-here.png'} width={800} height={400} quality='1' layout='responsive'/>
                                        </div> */}
                                        <img src={`@public/icons/ratings/meh`} alt={`rating-title`}/>
                                    </div>
                                    {/*//$ <div><a href="/">{ratings[0].count} Ratings</a></div>*/}
                                    <div><a href="/">{`rating-count`} Ratings</a></div>{/* //!  link to rating part of page */}
                                    <p># 10 <a href="/">RPG</a></p>
                                    <p># 1 <a href="/">Top 2020</a></p>
                                </div>
                                <div>
                                    <p>#10</p><a href="/">RPG</a>
                                    <p>#1</p><a href="/">Top 2020</a>
                                </div>
                                {metacritic
                                    ? <div>
                                        <h4>Metascore</h4>
                                        <p>{metacritic}</p>
                                    </div>
                                    : <div>
                                        <h4>No metascore <FaStopCircle /></h4>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='glance-about'>
                            <h4>About</h4>
                            {parse(description || 'missing description')}
                        </div>
                        <div className="glance-general">
                            <div className="glance-age">
                                <p>Age rating</p>
                                {/*//$ <DetailAgeRating esrb_rating={esrb_rating}/> */}
                                tempt adult +16
                            </div>
                            <div className="glance-updated">
                                <p>Last updated</p>
                                <p>{updatedAt}</p>
                            </div>
                            <div className="glance-platforms linkables">
                                <p>Last updated</p>
                                <div>
                                    {/*//$ {platforms.map((item, index) => {
                                        return <><span>{item.platform.name}</span>
                                        {platforms.length - 1 > index
                                            ? <strong>, </strong>
                                            : null
                                        }
                                        </>
                                    })} */}
                                    <span>{`platform-name`}</span>
                                    <strong>, </strong>
                                    <span>{`platform-name`}</span>
                                </div>
                            </div>
                            <div className="glance-genres linkables">
                                <p>Genres</p>
                                <div>
                                    {/* {genres.map((item, index) => {
                                        return <><span>{item.name}</span>
                                        {genres.length - 1 > index
                                            ? <strong>, </strong>
                                            : null
                                        }
                                        </>
                                    })} */}
                                    <span>{`genres-name`}</span>
                                    <strong>, </strong>
                                    <span>{`genres-name`}</span>
                                </div>
                            </div>
                            {/* {tags.length === 0
                                ? null
                                : <div className="glance-tags linkables">
                                    <p>Tags</p>
                                    <div>
                                        {tags.map((item, index) => {
                                            return <><span>{item.name}</span>
                                            {tags.length - 1 > index
                                                ? <strong>, </strong>
                                                : null
                                            }
                                            </>
                                        })}
                                    </div>
                                </div>
                            } */}
                            <div className="glance-tags linkables">
                                <p>Tags</p>
                                <div>
                                    <span>{`tags-name`}</span>
                                    <strong>, </strong>
                                    <span>{`tags-name`}</span>
                                </div>
                            </div>
                        </div>
                        {/* {platforms.map((item) => {
                            if(item.platform.slug === 'pc' && Object.keys(item.requirements).length > 1 ){
                                return <div className='glance-system'>
                                    <h2>System Requirements for PC</h2>
                                    <div className="minimum">
                                        <strong>Minimum:</strong>
                                        <div>
                                            <p>{item.requirements.minimum}</p>
                                        </div>
                                    </div>
                                    <div className="recommended">
                                        <strong>Recommended:</strong>
                                        <div>
                                            <p>{item.requirements.recommended}</p>
                                        </div>
                                    </div>
                                </div>
                            } else return null
                        })} */}
                        <div className='glance-system'>
                            <h2>System Requirements for PC</h2>
                            <div className="minimum">
                                <strong>Minimum:</strong>
                                <div>
                                    <p>{`minimum-requirements`}</p>
                                </div>
                            </div>
                            <div className="recommended">
                                <strong>Recommended:</strong>
                                <div>
                                    <p>{`recommended-requirements`}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='detail-secondary'>

                    <div className='height-container'>
                        <section className='trailer-desktop'>
                            {secondaryImageUrls.length > 1
                                ?
                                    <><a href='/' className="trailer-main"><img src={secondaryImageUrls[0]} alt="" /></a>
                                    <div className='trailer-slider'>{/* map here 8 times */}
                                        {secondaryImageUrls
                                            .slice(0, 4)
                                            .map((image, index) => {
                                                return <a href="/" key={index}><img src={image} alt={title} /></a>
                                            })
                                        }
                                    </div></>
                                : 
                                    <div><AiOutlineStop /> No screenshots founded <AiOutlineStop /></div>}
                        </section>

                        <div className='interaction'>
                            <div className='stores-container'>
                                <p>Stores</p>
                                <div>
                                    {/*//$ {stores.map((item) => {
                                        let storeIcon = null
                                        storeIcons.forEach((icon) => {
                                            if(item.store.slug == icon.slug){
                                                storeIcon = icon.icon
                                            }
                                        })

                                        return (
                                            <a>
                                                <h4>{item.store.name}</h4>
                                                {storeIcon()}
                                            </a>
                                        )
                                    })} */}
                                    <a>
                                        <h4>{`store-name`}</h4>
                                    </a>
                                </div>
                            </div>

                            <DetailChartContainerBar userRatings={userRatings} gameRef={gameRef} user={user} username={username}/>

                            <section className='action'>
                                <div className='action-action'>
                                    <a href="/"><FaShareAlt /></a>
                                    <a href="/"><FaFlag /></a>
                                </div>
                                <div className='action-play'>
                                    <div className="play-demo">
                                        <div>
                                            <h5>Download {title} Demo On Steam App</h5>
                                            <FaWindows />
                                        </div>
                                        <div>
                                            <a href='/'>Download</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h5>Buy {title ? title : "where the title..."}</h5>
                                            <FaWindows />
                                        </div>
                                        <div >
                                            <p>{basePrice ? "$" + basePrice : "no pricing yet..."}</p>
                                            {/*//! also add case if game is already own or in cart */}
                                            {username
                                                ? (
                                                    !shoppingCart.some(cart => cart.item.slug === slug)
                                                    ? (
                                                        <button onClick={() => addToCart()}>Add to cart</button>
                                                    )
                                                    : (
                                                        <button onClick={() => router.push(`/user/${username}/checkout`)}>Added to cart, checkout?</button>
                                                    )
                                                ) 
                                                : (
                                                    <button onClick={() => router.push(`/enter`)}>Log in to purchase</button>
                                                )
                                            }
                                        </div>
                                    </div>
                                    {/*//! <div>
                                        <div>
                                            <h5>Buy {name}: Deluxe Edition</h5>
                                            <FaWindows />
                                        </div>
                                        <div >
                                            <p>1.080.000₫</p>
                                            <a href="/">Add to cart</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h5>Buy {name}: Ultimate Edition</h5>
                                            <FaWindows />
                                        </div>
                                        <div >
                                            <p>1.380.000₫</p>
                                            <a href="/">Add to cart</a>
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div className="action-dlc">
                                    <div>
                                        <p className='label-md'>Content For This Game</p>
                                        <a href='/'>Browse all (24)</a>
                                    </div>
                                    <div>
                                    {/* map here 5 time? and make button to see all
                                        <a href='/' className='dlc-purchase'>
                                            <h6>{name} - Starter Pack</h6>
                                            <p>80.000₫</p>
                                        </a>
                                        <a href='/' className='dlc-purchase'>
                                            <h6>{name} - Starter Pack</h6>
                                            <p>80.000₫</p>
                                        </a>
                                        <a href='/' className='dlc-purchase'>
                                            <h6>{name} - Starter Pack</h6>
                                            <p>80.000₫</p>
                                        </a>
                                        <a href='/' className='dlc-purchase'>
                                            <h6>{name} - Starter Pack</h6>
                                            <p>80.000₫</p>
                                        </a>
                                    </div>
                                    <div>
                                        <p>showing 1 - 5 of 24</p>
                                        <a href="/">
                                            <p>See All</p>
                                            <IoMdArrowDropdown />
                                        </a>
                                    </div>
                                </div> */}
                            </section>
                        </div>
                    </div>
                </div>

                {/* <p className='read-more' onClick={() => setReadMore(!readMore)}>
                    {fromXl
                        ? !readMore
                            ? 'Read more...'
                            : 'Collapse...'
                        : ''
                    }
                </p> */}
                <Recommendation />
                <DetailReviews userRatings={userRatings} title={title} user={user} username={username} gameRef={gameRef}/>
            </div>
        </div>
    )
}

function Recommendation() {
    //! temp get around with the recommendation
    const LIMIT = 3
    const ref = collection(firestore, 'games');
    const gamesQuery = query(ref, orderBy('releasedAt'), limit(LIMIT))
    const [querySnapshot, loading] = useCollection(gamesQuery) //? make a loader here another time

    const gamesData = querySnapshot?.docs.map((doc) => dateToJsonLocal(doc));

    return (
        <div className='recommendations'>
            <section className="recommended">
                {/*//$ {gameSeries.length >= 1
                    ? <MoreLikeSeries gameSeries={gameSeries}/>
                    : null
                }
                <MoreLikeGenres genres={genres}/> */}
                <MoreLikeSeries gamesData={gamesData}/>
                <MoreLikeGenres gamesData={gamesData}/>
            </section>
        </div>
    )
}

export default GameDetail