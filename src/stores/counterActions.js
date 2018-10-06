import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';



export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UNDO = 'UNDO';
export const REDO = 'REDO';
function increment() {
    return {type: 'INCREMENT'};
}

function decrement() {
    return {type: 'DECREMENT'};
}

function undo() {
    return {type: 'UNDO'};
}

function redo() {
    return {type: 'REDO'};
}

function incrementIfOdd() {
    return(dispatch, getState)=> {
        const value = getState();
        if (value % 2===0) {
            return;
        }

        dispatch(increment());
    }
}


function incrementAsync() {
    return dispatch=> {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    }
}

// function counter(state= 0, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state ++;
//         case 'DECREMENT':
//             return state --;
//         default: 
//             return state;
//     }
// }
// const store = createStore(counter, applyMiddleware(thunk));

export {increment, decrement, incrementIfOdd, incrementAsync, undo, redo} ;

// let currValue = store.getState();
// store.subscribe(()=> {
//     const previousValue = currValue;
//     currValue = store.getState();
//     console.log('pre state:', previousValue,  'next state:', currValue);
// });

// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(incrementIfOdd());
// store.dispatch(incrementAsync());

//上述代码做了这样几件事：
//编写了四个action创建函数，即increment(), decrement(), incrementIfOdd(), incrementAsync(), 分别是加一，减以，奇数加一，异步加一
//编写了一个名为counter的纯函数，用于更新state，
//使用createStore创建store，并激活Redux Thunk中间件；
//使用store.subscribe()监听变化，打印更新前后的state；
//使用store.dispatch()分别发起诗歌action创建函数