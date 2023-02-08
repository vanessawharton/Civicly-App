const activeMarker = (state = null, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_MARKER':
            return action.payload;
        case 'UNSET_ACTIVE_MARKER':
            return null;
        default:
            return state;
    }
}


export default activeMarker;