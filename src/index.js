var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var App = require('./components/app');

var Redux = require('redux');
var combineReducers = require('redux').combineReducers;
var applyMiddleware = require('redux').applyMiddleware;
var logger = require('redux-logger').createLogger;

var addAction = {
    type: 'ADD',
    payload: 150
};

var subtractAction = {
    type: 'SUBTRACT',
    payload: 300
}

var mathReducer = function(state, aciton){
    if(state == null){
        state = {
            result: 20,
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

export var store = Redux.createStore(combineReducers({math: mathReducer}), {}, applyMiddleware(logger()));

store.dispatch(addAction);

store.dispatch(subtractAction);

store.subscribe(function(){
    return console.log('STATE UPDATED', store.getState());
});


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('app')
);
