
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import about from '~/stores/about/reducer';
import App from './App';
import '~/styles/base.scss';


const store = createStore(about, applyMiddleware(thunk));

const rootEl = document.getElementById('root');
if (rootEl) {
    ReactDOM.render(
        <Provider store={store}>
          <App /> 
        </Provider>
    , rootEl);
}