export const toTop = () => window.scrollTo(0, 0)

export function sliderControlClass(index, sliderIndex, length){
    let position = 'nextSlide'
    if (index === sliderIndex) position = 'activeSlide'
    if (index === sliderIndex - 1 || (sliderIndex === 0 && index === length - 1)) position = 'lastSlide'

    return position
}

/**`
 * Converts a firestore document to JSON specifically the createdAt and updatedAt 
 * @param  {DocumentData} doc
 */
export function gameDateToJsonLocal(doc){
    const data = doc.data();

    return {
        ...data,
        releasedAt: data.releasedAt.toDate().toLocaleString() ||  'loading',
        updatedAt: data.updatedAt.toDate().toLocaleString() || 'loading',
    }
}