import Link from 'next/link';

import Tabs from '@components/Home/Tabs'
import TabViewer from '@components/Home/TabViewer'
import { useState } from 'react';

const Subsidiary = ({tab1, tab2}) => {
    const [tabState, setTabState] = useState(1)

    return (
        <div className='subsidiary-section'>
            <div className='subsidiary-container'>
                <div className='tab-selector'>
                    <button 
                        className={tabState == 1 && 'active'} 
                        onClick={() => setTabState(1)}
                    >
                        <p>Trending</p>
                    </button>
                    <button 
                        className={tabState == 2 && 'active'} 
                        onClick={() => setTabState(2)}
                    >
                        <p>Top news</p>
                    </button>
                    <button 
                        className={tabState == 3 && 'active'} 
                        onClick={() => setTabState(3)}
                    >
                        <p>Popular upcoming</p>
                    </button>
                    <button 
                        className={tabState == 4 && 'active'} 
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
                        {/* map here 10 times*/}
                        <div className={`active`}>
                            {tab1.map((item) => {
                                return <Tabs key={item.slug} {...item}/>
                            })}
                            {/* <Tabs/> */}
                        </div>
                        {/* //$ <div className={tabToggle === 'special' ? 'active' : ''}>
                            {featuredListRecent.map((item) => {
                                return <Tabs key={item.id} {...item} toggle={'special'}/>
                            })}
                        </div>
                        //$ <div className={tabToggle === 'recommended' ? 'active' : ''}>
                            {featuredListRecommended.map((item) => {
                                return <Tabs key={item.id} {...item} toggle={'recommended'}/>
                            })}
                        </div>
                        //$ <div className={tabToggle === 'sim' ? 'active' : ''}>
                            {featuredListSim.map((item) => {
                                return <Tabs key={item.id} {...item} toggle={'sim'}/>
                            })}
                        </div> */}
                    </div>
                    <div className="tab-viewer">
                        {/*//$ {tabFilter
                            .map((item) => {
                                return <TabViewer key={item.id} {...item}/>
                        })} */}
                        <TabViewer/>
                    </div>
                </section>
            </div>
            {/* under 200.000d */}
            {/*//todo Maybe a grid display here if we have the time wink wink */}
        </div>
    );
}

export default Subsidiary;