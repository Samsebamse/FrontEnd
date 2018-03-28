export default (state, aciton) => {
    if(state == null){
        state = {
            result: 0,
            lastValues: []
        };
    }
    switch(aciton.type){
        case 'ADD':
            return {
                ...state,
                result: state.result + aciton.payload,
                lastValues: [...state.lastValues, aciton.payload]
            };
            break;

        case 'SUBTRACT':
            return{
                ...state,
                result: state.result - aciton.payload,
                lastValues: [...state.lastValues, aciton.payload]
            };
            break;
        default: state;
    }
    return state;
}