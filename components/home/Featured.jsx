import React from 'react'
import Link from 'next/link'
// import { useGlobalContext } from '../../context'

// const Featured = ({id, background_image, name}) => {
const Featured = () => {
    //todo const { ToTop } = useGlobalContext()

    return (
        <>
            <div> 
                {/*//$ <Link to={`/Detail/${id}`} onClick={() => ToTop()}> */}
                <Link passHref href={`/`}>
                    {/*//$ <img src={background_image} alt="" /> */}
                    <a href=""><img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`} alt="test" /></a>
                </Link>
                {/*//$ <h5>{name}</h5> */}
                <h5>{`test name`}</h5>
                <div>
                    <div className='price-container price-2col'>
                        <div className='discount-percent'>-91%</div>
                        <div className='price'>
                            <span>588.000d</span>
                            <p>134.000d</p>
                        </div>
                    </div>
                </div>
            </div>
            <div> 
                {/*//$ <Link to={`/Detail/${id}`} onClick={() => ToTop()}> */}
                <Link passHref href={`/`}>
                    {/*//$ <img src={background_image} alt="" /> */}
                    <a href=""><img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`} alt="test" /></a>
                </Link>
                {/*//$ <h5>{name}</h5> */}
                <h5>{`test name`}</h5>
                <div>
                    <div className='price-container price-2col'>
                        <div className='discount-percent'>-91%</div>
                        <div className='price'>
                            <span>588.000d</span>
                            <p>134.000d</p>
                        </div>
                    </div>
                </div>
            </div>
            <div> 
                {/*//$ <Link to={`/Detail/${id}`} onClick={() => ToTop()}> */}
                <Link passHref href={`/`}>
                    {/*//$ <img src={background_image} alt="" /> */}
                    <a href=""><img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`} alt="test" /></a>
                </Link>
                {/*//$ <h5>{name}</h5> */}
                <h5>{`test name`}</h5>
                <div>
                    <div className='price-container price-2col'>
                        <div className='discount-percent'>-91%</div>
                        <div className='price'>
                            <span>588.000d</span>
                            <p>134.000d</p>
                        </div>
                    </div>
                </div>
            </div>
            <div> 
                {/*//$ <Link to={`/Detail/${id}`} onClick={() => ToTop()}> */}
                <Link passHref href={`/`}>
                    {/*//$ <img src={background_image} alt="" /> */}
                    <a href=""><img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`} alt="test" /></a>
                </Link>
                {/*//$ <h5>{name}</h5> */}
                <h5>{`test name`}</h5>
                <div>
                    <div className='price-container price-2col'>
                        <div className='discount-percent'>-91%</div>
                        <div className='price'>
                            <span>588.000d</span>
                            <p>134.000d</p>
                        </div>
                    </div>
                </div>
            </div>
            <div> 
                {/*//$ <Link to={`/Detail/${id}`} onClick={() => ToTop()}> */}
                <Link passHref href={`/`}>
                    {/*//$ <img src={background_image} alt="" /> */}
                    <a href=""><img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`} alt="test" /></a>
                </Link>
                {/*//$ <h5>{name}</h5> */}
                <h5>{`test name`}</h5>
                <div>
                    <div className='price-container price-2col'>
                        <div className='discount-percent'>-91%</div>
                        <div className='price'>
                            <span>588.000d</span>
                            <p>134.000d</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured
