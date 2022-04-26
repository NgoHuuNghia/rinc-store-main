import { FaSearch, FaPlaystation, FaXbox,  } from 'react-icons/fa'
import { TiCancel } from 'react-icons/ti'
import { RiComputerLine } from 'react-icons/ri'

import sublinks from '@public/publicData/sublinks'
import { toTop } from '@lib/commonFunctions'
import { useGlobalContext } from '@lib/globalContext'
import Sublink from '@components/Header/Sublink'
import User from './User'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { collection, endAt, getDocs, limit, orderBy, query, startAt, where } from 'firebase/firestore'
import { dateToJsonLocal, firestore } from '@lib/firebase'
import { useCallback, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

//asss
const Header = () => {
    const { overlay, setOverlay } = useGlobalContext()
    const router = useRouter()
    
    let LIMIT = 5
    const ref = collection(firestore, 'games');
    const [searchQuery, setsearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect( async() => {
        FetchResults(searchQuery)
    }, [searchQuery])

    const FetchResults = useCallback(
        debounce(async (queryValue) => {
            if (queryValue.length >= 1) {
                const gamesDescQuery = query(
                    ref,
                    where('published', '==', true),
                    orderBy('title'),
                    startAt(queryValue.toLocaleLowerCase()),
                    endAt(queryValue.toLocaleLowerCase() + '~'),
                    limit(LIMIT),
                )
                setSearchResults((await getDocs(gamesDescQuery)).docs.map((doc) => dateToJsonLocal(doc)))
            } else setSearchResults([])
        }, 500),
        []
    );
    
    return (
        <header
            className={
                `header ${router.query.hasOwnProperty('gameSlug') && 'transparent'}`
            }
        >
            <nav>
                <div className='logo-container'>
                    <Link passHref href={'/'}>
                        <a onClick={() => toTop()}>
                            <div><Image src={'/logo/rinc-white-v2.png'}  width={100} height={100} quality='50' alt="rinc-logo"></Image></div>
                        </a>
                    </Link>
                </div>
                <div className='search'>
                    <form>
                        <FaSearch />
                        <input 
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setsearchQuery(e.target.value)}
                            placeholder="Search any game..."
                        />
                        <TiCancel 
                            style={searchQuery ? {opacity: .6, zIndex: 0} : null}
                            onClick={() => {
                                setsearchQuery('')
                            }}
                        />
                    </form>
                    <div className={searchResults.length >= 1 ? 'search-results-container display' : 'search-results-container'}>
                        <ul>
                            {searchResults.length >= 1
                            && searchResults?.map(result => {
                                return (
                                    <li key={result.slug}>
                                        <div className='search-image'>
                                            <Image src={result.mainImageUrl} 
                                                alt={`title`} width={130} height={50} quality='50' objectPosition='center' objectFit="cover"
                                            />
                                        </div>
                                        <div className='search-info'>
                                            <div className='search-title-console'>
                                                <p>{result.title}</p>
                                                <div>
                                                    {result.platforms.map(platform => {
                                                        if(platform.value.includes('Playstation')){
                                                            return (
                                                                <FaPlaystation key={platform.id} />
                                                            )
                                                        }
                                                        if(platform.value.includes('XBOX')){
                                                            return (
                                                                <FaXbox key={platform.id} />
                                                            )
                                                        }
                                                        if(platform.value.includes('Desktop')){
                                                            return (
                                                                <RiComputerLine key={platform.id} />
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                            <div className='search-price-discount'>
                                                <p className='final-price'>${result.basePrice}</p>
                                                <p className='discount'>-10%</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
                <div className='sublinks'>
                    <div 
                        className={overlay ? 'open' : ''} 
                        id="bars" 
                        onClick={() => setOverlay()}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        {sublinks.map((link) => {
                            return (
                                <Sublink key={link.id} {...link}/>
                            )
                        })}
                    </ul>
                    <User />
                </div>
            </nav>
        </header>
    )
}

export default Header