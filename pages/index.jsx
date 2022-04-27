import Featured from '@components/Home/Featured'
import FeaturedSlider from '@components/Home/FeaturedSlider'
import FeaturedRecommended from '@components/Home/FeaturedRecommended'
import FeaturedSim from '@components/Home/FeaturedSim'

import Link from 'next/link'
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import { dateToJsonLocal, firestore } from '@lib/firebase'
import Subsidiary from '@components/Home/Subsidiary'
//todo import { useGlobalContext } from '../context'

//? HARD limit on the post
const LIMIT = 7

export async function getServerSideProps(){
    // allow us to just ref any sub groups no mater how nested
    const ref = collection(firestore, 'games');
    const gamesDescQuery = query(
        ref,
        where('published', '==', true),
        orderBy('releasedAt', 'desc'),
        limit(LIMIT),
    )
    const gamesAscQuery = query(
        ref,
        where('published', '==', true),
        orderBy('releasedAt', 'asc'),
        limit(LIMIT),
    )
    // const gamesDescQuery = query(
    //     ref,
    //     where('published', '==', true),
    //     orderBy('releasedAt', 'desc'),
    //     limit(LIMIT),
    // )

    const gamesDesc = (await getDocs(gamesDescQuery)).docs.map((doc) => dateToJsonLocal(doc));
    const gamesAsc = (await getDocs(gamesAscQuery)).docs.map((doc) => dateToJsonLocal(doc));

    return {
        props: { gamesDesc, gamesAsc }, // will be passed to the page component as props
    };
}

const Home = ({gamesDesc, gamesAsc}) => {
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
                <FeaturedSlider games={gamesDesc}/>

                <Featured games={gamesAsc}/>

                <FeaturedRecommended games={gamesDesc}/>

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

                <FeaturedSim games={gamesAsc}/>
            </div>
            <Subsidiary tab1={gamesDesc} tab2={gamesAsc} />
        </section>
    )
}

export default Home