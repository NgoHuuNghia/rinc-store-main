import { dateToJsonLocal, firestore } from "@lib/firebase";
import { collection, orderBy, query, where, limit, getDocs } from "firebase/firestore";

export async function getServerSideProps(){
    // allow us to just ref any sub groups no mater how nested
    const ref = collection(firestore, 'games');
    const gamesDescQuery = query(
        ref,
        where('published', '==', true),
        orderBy('releasedAt', 'desc'),
        limit(10),
    )

    const gamesDesc = (await getDocs(gamesDescQuery)).docs.map((doc) => dateToJsonLocal(doc));

    return {
        props: { gamesDesc }, // will be passed to the page component as props
    };
}

const game = ({gamesDesc}) => {
    return (
        <div onClick={() => console.log(gamesDesc)}>
            Enter
        </div>
    );
}

export default game;