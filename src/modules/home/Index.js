
'use strict';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import home from '~/stores/home/reducer';
import App from './App';
import '~/styles/base.scss';

// window.devToolsExtension ? window.devToolsExtension : f=> f //chrome
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //fireFox

// action 创建只能返回action对象， 使用redux-thunk 中间件返回增强action创建函数
const store = createStore(home, applyMiddleware(thunk));
const rootEl = document.getElementById('root');

if (rootEl) {
    ReactDOM.render(
        <Provider store={store}>
          <App /> 
        </Provider>
    , rootEl);
}

// store.subscribe(render); ／/ 手写容器组件，不推荐使用， 因为法使用React-Redux带来的性能优化，而使用react-redux的connect()方法生成