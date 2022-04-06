import React from 'react'
import {deleteDoc, doc} from 'firebase/firestore'
import {RiEditBoxFill, RiDeleteBack2Fill} from 'react-icons/ri'
import toast from 'react-hot-toast'
import Link from 'next/link'

import { firestore } from '@lib/firebase'
import { gameDateToJsonLocal } from '@lib/commonFunctions'

const AdminDataList = ({data, current, getData}) => {
    return (
        <>
            <li>{data.id}</li>
            {Object.values(data.data).map(e => {
                return <li key={e}>{e}</li>
            })}
            <li onClick={() => getData(data.id)} className='edit'><RiEditBoxFill /></li>
            <DeleteDocButton id={data.id} current={current}/>
        </>
    )
}
export default AdminDataList

function DeleteDocButton({ id, current }) {

    const ref = doc(firestore, current, id)

    const deleteThisDoc = async () => {
        const doIt = confirm('are you sure!');
        if (doIt) {
            await deleteDoc(ref);
            toast(`${current} annihilated `, { icon: '🗑️' });
        }
    };

    return <li className='delete' onClick={deleteThisDoc}><RiDeleteBack2Fill /></li>
}