import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '~/stores/counterActions';

// @connect(state => ({
//     counter: state
// }),ActionCreators)
// class Counter extends React.Component {
//     render() {
//         const {counter, increment, decrement, incrementIfOdd, incrementAsync} = this.props;
//         return(
//             <p>
//             Click: {counter} times 
//             {''}
//             <button onClick={increment}>&nbsp;&nbsp; + &nbsp;&nbsp; </button>
//             {''}
//             <button onClick={decrement}> &nbsp;&nbsp; - &nbsp;&nbsp; 经开区航海东路第五大街交叉口万锦城 </button>
//             {''}
//             <button onClick={incrementIfOdd}> increment if odd </button>
//             <button onClick={()=> incrementAsync()}> increment async </button>

//         </p>
//         );
//     }
// }
function Counter({counter, increment, decrement, incrementAsync, incrementIfOdd}) {
    return (
        <p>
            Click: {counter} times
            <button onClick={increment}>&nbsp;&nbsp; + &nbsp;&nbsp; </button>
            <button onClick={decrement}> &nbsp;&nbsp; - &nbsp;&nbsp; 经开区航海东路第五大街交叉口万锦城 </button>
            <button onClick={incrementIfOdd}> increment if odd </button>
            <button onClick={() => incrementAsync()}> increment async </button>

        </p>
    );
}

export default Counter;


// Counter.propTypes = {
//     // value: PropTypes.number.isRequired,
//     onIncrement: PropTypes.func.isRequired,
//     onDecrement: PropTypes.func,isRequired
// }



