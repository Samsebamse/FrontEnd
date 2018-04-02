export const mathReducer = (state = { result: 0, lastValues: []}, aciton) => {
    switch(aciton.type){
        case 'ADD':
            return {
                ...state,
                result: state.result + aciton.payload,
                lastValues: [...state.lastValues, state.result]
            };
            break;

        case 'SUBTRACT':
            return{
                ...state,
                result: state.result - aciton.payload,
                lastValues: [...state.lastValues, state.result]
            };
            break;

        case 'RESET':
            return{
                ...state,
                result: 0,
                lastValues: [...state.lastValues, 0]
            };
            break;
        default: state;
    }
    return state;
}