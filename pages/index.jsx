import Featured from '@components/home/Featured'
import FeaturedSlider from '@components/home/FeaturedSlider'
import FeaturedRecommended from '@components/home/FeaturedRecommended'
import FeaturedSim from '@components/home/FeaturedSim'
import Tabs from '@components/home/Tabs'
import TabViewer from '@components/home/TabViewer'

import Link from 'next/link'
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import { dateToJsonLocal, firestore } from '@lib/firebase'
//todo import { useGlobalContext } from '../context'

//? HARD limit on the post
const LIMIT = 5

export async function getServerSideProps(){
    // allow us to just ref any sub groups no mater how nested
    const ref = collection(firestore, 'games');
    const gamesDescQuery = query(
        ref,
        where('published', '==', true),
        orderBy('releasedAt', 'desc'),
        limit(LIMIT),
    )
    //$ SSR need the firebase's timestamp to be serialized as json to be return as prop object along with the rest of the data
    const gamesDesc = (await getDocs(gamesDescQuery)).docs.map((doc) => dateToJsonLocal(doc));

    return {
        props: { gamesDesc }, // will be passed to the page component as props
    };
}

const Home = ({gamesDesc}) => {
    //todo const { 
    //todo     featuredList, 
    //todo     featuredListRecent, 
    //todo     featuredListRecommended, 
    //todo     featuredListSim,
    //todo     toggleIndex,
    //todo     tabActives,
    //todo     toggleTab,
    //todo } = useGlobalContext()
    //todo const { tabToggle } = tabActives

    //? Types
    //todo const sliderMain = 'sliderMain'
    //todo const sliderRecomended = 'sliderRecomended'
    
    //? Tabs
    //todo const tabList = featuredList.concat(featuredListRecent, featuredListRecommended, featuredListSim)
    //todo const tabFilter = tabList.filter((thing, index, self) =>
    //todo     index === self.findIndex((t) => (
    //todo         t.id === thing.id && t.name === thing.name
    //todo     ))
    //todo )

    return (
        <section className='home-container'>
            <div className='hero'>
                {/* bg_mobile_english or bg_english to switch */}
                <Link href="/">
                    <a className='hero-bg-mobile'>
                        <video loop="yes" muted={true} autoPlay="yes" playsInline="" poster="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/page_bg_mobile_english.jpg?t=1631553001">
                            <source src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/webm_page_bg_mobile_english.webm?t=1631553001" type="video/webm" />
                            <source src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/mp4_page_bg_mobile_english.mp4?t=1631553001" type="video/mp4" />
                        </video>
                    </a>
                </Link>
                <Link href="/">
                    <a className='hero-bg'>
                        <video loop="yes" muted={true} autoPlay="yes" playsInline="" poster="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/page_bg_english.jpg?t=1631553001">
                            <source src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/webm_page_bg_english.webm?t=1631553001" type="video/webm" />
                            <source src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/mp4_page_bg_english.mp4?t=1631553001" type="video/mp4" />
                        </video>
                    </a>            
                </Link>
            </div>
            <div className='main-section'>
                <FeaturedSlider gamesDesc={gamesDesc}/>

                <Featured gamesDesc={gamesDesc}/>

                <FeaturedRecommended gamesDesc={gamesDesc}/>

                <section className='page-browse'>
                    <div>
                        <h5>Browse Steam</h5>
                    </div>  
                    <div>
                        <Link href='/'><a><p>New releases</p></a></Link>
                        <Link href='/'><a><p>Special</p></a></Link>
                        <Link href='/'><a><p>Free games</p></a></Link>
                        <Link href='/'><a><p>By user tags</p></a></Link>
                    </div>
                </section>

                <FeaturedSim gamesDesc={gamesDesc}/>
            </div>
            <div className='subsidiary-section'>
                <div className='subsidiary-container'>
                    <div className='tab-selector'>
                        <button 
                            //$ className={tabToggle === 'featured' ? 'active' : ''} 
                            className={`featured active`} 
                            //$ onClick={() => toggleTab('featured', 'tabToggle')}>
                            >
                                <p>Trending</p>
                        </button>
                        <button 
                            //$ className={tabToggle === 'special' ? 'active' : ''} 
                            className={`special`} 
                            //$ onClick={() => toggleTab('special', 'tabToggle')}>
                            >
                                <p>Top news</p>
                        </button>
                        <button 
                            //$ className={tabToggle === 'recommended' ? 'active' : ''} 
                            className={`recommended`} 
                            //$ onClick={() => toggleTab('recommended', 'tabToggle')}>
                            >
                                <p>Popular upcoming</p>
                        </button>
                        <button 
                            //$ className={tabToggle === 'sim' ? 'active' : ''} 
                            className={`sim`} 
                            //$ onClick={() => toggleTab('sim', 'tabToggle')}>
                            >
                                <p>Special</p>
                        </button>
                    </div>
                    <section className='tab-container'>
                        <div className='tab-list'>
                            <div>
                                <p>See more:  &nbsp;</p>
                                <Link href="/"><a> New releases</a></Link>
                            </div>
                            {/* map here 10 times*/}
                            <div className={`active`}>
                                {/*//$ {featuredList.map((item) => {
                                    //$ return <Tabs key={item.id} {...item} toggle={'featured'}/>
                                })} */}
                                <Tabs/>
                            </div>
                            {/* //$ <div className={tabToggle === 'special' ? 'active' : ''}>
                                {featuredListRecent.map((item) => {
                                    return <Tabs key={item.id} {...item} toggle={'special'}/>
                                })}
                            </div>
                            //$ <div className={tabToggle === 'recommended' ? 'active' : ''}>
                                {featuredListRecommended.map((item) => {
                                    return <Tabs key={item.id} {...item} toggle={'recommended'}/>
                                })}
                            </div>
                            //$ <div className={tabToggle === 'sim' ? 'active' : ''}>
                                {featuredListSim.map((item) => {
                                    return <Tabs key={item.id} {...item} toggle={'sim'}/>
                                })}
                            </div> */}
                        </div>
                        <div className="tab-viewer">
                            {/*//$ {tabFilter
                                .map((item) => {
                                    return <TabViewer key={item.id} {...item}/>
                            })} */}
                            <TabViewer/>
                        </div>
                    </section>
                </div>
                {/* under 200.000d */}
                {/*//todo Maybe a grid display here if we have the time wink wink */}
            </div>
        </section>
    )
}

export default Home