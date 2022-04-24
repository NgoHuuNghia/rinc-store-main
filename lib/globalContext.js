import { signInAnonymously } from 'firebase/auth'
import React, { useContext, useReducer, useEffect, useCallback, createContext } from 'react'
import reducer from './reducer'

// see rawg api doc for more info on how to use it https://api.rawg.io/docs/#operation/games_list
const AppContext = createContext()

const initialState = {
    test: 'ass',
    overlay: false,
}

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    //? dispatches goes here

    const setOverlay = () => dispatch({type: 'SET_OVERLAY'})

    return (
        <AppContext.Provider
            value={{
                ...state,
                //$ reducer's function here
                setOverlay,
            }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => useContext(AppContext)

//! user context
export const UserContext = createContext({
    user: null, 
    username: null,
    role: "signInAnonymously",
    shoppingCart: [],
})