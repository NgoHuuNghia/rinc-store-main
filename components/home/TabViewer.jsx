// import { useGlobalContext } from '../../context'

// const TabViewer = ({name, short_screenshots, genres, id}) => {
const TabViewer = () => {
    // const { tabActives } = useGlobalContext()
    // const { tabCurrent } = tabActives

    return (
        //$ <div className={ tabCurrent === id ? 'active' : ''}>
        <div className={`active`}>
            {/*//$ <div>{name}</div> */}
            <div>{`test name`}</div>
            <div>
                <p>Overall user reviews</p>
                <p><span>Positive </span>(13)</p>
            </div>
            <div>
                {/*//$ {genres
                    .slice(0, 3)
                    .map((item) => {
                        return <a key={item.id} href='/'>{item.name}</a>
                })} */}
                <a href="/">genres name</a>
            </div>
                {/*//$ {short_screenshots
                    .slice(0, 4)
                    .map((item) => {
                        return <img key={item.id} src={item.image} alt={name}/>
                })} */}
                <img src={`https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`}/>
        </div>
    )
}

export default TabViewer
