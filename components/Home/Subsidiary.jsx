import Link from 'next/link';

import Tabs from '@components/Home/Tabs'
import TabViewer from '@components/Home/TabViewer'
import { useEffect, useState } from 'react';

const Subsidiary = ({tab1, tab2}) => {
    const [tabState, setTabState] = useState(1)
    const [activeTabItem, setActiveTabItem] = useState()
    const [activeTabViewer, setActiveTabViewer] = useState(tab1[0])

    useEffect(() => {
        if(tabState == 1) {
            setActiveTabItem(tab1[0].slug)
            setActiveTabViewer(tab1[0])
        }
        if(tabState == 2) {
            setActiveTabItem(tab2[0].slug)
            setActiveTabViewer(tab2[0])
        }
        if(tabState == 3) {
            setActiveTabItem(tab1[0].slug)
            setActiveTabViewer(tab1[0])
        }
        if(tabState == 4) {
            setActiveTabItem(tab2[0].slug)
            setActiveTabViewer(tab2[0])
        }
    }, [tabState, tab1, tab2])
    

    return (
        <div className='subsidiary-section'>
            <div className='subsidiary-container'>
                <div className='tab-selector'>
                    <button 
                        className={tabState == 1 ? 'active' : ''} 
                        onClick={() => setTabState(1)}
                    >
                        <p>Trending</p>
                    </button>
                    <button 
                        className={tabState == 2 ? 'active' : ''} 
                        onClick={() => setTabState(2)}
                    >
                        <p>Top news</p>
                    </button>
                    <button 
                        className={tabState == 3 ? 'active' : ''} 
                        onClick={() => setTabState(3)}
                    >
                        <p>Popular upcoming</p>
                    </button>
                    <button 
                        className={tabState == 4 ? 'active' : ''} 
                        onClick={() => setTabState(4)}
                    >
                        <p>Special</p>
                    </button>
                </div>
                <section className='tab-container'>
                    <div className='tab-list'>
                        <div>
                            <p>See more:  &nbsp;</p>
                            <Link href="/"><a> New releases</a></Link>
                        </div>
                        <div className={tabState == 1 ? 'active' : ''}>
                            {tab1.map((item) => {
                                return <Tabs key={item.slug} item={item} activeTabItem={activeTabItem} setActiveTabItem={setActiveTabItem} setActiveTabViewer={setActiveTabViewer}/>
                            })}
                        </div>
                        <div className={tabState == 2 ? 'active' : ''}>
                            {tab2.map((item) => {
                                return <Tabs key={item.slug} item={item} activeTabItem={activeTabItem} setActiveTabItem={setActiveTabItem} setActiveTabViewer={setActiveTabViewer}/>
                            })}
                        </div>
                        <div className={tabState == 3 ? 'active' : ''}>
                            {tab1.map((item) => {
                                return <Tabs key={item.slug} item={item} activeTabItem={activeTabItem} setActiveTabItem={setActiveTabItem} setActiveTabViewer={setActiveTabViewer}/>
                            })}
                        </div>
                        <div className={tabState == 4 ? 'active' : ''}>
                            {tab2.map((item) => {
                                return <Tabs key={item.slug} item={item} activeTabItem={activeTabItem} setActiveTabItem={setActiveTabItem} setActiveTabViewer={setActiveTabViewer}/>
                            })}
                        </div>
                    </div>
                    <div className="tab-viewer">
                        <TabViewer {...activeTabViewer}/>
                    </div>
                    {/* {activeTabViewer
                        && (
                            <div className="tab-viewer">
                                <TabViewer {...activeTabViewr}/>
                            </div>
                        )
                    } */}
                </section>
            </div>
            {/* under 200.000d */}
            {/*//todo Maybe a grid display here if we have the time wink wink */}
        </div>
    );
}

export default Subsidiary;