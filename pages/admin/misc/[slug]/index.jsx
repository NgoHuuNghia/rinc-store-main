import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";
import { FaChevronLeft, FaChevronRight, FaFilter, FaSearch } from "react-icons/fa";
import { collection, doc, getDoc, limit, query, setDoc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

import AdminDataList from "@components/Admin/AdminDataList";
import { SidebarProvider, useSidebar } from "@lib/adminContext";
import { dateToJsonLocal, firestore } from "@lib/firebase";
import { capitalizeFirstLetter } from "@lib/commonFunctions";


const Misc = () => {
    const router = useRouter()
    const { setSidebar } = useSidebar()
    
    const [dataState, setDataState] = useState()
    const [defaultKeys, setDefaultKeys] = useState([])
    const current = router.asPath.substring(router.asPath.lastIndexOf('/') + 1)

    const LIMIT = 15
    const ref = collection(firestore, current);
    const currentQuery = query(ref, limit(LIMIT))
    const [currentSnapshot, loading] = useCollection(currentQuery) //? make a loader here another time

    const currentDatas = currentSnapshot?.docs.map((doc, index) => {
        return {id: doc.id, data: dateToJsonLocal(doc)}
    });
    useEffect(() => {
        if(currentDatas) setDefaultKeys(["id"].concat(Object.keys(currentDatas[0].data)))
    }, [currentSnapshot])
    useEffect(() => {
        setDataState()
        setDefaultKeys([])
    }, [router])
    
    
    async function getData(id) {
        const dataRef = doc(firestore, current, id)
        const dataSnap = (await getDoc(dataRef))
        if(dataSnap.exists){
            setDataState({dataRef: dataRef, data: {...{id: id}, ...dataSnap.data()}})
        } else setDataState()
    }

    return (
        <>
            <div className='title'>
                <h2>{capitalizeFirstLetter(current)} list</h2>
                <div>
                    <button onClick={() => setSidebar('filter')}><FaFilter id='filter-icon'/></button>
                </div>
            </div>
            <div className='list-container'>
                <DataEditor 
                    dataRef={dataState?.dataRef} 
                    data={dataState?.data}
                    current={current}
                    defaultKeys={defaultKeys}
                />
                <div className='search'>
                    <input type="text" placeholder='Search username or uid...' />
                    <button><FaSearch /></button>
                </div>
                <DataListTable 
                    currentDatas={currentDatas} 
                    getData={getData}
                    current={current}
                    defaultKeys={defaultKeys}
                />
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
export default Misc;

function DataEditor({dataRef, data, current, defaultKeys}) {
    const [dataController, setDataController] = useState()
    const [newDataController, setNewDataController] = useState({})
    useEffect(() => {
        if(data) {
            setDataController(data)
        }
        else {
            setDataController()

            let emptyObject = {}
            defaultKeys.forEach(key => {
                emptyObject[key] = ''
            })
            setNewDataController(emptyObject)
        }
    }, [data, defaultKeys])

    const updateData = async (e) => {
        e.preventDefault()

        if(Object.values(dataController).every(data => data !== null && data.length >= 1)){
            delete dataController.id
            await updateDoc(dataRef, dataController)
            setDataController()
            toast.success(`${current} update successfully!`)
        } else toast.error("All field is required!")
    };
    const setNewData = async (e) => {
        e.preventDefault()

        if(Object.values(newDataController).every(data => data !== null && data.length >= 1)){
            const id = newDataController.id
            delete newDataController.id
            await setDoc(
                doc(firestore, current, id), 
                newDataController
            )

            const emptyObject = {}
            defaultKeys.forEach(key => {
                emptyObject[key] = ''
            })
            setNewDataController(emptyObject)
            toast.success(`New ${current} added successfully!`)
        } else toast.error("All field is required!")
    };

    if(dataController && Object?.keys(dataController).length >= 1){
        return (
            <form onSubmit={updateData} className='editor'>
                {Object.keys(dataController).map(head => {
                    return (
                        <label key={head} htmlFor="">
                            <input 
                                disabled={head === "id"} type="text"
                                placeholder={head === "id" ? dataController[head] : ''}
                                value={
                                    (head !== "id" && dataController[head] != null)
                                        ? dataController[head]
                                        : ""
                                }
                                onChange={(e) => setDataController({...dataController, [head]: e.target.value})}
                            />
                            <p>{head}</p>
                        </label>
                    )
                })}
                <button type="submit" className="edit">
                    Save Changes
                </button>
                <button
                    type="button"
                    className="cancel"
                    onClick={(e) => {
                        e.preventDefault()
                        setDataController()
                    }}
                >
                    Cancel edit
                </button>
            </form>
        )
    } else {
        return (
            <form onSubmit={setNewData} className='editor'>
                {Object.keys(newDataController).map(head => {
                    return (
                        <label key={head} htmlFor="">
                            <input 
                                type='text'
                                placeholder={`enter ${head}...`}
                                value={
                                    newDataController[head]
                                    // (head !== "id" && dataController[head] != null)
                                    //     ? dataController[head]
                                    //     : ""
                                }
                                onChange={(e) => setNewDataController({...newDataController, [head]: e.target.value})}
                            />
                            <p>{head}</p>
                        </label>
                    )
                })}
                <button type="submit">
                    Add new {current}
                </button>
            </form>
        )
    }
}

function DataListTable({ currentDatas, getData, current, defaultKeys }) {
    const [dynamicGrid, setDynamicGrid] = useState({})

    useEffect(() => {
        if (currentDatas) {
            setDynamicGrid({
                display: "grid",
                gridTemplateColumns: "1fr 1fr " + defaultKeys.reduce(
                    (sum) => sum += "1fr ", ''
                ),
            })
        }
    }, [currentDatas])
    
    return (
        <ul className={`table`} style={dynamicGrid}>
            {defaultKeys.map(head => {
                return <li key={head} className='table-head'>{head}</li>
            })}
            <li className='table-head edit'>Edit</li>
            <li className='table-head delete'>Delete</li>
            {currentDatas && (currentDatas.map(data => <AdminDataList key={data.id} data={data} current={current} getData={getData}/>))}
        </ul>
    )
}

Misc.getLayout = function getLayout(page) {
    return <SidebarProvider>{page}</SidebarProvider>
}