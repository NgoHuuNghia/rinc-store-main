import React, { useState, useEffect, useRef } from 'react'
import parse from 'html-react-parser'
import {FaPlaystation, FaXbox} from 'react-icons/fa'

import { gameDateToJsonLocal } from "@lib/commonFunctions";
import { firestore } from "@lib/firebase";
import { collection, doc, getDoc, getDocs, limit, query } from "firebase/firestore";
import { useWindowDimensions } from '@lib/hooks'
import MoreLikeGenres from '@components/Detail/MoreLikeGenres'
import MoreLikeSeries from '@components/Detail/MoreLikeSeries'
import DetailBackgrounds from '@components/Detail/DetailBackgrounds'
import ConsoleIcons from '@components/ConsoleIcons'
import DetailAgeRating from '@components/Detail/DetailAgeRating'
import DetailChartContainerBar from '@components/Detail/DetailChartContainerBar'

import ReturnRatingIcon from '@components/ReturnRatingIcon'
import storeIcons from '@public/icons/storeIcons'

import {FaChevronRight, FaWindows, FaFlag, FaShareAlt, FaStopCircle} from 'react-icons/fa'
import {AiOutlineStop} from 'react-icons/ai'

export async function getStaticProps({ params }) { //? params instead of query like ssr
    const { gameSlug } = params

    const gameRef = doc(firestore, 'games', gameSlug)
    const game = gameDateToJsonLocal(await getDoc(gameRef))
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

// const index = ({game}) => {
//     console.log(game)

//     return (
//         <div>
//             {game.title}
//         </div>
//     );
// }

// export default index;

const GameDetail = ({
    title, mainImageUrl, secondaryImageUrls, releasedAt, updatedAt, metacritic
}) => {

    const [ readMore, setReadMore ] = useState(false)
    
//!         const {
//!             name, description, metacritic, released, updated, background_image, background_image_additional, ratings,
//!             platforms, parent_platforms, stores, developers, genres, tags, publishers, esrb_rating
//!         } = detail
    const { windowWidth } = useWindowDimensions()
        
    let readMoreDecider = () => null
    if(detailContainer.current !== null){ //! simplify this with useEffect like in searchesComponents.jxs when u had time
        let primaryHeight = detailContainer.current.children[0].children[1].getBoundingClientRect().height
        let secondaryHeight = detailContainer.current.children[1].children[0].getBoundingClientRect().height
        let primaryMask = detailContainer.current.children[0]
        let primaryReadMore = detailContainer.current.children[2]
        
        if(windowWidth < 1000) detailContainer.current.style.height = ``
        if(windowWidth >= 1000){
            if(!readMore) {
                detailContainer.current.style.height = `${secondaryHeight}px`
                primaryMask.style.maskImage = (primaryHeight > secondaryHeight) ? `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, #151515 30%)`: 'none'
                primaryReadMore.style.color = 'white'
            }
            if(readMore) {
                detailContainer.current.style.height = (primaryHeight + 30) + 'px'
                primaryReadMore.style.color = '#9b0027'
                primaryMask.style.maskImage = `none`
            }
        }

        readMoreDecider = () => {
            if(primaryHeight > secondaryHeight && windowWidth >= 1000){
                if(!readMore) return 'Read more...'
                else return 'Collapse...'
            }
            else primaryMask.style.maskImage = `none`
        }
    }

    return (
        <div className='detail-container'>
            <DetailBackgrounds mainImageUrl={mainImageUrl}/>
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
            <div className='detail' ref={detailContainer}>
                <div className='detail-primary'>
                    <section className='trailer-mobile'>
                        <div className='head'>
                            <div className='head-release'>{released}</div>
                            {/*//$ <ConsoleIcons parent_platforms={parent_platforms}/> */}
                            <div className='consoles'>
                                <FaPlaystation />
                                <FaXbox />
                            </div>
                        </div>
                        <a href='/' className="trailer-main"><img src={mainImageUrl} alt="" /></a>
                        <div className='trailer-slider'>{/* map here 8 times */}
                            {secondaryImageUrls
                                .slice(0, 4)
                                .map((item, index) => {
                                    return <a href="/" key={index}><img src={item} alt={title} /></a>
                                })
                            }
                        </div>
                    </section>
                    <section className='glance'> {/* ADD AGE RATING AND WEBSITE */}
                        <div className='head'>
                            <div className='head-release'>{released}</div>
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
                                        <img src={`@public/icons/ratings/meh`} alt={title}/>
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
                            {parse(description)}
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
                                            .slice(1, 5)
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

                            {/*//$ <DetailChartContainerBar ratings={ratings}/> */}

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
                                            <h5>Buy {title}</h5>
                                            <FaWindows />
                                        </div>
                                        <div >
                                            <p>800.000₫</p>
                                            <a href="/">Add to cart</a>
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

                <p className='read-more' onClick={() => setReadMore(!readMore)}>{readMoreDecider()}</p>
            </div>
            <div className='recommendations'>
                <section className="recommended">
                    {/*//$ {gameSeries.length >= 1
                        ? <MoreLikeSeries gameSeries={gameSeries}/>
                        : null}
                    <MoreLikeGenres genres={genres}/> */}
                </section>
            </div>
        </div>
    )
}

export default GameDetail