import Link from 'next/link'
import { FaWindows } from 'react-icons/fa'

import { toTop } from '@lib/commonFunctions'
import Image from 'next/image'

// const Tabs = ({toggle, name, background_image, genres, id}) => {
const Tabs = ({
    item: {slug, title, basePrice, mainImageUrl, genres}, item,
    activeTabItem, setActiveTabItem, setActiveTabViewer
}) => {
    // const { hoverTabItem, tabActives } = useGlobalContext()
    // const { tabCurrent } = tabActives

    return (
        <Link 
            passHref
            href={`/${slug}`}
            onClick={() => toTop()}
        >
            {/* <a className={`tab-item`}> */}
            <a 
                className={activeTabItem == slug ? 'tab-item active' : 'tab-item'}
                onMouseEnter={() => {
                    setActiveTabItem(slug)
                    setActiveTabViewer(item)
                }}
            >
                <div className='item-image'><Image src={mainImageUrl} alt={title} width={800} height={500} quality='50' layout='responsive' objectPosition='center' objectFit="cover"/></div>
                <div className='item'>
                    <div>
                        <h4>{title}</h4>
                        <i><FaWindows /></i>
                        <small>
                            {genres
                                .slice(0, 3)
                                .map((item, index, array) => {
                                    if( index === array.length - 1){
                                        return item.value
                                    } else return item.value + ', ' 
                            })}
                        </small>
                    </div>
                    <div>
                        <div>-10%</div>
                        <div>
                            <p>${basePrice}</p>
                            <p>${basePrice}</p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Tabs
