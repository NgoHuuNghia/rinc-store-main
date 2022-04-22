import Image from "next/image";

const GameMainImage = ({mainUrl, slug}) => {
    //! const fileListRef = ref(storage, `uploads/images/games/${slug}/main-image`)
    //! const [url, setUrl] = useState('')

    //! list(fileListRef, { maxResults: 1 })
    //! .then((list) => getDownloadURL(list.items[0])
    //! .then((url) => setUrl(url)
    //! ))

    return (
        <div>
            {mainUrl
                ? <Image src={mainUrl} alt={slug} width={850} height={500}/>
                : <p>No image yet ⭕</p>}
        </div>
    );
}

export default GameMainImage;