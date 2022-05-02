export const toTop = () => window.scrollTo(0, 0)

export function sliderControlClass(index, sliderIndex, length){
    let position = 'nextSlide'
    if (index === sliderIndex) position = 'activeSlide'
    if (index === sliderIndex - 1 || (sliderIndex === 0 && index === length - 1)) position = 'lastSlide'

    return position
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getCrumbList(router){
    const urlArray = router.asPath.split("?")[0].split("/").filter(v => v.length > 0)
    const crumbList = urlArray.map((subPath, index) => {
        const href = "/" + urlArray.slice(0, index + 1).join("/");
        const title = subPath.charAt(0).toUpperCase() + subPath.slice(1)
        return { href, title }
    })
    return crumbList
}

export function truncateString(string, limit) {
    if (string.length > limit) {
        return string.substring(0, limit) + "..."
    } else {
        return string
    }
}