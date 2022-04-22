import React from 'react'
import logo from '@public/logo/rinc-white-v2.png'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const router = useRouter()

    if(!router.pathname.includes("gameSlug")){
        return (
            <footer>
                <div>
                    <div>
                        <div><Image src={logo.src} width={400} height={400} alt="logo-rinc" ></Image></div>
                    </div>
                    <div>
                        <div><Image src="/logo/logo_steam_footer.png" width={400} height={150} quality={100} alt="logo-steam" ></Image></div>
                    </div>
                    <p>
                        © 2021 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                        VAT included in all prices where applicable. 
                    </p>
                    <ul>
                        <li><Link href="/"><a>Privacy Policy</a></Link></li> 
                        <li><Link href="/"><a>Legal</a></Link></li>
                        <li><Link href="/"><a>Subscriber Agreement</a></Link></li>
                        <li><Link href="/"><a>Subscriber Agreement</a></Link></li>
                        <li><Link href="/"><a>Cookies</a></Link></li>
                    </ul>
                    <ul>
                        <li><Link href="/"><a>About Valve</a></Link></li>
                        <li><Link href="/"><a>Jobs</a></Link></li>
                        <li><Link href="/"><a>Steamworks</a></Link></li>
                        <li><Link href="/"><a>Steam Distribution</a></Link></li>
                        <li><Link href="/"><a>Support</a></Link></li>
                        <li><Link href="/"><a>Gift Cards</a></Link></li>
                        <li><Link href="/"><a>@Rinc</a></Link></li>
                    </ul>
                </div>
            </footer>
        )
    } else return null
}

export default Footer
