
import path from 'path';
import App from '~/modules/home/App';
import { Provider } from 'mobx-react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import axios from 'axios';

import RegStore from '~/stores/Reg';
import DialogStore from '~/stores/Dialog';

import ejsRender from './ejs-render';

function render(currMod, cf) {
    let app = Object.create(null);
    cf.html = renderToString(
        <Provider reg={RegStore} dialog={DialogStore}>
            <App />
        </Provider>
    );

    cf.outputFile = cf.htmlFile;
    cf.params = {
        title: cf.title
    };
    ejsRender(cf);
}

export default render;