// import { useState } from 'react'
// import { storage } from '@lib/firebase'
// import { ref, getDownloadURL, list } from 'firebase/storage'

function SecondaryImages({slug}) {
    //! const fileListRef = ref(storage, `uploads/images/games/${slug}/main-image`)
    //! const [first, setfirst] = useState(second)

    //! list(fileListRef, { maxResults: 10 })
    //!     .then((list) => list.items.map((file) => {
    //!         getDownloadURL(file)
    //!             .then((url) => url)
    //!     }))

    //! console.log(secondaryImagesGallery())

    return (
        <div className='secondary'>
            <strong>Secondary images</strong>
            <div>
                <div>{/* <Image src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="test"  */}
                        width={850} height={500} layout='responsive'/>
                </div>
                <div>{/* <Image src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="test"  */}
                        width={850} height={500} layout='responsive'/>
                </div>
                <div>{/* <Image src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="test"  */}
                        width={850} height={500} layout='responsive'/>
                </div>
                <div>{/* <Image src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="test"  */}
                        width={850} height={500} layout='responsive'/>
                </div>
            </div>
        </div>
    );
}

export default SecondaryImages