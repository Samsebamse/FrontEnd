export const addAction = (integer) => {
    return { 
        type: 'ADD',
        payload: integer
    };   
}

export const subtractAction = (integer) => {
    return { 
        type: 'SUBTRACT',
        payload: integer
    };   
}

export const resetAction = () => {
    return { 
        type: 'RESET',
        payload: 0
    };   
}