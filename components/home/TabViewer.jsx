// import { useGlobalContext } from '../../context'

import Image from "next/image"
import Link from "next/link"

// const TabViewer = ({name, short_screenshots, genres, id}) => {
const TabViewer = ({title, slug, mainImageUrl, genres, secondaryImageUrls}) => {
    // const { tabActives } = useGlobalContext()
    // const { tabCurrent } = tabActives

    return (
        //$ <div className={ tabCurrent === id ? 'active' : ''}>
        <div className={`active`}>
            <div className="title">{title}</div>
            <div className="reviews">
                <p>Overall user reviews</p>
                <p><span>Positive </span>(13)</p>
            </div>
            <div className="genres">
                {genres
                    .slice(0, 3)
                    .map((item) => {
                        return <Link href={`/${slug}`} key={item.id}><a>{item.value}</a></Link>
                    }
                )}
            </div>
            {secondaryImageUrls
                .slice(1, 4)
                .map((item, index) => {
                    return (
                        <div key={index} className='image-container'>
                            <Image src={item} alt={`${title} image ${index}`} width={800} height={500} quality='50' layout='responsive' objectPosition='center' objectFit="cover"/>
                        </div>
                    )
            })}
            <div className='image-container'><Image src={mainImageUrl} alt={title} width={800} height={500} quality='50' layout='responsive' objectPosition='center' objectFit="cover"/></div>
        </div>
    )
}

export default TabViewer
