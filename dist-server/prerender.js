/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./prerender.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, author, license, devDependencies, dev, proxy, dependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"webpack-react-project\",\"version\":\"1.0.0\",\"description\":\"webpack react project\",\"main\":\"index.js\",\"scripts\":{\"test\":\"echo \\\"Error: no test specified\\\" && exit 1\",\"start\":\"webpack-dev-server --history-api-fallback --mode development\",\"build:server\":\"webpack --config webpack.server.config.js --mode development\",\"prerender\":\"yarn build:server && node ./dist-server/prerender\"},\"author\":\"Chunju Geng\",\"license\":\"ISC\",\"devDependencies\":{\"Promise\":\"^1.0.5\",\"autoprefixer\":\"^8.5.0\",\"axios\":\"^0.18.0\",\"babel-plugin-transform-decorators-legacy\":\"^1.3.4\",\"babel-plugin-transform-require-ignore\":\"^0.1.1\",\"babel-preset-react\":\"^6.24.1\",\"babel-preset-stage-0\":\"^6.24.1\",\"classnames\":\"^2.2.5\",\"css-loader\":\"^0.28.11\",\"dotenv-webpack\":\"^1.5.5\",\"ejs\":\"^2.6.1\",\"file-loader\":\"^2.0.0\",\"fs\":\"0.0.1-security\",\"fs-extra\":\"^6.0.1\",\"html-webpack-plugin\":\"^3.2.0\",\"mobx\":\"^4.3.0\",\"mobx-react\":\"^5.1.2\",\"node-sass\":\"^4.9.0\",\"path\":\"^0.12.7\",\"postcss-flexbugs-fixes\":\"^3.3.1\",\"postcss-loader\":\"^2.1.5\",\"promise\":\"^8.0.1\",\"qs\":\"^6.5.2\",\"react\":\"^16.3.2\",\"react-dom\":\"^16.3.2\",\"react-router\":\"^4.2.0\",\"react-router-dom\":\"^4.2.2\",\"sass-loader\":\"^7.0.3\",\"style-loader\":\"^0.21.0\",\"webpack\":\"^4.8.3\",\"webpack-cli\":\"^2.1.3\",\"webpack-dev-server\":\"^3.1.4\",\"webpack-node-externals\":\"^1.7.2\",\"yargs\":\"^11.0.0\"},\"dev\":{\"port\":3001},\"proxy\":{\"/auth-server\":{\"target\":\"https://auth-demo.dianrong.com\",\"changeOrigin\":true},\"/api\":{\"target\":\"https://www-demo.dianrong.com\",\"changeOrigin\":true}},\"dependencies\":{\"babel-loader\":\"^7.1.4\",\"clean-webpack-plugin\":\"^0.1.19\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./prerender.js":
/*!**********************!*\
  !*** ./prerender.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ejs */ \"ejs\");\n/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ejs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routerConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routerConfig */ \"./routerConfig.js\");\n/* harmony import */ var _routerConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routerConfig__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst outputFileName = 'index.html';\nconst srcRoot = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('./src');\nconst pageDir = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('./src/modules');\nlet mods = [];\nlet preRenderers = Object.create(null);\n\nfunction scanModules() {\n    let subDirs = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(pageDir);\n    for (let dir in _routerConfig__WEBPACK_IMPORTED_MODULE_5___default.a) {\n        if (fs__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(`./src/modules/${dir}`))) {\n            let prerenderDir = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(`./prerenders/${dir}.js`);\n            if (prerenderDir && _routerConfig__WEBPACK_IMPORTED_MODULE_5___default.a[dir]) {\n                mods.push(dir);\n                preRenderers[dir] = __webpack_require__(\"./prerenders sync recursive ^\\\\.\\\\/.*\\\\.js$\")(`./${dir}.js`).default;\n            }\n        }\n    }\n}\n\nbuild();\nfunction build() {\n    scanModules();\n    if (mods && mods.length) {\n        for (let currMod of mods) {\n            let moduleConfig = _routerConfig__WEBPACK_IMPORTED_MODULE_5___default.a[currMod];\n            let cf = {\n                title: moduleConfig.title,\n                tpl: path__WEBPACK_IMPORTED_MODULE_1___default.a.join(srcRoot, moduleConfig.tpl),\n                htmlFile: path__WEBPACK_IMPORTED_MODULE_1___default.a.join(pageDir, currMod, outputFileName)\n            };\n            renderModule(currMod, cf);\n        }\n    } else {\n        throw new Error(`can't find any module to build`);\n    }\n}\n\nfunction renderModule(currMod, cf) {\n    let renderer = preRenderers[currMod];\n    if (typeof renderer == 'function') {\n        renderer.apply(renderer, [currMod, cf]);\n    } else {\n        const error = `can't find module prerenderer: ${currMod}`;\n    }\n}\n\n//# sourceURL=webpack:///./prerender.js?");

/***/ }),

/***/ "./prerenders sync recursive ^\\.\\/.*\\.js$":
/*!**************************************!*\
  !*** ./prerenders sync ^\.\/.*\.js$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./about.js\": \"./prerenders/about.js\",\n\t\"./ejs-render.js\": \"./prerenders/ejs-render.js\",\n\t\"./home.js\": \"./prerenders/home.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./prerenders sync recursive ^\\\\.\\\\/.*\\\\.js$\";\n\n//# sourceURL=webpack:///./prerenders_sync_^\\.\\/.*\\.js$?");

/***/ }),

/***/ "./prerenders/about.js":
/*!*****************************!*\
  !*** ./prerenders/about.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_home_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/modules/home/App */ \"./src/modules/home/App.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _stores_Reg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/stores/Reg */ \"./src/stores/Reg.js\");\n/* harmony import */ var _stores_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/stores/Dialog */ \"./src/stores/Dialog.js\");\n/* harmony import */ var _ejs_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ejs-render */ \"./prerenders/ejs-render.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction render(currMod, cf) {\n    let app = Object.create(null);\n    cf.html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(React.createElement(\n        mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"],\n        { reg: _stores_Reg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], dialog: _stores_Dialog__WEBPACK_IMPORTED_MODULE_6__[\"default\"] },\n        React.createElement(_modules_home_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)\n    ));\n\n    cf.outputFile = cf.htmlFile;\n    cf.params = {\n        title: cf.title\n    };\n    Object(_ejs_render__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(cf);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./prerenders/about.js?");

/***/ }),

/***/ "./prerenders/ejs-render.js":
/*!**********************************!*\
  !*** ./prerenders/ejs-render.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ejsRender; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ejs */ \"ejs\");\n/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ejs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ejsRender(cf) {\n    ejs__WEBPACK_IMPORTED_MODULE_1___default.a.renderFile(cf.tpl, { title: cf.title, body: cf.html, params: cf.params }, (err, body) => {\n        if (err) {\n            throw err;\n        } else {\n            if (fs__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(cf.outputFile)) {\n                fs__WEBPACK_IMPORTED_MODULE_0___default.a.unlinkSync(cf.outputFile);\n            }\n            fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(cf.outputFile, body);\n        }\n    });\n}\n\n//# sourceURL=webpack:///./prerenders/ejs-render.js?");

/***/ }),

/***/ "./prerenders/home.js":
/*!****************************!*\
  !*** ./prerenders/home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_home_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/modules/home/App */ \"./src/modules/home/App.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _stores_Reg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/stores/Reg */ \"./src/stores/Reg.js\");\n/* harmony import */ var _stores_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/stores/Dialog */ \"./src/stores/Dialog.js\");\n/* harmony import */ var _ejs_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ejs-render */ \"./prerenders/ejs-render.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction render(currMod, cf) {\n    let app = Object.create(null);\n    cf.html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(React.createElement(\n        mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"],\n        { reg: _stores_Reg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], dialog: _stores_Dialog__WEBPACK_IMPORTED_MODULE_6__[\"default\"] },\n        React.createElement(_modules_home_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)\n    ));\n\n    cf.outputFile = cf.htmlFile;\n    cf.params = {\n        title: cf.title\n    };\n    Object(_ejs_render__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(cf);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./prerenders/home.js?");

/***/ }),

/***/ "./routerConfig.js":
/*!*************************!*\
  !*** ./routerConfig.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nmodule.exports = {\n    'home': {\n        outputDir: 'home',\n        // component: Home,\n        title: 'test home',\n        tpl: 'template.ejs',\n        entry: 'index.js'\n    },\n    'about': {\n        outputDir: 'about',\n        title: 'test about',\n        tpl: 'template.ejs',\n        entry: 'index.js'\n    }\n};\n\n//# sourceURL=webpack:///./routerConfig.js?");

/***/ }),

/***/ "./src/components/dialog/Dialog.js":
/*!*****************************************!*\
  !*** ./src/components/dialog/Dialog.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dialog; });\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\nvar _dec, _class;\n\n\n\n\nlet Dialog = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__[\"inject\"])('dialog'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__[\"observer\"])(_class = class Dialog extends React.Component {\n    render() {\n        let store = this.props.dialog;\n        let { isOpenDialog } = store.app;\n        return React.createElement(\n            'div',\n            { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('Dialog fade', {\n                    'in': isOpenDialog\n                }), style: { visibility: isOpenDialog ? 'visible' : 'hidden' }, onClick: store.closeDialog },\n            React.createElement(\n                'div',\n                { className: 'modal-dialog' },\n                React.createElement(\n                    'div',\n                    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('dialog-content'), onClick: store.disabledDefaultEvent },\n                    this.props.closeBtn && React.createElement(\n                        'button',\n                        { className: 'closeBtn', onClick: store.closeDialog },\n                        'x'\n                    ),\n                    this.props.children\n                )\n            )\n        );\n    }\n}) || _class) || _class);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/components/dialog/Dialog.js?");

/***/ }),

/***/ "./src/components/register/GtBtn.js":
/*!******************************************!*\
  !*** ./src/components/register/GtBtn.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GtBtn; });\nvar _class, _temp2;\n\nlet GtBtn = (_temp2 = _class = class GtBtn extends React.Component {\n    constructor(...args) {\n        var _temp;\n\n        return _temp = super(...args), this.state = {\n            smsText: '发送验证码',\n            countdown: 10,\n            countdowning: false\n        }, this.start = () => {\n            if (this.state.countdowning) return; //禁止连续点击\n            if (this.props.fetch) {\n                this.props.fetch();\n            }\n\n            if (this.props.ready) {\n                this.setState({ countdown: 10 }, () => this.countdown());\n            }\n        }, this.countdown = () => {\n            GtBtn.timeId = setInterval(() => {\n                if (this.state.countdown >= 1) {\n                    // -- this.state.countdown;\n                    // this.setState({countdown: this.state.countdown});\n                    this.setState(prev => {\n                        let count = --prev.countdown;\n                        return {\n                            countdown: count,\n                            countdowning: true\n                        };\n                    });\n                } else {\n                    clearInterval(GtBtn.timeId);\n                    this.setState({ countdown: '重新发送', countdowning: false });\n                }\n            }, 1000);\n        }, _temp;\n    }\n\n    componentWillReceiveProps(nextProps) {\n        if (!this.props.ready && nextProps.ready) {\n            this.countdown();\n        }\n    }\n    render() {\n        return React.createElement(\n            'button',\n            { name: 'send-verification-code-btn', disabled: this.props.disabled, onClick: this.start },\n            this.props.ready ? this.state.countdown : this.state.smsText\n        );\n    }\n}, _class.timeId = 0, _temp2);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/components/register/GtBtn.js?");

/***/ }),

/***/ "./src/components/register/Register.js":
/*!*********************************************!*\
  !*** ./src/components/register/Register.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Reg; });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GtBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GtBtn */ \"./src/components/register/GtBtn.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _dec, _class;\n\n\n\n\n\n\n\nlet Reg = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"inject\"])('reg'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"observer\"])(_class = class Reg extends React.Component {\n    constructor(...args) {\n        var _temp;\n\n        return _temp = super(...args), this.showGt = () => {\n            this.props.reg.showGt(this.props.loadGt, this.props.gt);\n        }, _temp;\n    }\n\n    componentWillReceiveProps(nextProps) {\n\n        if (!this.props.gt && nextProps.gt) {\n            nextProps.gt.appendTo(this.gtBox);\n        }\n    }\n    componentDidUpdate(prevProps) {\n        if (!prevProps.gtPassed && this.props.gtPassed) {\n            this.props.reg.fetchVerifyCode(this.props.gt, this.props.gtPassed);\n        }\n    }\n    render() {\n        let store = this.props.reg;\n        let {\n            phone,\n            error,\n            pwd,\n            smsCode,\n            isAcceptAgreement,\n            ready\n        } = store.app;\n        return React.createElement(\n            'div',\n            { className: 'Register' },\n            React.createElement(\n                'div',\n                { className: 'div-center' },\n                React.createElement(\n                    'div',\n                    { className: 'left' },\n                    'left'\n                ),\n                React.createElement(\n                    'div',\n                    { className: 'right' },\n                    'right'\n                )\n            ),\n            React.createElement(\n                'div',\n                null,\n                'ddede'\n            ),\n            React.createElement(\n                'div',\n                { className: 'boxCon' },\n                React.createElement(\n                    'form',\n                    { name: 'regForm', onSubmit: store.create },\n                    React.createElement(\n                        'div',\n                        null,\n                        'Register'\n                    ),\n                    React.createElement(\n                        'div',\n                        { className: 'group-input' },\n                        React.createElement('input', { type: 'text', name: 'phone', placeholder: '\\u8BF7\\u8F93\\u5165\\u624B\\u673A\\u53F7\\u7801', className: 'phone', onChange: store.onUIChange, value: phone }),\n                        React.createElement(_GtBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { fetch: this.showGt, disabled: !store.isPhoneValid, ready: ready })\n                    ),\n                    React.createElement(\n                        'div',\n                        { className: 'group-input' },\n                        React.createElement('input', { type: 'text', name: 'smsCode', className: 'sms-code', onChange: store.onUIChange, value: smsCode })\n                    ),\n                    React.createElement(\n                        'div',\n                        { className: 'group-input' },\n                        React.createElement('input', { type: 'password', name: 'pwd', className: 'pwd', onChange: store.onUIChange, value: pwd })\n                    ),\n                    React.createElement(\n                        'div',\n                        { className: 'accept-agreement' },\n                        React.createElement(\n                            'label',\n                            null,\n                            React.createElement('input', { type: 'checkbox', onChange: store.onUIChange, checked: isAcceptAgreement, name: 'isAcceptAgreement' }),\n                            React.createElement('span', { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('agreementBtn', {\n                                    \"checked\": isAcceptAgreement\n                                }) }),\n                            '\\xA0\\u6211\\u5DF2\\u9605\\u8BFB\\u5E76\\u540C\\u610F',\n                            React.createElement(\n                                'a',\n                                null,\n                                '\\u300Axx\\u534F\\u8BAE\\u300B'\n                            )\n                        )\n                    ),\n                    React.createElement(\n                        'div',\n                        { className: 'errMsg' },\n                        error\n                    ),\n                    React.createElement(\n                        'div',\n                        { className: 'group-input' },\n                        React.createElement(\n                            'button',\n                            { disabled: store.needRegBtnDisabled, type: 'submit' },\n                            '\\u6CE8\\u518C'\n                        )\n                    )\n                )\n            ),\n            React.createElement('div', { ref: ref => this.gtBox = ref, className: 'geetest-mask-box', style: { display: store.needShowGt ? 'block' : 'none' } })\n        );\n    }\n}) || _class) || _class);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/components/register/Register.js?");

/***/ }),

/***/ "./src/modules/home/App.js":
/*!*********************************!*\
  !*** ./src/modules/home/App.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _components_register_Register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/components/register/Register */ \"./src/components/register/Register.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/dialog/Dialog */ \"./src/components/dialog/Dialog.js\");\n/* harmony import */ var _utils_Gt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/Gt */ \"./src/utils/Gt.js\");\n/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Api */ \"./src/services/Api.js\");\nvar _dec, _class;\n\n\n\n\n\n\n\n\nlet Register = Object(_utils_Gt__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_components_register_Register__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _services_Api__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gtInit);\n\nlet Home = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"inject\"])('dialog'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"observer\"])(_class = class Home extends React.Component {\n    render() {\n        let dialogStore = this.props.dialog;\n        return React.createElement(\n            React.Fragment,\n            null,\n            React.createElement(\n                'div',\n                { className: 'wrapper Home' },\n                React.createElement(Register, null),\n                React.createElement(\n                    'div',\n                    { className: 'container dialog-com' },\n                    React.createElement(\n                        'div',\n                        { className: 'boxCon' },\n                        React.createElement(\n                            'p',\n                            { onClick: dialogStore.openDialog },\n                            'Dialog'\n                        ),\n                        React.createElement(\n                            _components_dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                            { closeBtn: true },\n                            React.createElement(\n                                'div',\n                                { className: 'modal-title' },\n                                React.createElement(\n                                    'h6',\n                                    null,\n                                    'title'\n                                )\n                            ),\n                            React.createElement(\n                                'div',\n                                { className: 'modal-content' },\n                                React.createElement(\n                                    'p',\n                                    null,\n                                    '\\u201C\\u70B9\\u878D\\u201D\\uFF08www.dianrong.com\\uFF0C\\u4EE5\\u4E0B\\u7B80\\u79F0\\u201C\\u672C\\u7F51\\u7AD9\\u201D\\uFF09\\u662F\\u4E0A\\u6D77\\u70B9\\u8363\\u91D1\\u878D\\u4FE1\\u606F\\u670D\\u52A1\\u6709\\u9650\\u8D23\\u4EFB\\u516C\\u53F8\\u4E3A\\u7528\\u6237\\u63D0\\u4F9B\\u51FA\\u501F\\u3001\\u878D\\u8D44\\u4FE1\\u606F\\u7684\\u5C45\\u95F4\\u670D\\u52A1\\u7F51\\u7EDC\\u5E73\\u53F0\\u3002\\u672C\\u58F0\\u660E\\u5305\\u542B\\u672C\\u7F51\\u7AD9\\u7684\\u4F7F\\u7528\\u6761\\u6B3E\\uFF0C\\u8BF7\\u60A8\\u5728\\u6D4F\\u89C8\\u548C\\u4F7F\\u7528\\u672C\\u7F51\\u7AD9\\u4E4B\\u524D\\uFF0C\\u52A1\\u5FC5\\u4ED4\\u7EC6\\u9605\\u8BFB\\u3002\\u60A8\\u5728\\u6D4F\\u89C8\\u548C\\u4F7F\\u7528\\u672C\\u7F51\\u7AD9\\u7684\\u540C\\u65F6\\uFF0C\\u89C6\\u4E3A\\u60A8\\u63A5\\u53D7\\u4EE5\\u4E0B\\u6761\\u6B3E\\u3002\\u4E0A\\u6D77\\u70B9\\u8363\\u91D1\\u878D\\u4FE1\\u606F\\u670D\\u52A1\\u6709\\u9650\\u8D23\\u4EFB\\u516C\\u53F8\\u5728\\u6CD5\\u5F8B\\u8BB8\\u53EF\\u7684\\u8303\\u56F4\\u5185\\u4EAB\\u6709\\u5BF9\\u672C\\u58F0\\u660E\\u8FDB\\u884C\\u89E3\\u91CA\\u3001\\u4FEE\\u8BA2\\u53CA\\u53D8\\u66F4\\u7684\\u6743\\u5229\\uFF1B'\n                                ),\n                                React.createElement(\n                                    'p',\n                                    null,\n                                    '1\\u3001\\u672C\\u7F51\\u7AD9\\u4EC5\\u63D0\\u4F9B\\u51FA\\u501F\\u3001\\u878D\\u8D44\\u4FE1\\u606F\\u7684\\u5C45\\u95F4\\u670D\\u52A1\\uFF0C\\u8BF7\\u60A8\\u52A1\\u5FC5\\u4ED4\\u7EC6\\u9605\\u8BFB\\u548C\\u4E86\\u89E3\\u672C\\u7F51\\u7AD9\\u5404\\u9879\\u8BF4\\u660E\\u6216\\u7EC6\\u5219\\uFF0C\\u8C28\\u614E\\u51FA\\u501F\\uFF0C\\u98CE\\u9669\\u81EA\\u8D1F\\u3002'\n                                ),\n                                React.createElement(\n                                    'p',\n                                    null,\n                                    '2\\u3001\\u672C\\u7F51\\u7AD9\\u627F\\u8BFA\\u4FDD\\u969C\\u7528\\u6237\\u4E2A\\u4EBA\\u9690\\u79C1\\uFF0C\\u539F\\u5219\\u4E0A\\u4E0D\\u5411\\u4EFB\\u4F55\\u7B2C\\u4E09\\u65B9\\u6CC4\\u9732\\u7528\\u6237\\u4E2A\\u4EBA\\u4FE1\\u606F\\u3002\\u4F46\\u5F53\\u53F8\\u6CD5\\u673A\\u5173\\u3001\\u76D1\\u7BA1\\u673A\\u6784\\u6216\\u5176\\u4ED6\\u653F\\u5E9C\\u90E8\\u95E8\\u4F9D\\u636E\\u6CD5\\u5F8B\\u7A0B\\u5E8F\\uFF0C\\u8981\\u6C42\\u672C\\u7F51\\u7AD9\\u63D0\\u4F9B\\u60A8\\u7684\\u4E2A\\u4EBA\\u4FE1\\u606F\\u65F6\\uFF0C\\u672C\\u7F51\\u7AD9\\u5C06\\u53CA\\u65F6\\u901A\\u77E5\\u7528\\u6237\\uFF0C\\u5E76\\u6839\\u636E\\u76F8\\u5173\\u90E8\\u95E8\\u7684\\u8981\\u6C42\\u63D0\\u4F9B\\u60A8\\u7684\\u76F8\\u5173\\u4FE1\\u606F\\u8D44\\u6599\\uFF1B'\n                                ),\n                                React.createElement(\n                                    'p',\n                                    null,\n                                    '3\\u3001\\u672C\\u7F51\\u7AD9\\u5EFA\\u8BAE\\u7528\\u6237\\u52A0\\u5F3A\\u81EA\\u6211\\u4FDD\\u62A4\\uFF0C\\u63D0\\u9AD8\\u9632\\u8303\\u610F\\u8BC6\\u3002\\u7531\\u4E8E\\u60A8\\u5BF9\\u7528\\u6237\\u8D26\\u53F7\\u3001\\u5BC6\\u7801\\u7B49\\u4E2A\\u4EBA\\u4FE1\\u606F\\u4FDD\\u7BA1\\u4E0D\\u5584\\u6216\\u544A\\u77E5\\u4ED6\\u4EBA\\u800C\\u5BFC\\u81F4\\u7684\\u4EFB\\u4F55\\u4E2A\\u4EBA\\u4FE1\\u606F\\u3001\\u8D26\\u6237\\u4FE1\\u606F\\u7684\\u6CC4\\u9732\\u53CA\\u635F\\u5931\\uFF0C\\u672C\\u7F51\\u7AD9\\u4E0D\\u627F\\u62C5\\u4EFB\\u4F55\\u8D23\\u4EFB\\uFF1B'\n                                )\n                            )\n                        )\n                    )\n                )\n            )\n        );\n    }\n}) || _class) || _class);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/modules/home/App.js?");

/***/ }),

/***/ "./src/services/Api.js":
/*!*****************************!*\
  !*** ./src/services/Api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils/request */ \"./src/utils/request.js\");\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/Object.assign({}, _package_json__WEBPACK_IMPORTED_MODULE_2__, {\"default\": _package_json__WEBPACK_IMPORTED_MODULE_2__});\n\n\n\nlet SSOEndpoint = _package_json__WEBPACK_IMPORTED_MODULE_2__.proxy['/auth-server'].target;\n\nlet Api = class Api {\n    gtInit() {\n        return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/v2/captcha/init');\n    }\n    fetchVerifyCode(params) {\n        return _utils_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/api/v2/users/fetchverifycode4register', params);\n    }\n\n    create(params) {\n        return _utils_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/api/v2/users/create', params).then(res => {\n            if (res && res.data.result.toLowerCase() === 'success') {\n                var data = {\n                    identity: params.regPhone,\n                    password: params.regPassword,\n                    encryptedParam: 'password',\n                    service: 'https://auth-demo.dianrong.com/api/v2/j_spring_cas_security_check'\n                };\n                return _utils_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/auth-server/api/users/login/pwd', data);\n            }\n        });\n    }\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Api());\n\n//# sourceURL=webpack:///./src/services/Api.js?");

/***/ }),

/***/ "./src/stores/Dialog.js":
/*!******************************!*\
  !*** ./src/stores/Dialog.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\nvar _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;\n\nfunction _initDefineProp(target, property, descriptor, context) {\n    if (!descriptor) return;\n    Object.defineProperty(target, property, {\n        enumerable: descriptor.enumerable,\n        configurable: descriptor.configurable,\n        writable: descriptor.writable,\n        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n    });\n}\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n    var desc = {};\n    Object['ke' + 'ys'](descriptor).forEach(function (key) {\n        desc[key] = descriptor[key];\n    });\n    desc.enumerable = !!desc.enumerable;\n    desc.configurable = !!desc.configurable;\n\n    if ('value' in desc || desc.initializer) {\n        desc.writable = true;\n    }\n\n    desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n        return decorator(target, property, desc) || desc;\n    }, desc);\n\n    if (context && desc.initializer !== void 0) {\n        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n        desc.initializer = undefined;\n    }\n\n    if (desc.initializer === void 0) {\n        Object['define' + 'Property'](target, property, desc);\n        desc = null;\n    }\n\n    return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new (_class = class Dialog {\n\n    constructor() {\n        _initDefineProp(this, 'app', _descriptor, this);\n\n        _initDefineProp(this, 'openDialog', _descriptor2, this);\n\n        this.disabledDefaultEvent = ev => {\n            let el = ev.currentTarget;\n            ev.stopPropagation();\n            return false;\n        };\n\n        _initDefineProp(this, 'closeDialog', _descriptor3, this);\n\n        Object.assign(this.app, this.app);\n    }\n\n}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'app', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n    enumerable: true,\n    initializer: function () {\n        return {\n            isOpenDialog: false\n        };\n    }\n}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'openDialog', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], {\n    enumerable: true,\n    initializer: function () {\n        return () => {\n            Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"runInAction\"])(() => {\n                this.app.isOpenDialog = true;\n            });\n        };\n    }\n}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'closeDialog', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], {\n    enumerable: true,\n    initializer: function () {\n        return ev => {\n            // ev.currentTarget.style.transition = 'all 0.6s ease-out';\n            Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"runInAction\"])(() => {\n                this.app.isOpenDialog = false;\n            });\n        };\n    }\n})), _class)());\n\n//# sourceURL=webpack:///./src/stores/Dialog.js?");

/***/ }),

/***/ "./src/stores/Reg.js":
/*!***************************!*\
  !*** ./src/stores/Reg.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/services/Api */ \"./src/services/Api.js\");\nvar _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;\n\nfunction _initDefineProp(target, property, descriptor, context) {\n    if (!descriptor) return;\n    Object.defineProperty(target, property, {\n        enumerable: descriptor.enumerable,\n        configurable: descriptor.configurable,\n        writable: descriptor.writable,\n        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n    });\n}\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n    var desc = {};\n    Object['ke' + 'ys'](descriptor).forEach(function (key) {\n        desc[key] = descriptor[key];\n    });\n    desc.enumerable = !!desc.enumerable;\n    desc.configurable = !!desc.configurable;\n\n    if ('value' in desc || desc.initializer) {\n        desc.writable = true;\n    }\n\n    desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n        return decorator(target, property, desc) || desc;\n    }, desc);\n\n    if (context && desc.initializer !== void 0) {\n        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n        desc.initializer = undefined;\n    }\n\n    if (desc.initializer === void 0) {\n        Object['define' + 'Property'](target, property, desc);\n        desc = null;\n    }\n\n    return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\n\n\n\n\nmobx__WEBPACK_IMPORTED_MODULE_0__[\"configure\"]({ enforceActions: true });\nconst phoneRex = /^(13|15|17|18)\\d{9}$/;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new (_class = class Reg {\n    constructor() {\n        _initDefineProp(this, 'app', _descriptor, this);\n\n        _initDefineProp(this, 'update', _descriptor2, this);\n\n        _initDefineProp(this, 'onUIChange', _descriptor3, this);\n\n        _initDefineProp(this, 'checkPhone', _descriptor4, this);\n\n        _initDefineProp(this, 'onChange', _descriptor5, this);\n\n        this.showGt = (loadGt, gtObj) => {\n            let self = this;\n            if (this.app.gtPassed) {\n                this.fetchVerifyCode(gtObj, self.app.gtPassed);\n                return;\n            }\n            //验证手机\n            if (!this.checkPhone()) {\n                Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"runInAction\"])(() => {\n                    this.app.error = '请输入正确的手机格式！';\n                    return;\n                });\n                this.showError();\n                return;\n            }\n            Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"runInAction\"])(() => {\n                this.app.gtNeeded = true;\n                if (loadGt) {\n                    loadGt();\n                }\n            });\n        };\n\n        _initDefineProp(this, 'updateGtState', _descriptor6, this);\n\n        this.fetchVerifyCode = (gtObj, gtPassed) => {\n            this.updateGtState(gtPassed);\n            if (gtPassed) {\n                let gt = gtObj.getValidate();\n                Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"runInAction\"])(() => {\n                    this.app.gt = gt;\n                });\n                return _services_Api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchVerifyCode({\n                    verifyCodeChannel: 'SMS',\n                    cellphone: this.app.phone,\n                    geetype: 'APP',\n                    geechallenge: gt.geetest_challenge,\n                    geevalidate: gt.geetest_validate,\n                    geeseccode: gt.geetest_seccode\n                }).then(res => {\n                    if (res.data.result.toLowerCase() === 'error') {\n                        Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"runInAction\"])(() => {\n                            this.app.error = res.data.errors[0];\n                            this.showError();\n                        });\n                    }\n                });\n            }\n        };\n\n        _initDefineProp(this, 'showError', _descriptor7, this);\n\n        this.create = e => {\n            e.preventDefault();\n            let gt = this.app.gt;\n            let params = {\n                regPhone: this.app.phone,\n                regPhoneResponseCode: this.app.smsCode,\n                regPassword: this.app.pwd,\n                regPasswordConfirm: this.app.pwd,\n                // referralName: urlParams.referralName || urlParams.referredBy || '',\n                // activityId: urlParams.activityId || '',\n                geechallenge: gt.geetest_challenge,\n                geevalidate: gt.geetest_validate,\n                geeseccode: gt.geetest_seccode,\n                geetype: 'WEB',\n                acceptAgreement: 'on'\n                // clientSourceType: 'MARKET_LANDING_PAGE',\n                // clientSourceType: cst\n            };\n            _services_Api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(params).then(res => {\n                if (res.data.result.toLowerCase() === 'error') {\n                    Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"runInAction\"])(() => {\n                        this.app.error = res.data.errors[0];\n                        this.showError();\n                    });\n                }\n            });\n        };\n\n        this.update(this.app);\n    }\n\n    get isPhoneValid() {\n        return this.app.phone;\n    }\n    get needShowGt() {\n        return this.app.gtNeeded && !this.app.gtPassed;\n    }\n\n    get needRegBtnDisabled() {\n        return !this.app.phone || !this.app.pwd || !this.app.smsCode || this.app.error || !this.app.isAcceptAgreement;\n    }\n\n}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'app', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n    enumerable: true,\n    initializer: function () {\n        return {\n            phone: '',\n            pwd: '1212wq',\n            smsCode: '',\n            isAcceptAgreement: false,\n            error: '',\n            isDisabledValidCode: false,\n            gtNeeded: false,\n            gtPassed: false,\n            gt: null,\n            ready: false\n        };\n    }\n}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'update', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], {\n    enumerable: true,\n    initializer: function () {\n        return app => {\n            Object.assign(this.app, app);\n        };\n    }\n}), _applyDecoratedDescriptor(_class.prototype, 'isPhoneValid', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"computed\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'isPhoneValid'), _class.prototype), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'onUIChange', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], {\n    enumerable: true,\n    initializer: function () {\n        return e => {\n            const target = e.target;\n            const isBoolean = target.type === 'checkbox' || target.type === 'radio';\n            const value = isBoolean ? target.checked : target.value;\n            this.app[target.name] = value;\n        };\n    }\n}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'checkPhone', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], {\n    enumerable: true,\n    initializer: function () {\n        return e => {\n            return phoneRex.test(this.app.phone) ? true : false;\n        };\n    }\n}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'onChange', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], {\n    enumerable: true,\n    initializer: function () {\n        return () => {\n            const target = e.target;\n            const isBoolean = target.type === 'checkbox' || target.type === 'radio';\n            const value = isBoolean ? target.checked : target.value;\n            this.app[target.name] = name;\n        };\n    }\n}), _applyDecoratedDescriptor(_class.prototype, 'needShowGt', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"computed\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'needShowGt'), _class.prototype), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'updateGtState', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], {\n    enumerable: true,\n    initializer: function () {\n        return gtPassed => {\n            Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"runInAction\"])(() => {\n                this.app.gtPassed = gtPassed;\n                this.app.ready = gtPassed;\n            });\n        };\n    }\n}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'showError', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], {\n    enumerable: true,\n    initializer: function () {\n        return () => {\n            setTimeout(() => {\n                Object(mobx__WEBPACK_IMPORTED_MODULE_0__[\"runInAction\"])(() => {\n                    this.app.error = '';\n                });\n            }, 1000);\n        };\n    }\n}), _applyDecoratedDescriptor(_class.prototype, 'needRegBtnDisabled', [mobx__WEBPACK_IMPORTED_MODULE_0__[\"computed\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'needRegBtnDisabled'), _class.prototype)), _class)());\n\n//# sourceURL=webpack:///./src/stores/Reg.js?");

/***/ }),

/***/ "./src/utils/Gt.js":
/*!*************************!*\
  !*** ./src/utils/Gt.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (WrapComponent, initGt) {\n    return class Gt extends React.Component {\n        constructor() {\n            super();\n\n            this.handleGt = captchaObj => {\n                this.setState({ gt: captchaObj });\n                captchaObj.onSuccess(() => {\n                    this.setState({ gtPassed: true });\n                });\n                captchaObj.onRefresh(() => {\n                    this.setState({ gtPassed: false });\n                });\n                captchaObj.onReady(() => {\n                    this.setState({ gtLoaded: true });\n                });\n            };\n\n            this.initDone = res => {\n                let data = res.data.content.geetest;\n                console.log(data, 'date');\n                if (false) {}\n            };\n\n            this.loadGt = e => {\n                if (initGt) {\n                    initGt().then(this.initDone);\n                }\n            };\n\n            this.state = {\n                gt: null,\n                gtLoaded: false,\n                gtPassed: false\n            };\n        }\n\n        render() {\n            return React.createElement(WrapComponent, _extends({ loadGt: this.loadGt }, this.state, this.props));\n        }\n    };\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/utils/Gt.js?");

/***/ }),

/***/ "./src/utils/request.js":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n    withCredentials: true,\n    transformRequest: [function (params) {\n        params = qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params);\n        return params;\n    }],\n    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n//# sourceURL=webpack:///./src/utils/request.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ejs\");\n\n//# sourceURL=webpack:///external_%22ejs%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx\");\n\n//# sourceURL=webpack:///external_%22mobx%22?");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-react\");\n\n//# sourceURL=webpack:///external_%22mobx-react%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"qs\");\n\n//# sourceURL=webpack:///external_%22qs%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });