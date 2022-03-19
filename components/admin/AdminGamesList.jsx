import React from 'react'
import {deleteDoc, doc} from 'firebase/firestore'
import {RiEditBoxFill, RiDeleteBack2Fill} from 'react-icons/ri'
import toast from 'react-hot-toast'
import Link from 'next/link'

import { firestore } from '@lib/firebase'
import { gameDateToJsonLocal } from '@lib/commonFunctions'

const AdminGamesList = ({game}) => {
    const { title, slug, ratings, reviewsCount, releasedAt } = game

    return (
        <>
            <li>{title}</li>
            <li>{slug}</li>
            <li>{releasedAt}</li>
            <li>{ratings}</li>
            <li>{reviewsCount}</li>
            <Link passHref href={`/admin/${slug}`}><li className='edit'><RiEditBoxFill /></li></Link>
            <DeleteGameButton slug={slug}/>
        </>
    )
}
export default AdminGamesList

function DeleteGameButton({ slug }) {
    const ref = doc(firestore, 'games', slug)

    const deletePost = async () => {
        const doIt = confirm('are you sure!');
        if (doIt) {
            await deleteDoc(ref);
            toast('post annihilated ', { icon: '🗑️' });
        }
    };

    return <li className='delete' onClick={deletePost}><RiDeleteBack2Fill /></li>
}