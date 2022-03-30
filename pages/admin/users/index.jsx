import React, { useEffect, useState } from 'react'
import { query, doc, setDoc, orderBy, limit, collection, serverTimestamp, getDocs, onSnapshot, getDoc, updateDoc } from 'firebase/firestore';
import {FaFilter, FaSearch, FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { useCollection, useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'
import kebabCase from 'lodash.kebabcase'
import toast from 'react-hot-toast'

import AdminUsersListItem from '@components/admin/AdminUsersList';
import { firestore } from '@lib/firebase';
import { useSidebar, SidebarProvider } from '@lib/adminContext'
import { gameDateToJsonLocal } from '@lib/firebase';
import AdminTerminal from '@components/admin/AdminTerminal';
import AdminFilter from '@components/admin/AdminFilter';
import AdminOverlay from '@components/admin/AdminOverlay';
import AdminHeader from '@components/admin/AdminHeader';
import { getUser } from '@lib/hooks';
import { useForm } from 'react-hook-form';


const AdminGameList = () => {
    const { setSidebar } = useSidebar()
    const [userDataState, setUserDataState] = useState({})
    
    async function getUser(uid) {
        const userRef = doc(firestore, "users", uid)
        const userSnap = (await getDoc(userRef))
        if(userSnap.exists){
            setUserDataState({userRef: userRef, user: {...{uid: uid}, ...userSnap.data()}})
        } else setUserDataState({})
    }
    return (
        <>
            <div className='title'>
                <h2>Users list</h2>
                <div>
                    <button onClick={() => setSidebar('filter')}><FaFilter id='filter-icon'/></button>
                </div>
            </div>
            <div className='list-container'>
                <UserEditor 
                    userRef={userDataState?.userRef} 
                    user={userDataState?.user}
                />
                <div className='search'>
                    <input type="text" placeholder='Search username or uid...' />
                    <button><FaSearch /></button>
                </div>
                <GameListTable getUser={getUser}/>
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

function GameListTable({getUser}) {
    const LIMIT = 15

    const ref = collection(firestore, 'users');
    const usersQuery = query(ref, limit(LIMIT))
    const [querySnapshot, loading] = useCollection(usersQuery) //? make a loader here another time

    const usersData = querySnapshot?.docs.map((doc) => {
        return {uid: doc.id, data: doc.data()}
    });
    
    return (
        <ul className='table'>
            <li className='table-head'>uid</li>
            <li className='table-head'>Display name</li>
            <li className='table-head'>Username</li>
            <li className='table-head'>Comments</li>
            <li className='table-head'>Reviews</li>
            <li className='table-head edit'>Edit</li>
            <li className='table-head delete'>Delete</li>
            {usersData && (usersData.map(user => <AdminUsersListItem key={user.uid} {...user} getUser={getUser}/>))}
        </ul>
    )
}

function UserEditor({userRef, user}) {
    const [userController, setUserController] = useState({})
    useEffect(() => {
        setUserController(user)
    }, [user])
    

    const updateUser = async (e) => {
        e.preventDefault()

        if(userController.displayName && userController.username && userController.email){
            await updateDoc(userRef, {//? firestore function to update
                displayName: userController.displayName, //? capitalized 1st letter
                username: userController.username,
                email: userController.email,
                // updatedAt: serverTimestamp(),
            })
            toast.success('User updated successfully!');
        } else toast.error("All field is required!")
    };

    return (
        <form onSubmit={updateUser} className='editor'>
            <label onClick={() => console.log(userController)} htmlFor="">
                <input 
                    disabled type="text"
                    value={user?.uid || ''}
                />
                <p>Uid</p>
            </label>
            <label htmlFor="">
                <input 
                    type="text"
                    value={(
                        userController?.displayName
                            ? userController.displayName
                            : user?.displayName || ''
                    )}
                    onChange={(e) => setUserController({...userController, displayName: e.target.value})}
                />
                <p>Display name</p>
            </label>
            <label htmlFor="">
                <input 
                    type="text"
                    value={(
                        userController?.username
                            ? userController.username
                            : user?.username || ''
                    )}
                    onChange={(e) => setUserController({...userController, username: e.target.value})}
                />
                <p>Username</p>
            </label>
            <label htmlFor="">
                <input 
                    type="email"
                    value={(
                        userController?.email
                            ? userController.email
                            : user?.email || ''
                    )}
                    onChange={(e) => setUserController({...userController, email: e.target.value})}
                />
                <p>Email</p>
            </label>
            <label htmlFor="">
                <input 
                    value={user?.provider || ''}
                    disabled type="text"
                />
                <p>Provider</p>
            </label>
            <button type="submit">
                Save Changes
            </button>
        </form>
    )
}

AdminGameList.getLayout = function getLayout(page) {
    return (
        <SidebarProvider>
            <section className='admin-container'>
                <AdminTerminal/>
                <div className='controls'>
                    <AdminHeader/>
                    {page}
                </div>
                <AdminFilter/>
                <AdminOverlay/>
            </section>
        </SidebarProvider>
    )
}