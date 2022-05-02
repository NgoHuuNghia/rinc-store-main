import Image from "next/image";

const GameMainImage = ({mainUrl, slug}) => {
    return (
        <div>
            {mainUrl
                ? <Image src={mainUrl || '/nope-not-here.png'} alt={slug} width={850} height={500}/>
                : <p>No image yet ⭕</p>}
        </div>
    );
}

export default GameMainImage;