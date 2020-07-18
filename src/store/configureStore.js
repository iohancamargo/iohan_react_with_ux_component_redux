/* Libs */
import { createStore, combineReducers } from 'redux';

/* Reducers */
import productsReducer from '../reducers/products';

export default () => {
    const store = createStore(
        combineReducers({
            products: productsReducer
        }),
    );

    return store;
};
