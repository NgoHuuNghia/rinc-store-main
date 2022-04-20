// import { useGlobalContext } from '../../context'

import Image from "next/image"
import Link from "next/link"

// const TabViewer = ({name, short_screenshots, genres, id}) => {
const TabViewer = () => {
    // const { tabActives } = useGlobalContext()
    // const { tabCurrent } = tabActives

    return (
        //$ <div className={ tabCurrent === id ? 'active' : ''}>
        <div className={`active`}>
            {/*//$ <div>{name}</div> */}
            <div>{`test name`}</div>
            <div>
                <p>Overall user reviews</p>
                <p><span>Positive </span>(13)</p>
            </div>
            <div>
                {/*//$ {genres
                    .slice(0, 3)
                    .map((item) => {
                        return <a key={item.id} href='/'>{item.name}</a>
                })} */}
                <Link href="/"><a>genres name</a></Link>
            </div>
                {/*//$ {short_screenshots
                    .slice(0, 4)
                    .map((item) => {
                        return <img key={item.id} src={item.image} alt={name}/>
                })} */}
            <div className='image-container'><Image src={'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'} alt={'temp-viewer-image'} width={800} height={500} quality='50' layout='responsive' objectPosition='center' objectFit="cover"/></div>
        </div>
    )
}

export default TabViewer
