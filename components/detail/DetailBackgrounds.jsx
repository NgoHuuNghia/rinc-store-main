const DetailBackgrounds = ({mainImageUrl}) => {
    return (
        <>
            <div className='detail-background top' 
                style={{
                    backgroundImage:
                        `linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, #151515),
                        linear-gradient(to left, rgba(0, 0, 0, 0) 100%, #151515),
                        linear-gradient(to right, rgba(0, 0, 0, 0) 100%, #151515),
                        url(${mainImageUrl})`
            }}></div>
            <div className='detail-background bottom' 
                style={{
                    backgroundImage:
                        `linear-gradient(to top, rgba(0, 0, 0, 0) 60%, #151515),
                        linear-gradient(to left, rgba(0, 0, 0, 0) 100%, #151515),
                        linear-gradient(to right, rgba(0, 0, 0, 0) 100%, #151515),
                        url(${mainImageUrl})`
            }}></div>   
        </>
    )
}

export default DetailBackgrounds
