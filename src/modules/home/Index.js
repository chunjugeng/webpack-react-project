
import { Provider } from 'mobx-react';
import RegStore from '~/stores/Reg';
import DialogStore from '~/stores/Dialog';
import App from './App';
import '~/styles/base.scss';

const rootEl = document.getElementById('root');
if (rootEl) {
    ReactDOM.render(
        <Provider reg={RegStore} dialog={DialogStore}>
          <App /> 
                 
        </Provider>
    , rootEl);
}