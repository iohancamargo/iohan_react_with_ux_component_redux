const INITIAL_STATE = [];

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'POPULATE_PRODUCTS':
            return action.products;
        case 'ADD_PRODUCTS':
            return [
                ...state,
                action.product
            ];
        case 'REMOVE_PRODUCTS':
            return state.filter((product) => product.id !== action.id);
        default:
            return state;
    }
}

export { productsReducer as default }