import React, { useEffect, useState } from 'react'
import { query, doc, setDoc, orderBy, limit, collection, serverTimestamp } from 'firebase/firestore';
import {FaFilter, FaSearch, FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'
import kebabCase from 'lodash.kebabcase'
import toast from 'react-hot-toast'

import AdminGamesListItem from '@components/Admin/AdminGamesList'
import { dateToJsonLocal, firestore } from '@lib/firebase';
import { useSidebar, SidebarProvider } from '@lib/adminContext'
import AdminTerminal from '@components/Admin/AdminTerminal';
import AdminFilter from '@components/Admin/AdminFilter';
import AdminOverlay from '@components/Admin/AdminOverlay';
import AdminHeader from '@components/Admin/AdminHeader';

const AdminGameList = () => {
    const { setSidebar } = useSidebar()

    return (
        <>
            <div className='title'>
                <h2>{`Games list`}</h2>
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
export default AdminGameList

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
            title: title.toLowerCase(),
            slug,
            metacritic: 0,
            esrbRating: 'teen',
            basePrice: 0,
            discount: 0,
            description: '',
            esrbRating: {},
            genres: [],
            platforms: [],
            stores: [],
            userRatings: {
                count: 0,
                score: 5,
                ratings: {
                    exceptional: {count: 0},
                    recommended: {count: 0},
                    meh: {count: 0},
                    skip: {count: 0},
                }
            },
            saleCount: 0,
            reviewsCount: 0,
            blogCount: 0,
            releasedAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            mainImageUrl: '',
            secondaryImageUrls: [],
            published: false,
        };

        await setDoc(ref, data);

        toast.success('Post created! directing to edit now.'); //? flavour text to tell that we succeed

        // Imperative navigation after doc is set
        router.push(`/admin/games/${slug}`);
    };

    return (
    <form onSubmit={createPost}>
        <input
            type="text"
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

    const gamesData = querySnapshot?.docs.map((doc) => dateToJsonLocal(doc));
    
    return (
        <ul className='table col-6'>
            <li className='table-head'>slug</li>
            <li className='table-head'>title</li>
            <li className='table-head'>released</li>
            <li className='table-head'>rating</li>
            <li className='table-head'>reviews</li>
            <li className='table-head edit'>Edit</li>
            <li className='table-head delete'>Delete</li>
            {gamesData && (gamesData.map(game => <AdminGamesListItem key={game.slug} game={game} />))}
        </ul>
    )
}

AdminGameList.getLayout = function getLayout(page) {
    return <SidebarProvider>{page}</SidebarProvider>
}