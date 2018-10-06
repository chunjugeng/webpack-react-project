import Counter from '~/commoms/Counter';
// import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '~/stores/counterActions';
// import {increment, decrement, incrementIfOdd, incrementAsync} from '~/stores/counterActions';

export default connect(state=> {
    return {counter: state}
    },ActionCreators
)(Counter); 

//connect支持多种写法：

//1.connect第一个参数是state的函数，该函数返回的对象将被合并到组件props中，第二个参数是多个action创建函数组成的对象，钙对象也会被合并到props中，而且可以直接运行，无需使用dispatch
// export default connect(state=> {
//     return {counter: state}
// },ActionCreators
// )(Counter); 

//2.
// export default connect(state=> ({
//     counter: state
// }),
// dispatch=>({
//     increment: ()=> dispatch(increment()),
//     decrement: ()=> dispatch(decrement()),
//     incrementIfOdd: ()=> dispatch(incrementIfOdd()),
//     incrementAsync: ()=> dispatch(incrementAsync())
// })
// )(Counter);

//3. connect的第二个参数使用了dispatch函数，函数的返回值使用了redux的bindActionCreators()减少样版代码
// export default connect(state=> ({
//     counter: state
// }),
// dispatch=> bindActionCreators(ActionCreators, dispatch)
// )(Counter); 

//4. connect第二个参数为空，此时connect()将会自动给组件传递一个dispatch，让组件自己使用dispatch发起action创建函数
// export default connect(state=> ({
//     counter: state
// })
// )(Counter); 
//组件
{/* <button onClick={() => dispatch(increment())}>&nbsp;&nbsp; + &nbsp;&nbsp; </button>
{ '' }
<button onClick={() => dispatch(decrement())}> &nbsp;&nbsp; - &nbsp;&nbsp; 经开区航海东路第五大街交叉口万锦城 </button>
{ '' }
<button onClick={() => dispatch(incrementIfOdd())}> increment if odd </button>
<button onClick={() => dispatch(incrementAsync())}> increment async </button> */}

//5.使用装饰器写法将connet()写在组件类声明上，如果用装饰器就不能使用无状态函数来编写组件了，因为装饰器需要添加在类声明上
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

