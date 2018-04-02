import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import { mathReducer } from "./reducers/mathReducer";

export const store = createStore(combineReducers(
        {math: mathReducer}
    ),
    {}, 
    applyMiddleware(createLogger(), promise(), thunk)
);

