const inboundsMarkers = (state = [], action) => {
    switch (action.type) {
        case 'SET_INBOUNDSMARKERS':
            return action.payload;
        default:
            return state;
    }
}


export default inboundsMarkers;