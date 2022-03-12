import React from 'react'
import {FaPlaystation, FaWindows, FaXbox, FaApple} from 'react-icons/fa'

const ConsoleIcons = ({parent_platforms}) => {
    let playstationIcon = false, xboxIcon = false, windowIcon = false, iosIcon = false
    parent_platforms.forEach((item) => {
        if(item.platform.slug === 'playstation'){playstationIcon = true}
        if(item.platform.slug === 'xbox'){xboxIcon = true}
        if(item.platform.slug === 'pc'){windowIcon = true}
        if(item.platform.slug === 'ios'){iosIcon = true}
    })

    return (
        <div className='consoles'>
            {playstationIcon ? <FaPlaystation /> : null}
            {xboxIcon ? <FaXbox /> : null}
            {windowIcon ? <FaWindows /> : null}
            {iosIcon ? <FaApple /> : null}
        </div>
    )
}

export default ConsoleIcons
