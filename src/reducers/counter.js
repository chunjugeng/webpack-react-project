// import {createStore, applyMiddleware, combineReducers} from 'redux';
// import thunk from 'redux-thunk';

function counter(state= 0, action) {
    // const count = state.counter;
    switch (action.type) {
        case 'INCREMENT':
            return state +1;
        case 'DECREMENT':
            return state -1;
        default: 
            return state;
    }
}




export default counter;