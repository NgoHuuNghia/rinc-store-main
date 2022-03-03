import React, { useState, useContext, createContext } from 'react'

const SidebarContext = createContext()

export function useSidebar() {
    return useContext(SidebarContext);
}

export function SidebarProvider({ children }) {
    const [sidebar, setSidebar] = useState('');

    const sidebarUpdate = {
        sidebar,
        setSidebar
    };

    return (
        <SidebarContext.Provider value={sidebarUpdate}>
            {children}
        </SidebarContext.Provider>
    );
}
