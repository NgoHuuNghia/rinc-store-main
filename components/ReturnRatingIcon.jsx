import React from 'react'
import ratingIcons from '@public/icons/ratingIcons'

const returnRatingIcon = ({title, chart, percent}) => {
    let ratingIcon = null
    ratingIcons.forEach((icon) => {
        if(title === icon.title && chart && percent > 15) {ratingIcon = icon.url}
        if(title === icon.title && !chart) {ratingIcon = icon.url}
    })
    return ratingIcon ? <img src={ratingIcon} alt={title}/> : null
}

export default returnRatingIcon