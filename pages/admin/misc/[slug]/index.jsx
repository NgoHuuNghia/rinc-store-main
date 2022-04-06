import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";
import { FaChevronLeft, FaChevronRight, FaFilter, FaSearch } from "react-icons/fa";
import { collection, doc, getDoc, limit, query, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

import AdminDataList from "@components/admin/AdminDataList";
import AdminFilter from "@components/admin/AdminFilter";
import AdminHeader from "@components/admin/AdminHeader";
import AdminOverlay from "@components/admin/AdminOverlay";
import AdminTerminal from "@components/admin/AdminTerminal";
import { SidebarProvider, useSidebar } from "@lib/adminContext";
import { dateToJsonLocal, firestore } from "@lib/firebase";
import { capitalizeFirstLetter } from "@lib/commonFunctions";

const genres = () => {
    const router = useRouter()
    const current = router.asPath.substring(router.asPath.lastIndexOf('/') + 1)

    const { setSidebar } = useSidebar()
    const [dataState, setDataState] = useState({})
    
    async function getData(id) {
        const dataRef = doc(firestore, current, id)
        const dataSnap = (await getDoc(dataRef))
        if(dataSnap.exists){
            setDataState({dataRef: dataRef, data: {...{id: id}, ...dataSnap.data()}})
        } else setDataState({})
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
                />
                <div className='search'>
                    <input type="text" placeholder='Search username or uid...' />
                    <button><FaSearch /></button>
                </div>
                <DataListTable current={current} getData={getData}/>
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
export default genres;

function DataListTable({current, getData}) {
    const LIMIT = 15
    const [tableHead, setTableHead] = useState([])
    const [dynamicGrid, setDynamicGrid] = useState({})

    const ref = collection(firestore, current);
    const currentQuery = query(ref, limit(LIMIT))
    const [currentSnapshot, loading] = useCollection(currentQuery) //? make a loader here another time

    const currentDatas = currentSnapshot?.docs.map((doc, index) => {
        return {id: doc.id, data: dateToJsonLocal(doc)}
    });
    useEffect(() => {
        if (currentDatas) {
            setTableHead(["id"].concat(Object.keys(currentDatas[0].data)))
            setDynamicGrid({
                display: "grid",
                gridTemplateColumns: "1fr 1fr " + ["id"].concat(Object.keys(currentDatas[0].data)).reduce(
                    (sum) => sum += "1fr ", ''
                ),
            })
        }
    }, [currentSnapshot])
    
    return (
        <ul className={`table`} style={dynamicGrid}>
            {tableHead.map(head => {
                return <li key={head} className='table-head'>{head}</li>
            })}
            <li className='table-head edit'>Edit</li>
            <li className='table-head delete'>Delete</li>
            {currentDatas && (currentDatas.map(data => <AdminDataList key={data.id} data={data} current={current} getData={getData}/>))}
        </ul>
    )
}

function DataEditor({dataRef, data}) {
    const [dataController, setDataController] = useState({})
    useEffect(() => {
        setDataController(data)
    }, [data])
    

    const updateData = async (e) => {
        e.preventDefault()

        if(Object.values(dataController).every(data => data !== null && data.length >= 1)){
            delete dataController.id
            await updateDoc(dataRef, dataController)
            setDataController({})
            toast.success('User updated successfully!')
        } else toast.error("All field is required!")
    };

    if(dataController && Object?.keys(dataController).length !== 0){
        return (
            <form onSubmit={updateData} className='editor'>
                {dataController && Object.keys(dataController).map(head => {
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
                <button type="submit">
                    Save Changes
                </button>
            </form>
        )
    } else return null
}

genres.getLayout = function getLayout(page) {
    return <SidebarProvider>{page}</SidebarProvider>
}