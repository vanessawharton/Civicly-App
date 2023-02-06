const upvotesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TICKET_UPVOTES':
            return action.payload;
        default:
            return state;
    }
}


export default upvotesReducer;