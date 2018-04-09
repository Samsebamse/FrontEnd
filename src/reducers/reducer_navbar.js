export const navbarReducer = (state = { isOpen: false }, action) => {
    if(action.type === 'TOGGLE'){
        return {
            ...state,
            isOpen: !state.isOpen
        };
    }
    return state;
}