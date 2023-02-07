// Not sure if the state needs to be an Object or Array for this reducer. I figured it will be an object with multiple values. If someone could explain this I would appreciate it.
//                           ~~~V~~~
const ticketReducer = (state = [], action) => {
    switch (action.type) {
        // case 'SET_TICKET':
        //     return action.payload;
        case 'SET_ALL_TICKETS':
            return action.payload;
        default:
            return state;
    }
}


export default ticketReducer;