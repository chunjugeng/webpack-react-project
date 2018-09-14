
import { Provider } from 'mobx-react';
import App from './App';
import '~/styles/base.scss';

const rootEl = document.getElementById('root');
if (rootEl) {
    ReactDOM.render(
        <Provider>
          <App /> 
        </Provider>
    , rootEl);
}