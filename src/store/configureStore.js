/* Libs */
import { createStore, combineReducers } from 'redux';

/* Reducers */
import usersReducer from '../reducers/users';

export default () => {
    const store = createStore(
        combineReducers({
            users: usersReducer
        }),
    );

    return store;
};
