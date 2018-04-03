export const navbarReducer = (state = { isCollapsed: true }, action) => {
    if(action.type === 'TOGGLE'){
        return {
            ...state,
            isCollapsed: !state.isCollapsed
        };
    }
    return state;
}