import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import mathReducer from "./reducers/mathReducer";

export const store = createStore(combineReducers(
        {mathReducer}
    ),
    {}, 
    applyMiddleware(createLogger())
);

store.dispatch({type: 'ADD', playload: 800});

