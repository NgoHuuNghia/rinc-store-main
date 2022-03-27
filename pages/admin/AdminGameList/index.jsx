import React, { useState } from 'react'
import { query, doc, setDoc, orderBy, limit, collection, serverTimestamp, getDocs } from 'firebase/firestore';
import {FaFilter, FaSearch, FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'
import kebabCase from 'lodash.kebabcase'
import toast from 'react-hot-toast'

import AdminGamesList from '@components/admin/AdminGamesList'
import { firestore } from '@lib/firebase';
import { useSidebar } from '@lib/adminContext'
import { gameDateToJsonLocal } from '@lib/firebase';
// import Loader from '@components/Loader'
// import PostFeed from '@components/PostFeed';
// import Metatags from '@components/Metatags';

const AdminDashboard = () => {
    const { setSidebar } = useSidebar()

    return (
        <>
            <div className='title'>
                <h2>Dash title</h2>
                <div>
                    <button onClick={() => setSidebar('filter')}><FaFilter id='filter-icon'/></button>
                </div>
            </div>
            <div className='list-container'>
                <CreateNewGame />
                <div className='search'>
                    <input type="text" placeholder='Search slug or id...' />
                    <button><FaSearch /></button>
                </div>
                <GameListTable />
                <div className='pagination'>
                    <ul>
                        <li><FaChevronLeft /></li>
                        <li className='current'>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li><FaChevronRight /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default AdminDashboard

function CreateNewGame() {
    const router = useRouter(); //? to change url with push later
    const [title, setTitle] = useState('');

    // Ensure slug is URL safe
    const slug = encodeURI(kebabCase(title)); //? compute the slug value with encodeURI is built in while kebabcase is imported

    // Validate length
    const isValid = title.length > 3 && title.length < 100;

    // Create a new post in firestore
    const createPost = async (e) => {
        e.preventDefault();

        //* since we don't want the doc.id to be automatically generated, make a ref to a doc that doesn't exist yet with value of slug
        const ref = doc(firestore, 'games', slug)

        //$ Give all fields a default value here to avoid bugs
        const data = {
            title: title.charAt(0).toUpperCase() + title.slice(1).toLowerCase(),
            slug,
            metacritic: 69,
            esrbRating: 'teen',
            ratings: 2,
            ratingsCount: 4,
            ratingsExceptional: 1,
            ratingsMeh: 1,
            ratingsRecommended: 1,
            ratingsSkip: 1,
            reviewsCount: 1,
            releasedAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            mainImageUrl: '',
            secondaryImageUrls: [],
            published: false,
        };

        await setDoc(ref, data);

        toast.success('Post created! directing to edit now.'); //? flavour text to tell that we succeed

        // Imperative navigation after doc is set
        router.push(`/admin/${slug}`);
    };

    return (
    <form onSubmit={createPost}>
        <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add game title"
        />
        <button type="submit" disabled={!isValid} className="btn-green">
            Create New Post
        </button>
    </form>
    )
}

function GameListTable() {
    const LIMIT = 15

    const ref = collection(firestore, 'games');
    const gamesQuery = query(ref, orderBy('releasedAt'), limit(LIMIT))
    const [querySnapshot, loading] = useCollection(gamesQuery) //? make a loader here another time

    const gamesData = querySnapshot?.docs.map((doc) => gameDateToJsonLocal(doc));
    
    return (
        <ul className='table'>
            <li className='table-head'>id</li>
            <li className='table-head'>slug</li>
            <li className='table-head'>released</li>
            <li className='table-head'>rating</li>
            <li className='table-head'>reviews</li>
            <li className='table-head edit'>Edit</li>
            <li className='table-head delete'>Delete</li>
            {gamesData && (gamesData.map(game => <AdminGamesList key={game.slug} game={game} />))}
        </ul>
    )
}