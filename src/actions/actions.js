export function addAction(integer){
    return { 
        type: 'ADD',
        payload: integer
    };
}

export function subtractAction(integer){
    return { 
        type: 'SUBTRACT',
        payload: integer
    };
}

