import { dateToJsonLocal, getUserWithUsername } from "@lib/firebase";

export async function getServerSideProps({ query: urlQuery }) {
    const { username } = urlQuery;

    const userDoc = await getUserWithUsername(username);

    // If no user, short circuit to 404 page
    if (!userDoc) { return {notFound: true,}; }

    // JSON serializable data
    let user = null;

    if (userDoc) {
        user = dateToJsonLocal(userDoc);
    }

    return {
        props: { user }, // will be passed to the page component as props
    };
}

const index = ({user}) => {
    return (
        <div>
            Enter
        </div>
    );
}

export default index;