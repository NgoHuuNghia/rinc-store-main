import React from 'react'

const DetailAgeRating = ({esrb_rating, ass}) => {
    const returnAgeRating = () => {
        if(!esrb_rating) 'There is no age rating yet'
        if(esrb_rating.slug === 'adults-only') esrb_rating.name + ' 18+'
        if(esrb_rating.slug === 'mature') esrb_rating.name + ' 17+'
        if(esrb_rating.slug === 'teen') esrb_rating.name + ' 13+'
        if(esrb_rating.slug === 'everyone-10-plus') esrb_rating.name
    }
    return (
        <p>{returnAgeRating()}</p>
    )
}

export default DetailAgeRating
