import Image from "next/image";
// import { useState } from 'react'
// import { storage } from '@lib/firebase'
// import { ref, getDownloadURL, list } from 'firebase/storage'

function SecondaryImages({ secondaryImageUrls, slug}) {
    return (
        <div className='secondary'>
            <strong>Secondary images</strong>
            <div>
                {secondaryImageUrls.length >= 1
                    ? (
                    secondaryImageUrls.slice(0,4).map((image, index) => {
                        return (
                            <div key={index}>
                                <Image src={image} alt={slug}
                                width={850} height={500}/>
                            </div>
                        )
                    }))
                    : <p>No images yet ⭕</p>
                }
            </div>
        </div>
    );
}

export default SecondaryImages