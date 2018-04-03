export const mathReducer = (state = { result: 0, lastValues: [] }, action) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, state.result]
            };
            break;

        case 'SUBTRACT':
            return{
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, state.result]
            };
            break;

        case 'RESET':
            return{
                ...state,
                result: action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        default: state;
    }
    return state;
}