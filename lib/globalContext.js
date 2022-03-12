import React, { useContext, useReducer, useEffect, useCallback } from 'react'
import reducer from './reducer'

// see rawg api doc for more info on how to use it https://api.rawg.io/docs/#operation/games_list
const AppContext = React.createContext()

const initialState = {
    test: 'ass',
    overlay: false,
    userState: {
        user: null, 
        username: null,
    },
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