const reducer = (state, action) => {
    if (action.type === 'SET_OVERLAY') return {...state, overlay: !state.overlay}

    throw new Error('no matching type ' + Error)
}

export default reducer