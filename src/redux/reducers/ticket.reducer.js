const ticketReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_TICKETS':
            return action.payload;
        case 'SET_ALL_TICKETS':
            return action.payload;
        default:
            return state;
    }
}


export default ticketReducer;