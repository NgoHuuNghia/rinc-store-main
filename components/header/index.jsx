import React, {useRef, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa'
import { TiCancel } from 'react-icons/ti'

import sublinks from '@public/publicData/sublinks'
import { toTop } from '@lib/commonFunctions'
import { useGlobalContext } from '@lib/globalContext'
import Sublink from '@components/header/Sublink'
import User from './User'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

//asss
const Header = () => {
    const { overlay, setOverlay } = useGlobalContext()
    const router = useRouter()

    // const router = useRouter()
    // console.log(router)
    
    // const mobileNavContainerRef = useRef(null)
    // const mobileNavRef = useRef(null)
    // const searchValue = useRef('')
    
    // const history = useHistory()
    // const location = useLocation().pathname

    // useEffect(() => {
    //     const mobileNavsHeight = mobileNavRef.current.getBoundingClientRect().height
    //     //height 0 and opacity 0
    //     if (expandNavLink && !location.includes('Detail')) {
    //         mobileNavContainerRef.current.style.height = `${mobileNavsHeight}px`
    //         mobileNavContainerRef.current.style.zIndex = `2`
    //     }
    //     if (expandNavLink && location.includes('Detail')) {
    //         mobileNavContainerRef.current.style.opacity = `1`
    //         mobileNavContainerRef.current.style.zIndex = `2`
    //     }
    //     else if (!expandNavLink && location.includes('Detail')){
    //         mobileNavContainerRef.current.style.height = `${mobileNavsHeight}px`
    //         mobileNavContainerRef.current.style.opacity = `0`
    //         mobileNavContainerRef.current.style.zIndex = `-2`
    //     }
    //     else if (!expandNavLink && !location.includes('Detail')) {
    //         mobileNavContainerRef.current.style.height = '0px'
    //     }
    // }, [expandNavLink]) //run every time showLinks state changed

    //todo const handleSubmit = (e) => { //prevent the user from reloading the page when submiting
    //todo     e.preventDefault()
    //todo     history.push(`/Search`)
    //todo }
    //todo let searchTimeout = null
    //todo const startSearch = () => {
    //todo     clearTimeout(searchTimeout)
    //todo     searchTimeout = setTimeout(() => RunSearch(searchValue.current.value), 1000)
    //todo }

    //todo const detailHeader = () => {
    //todo     if (location.includes('Detail')) {
    //todo         if(expandNavLink){
    //todo             return 'overlay'
    //todo         }
    //todo         if (!expandNavLink){
    //todo             return 'transparent'
    //todo         }
    //todo     } else {
    //todo         if(expandNavLink){
    //todo             return 'overlay'
    //todo         }
    //todo         if (!expandNavLink){
    //todo             return ''
    //todo         }
    //todo     }
    //todo }

    return (
        // <header className={`header ${detailHeader()}`}
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
                            {/* <img src="/logo/rinc-white-v2.png" alt="" /> */}
                        </a>
                    </Link>
                </div>
                {/*//todo <form onSubmit={handleSubmit}> */}
                <form>
                    {/*//todo <FaSearch onClick={() => history.push(`/Search`)}/> */}
                    <FaSearch />
                    <input 
                        type="text" 
                        //todo placeholder={totalGamesCount ? `search over ${totalGamesCount} games...` : `loading...`}
                        //todo placeholder={totalGamesCount ? `search over !test-test! games...` : `loading...`}
                        //todo ref={searchValue}
                        //todo onChange={startSearch}
                    />
                    <TiCancel 
                        //todo style={searchValue.current.value ? {opacity: .6, zIndex: 0} : null}
                        //todo onClick={() => {
                        //todo     RunSearch('')
                        //todo     searchValue.current.value = ''}
                        //todo }
                    />
                </form>
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