import Image from "next/image";
// import { useState } from 'react'
// import { storage } from '@lib/firebase'
// import { ref, getDownloadURL, list } from 'firebase/storage'

function SecondaryImages({ secondaryImageUrls, slug}) {
    // ! const fileListRef = ref(storage, `uploads/images/games/${slug}/main-image`)
    // ! const [first, setfirst] = useState(second)

    // ! list(fileListRef, { maxResults: 10 })
    // !     .then((list) => list.items.map((file) => {
    // !         getDownloadURL(file)
    // !             .then((url) => url)
    // !     }))

    // ! console.log(secondaryImagesGallery())

    return (
        <div className='secondary'>
            <strong>Secondary images</strong>
            <div>
                {secondaryImageUrls.slice(0,4).map((image) => {
                    return (
                        <div>
                            <Image src={image} alt={slug}
                            width={850} height={500}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SecondaryImages