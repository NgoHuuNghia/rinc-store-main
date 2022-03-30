import React from 'react'
import {deleteDoc, doc} from 'firebase/firestore'
import {RiEditBoxFill, RiDeleteBack2Fill} from 'react-icons/ri'
import toast from 'react-hot-toast'
import Link from 'next/link'

import { firestore } from '@lib/firebase'
import { gameDateToJsonLocal } from '@lib/commonFunctions'

const AdminUsersListItem = ({uid, data, getUser}) => {
    const { displayName, username } = data

    return (
        <>
            <li>{uid}</li>
            <li>{displayName}</li>
            <li>{username}</li>
            <li>{``}</li>
            <li>{``}</li>
            <li onClick={() => getUser(uid)} className='edit'><RiEditBoxFill /></li>
            <DeleteUserButton uid={uid}/>
        </>
    )
}
export default AdminUsersListItem

function DeleteUserButton({ uid }) {
    const ref = doc(firestore, 'users', uid)

    const deleteUser = async () => {
        const doIt = confirm('are you sure!');
        if (doIt) {
            await deleteDoc(ref);
            toast('user annihilated ', { icon: '🗑️' });
        }
    };

    return <li className='delete' onClick={deleteUser}><RiDeleteBack2Fill /></li>
}