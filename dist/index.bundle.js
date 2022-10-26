/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --black-bg-color:#222;\n    --white-text-color: whitesmoke;\n    --white-border-color: white;\n    --border-thickness: 2px;\n    --border-radius: 10px;\n}\n\nbody {\n    font-size: 1.1rem;\n    background-color: var(--black-bg-color);\n    color: var(--white-text-color);\n\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\nheader {\n    width: 100%;\n    padding: 0.5em 0.8em;\n    background-color: inherit;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n}\n\nmain {\n    margin-top: 58px;\n    display: flex;\n    flex-direction: column;\n    width: inherit;\n    gap: 20px;\n}\n\n#buttonFormContainer {           /* div inside of main which containes the button for the creation of list and tasks*/\n    display: grid;\n    place-content: center;\n    padding: 0.5em 0.8em;\n    width: 100%;\n    grid-template-columns: 0.4fr;\n}\n\n#listContainer {                 /* div inside of the main which contains the task lists*/\n    display: flex; \n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 15px;\n}\n\n#addTaskButton {                  /* button at the top which create the form element to make list and the task*/\n    background-color: inherit;\n    color: inherit;\n    padding: 0.5em 0.8em;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    font-size: 0.85em;\n    text-align: left;\n    width: 1fr;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    max-height: 20em;\n    padding: 0 0.8em;\n    overflow: hidden auto;\n    position: relative;\n}\n\n#formTitleDiv > input,\nform > #taskListItemContainer > div > input {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    font-size: 0.85em;\n    color: var(--white-text-color);\n    padding: 0.2em 0.5em;\n}\n\n#formTitleDiv {\n    position: sticky;\n    top: 0px;\n    background-color: var(--black-bg-color);\n    padding: 0.4em 0;\n    z-index: 2;\n    display: flex;\n    /* position: relative; */\n}\n\n#formTitleDiv > input {\n    flex-grow: 1;\n    font-size: 1em;\n    word-wrap: break-word;\n    word-break: break-all;\n    height:fit-content;\n}\n\nform > #taskListItemContainer > div > img {\n    width: 18px;\n    padding: 0.05em;\n}\n\nform > #taskListItemContainer > div > img:hover {\n    background-color: #333;\n}\n\n/* div which contains the various tasks in the form*/\n#taskListItemContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n /* div in which the plus and the text box to add list item reside*/\n#addTaskListItem,\n.taskListItem { \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-items: center;\n    padding: 0.2em 0.5em;\n    gap: 0.2em;\n    position: relative;\n}\n\n.taskListItem > input[type='text'] {\n    flex-grow: 1;\n}\n\n.taskListItem > input[type='checkbox'] {\n    position: relative;\n    z-index: 1; /*check box cannot be checked without z index set 0 and z index of title and the close button div needs to be set to 2 to avoid checkbox been on top of title on scroll*/\n    /* height: 0;\n    width: 0; */\n}\n\n.taskListItem > input[type='checkbox']::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 13px;\n    height: 13px;\n    background-color: var(--black-bg-color);\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: 2px;\n}\n\n.taskListItem > input[type='checkbox']:checked::before {\n    background-color: blue;\n}\n\n.taskListItem > input[type='date'] {\n    position: relative;\n    z-index: 1; /* without this the date picker was not working when clicked upon*/\n}\n\n.taskListItem:focus-within::after,\n#addTaskListItem:focus-within::after {\n    position: absolute;\n    content: '';\n    top: 0;\n    bottom: 0;\n    right: -0.8em;\n    left: -0.8em;\n    border-top: 2px solid var(--white-border-color);\n    border-bottom: 2px solid var(--white-border-color);\n}\n\n#formCloseButtonDiv {\n    display: flex;\n    justify-content: flex-end;\n    position: sticky; \n    z-index: 2;\n    padding: 0.4em 0;\n    bottom: 0;\n    background-color: var(--black-bg-color);\n} /*to make the close stay at button even when scrolled not wroking*/\n\n#formTitleDiv::before,\n#formCloseButtonDiv::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -0.8em;\n    right: -0.8em;\n    background-color: var(--black-bg-color);\n    z-index: -1;\n}\n\n#closeFormButton {\n    background-color: var(--black-bg-color);\n    border: none;\n    color: var(--white-text-color);\n    padding: 0.25em 0.8em;\n    border: var(--border-thickness) solid transparent;\n    border-radius: var(--border-radius);\n}\n\n#closeFormButton:hover {\n    background-color: #333; /* back ground color of the close form button on hover*/\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,8BAA8B;IAC9B,2BAA2B;IAC3B,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,uCAAuC;IACvC,8BAA8B;;IAE9B,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,MAAM;AACV;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,SAAS;AACb;;AAEA,iCAAiC,oFAAoF;IACjH,aAAa;IACb,qBAAqB;IACrB,oBAAoB;IACpB,WAAW;IACX,4BAA4B;AAChC;;AAEA,iCAAiC,wDAAwD;IACrF,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,2BAA2B;IAC3B,SAAS;AACb;;AAEA,kCAAkC,6EAA6E;IAC3G,yBAAyB;IACzB,cAAc;IACd,oBAAoB;IACpB,+DAA+D;IAC/D,mCAAmC;IACnC,iBAAiB;IACjB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,+DAA+D;IAC/D,mCAAmC;IACnC,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;;IAEI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,QAAQ;IACR,uCAAuC;IACvC,gBAAgB;IAChB,UAAU;IACV,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,qBAAqB;IACrB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA,oDAAoD;AACpD;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;CAEC,kEAAkE;AACnE;;IAEI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,qBAAqB;IACrB,oBAAoB;IACpB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU,EAAE,wKAAwK;IACpL;eACW;AACf;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,uCAAuC;IACvC,+DAA+D;IAC/D,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,UAAU,EAAE,kEAAkE;AAClF;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,SAAS;IACT,aAAa;IACb,YAAY;IACZ,+CAA+C;IAC/C,kDAAkD;AACtD;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,UAAU;IACV,gBAAgB;IAChB,SAAS;IACT,uCAAuC;AAC3C,EAAE,kEAAkE;;AAEpE;;IAEI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,YAAY;IACZ,aAAa;IACb,uCAAuC;IACvC,WAAW;AACf;;AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,8BAA8B;IAC9B,qBAAqB;IACrB,iDAAiD;IACjD,mCAAmC;AACvC;;AAEA;IACI,sBAAsB,EAAE,uDAAuD;AACnF","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --black-bg-color:#222;\n    --white-text-color: whitesmoke;\n    --white-border-color: white;\n    --border-thickness: 2px;\n    --border-radius: 10px;\n}\n\nbody {\n    font-size: 1.1rem;\n    background-color: var(--black-bg-color);\n    color: var(--white-text-color);\n\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\nheader {\n    width: 100%;\n    padding: 0.5em 0.8em;\n    background-color: inherit;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n}\n\nmain {\n    margin-top: 58px;\n    display: flex;\n    flex-direction: column;\n    width: inherit;\n    gap: 20px;\n}\n\n#buttonFormContainer {           /* div inside of main which containes the button for the creation of list and tasks*/\n    display: grid;\n    place-content: center;\n    padding: 0.5em 0.8em;\n    width: 100%;\n    grid-template-columns: 0.4fr;\n}\n\n#listContainer {                 /* div inside of the main which contains the task lists*/\n    display: flex; \n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 15px;\n}\n\n#addTaskButton {                  /* button at the top which create the form element to make list and the task*/\n    background-color: inherit;\n    color: inherit;\n    padding: 0.5em 0.8em;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    font-size: 0.85em;\n    text-align: left;\n    width: 1fr;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    max-height: 20em;\n    padding: 0 0.8em;\n    overflow: hidden auto;\n    position: relative;\n}\n\n#formTitleDiv > input,\nform > #taskListItemContainer > div > input {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    font-size: 0.85em;\n    color: var(--white-text-color);\n    padding: 0.2em 0.5em;\n}\n\n#formTitleDiv {\n    position: sticky;\n    top: 0px;\n    background-color: var(--black-bg-color);\n    padding: 0.4em 0;\n    z-index: 2;\n    display: flex;\n    /* position: relative; */\n}\n\n#formTitleDiv > input {\n    flex-grow: 1;\n    font-size: 1em;\n    word-wrap: break-word;\n    word-break: break-all;\n    height:fit-content;\n}\n\nform > #taskListItemContainer > div > img {\n    width: 18px;\n    padding: 0.05em;\n}\n\nform > #taskListItemContainer > div > img:hover {\n    background-color: #333;\n}\n\n/* div which contains the various tasks in the form*/\n#taskListItemContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n /* div in which the plus and the text box to add list item reside*/\n#addTaskListItem,\n.taskListItem { \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-items: center;\n    padding: 0.2em 0.5em;\n    gap: 0.2em;\n    position: relative;\n}\n\n.taskListItem > input[type='text'] {\n    flex-grow: 1;\n}\n\n.taskListItem > input[type='checkbox'] {\n    position: relative;\n    z-index: 1; /*check box cannot be checked without z index set 0 and z index of title and the close button div needs to be set to 2 to avoid checkbox been on top of title on scroll*/\n    /* height: 0;\n    width: 0; */\n}\n\n.taskListItem > input[type='checkbox']::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 13px;\n    height: 13px;\n    background-color: var(--black-bg-color);\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: 2px;\n}\n\n.taskListItem > input[type='checkbox']:checked::before {\n    background-color: blue;\n}\n\n.taskListItem > input[type='date'] {\n    position: relative;\n    z-index: 1; /* without this the date picker was not working when clicked upon*/\n}\n\n.taskListItem:focus-within::after,\n#addTaskListItem:focus-within::after {\n    position: absolute;\n    content: '';\n    top: 0;\n    bottom: 0;\n    right: -0.8em;\n    left: -0.8em;\n    border-top: 2px solid var(--white-border-color);\n    border-bottom: 2px solid var(--white-border-color);\n}\n\n#formCloseButtonDiv {\n    display: flex;\n    justify-content: flex-end;\n    position: sticky; \n    z-index: 2;\n    padding: 0.4em 0;\n    bottom: 0;\n    background-color: var(--black-bg-color);\n} /*to make the close stay at button even when scrolled not wroking*/\n\n#formTitleDiv::before,\n#formCloseButtonDiv::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -0.8em;\n    right: -0.8em;\n    background-color: var(--black-bg-color);\n    z-index: -1;\n}\n\n#closeFormButton {\n    background-color: var(--black-bg-color);\n    border: none;\n    color: var(--white-text-color);\n    padding: 0.25em 0.8em;\n    border: var(--border-thickness) solid transparent;\n    border-radius: var(--border-radius);\n}\n\n#closeFormButton:hover {\n    background-color: #333; /* back ground color of the close form button on hover*/\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/task_taskList_Data.js":
/*!*******************************************!*\
  !*** ./src/modules/task_taskList_Data.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ control)
/* harmony export */ });
function Task(title, dueDate, priority) {
    this.title = title;
    this.dueDate = dueDate;
    // this.priority = priority;
    this.completeStatus = false;
}

Task.prototype.markComplete = function() {
    this.completeStatus = true;
}

Task.prototype.isComplete = function() {
    return this.completeStatus;
}

function TaskList(title, index) {
    this.title = title;
    this.index = index;
    this.taskList = [];
}

TaskList.prototype.displayAll = function() {
    this.taskList.forEach(task => console.log(task));
    return 1;
}

TaskList.prototype.isComplete = function() {
    return this.taskList.every(task => task.isComplete);
}

const taskNTaskListManager = (function control() {
    let projects = [];
    let currentTaskList;
    
    // (function() {
    //     currentTaskList = new TaskList('default', projects.length);
    //     projects.push(currentTaskList);
    // })();

    function projectsLength() {
        return projects.length;
    }

    function createTask(title, dueDate) {
        // let title = prompt('Enter the title of task') || 'task' + currentTaskList.taskList.length;
        // let dueDate = prompt('Enter date in dd/mm/yy');
        // let priority = prompt('Enter priority') || 0;
        currentTaskList.taskList.push(new Task(title, dueDate));
    }

    function createTaskList(title) {
        currentTaskList = new TaskList(title, projects.length);
        projects.push(currentTaskList);
    }

    function displayCurrentTaskList() {
        console.log(currentTaskList.title);
        if(currentTaskList.taskList.length == 0) {
            return 0
        }
        currentTaskList.displayAll();
        return 1;
    }

    function displayAllProjects() {
        projects.forEach(taskList => console.log(taskList.title, taskList.index));
    }

    function markTaskComplete(index) {
        if(currentTaskList.taskList.length < index || !index || index == -1) {
            return 0;
        }
        currentTaskList.taskList[index].markComplete();
        return 1;
    }

    function switchCurrentTaskListTo(index) {
        if(projects.length < index || !index || index == -1) {
            return 0;
        }
        currentTaskList = projects[index];
        return 1;
    }

    function currentTaskListIsComplete() {
        if(currentTaskList.taskList.length == 0) {
            return 0;
        }
        return currentTaskList.isComplete();
    }

    return {
        projectsLength,
        createTask,
        createTaskList,
        displayCurrentTaskList,
        displayAllProjects,
        markTaskComplete,
        switchCurrentTaskListTo,
        currentTaskListIsComplete
    }
})();

function control(choice, object=null) {

    switch(choice) {
        case 1:
            taskNTaskListManager.createTaskList(object.title);
            object.value.forEach(val => taskNTaskListManager.createTask(val[0], val[1]));
            taskNTaskListManager.displayCurrentTaskList();
            break;
        default:
            console.log('Not a valid choice');
            break;
    }
}

/***/ }),

/***/ "./src/modules/ui_for_taskCreate.js":
/*!******************************************!*\
  !*** ./src/modules/ui_for_taskCreate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _task_taskList_Data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_taskList_Data.js */ "./src/modules/task_taskList_Data.js");
/* harmony import */ var _assests_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assests/plus.svg */ "./src/assests/plus.svg");
/* harmony import */ var _assests_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/close.svg */ "./src/assests/close.svg");
// create a function that createst the header section the main section and 
// the footer section.






const uiElements = (function() {
    const body = document.querySelector('body');

    const makeHeader = function() {
        let header = document.createElement('header');
        let h1 = document.createElement('h1');
        h1.textContent = 'Tasks';
        header.appendChild(h1);
        body.appendChild(header);
    }

    const makeMain = function() {
        let main = document.createElement('main');
        let addTaskButtonDiv = document.createElement('div');
        let listContainer = document.createElement('div');
        addTaskButtonDiv.setAttribute('id', 'buttonFormContainer');
        listContainer.setAttribute('id', 'listContainer');
        main.appendChild(addTaskButtonDiv);
        main.appendChild(listContainer);
        body.appendChild(main);
    }

    const createAddTaskButton = function() {
        let addTaskButtonDiv = document.getElementById('buttonFormContainer');
        let btn = document.createElement('button');
        btn.setAttribute('id', 'addTaskButton');
        btn.textContent = 'Take a Note...';
        btn.addEventListener('click', addTaskButtonClicked);
        addTaskButtonDiv.appendChild(btn);
    }

    function removeAddTaskButton(btn) {
        let addTaskButtonDiv = document.getElementById('buttonFormContainer');
        btn.removeEventListener('click', addTaskButtonClicked);
        addTaskButtonDiv.removeChild(btn);
    }

    function addTaskButtonClicked(event) {
        removeAddTaskButton(event.target);
        createTaskForm();
    }

    function createTaskForm() {
        let addTaskButtonDiv = document.getElementById('buttonFormContainer');
        let form = document.createElement('form');
        form.appendChild(createTaskFromTitle());
        let taskDivContainer = document.createElement('div');
        taskDivContainer.setAttribute('id', 'taskListItemContainer');
        taskDivContainer.appendChild(createAddTaskListItem());
        form.appendChild(taskDivContainer);
        form.appendChild(createCloseFormButton());
        addTaskButtonDiv.appendChild(form);
    }

    function createTaskFromTitle() {
        let titleDiv = document.createElement('div');
        titleDiv.setAttribute('id', 'formTitleDiv');
        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('placeholder', 'Title');
        titleDiv.appendChild(titleInput);
        return titleDiv;
    }

    function createAddTaskListItem() {
        let div = document.createElement('div');
        div.setAttribute('id', 'addTaskListItem');
        let plus = document.createElement('img');
        plus.setAttribute('src', _assests_plus_svg__WEBPACK_IMPORTED_MODULE_1__);
        plus.setAttribute('alt', 'plus sign');       
        let textBox = document.createElement('input');
        textBox.setAttribute('type', 'text');
        textBox.setAttribute('placeholder', 'List item');
        div.appendChild(plus);
        div.appendChild(textBox);
        textBox.addEventListener('input', textInTextBox);
        return div;
    }

    function makeListItem(taskDivContainer) {
        let div = document.getElementById('addTaskListItem');
        let idIndex = taskDivContainer.childNodes.length - 1;
        div.removeAttribute('id');
        div.setAttribute('data-taskIndex', ''+idIndex);
        div.setAttribute('class', 'taskListItem');
        let textBox = div.childNodes[1];
        textBox.removeEventListener('input', textInTextBox);
        textBox.removeAttribute('placeholder');
        textBox.addEventListener('keypress', function(event) {
            if(event.code == 'Enter' && Number(textBox.value) != 0) {
                enterPressedOnTaskListItem();
            }
        });
        div.removeChild(div.firstChild);
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        div.insertBefore(checkBox, div.firstChild);
        let dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('min', getCurrentDate());
        // dateInput.value = `${getCurrentDate()}`;
        div.appendChild(dateInput);
        let close = document.createElement('img');
        close.setAttribute('src', _assests_close_svg__WEBPACK_IMPORTED_MODULE_2__);
        close.setAttribute('alt', 'close sign');
        close.addEventListener('click', deleteTaskListItemButtonClicked);
        div.appendChild(close);
    }

    function textInTextBox() {
        let taskDivContainer = document.getElementById('taskListItemContainer');
        makeListItem(taskDivContainer);
        let div = createAddTaskListItem();
        let taskDiv = document.getElementById('taskListItemContainer');
        taskDiv.appendChild(div);
    }

    function enterPressedOnTaskListItem() {
        let addListItemTextBox = document.querySelector('#addTaskListItem > input');
        let form = document.querySelector('form');
        form.scrollTop += form.offsetHeight;
        addListItemTextBox.focus();
    }

    function deleteTaskListItemButtonClicked(event) {
        let removedDivIndex = removeTaskListItem(event.target);
        updateDataTaskIndex(removedDivIndex);
    }

    function removeTaskListItem(img) {
        let parentDiv = img.parentElement;
        while(parentDiv.firstChild) {
            parentDiv.removeChild(parentDiv.firstChild);
        }
        let divIndex = parentDiv.getAttribute('data-taskIndex');
        let taskDivContainer = document.getElementById('taskListItemContainer');
        taskDivContainer.removeChild(parentDiv);
        return divIndex;
    }

    function updateDataTaskIndex(index) {
        let taskListItems = Array.from(document.querySelectorAll('div[data-taskIndex]'));
        for(let i=index; i<taskListItems.length; i++) {
            taskListItems[i].setAttribute('data-taskIndex', ""+i);
        }
    }

    function createCloseFormButton() {
        let formCloseButtonDiv = document.createElement('div');
        formCloseButtonDiv.setAttribute('id', 'formCloseButtonDiv'); 
        let closeBtn = document.createElement('button');
        closeBtn.setAttribute('type', 'button');
        closeBtn.setAttribute('id', 'closeFormButton');
        closeBtn.textContent = 'Close';
        closeBtn.addEventListener('click', closeFormButtonClicked);
        formCloseButtonDiv.appendChild(closeBtn);
        return formCloseButtonDiv;
    }

    function closeFormButtonClicked() {
        createTaskListDetails();
        removeForm();
        createAddTaskButton();
    }

    function createTaskListDetails() {
        let title = document.querySelector('#formTitleDiv > input').value || 'noTitle';
        let tasksList = Array.from(document.querySelectorAll('div[data-taskindex]'));
        let value = tasksList.map(task => [task.childNodes[1].value,task.childNodes[2].value]);
        (0,_task_taskList_Data_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1,
            {
                title,
                value
            });
    }

    function removeForm() {
        let form = document.querySelector('form');
        let closeBtn = document.getElementById('closeFormButton');
        closeBtn.removeEventListener('click', closeFormButtonClicked);
        let addTaskButtonDiv = document.getElementById('buttonFormContainer');
        addTaskButtonDiv.removeChild(form);
    }

    return {
        makeHeader,
        makeMain,
        createAddTaskButton
    }
})();

function start(document) {
    
    (function() {
        uiElements.makeHeader();
        uiElements.makeMain();
        uiElements.createAddTaskButton();
    })();
}

const getCurrentDate = function() {
    let date = new Date();
    let month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth();
    return(date.getFullYear() + '-' + month + '-' + date.getDate());
}

/***/ }),

/***/ "./src/assests/close.svg":
/*!*******************************!*\
  !*** ./src/assests/close.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcb72e1a45d40c032dcf.svg";

/***/ }),

/***/ "./src/assests/plus.svg":
/*!******************************!*\
  !*** ./src/assests/plus.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57eb9c4c0dd915b20a72.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ui_for_taskCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui_for_taskCreate.js */ "./src/modules/ui_for_taskCreate.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




(0,_modules_ui_for_taskCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(document);

// makeHeader(document);
// addTaskButton(document);

console.log('to do list'); 


// function choiceIndex() {
//     console.log("-----------------------------------");
//     console.log("Enter the following number to do the following");
//     console.log("1 Create Task in the current Task list");
//     console.log("2 Create a new Task list and makes it current");
//     console.log("3 To display all the task in the current tasklist");
//     console.log("4 Display all the tasklist");
//     console.log("5 Mark a task complete");
//     console.log("6 Switch to a different task list");
//     console.log("7 Are all the task in current task list complete");
//     console.log("8 display controls again");
//     console.log("-----------------------------------");
// }

// choiceIndex();

// window.addEventListener("keydown", function(event) {
//     if(event.key == '8') {
//         choiceIndex();
//     }
//     let message = control(event.key);
//     if(message) {
//         console.log(message);
//     }
// });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL21vZHVsZXMvdGFza190YXNrTGlzdF9EYXRhLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvbW9kdWxlcy91aV9mb3JfdGFza0NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1ibGFjay1iZy1jb2xvcjojMjIyO1xcbiAgICAtLXdoaXRlLXRleHQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC0td2hpdGUtYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1ib3JkZXItdGhpY2tuZXNzOiAycHg7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS10ZXh0LWNvbG9yKTtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbm1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiA1OHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jYnV0dG9uRm9ybUNvbnRhaW5lciB7ICAgICAgICAgICAvKiBkaXYgaW5zaWRlIG9mIG1haW4gd2hpY2ggY29udGFpbmVzIHRoZSBidXR0b24gZm9yIHRoZSBjcmVhdGlvbiBvZiBsaXN0IGFuZCB0YXNrcyovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNGZyO1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lciB7ICAgICAgICAgICAgICAgICAvKiBkaXYgaW5zaWRlIG9mIHRoZSBtYWluIHdoaWNoIGNvbnRhaW5zIHRoZSB0YXNrIGxpc3RzKi9cXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b24geyAgICAgICAgICAgICAgICAgIC8qIGJ1dHRvbiBhdCB0aGUgdG9wIHdoaWNoIGNyZWF0ZSB0aGUgZm9ybSBlbGVtZW50IHRvIG1ha2UgbGlzdCBhbmQgdGhlIHRhc2sqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW07XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMWZyO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIG1heC1oZWlnaHQ6IDIwZW07XFxuICAgIHBhZGRpbmc6IDAgMC44ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jZm9ybVRpdGxlRGl2ID4gaW5wdXQsXFxuZm9ybSA+ICN0YXNrTGlzdEl0ZW1Db250YWluZXIgPiBkaXYgPiBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS10ZXh0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxufVxcblxcbiNmb3JtVGl0bGVEaXYge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjRlbSAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbiNmb3JtVGl0bGVEaXYgPiBpbnB1dCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxufVxcblxcbmZvcm0gPiAjdGFza0xpc3RJdGVtQ29udGFpbmVyID4gZGl2ID4gaW1nIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDAuMDVlbTtcXG59XFxuXFxuZm9ybSA+ICN0YXNrTGlzdEl0ZW1Db250YWluZXIgPiBkaXYgPiBpbWc6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbn1cXG5cXG4vKiBkaXYgd2hpY2ggY29udGFpbnMgdGhlIHZhcmlvdXMgdGFza3MgaW4gdGhlIGZvcm0qL1xcbiN0YXNrTGlzdEl0ZW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuIC8qIGRpdiBpbiB3aGljaCB0aGUgcGx1cyBhbmQgdGhlIHRleHQgYm94IHRvIGFkZCBsaXN0IGl0ZW0gcmVzaWRlKi9cXG4jYWRkVGFza0xpc3RJdGVtLFxcbi50YXNrTGlzdEl0ZW0geyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXG4gICAgZ2FwOiAwLjJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTsgLypjaGVjayBib3ggY2Fubm90IGJlIGNoZWNrZWQgd2l0aG91dCB6IGluZGV4IHNldCAwIGFuZCB6IGluZGV4IG9mIHRpdGxlIGFuZCB0aGUgY2xvc2UgYnV0dG9uIGRpdiBuZWVkcyB0byBiZSBzZXQgdG8gMiB0byBhdm9pZCBjaGVja2JveCBiZWVuIG9uIHRvcCBvZiB0aXRsZSBvbiBzY3JvbGwqL1xcbiAgICAvKiBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwOyAqL1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTNweDtcXG4gICAgaGVpZ2h0OiAxM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxOyAvKiB3aXRob3V0IHRoaXMgdGhlIGRhdGUgcGlja2VyIHdhcyBub3Qgd29ya2luZyB3aGVuIGNsaWNrZWQgdXBvbiovXFxufVxcblxcbi50YXNrTGlzdEl0ZW06Zm9jdXMtd2l0aGluOjphZnRlcixcXG4jYWRkVGFza0xpc3RJdGVtOmZvY3VzLXdpdGhpbjo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IC0wLjhlbTtcXG4gICAgbGVmdDogLTAuOGVtO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxufVxcblxcbiNmb3JtQ2xvc2VCdXR0b25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5OyBcXG4gICAgei1pbmRleDogMjtcXG4gICAgcGFkZGluZzogMC40ZW0gMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxufSAvKnRvIG1ha2UgdGhlIGNsb3NlIHN0YXkgYXQgYnV0dG9uIGV2ZW4gd2hlbiBzY3JvbGxlZCBub3Qgd3Jva2luZyovXFxuXFxuI2Zvcm1UaXRsZURpdjo6YmVmb3JlLFxcbiNmb3JtQ2xvc2VCdXR0b25EaXY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAtMC44ZW07XFxuICAgIHJpZ2h0OiAtMC44ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbiNjbG9zZUZvcm1CdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC44ZW07XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4jY2xvc2VGb3JtQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgLyogYmFjayBncm91bmQgY29sb3Igb2YgdGhlIGNsb3NlIGZvcm0gYnV0dG9uIG9uIGhvdmVyKi9cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsOEJBQThCOztJQUU5QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBLGlDQUFpQyxvRkFBb0Y7SUFDakgsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLDRCQUE0QjtBQUNoQzs7QUFFQSxpQ0FBaUMsd0RBQXdEO0lBQ3JGLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixTQUFTO0FBQ2I7O0FBRUEsa0NBQWtDLDZFQUE2RTtJQUMzRyx5QkFBeUI7SUFDekIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwrREFBK0Q7SUFDL0QsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsK0RBQStEO0lBQy9ELG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUEsb0RBQW9EO0FBQ3BEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0NBRUMsa0VBQWtFO0FBQ25FOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFFLHdLQUF3SztJQUNwTDtlQUNXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsK0RBQStEO0lBQy9ELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVLEVBQUUsa0VBQWtFO0FBQ2xGOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWTtJQUNaLCtDQUErQztJQUMvQyxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCx1Q0FBdUM7QUFDM0MsRUFBRSxrRUFBa0U7O0FBRXBFOztJQUVJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsaURBQWlEO0lBQ2pELG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHNCQUFzQixFQUFFLHVEQUF1RDtBQUNuRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJsYWNrLWJnLWNvbG9yOiMyMjI7XFxuICAgIC0td2hpdGUtdGV4dC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS13aGl0ZS1ib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAtLWJvcmRlci10aGlja25lc3M6IDJweDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG59XFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDU4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNidXR0b25Gb3JtQ29udGFpbmVyIHsgICAgICAgICAgIC8qIGRpdiBpbnNpZGUgb2YgbWFpbiB3aGljaCBjb250YWluZXMgdGhlIGJ1dHRvbiBmb3IgdGhlIGNyZWF0aW9uIG9mIGxpc3QgYW5kIHRhc2tzKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC40ZnI7XFxufVxcblxcbiNsaXN0Q29udGFpbmVyIHsgICAgICAgICAgICAgICAgIC8qIGRpdiBpbnNpZGUgb2YgdGhlIG1haW4gd2hpY2ggY29udGFpbnMgdGhlIHRhc2sgbGlzdHMqL1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbiB7ICAgICAgICAgICAgICAgICAgLyogYnV0dG9uIGF0IHRoZSB0b3Agd2hpY2ggY3JlYXRlIHRoZSBmb3JtIGVsZW1lbnQgdG8gbWFrZSBsaXN0IGFuZCB0aGUgdGFzayovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOiAxZnI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgbWF4LWhlaWdodDogMjBlbTtcXG4gICAgcGFkZGluZzogMCAwLjhlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNmb3JtVGl0bGVEaXYgPiBpbnB1dCxcXG5mb3JtID4gI3Rhc2tMaXN0SXRlbUNvbnRhaW5lciA+IGRpdiA+IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDAuODVlbTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXG59XFxuXFxuI2Zvcm1UaXRsZURpdiB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59XFxuXFxuI2Zvcm1UaXRsZURpdiA+IGlucHV0IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIGhlaWdodDpmaXQtY29udGVudDtcXG59XFxuXFxuZm9ybSA+ICN0YXNrTGlzdEl0ZW1Db250YWluZXIgPiBkaXYgPiBpbWcge1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgcGFkZGluZzogMC4wNWVtO1xcbn1cXG5cXG5mb3JtID4gI3Rhc2tMaXN0SXRlbUNvbnRhaW5lciA+IGRpdiA+IGltZzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxufVxcblxcbi8qIGRpdiB3aGljaCBjb250YWlucyB0aGUgdmFyaW91cyB0YXNrcyBpbiB0aGUgZm9ybSovXFxuI3Rhc2tMaXN0SXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4gLyogZGl2IGluIHdoaWNoIHRoZSBwbHVzIGFuZCB0aGUgdGV4dCBib3ggdG8gYWRkIGxpc3QgaXRlbSByZXNpZGUqL1xcbiNhZGRUYXNrTGlzdEl0ZW0sXFxuLnRhc2tMaXN0SXRlbSB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcbiAgICBnYXA6IDAuMmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxOyAvKmNoZWNrIGJveCBjYW5ub3QgYmUgY2hlY2tlZCB3aXRob3V0IHogaW5kZXggc2V0IDAgYW5kIHogaW5kZXggb2YgdGl0bGUgYW5kIHRoZSBjbG9zZSBidXR0b24gZGl2IG5lZWRzIHRvIGJlIHNldCB0byAyIHRvIGF2b2lkIGNoZWNrYm94IGJlZW4gb24gdG9wIG9mIHRpdGxlIG9uIHNjcm9sbCovXFxuICAgIC8qIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7ICovXFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxM3B4O1xcbiAgICBoZWlnaHQ6IDEzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7IC8qIHdpdGhvdXQgdGhpcyB0aGUgZGF0ZSBwaWNrZXIgd2FzIG5vdCB3b3JraW5nIHdoZW4gY2xpY2tlZCB1cG9uKi9cXG59XFxuXFxuLnRhc2tMaXN0SXRlbTpmb2N1cy13aXRoaW46OmFmdGVyLFxcbiNhZGRUYXNrTGlzdEl0ZW06Zm9jdXMtd2l0aGluOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogLTAuOGVtO1xcbiAgICBsZWZ0OiAtMC44ZW07XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuI2Zvcm1DbG9zZUJ1dHRvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7IFxcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwYWRkaW5nOiAwLjRlbSAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG59IC8qdG8gbWFrZSB0aGUgY2xvc2Ugc3RheSBhdCBidXR0b24gZXZlbiB3aGVuIHNjcm9sbGVkIG5vdCB3cm9raW5nKi9cXG5cXG4jZm9ybVRpdGxlRGl2OjpiZWZvcmUsXFxuI2Zvcm1DbG9zZUJ1dHRvbkRpdjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IC0wLjhlbTtcXG4gICAgcmlnaHQ6IC0wLjhlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuI2Nsb3NlRm9ybUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjhlbTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiNjbG9zZUZvcm1CdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyAvKiBiYWNrIGdyb3VuZCBjb2xvciBvZiB0aGUgY2xvc2UgZm9ybSBidXR0b24gb24gaG92ZXIqL1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gVGFzayh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAvLyB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZVN0YXR1cyA9IGZhbHNlO1xufVxuXG5UYXNrLnByb3RvdHlwZS5tYXJrQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNvbXBsZXRlU3RhdHVzID0gdHJ1ZTtcbn1cblxuVGFzay5wcm90b3R5cGUuaXNDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRlU3RhdHVzO1xufVxuXG5mdW5jdGlvbiBUYXNrTGlzdCh0aXRsZSwgaW5kZXgpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbn1cblxuVGFza0xpc3QucHJvdG90eXBlLmRpc3BsYXlBbGwgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRhc2tMaXN0LmZvckVhY2godGFzayA9PiBjb25zb2xlLmxvZyh0YXNrKSk7XG4gICAgcmV0dXJuIDE7XG59XG5cblRhc2tMaXN0LnByb3RvdHlwZS5pc0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza0xpc3QuZXZlcnkodGFzayA9PiB0YXNrLmlzQ29tcGxldGUpO1xufVxuXG5jb25zdCB0YXNrTlRhc2tMaXN0TWFuYWdlciA9IChmdW5jdGlvbiBjb250cm9sKCkge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuICAgIGxldCBjdXJyZW50VGFza0xpc3Q7XG4gICAgXG4gICAgLy8gKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICBjdXJyZW50VGFza0xpc3QgPSBuZXcgVGFza0xpc3QoJ2RlZmF1bHQnLCBwcm9qZWN0cy5sZW5ndGgpO1xuICAgIC8vICAgICBwcm9qZWN0cy5wdXNoKGN1cnJlbnRUYXNrTGlzdCk7XG4gICAgLy8gfSkoKTtcblxuICAgIGZ1bmN0aW9uIHByb2plY3RzTGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdHMubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUpIHtcbiAgICAgICAgLy8gbGV0IHRpdGxlID0gcHJvbXB0KCdFbnRlciB0aGUgdGl0bGUgb2YgdGFzaycpIHx8ICd0YXNrJyArIGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5sZW5ndGg7XG4gICAgICAgIC8vIGxldCBkdWVEYXRlID0gcHJvbXB0KCdFbnRlciBkYXRlIGluIGRkL21tL3l5Jyk7XG4gICAgICAgIC8vIGxldCBwcmlvcml0eSA9IHByb21wdCgnRW50ZXIgcHJpb3JpdHknKSB8fCAwO1xuICAgICAgICBjdXJyZW50VGFza0xpc3QudGFza0xpc3QucHVzaChuZXcgVGFzayh0aXRsZSwgZHVlRGF0ZSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tMaXN0KHRpdGxlKSB7XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdCA9IG5ldyBUYXNrTGlzdCh0aXRsZSwgcHJvamVjdHMubGVuZ3RoKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChjdXJyZW50VGFza0xpc3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50VGFza0xpc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrTGlzdC50aXRsZSk7XG4gICAgICAgIGlmKGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VGFza0xpc3QuZGlzcGxheUFsbCgpO1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWxsUHJvamVjdHMoKSB7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2godGFza0xpc3QgPT4gY29uc29sZS5sb2codGFza0xpc3QudGl0bGUsIHRhc2tMaXN0LmluZGV4KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFya1Rhc2tDb21wbGV0ZShpbmRleCkge1xuICAgICAgICBpZihjdXJyZW50VGFza0xpc3QudGFza0xpc3QubGVuZ3RoIDwgaW5kZXggfHwgIWluZGV4IHx8IGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VGFza0xpc3QudGFza0xpc3RbaW5kZXhdLm1hcmtDb21wbGV0ZSgpO1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hDdXJyZW50VGFza0xpc3RUbyhpbmRleCkge1xuICAgICAgICBpZihwcm9qZWN0cy5sZW5ndGggPCBpbmRleCB8fCAhaW5kZXggfHwgaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdCA9IHByb2plY3RzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3VycmVudFRhc2tMaXN0SXNDb21wbGV0ZSgpIHtcbiAgICAgICAgaWYoY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFRhc2tMaXN0LmlzQ29tcGxldGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0c0xlbmd0aCxcbiAgICAgICAgY3JlYXRlVGFzayxcbiAgICAgICAgY3JlYXRlVGFza0xpc3QsXG4gICAgICAgIGRpc3BsYXlDdXJyZW50VGFza0xpc3QsXG4gICAgICAgIGRpc3BsYXlBbGxQcm9qZWN0cyxcbiAgICAgICAgbWFya1Rhc2tDb21wbGV0ZSxcbiAgICAgICAgc3dpdGNoQ3VycmVudFRhc2tMaXN0VG8sXG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdElzQ29tcGxldGVcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sKGNob2ljZSwgb2JqZWN0PW51bGwpIHtcblxuICAgIHN3aXRjaChjaG9pY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGFza05UYXNrTGlzdE1hbmFnZXIuY3JlYXRlVGFza0xpc3Qob2JqZWN0LnRpdGxlKTtcbiAgICAgICAgICAgIG9iamVjdC52YWx1ZS5mb3JFYWNoKHZhbCA9PiB0YXNrTlRhc2tMaXN0TWFuYWdlci5jcmVhdGVUYXNrKHZhbFswXSwgdmFsWzFdKSk7XG4gICAgICAgICAgICB0YXNrTlRhc2tMaXN0TWFuYWdlci5kaXNwbGF5Q3VycmVudFRhc2tMaXN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb3QgYSB2YWxpZCBjaG9pY2UnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0iLCIvLyBjcmVhdGUgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXN0IHRoZSBoZWFkZXIgc2VjdGlvbiB0aGUgbWFpbiBzZWN0aW9uIGFuZCBcbi8vIHRoZSBmb290ZXIgc2VjdGlvbi5cblxuaW1wb3J0IGNvbnRyb2wgZnJvbSAnLi90YXNrX3Rhc2tMaXN0X0RhdGEuanMnXG5cbmltcG9ydCBwbHVzSW1hZ2UgZnJvbSAnLi4vYXNzZXN0cy9wbHVzLnN2Zyc7XG5pbXBvcnQgY2xvc2VJbWFnZSBmcm9tICcuLi9hc3Nlc3RzL2Nsb3NlLnN2ZydcblxuY29uc3QgdWlFbGVtZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGgxLnRleHRDb250ZW50ID0gJ1Rhc2tzJztcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VNYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICBsZXQgYWRkVGFza0J1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYnV0dG9uRm9ybUNvbnRhaW5lcicpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlzdENvbnRhaW5lcicpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b25EaXYpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUFkZFRhc2tCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFkZFRhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uRm9ybUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tCdXR0b24nKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ1Rha2UgYSBOb3RlLi4uJztcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFza0J1dHRvbkNsaWNrZWQpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uRGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRkVGFza0J1dHRvbihidG4pIHtcbiAgICAgICAgbGV0IGFkZFRhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uRm9ybUNvbnRhaW5lcicpO1xuICAgICAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrQnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIGFkZFRhc2tCdXR0b25EaXYucmVtb3ZlQ2hpbGQoYnRuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUYXNrQnV0dG9uQ2xpY2tlZChldmVudCkge1xuICAgICAgICByZW1vdmVBZGRUYXNrQnV0dG9uKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNyZWF0ZVRhc2tGb3JtKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oKSB7XG4gICAgICAgIGxldCBhZGRUYXNrQnV0dG9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbkZvcm1Db250YWluZXInKTtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0Zyb21UaXRsZSgpKTtcbiAgICAgICAgbGV0IHRhc2tEaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0RpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tMaXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFRhc2tMaXN0SXRlbSgpKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRGl2Q29udGFpbmVyKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVDbG9zZUZvcm1CdXR0b24oKSk7XG4gICAgICAgIGFkZFRhc2tCdXR0b25EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0Zyb21UaXRsZSgpIHtcbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybVRpdGxlRGl2Jyk7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIHJldHVybiB0aXRsZURpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVBZGRUYXNrTGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0xpc3RJdGVtJyk7XG4gICAgICAgIGxldCBwbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHBsdXMuc2V0QXR0cmlidXRlKCdzcmMnLCBwbHVzSW1hZ2UpO1xuICAgICAgICBwbHVzLnNldEF0dHJpYnV0ZSgnYWx0JywgJ3BsdXMgc2lnbicpOyAgICAgICBcbiAgICAgICAgbGV0IHRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0ZXh0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRleHRCb3guc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdMaXN0IGl0ZW0nKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHBsdXMpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dEJveCk7XG4gICAgICAgIHRleHRCb3guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0ZXh0SW5UZXh0Qm94KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlTGlzdEl0ZW0odGFza0RpdkNvbnRhaW5lcikge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tMaXN0SXRlbScpO1xuICAgICAgICBsZXQgaWRJbmRleCA9IHRhc2tEaXZDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggLSAxO1xuICAgICAgICBkaXYucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcsICcnK2lkSW5kZXgpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrTGlzdEl0ZW0nKTtcbiAgICAgICAgbGV0IHRleHRCb3ggPSBkaXYuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgdGV4dEJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRleHRJblRleHRCb3gpO1xuICAgICAgICB0ZXh0Qm94LnJlbW92ZUF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcbiAgICAgICAgdGV4dEJveC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZihldmVudC5jb2RlID09ICdFbnRlcicgJiYgTnVtYmVyKHRleHRCb3gudmFsdWUpICE9IDApIHtcbiAgICAgICAgICAgICAgICBlbnRlclByZXNzZWRPblRhc2tMaXN0SXRlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGRpdi5pbnNlcnRCZWZvcmUoY2hlY2tCb3gsIGRpdi5maXJzdENoaWxkKTtcbiAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBnZXRDdXJyZW50RGF0ZSgpKTtcbiAgICAgICAgLy8gZGF0ZUlucHV0LnZhbHVlID0gYCR7Z2V0Q3VycmVudERhdGUoKX1gO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICAgICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNsb3NlLnNldEF0dHJpYnV0ZSgnc3JjJywgY2xvc2VJbWFnZSk7XG4gICAgICAgIGNsb3NlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2Nsb3NlIHNpZ24nKTtcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrTGlzdEl0ZW1CdXR0b25DbGlja2VkKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXh0SW5UZXh0Qm94KCkge1xuICAgICAgICBsZXQgdGFza0RpdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgbWFrZUxpc3RJdGVtKHRhc2tEaXZDb250YWluZXIpO1xuICAgICAgICBsZXQgZGl2ID0gY3JlYXRlQWRkVGFza0xpc3RJdGVtKCk7XG4gICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW50ZXJQcmVzc2VkT25UYXNrTGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCBhZGRMaXN0SXRlbVRleHRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0xpc3RJdGVtID4gaW5wdXQnKTtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGZvcm0uc2Nyb2xsVG9wICs9IGZvcm0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBhZGRMaXN0SXRlbVRleHRCb3guZm9jdXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrTGlzdEl0ZW1CdXR0b25DbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGxldCByZW1vdmVkRGl2SW5kZXggPSByZW1vdmVUYXNrTGlzdEl0ZW0oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgdXBkYXRlRGF0YVRhc2tJbmRleChyZW1vdmVkRGl2SW5kZXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2tMaXN0SXRlbShpbWcpIHtcbiAgICAgICAgbGV0IHBhcmVudERpdiA9IGltZy5wYXJlbnRFbGVtZW50O1xuICAgICAgICB3aGlsZShwYXJlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGFyZW50RGl2LnJlbW92ZUNoaWxkKHBhcmVudERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGl2SW5kZXggPSBwYXJlbnREaXYuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpO1xuICAgICAgICBsZXQgdGFza0RpdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgdGFza0RpdkNvbnRhaW5lci5yZW1vdmVDaGlsZChwYXJlbnREaXYpO1xuICAgICAgICByZXR1cm4gZGl2SW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGF0YVRhc2tJbmRleChpbmRleCkge1xuICAgICAgICBsZXQgdGFza0xpc3RJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtdGFza0luZGV4XScpKTtcbiAgICAgICAgZm9yKGxldCBpPWluZGV4OyBpPHRhc2tMaXN0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhc2tMaXN0SXRlbXNbaV0uc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcsIFwiXCIraSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDbG9zZUZvcm1CdXR0b24oKSB7XG4gICAgICAgIGxldCBmb3JtQ2xvc2VCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUNsb3NlQnV0dG9uRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybUNsb3NlQnV0dG9uRGl2Jyk7IFxuICAgICAgICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlRm9ybUJ1dHRvbicpO1xuICAgICAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtQnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIGZvcm1DbG9zZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgICAgIHJldHVybiBmb3JtQ2xvc2VCdXR0b25EaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VGb3JtQnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgICAgY3JlYXRlVGFza0xpc3REZXRhaWxzKCk7XG4gICAgICAgIHJlbW92ZUZvcm0oKTtcbiAgICAgICAgY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tMaXN0RGV0YWlscygpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1UaXRsZURpdiA+IGlucHV0JykudmFsdWUgfHwgJ25vVGl0bGUnO1xuICAgICAgICBsZXQgdGFza3NMaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbZGF0YS10YXNraW5kZXhdJykpO1xuICAgICAgICBsZXQgdmFsdWUgPSB0YXNrc0xpc3QubWFwKHRhc2sgPT4gW3Rhc2suY2hpbGROb2Rlc1sxXS52YWx1ZSx0YXNrLmNoaWxkTm9kZXNbMl0udmFsdWVdKTtcbiAgICAgICAgY29udHJvbCgxLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlRm9ybUJ1dHRvbicpO1xuICAgICAgICBjbG9zZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybUJ1dHRvbkNsaWNrZWQpO1xuICAgICAgICBsZXQgYWRkVGFza0J1dHRvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25Gb3JtQ29udGFpbmVyJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b25EaXYucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZUhlYWRlcixcbiAgICAgICAgbWFrZU1haW4sXG4gICAgICAgIGNyZWF0ZUFkZFRhc2tCdXR0b25cbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydChkb2N1bWVudCkge1xuICAgIFxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdWlFbGVtZW50cy5tYWtlSGVhZGVyKCk7XG4gICAgICAgIHVpRWxlbWVudHMubWFrZU1haW4oKTtcbiAgICAgICAgdWlFbGVtZW50cy5jcmVhdGVBZGRUYXNrQnV0dG9uKCk7XG4gICAgfSkoKTtcbn1cblxuY29uc3QgZ2V0Q3VycmVudERhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpID4gOSA/IGRhdGUuZ2V0TW9udGgoKSA6ICcwJyArIGRhdGUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4oZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nICsgbW9udGggKyAnLScgKyBkYXRlLmdldERhdGUoKSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdGFydCBmcm9tICcuL21vZHVsZXMvdWlfZm9yX3Rhc2tDcmVhdGUuanMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcydcblxuc3RhcnQoZG9jdW1lbnQpO1xuXG4vLyBtYWtlSGVhZGVyKGRvY3VtZW50KTtcbi8vIGFkZFRhc2tCdXR0b24oZG9jdW1lbnQpO1xuXG5jb25zb2xlLmxvZygndG8gZG8gbGlzdCcpOyBcblxuXG4vLyBmdW5jdGlvbiBjaG9pY2VJbmRleCgpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiRW50ZXIgdGhlIGZvbGxvd2luZyBudW1iZXIgdG8gZG8gdGhlIGZvbGxvd2luZ1wiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIjEgQ3JlYXRlIFRhc2sgaW4gdGhlIGN1cnJlbnQgVGFzayBsaXN0XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiMiBDcmVhdGUgYSBuZXcgVGFzayBsaXN0IGFuZCBtYWtlcyBpdCBjdXJyZW50XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiMyBUbyBkaXNwbGF5IGFsbCB0aGUgdGFzayBpbiB0aGUgY3VycmVudCB0YXNrbGlzdFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIjQgRGlzcGxheSBhbGwgdGhlIHRhc2tsaXN0XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiNSBNYXJrIGEgdGFzayBjb21wbGV0ZVwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIjYgU3dpdGNoIHRvIGEgZGlmZmVyZW50IHRhc2sgbGlzdFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIjcgQXJlIGFsbCB0aGUgdGFzayBpbiBjdXJyZW50IHRhc2sgbGlzdCBjb21wbGV0ZVwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIjggZGlzcGxheSBjb250cm9scyBhZ2FpblwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuLy8gfVxuXG4vLyBjaG9pY2VJbmRleCgpO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgICBpZihldmVudC5rZXkgPT0gJzgnKSB7XG4vLyAgICAgICAgIGNob2ljZUluZGV4KCk7XG4vLyAgICAgfVxuLy8gICAgIGxldCBtZXNzYWdlID0gY29udHJvbChldmVudC5rZXkpO1xuLy8gICAgIGlmKG1lc3NhZ2UpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4vLyAgICAgfVxuLy8gfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9