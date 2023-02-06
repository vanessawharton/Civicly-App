const ticketCount = (state = [], action) => {
    switch (action.type) {
        case 'SET_TICKET_COUNT':
            return action.payload;
        default:
            return state;
    }
}


export default ticketCount;