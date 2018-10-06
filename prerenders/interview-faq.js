
import path from 'path';
import App from '~/modules/interview-faq/App';
import { Provider } from 'mobx-react';

import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import ejsRender from './ejs-render';

function render(currMod, cf) {
    let app = Object.create(null);
    cf.html = renderToString(
        <Provider>
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