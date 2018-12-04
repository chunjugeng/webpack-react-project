import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import thunk from 'redux-thunk';
import ejsRender from './ejs-render';
import home from '~/stores/home/reducer';
import App from '~/modules/home/App';
                        
const store = createStore(home, applyMiddleware(thunk));

function render(currMod, cf) {
    let app = Object.create(null);
    cf.html = renderToString(
        <Provider store={store}>
            <App />     
        </Provider>
    );

    cf.outputFile = cf.htmlFile;
    cf.params = {
        title: cf.title,
        baiduMap: true
    };
    ejsRender(cf);
}

export default render;