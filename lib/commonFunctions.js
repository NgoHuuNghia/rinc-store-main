export const toTop = () => window.scrollTo(0, 0)

export function sliderControlClass(index, sliderIndex, length){
    let position = 'nextSlide'
    if (index === sliderIndex) position = 'activeSlide'
    if (index === sliderIndex - 1 || (sliderIndex === 0 && index === length - 1)) position = 'lastSlide'

    return position
}