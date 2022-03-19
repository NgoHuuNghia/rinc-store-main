import React from 'react'
import Link from 'next/link'
// import { useGlobalContext } from '../../context'

const MoreLikeSeriesComponent = ({ name, id, background_image }) => {
    const {ToTop} = useGlobalContext()

    return (
        <Link to={`/Detail/${id}`} onClick={() => ToTop()}>
            <div>
                <div>
                    <img src={background_image} alt={name} />
                </div>
                <h4>{name}</h4>
            </div>
            <div>
                <p>-70%</p>
                <p>149.500₫</p>
            </div>
        </Link>
    )
}

export default MoreLikeSeriesComponent
