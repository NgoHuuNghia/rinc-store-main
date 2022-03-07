import React from 'react'
import {deleteDoc, doc} from 'firebase/firestore'
import {RiEditBoxFill, RiDeleteBack2Fill} from 'react-icons/ri'
import toast from 'react-hot-toast'

import { firestore, gameDataToJSON } from '@lib/firebase'
import { useRouter } from 'next/router'

const AdminGamesList = ({game}) => {
    const data = gameDataToJSON(game)
    const { title, slug, ratings, reviewsCount } = data
    const releasedAt = typeof data?.releasedAt === 'number' ? new Date(data.releasedAt) : data.releasedAt.toDate()

    return (
        <>
            <li>{title}</li>
            <li>{slug}</li>
            <li>{releasedAt.toISOString()}</li>
            <li>{ratings}</li>
            <li>{reviewsCount}</li>
            <EditGameButton slug={slug}/>
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
function EditGameButton({ slug }) {
    const router = useRouter();

    const moveToEdit = () => {
        router.push(`/admin/${slug}`);
    }

    return <li className='edit' onClick={moveToEdit}><RiEditBoxFill /></li>
}