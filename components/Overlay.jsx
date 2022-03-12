import React from 'react'
import { useGlobalContext } from '@lib/globalContext'

const Overlay = () => {
    const {overlay, setOverlay} = useGlobalContext()

    return (
        <div onClick={() => setOverlay()} className={`overlay ${(overlay ? 'display' : '')}`}></div>
    )
}

export default Overlay