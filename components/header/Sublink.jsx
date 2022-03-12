import { useState } from "react";
import Link from "next/link";

import { toTop } from "@lib/commonFunctions";

function Sublink({mainUrl, page, links}) {
    const [submenu, setSubmenu] = useState(false)

    return (
        <li onMouseOver={() => setSubmenu(true)} onMouseLeave={() => setSubmenu(false)}>
            <Link 
                className='nav-links' 
                passHref href={mainUrl} 
                onClick={() => toTop()} 
            >
                {page}
            </Link>
            <div className={`mobile-submenu ${submenu && 'display'}`}>
                <ul>
                    {links.map(sublink => <li>
                        <Link 
                            passHref href={sublink.url} 
                            onClick={() => toTop()}>
                                <a>
                                    <p>{sublink.label}</p> 
                                    {sublink.icon}
                                </a>
                        </Link>
                    </li>)}
                </ul>
            </div>
        </li>
    );
}

export default Sublink;