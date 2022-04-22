import React, { useEffect, useState } from 'react'
import { query, doc, limit, collection, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import {FaFilter, FaSearch, FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { useCollection } from 'react-firebase-hooks/firestore'
import toast from 'react-hot-toast'

import AdminUsersListItem from '@components/Admin/AdminUsersList';
import { dateToJsonLocal, firestore } from '@lib/firebase';
import { useSidebar, SidebarProvider } from '@lib/adminContext'
import Select from 'react-select'

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
        return {uid: doc.id, data: dateToJsonLocal(doc)}
    });
    
    return (
        <ul className='table col-6'>
            <li className='table-head'>uid</li>
            <li className='table-head'>Display name</li>
            <li className='table-head'>Username</li>
            <li className='table-head'>Joined at</li>
            <li className='table-head'>Roles</li>
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
        const {displayName, username, email, role} = userController

        if(displayName && username && email && role){
            await updateDoc(userRef, {//? firestore function to update
                displayName: displayName, //? capitalized 1st letter
                username: username,
                email: email,
                role: role,
                updatedAt: serverTimestamp(),
            })
            toast.success('User updated successfully!');
        } else toast.error("All field is required!")
    };
    const handleRole = (event) => {
        setUserController({...userController, role: event})
    }

    if(userController && Object?.keys(userController).length !== 0){
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
                    <Select className='selection'
                        value={(
                            userController?.role
                                ? userController.role
                                : user?.role || ''
                        )}
                        options={[
                            { value: "admin", label: "admin"},
                            { value: "customer", label: "customer"},
                            { value: "anonymous", label: "anonymous"},
                        ]}
                        onChange={handleRole}
                    />
                    <p>Role</p>
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
    } else return null
}

AdminGameList.getLayout = function getLayout(page) {
    return <SidebarProvider>{page}</SidebarProvider>
}