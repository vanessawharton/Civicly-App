const subcategoriesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SUBCATEGORIES':
            return action.payload;
        default:
            return state;
    }
}


export default subcategoriesReducer;