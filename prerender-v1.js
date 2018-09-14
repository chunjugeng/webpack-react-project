import fs from 'fs';
import path from 'path';
import {renderToStaticMarkup, renderToString} from 'react-dom/server';
import {Provider} from 'mobx-react';
import ejs from 'ejs';
import config from './routerConfig';

import Home from './src/modules/home/App';
import About from './src/modules/about/App';
import RegStore from './src/stores/Reg';
import DialogStore from './src/stores/Dialog';
const outputFileName = 'index.html';
const srcRoot = path.resolve(__dirname, './src');
const pageDir = path.resolve('./src/modules');
let mods = [];

function scanModules() {
    let subDirs = fs.readdirSync(pageDir);
    subDirs.forEach(dir=> {
        if (config[dir]) {
            mods.push(dir);
        }
    });
}

let coms = {
    'home': Home,
    'about': About
};

build();
function build() {
    scanModules();
    if (mods && mods.length) {
        mods.forEach(currMod => {
            let cf = config[currMod];
            let Com = coms[currMod];
            let html = renderToString(
                <Provider reg={RegStore} dialog={DialogStore}>
                    <Com/>
                </Provider>
            );
            let outputFile = path.join(pageDir, currMod, outputFileName);
            let params = {
                title: cf.title
            };
            ejs.renderFile(path.resolve('./src', cf.tpl), {title: cf.title, body: html, params: params}, (err, body)=> {
                if (err) {
                    throw err;
                } else {
                    if (fs.existsSync(outputFile)) {
                        fs.unlinkSync(outputFile);
                    }
                    fs.writeFileSync(outputFile, body);
                }
            });
        });
    } else {
        throw new Error(`can't find any module to build`);
    }
}