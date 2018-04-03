import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import { mathReducer } from "./reducers/reducer_math";
import { navbarReducer } from "./reducers/reducer_navbar";

export const store = createStore(combineReducers(
        {
            math: mathReducer, 
            toggle: navbarReducer
        }
    ),
    {}, 
    applyMiddleware(createLogger(), promise(), thunk)
);

