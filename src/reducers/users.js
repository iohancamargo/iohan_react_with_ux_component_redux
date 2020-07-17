const INITIAL_STATE = [

];

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'POPULAR_USUARIOS':
            return action.users;
        case 'ADICIONAR_USUARIO':
            return [
                ...state,
                action.user
            ];
        case 'REMOVER_USER':
            return state.filter((user) => user.use_id !== action.use_id);
        default:
            return state;
    }
}

export { usersReducer as default }