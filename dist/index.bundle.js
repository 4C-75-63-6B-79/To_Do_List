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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --black-bg-color:#222;\n    --white-text-color: whitesmoke;\n    --white-border-color: white;\n    --border-thickness: 2px;\n    --border-radius: 10px;\n}\n\nbody {\n    font-size: 1.1rem;\n    background-color: var(--black-bg-color);\n    color: var(--white-text-color);\n\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\nheader {\n    width: 100%;\n    padding: 0.5em 0.8em;\n    background-color: inherit;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n}\n\nmain {\n    margin-top: 58px;\n    display: flex;\n    flex-direction: column;\n    width: inherit;\n    gap: 20px;\n}\n\n#buttonFormContainer {           /* div inside of main which containes the button for the creation of list and tasks*/\n    display: grid;\n    place-content: center;\n    padding: 0.5em 0.8em;\n    width: 100%;\n    grid-template-columns: 0.6fr;\n}\n\n#listContainer {                 /* div inside of the main which contains the task lists*/\n    display: flex; \n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 15px;\n}\n\n#addTaskButton {                  /* button at the top which create the form element to make list and the task*/\n    background-color: inherit;\n    color: inherit;\n    padding: 0.5em 0.8em;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    font-size: 0.85em;\n    text-align: left;\n    width: 1fr;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    max-height: 20em;\n    padding: 0 0.8em;\n    overflow: hidden auto;\n    position: relative;\n}\n\n#formTitleDiv > input,\nform > #taskListItemContainer > div > input {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    font-size: 0.85em;\n    color: var(--white-text-color);\n    padding: 0.2em 0.5em;\n}\n\n/* #formTitleDivContainer {\n    position: absolute;\n    top: 0;\n    left: 0; \n} */\n\n#formTitleDiv {\n    position: sticky;\n    top: 0px;\n    background-color: var(--black-bg-color);\n    padding: 0.4em 0;\n    z-index: 2;\n    /* position: relative; */\n} \n /*to make the title stay at top even when scrolled not wroking*/\n\n#formTitleDiv > input {\n    font-size: 1em;\n}\n\nform > #taskListItemContainer > div > img {\n    width: 18px;\n    padding: 0.05em;\n}\n\nform > #taskListItemContainer > div > img:hover {\n    background-color: #333;\n}\n\n/* div which contains the various tasks in the form*/\n#taskListItemContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n /* div in which the plus and the text box to add list item reside*/\n#addTaskListItem,\n.taskListItem { \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-items: center;\n    padding: 0.2em 0.5em;\n    gap: 0.2em;\n    position: relative;\n}\n\n.taskListItem > input[type='text'] {\n    flex-grow: 1;\n}\n\n.taskListItem > input[type='checkbox'] {\n    position: relative;\n    z-index: 1; /*check box cannot be checked without z index set 0 and z index of title and the close button div needs to be set to 2 to avoid checkbox been on top of title on scroll*/\n    /* height: 0;\n    width: 0; */\n}\n\n.taskListItem > input[type='checkbox']::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 13px;\n    height: 13px;\n    background-color: var(--black-bg-color);\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: 2px;\n}\n\n.taskListItem > input[type='checkbox']:checked::before {\n    background-color: blue;\n}\n\n.taskListItem:focus-within::after,\n#addTaskListItem:focus-within::after {\n    position: absolute;\n    content: '';\n    top: 0;\n    bottom: 0;\n    right: -0.8em;\n    left: -0.8em;\n    border-top: 2px solid var(--white-border-color);\n    border-bottom: 2px solid var(--white-border-color);\n}\n\n#formCloseButtonDiv {\n    display: flex;\n    justify-content: flex-end;\n    position: sticky; \n    z-index: 2;\n    padding: 0.4em 0;\n    bottom: 0;\n    background-color: var(--black-bg-color);\n} /*to make the close stay at button even when scrolled not wroking*/\n\n#formTitleDiv::before,\n#formCloseButtonDiv::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -0.8em;\n    right: -0.8em;\n    background-color: var(--black-bg-color);\n    z-index: -1;\n}\n\n#closeFormButton {\n    background-color: var(--black-bg-color);\n    border: none;\n    color: var(--white-text-color);\n    padding: 0.25em 0.8em;\n    border: var(--border-thickness) solid transparent;\n    border-radius: var(--border-radius);\n}\n\n#closeFormButton:hover {\n    background-color: #333; /* back ground color of the close form button on hover*/\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,8BAA8B;IAC9B,2BAA2B;IAC3B,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,uCAAuC;IACvC,8BAA8B;;IAE9B,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,MAAM;AACV;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,SAAS;AACb;;AAEA,iCAAiC,oFAAoF;IACjH,aAAa;IACb,qBAAqB;IACrB,oBAAoB;IACpB,WAAW;IACX,4BAA4B;AAChC;;AAEA,iCAAiC,wDAAwD;IACrF,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,2BAA2B;IAC3B,SAAS;AACb;;AAEA,kCAAkC,6EAA6E;IAC3G,yBAAyB;IACzB,cAAc;IACd,oBAAoB;IACpB,+DAA+D;IAC/D,mCAAmC;IACnC,iBAAiB;IACjB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,+DAA+D;IAC/D,mCAAmC;IACnC,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;;IAEI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;;;;GAIG;;AAEH;IACI,gBAAgB;IAChB,QAAQ;IACR,uCAAuC;IACvC,gBAAgB;IAChB,UAAU;IACV,wBAAwB;AAC5B;CACC,+DAA+D;;AAEhE;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA,oDAAoD;AACpD;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;CAEC,kEAAkE;AACnE;;IAEI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,qBAAqB;IACrB,oBAAoB;IACpB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU,EAAE,wKAAwK;IACpL;eACW;AACf;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,uCAAuC;IACvC,+DAA+D;IAC/D,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,SAAS;IACT,aAAa;IACb,YAAY;IACZ,+CAA+C;IAC/C,kDAAkD;AACtD;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,UAAU;IACV,gBAAgB;IAChB,SAAS;IACT,uCAAuC;AAC3C,EAAE,kEAAkE;;AAEpE;;IAEI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,YAAY;IACZ,aAAa;IACb,uCAAuC;IACvC,WAAW;AACf;;AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,8BAA8B;IAC9B,qBAAqB;IACrB,iDAAiD;IACjD,mCAAmC;AACvC;;AAEA;IACI,sBAAsB,EAAE,uDAAuD;AACnF","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --black-bg-color:#222;\n    --white-text-color: whitesmoke;\n    --white-border-color: white;\n    --border-thickness: 2px;\n    --border-radius: 10px;\n}\n\nbody {\n    font-size: 1.1rem;\n    background-color: var(--black-bg-color);\n    color: var(--white-text-color);\n\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\nheader {\n    width: 100%;\n    padding: 0.5em 0.8em;\n    background-color: inherit;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n}\n\nmain {\n    margin-top: 58px;\n    display: flex;\n    flex-direction: column;\n    width: inherit;\n    gap: 20px;\n}\n\n#buttonFormContainer {           /* div inside of main which containes the button for the creation of list and tasks*/\n    display: grid;\n    place-content: center;\n    padding: 0.5em 0.8em;\n    width: 100%;\n    grid-template-columns: 0.6fr;\n}\n\n#listContainer {                 /* div inside of the main which contains the task lists*/\n    display: flex; \n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 15px;\n}\n\n#addTaskButton {                  /* button at the top which create the form element to make list and the task*/\n    background-color: inherit;\n    color: inherit;\n    padding: 0.5em 0.8em;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    font-size: 0.85em;\n    text-align: left;\n    width: 1fr;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    max-height: 20em;\n    padding: 0 0.8em;\n    overflow: hidden auto;\n    position: relative;\n}\n\n#formTitleDiv > input,\nform > #taskListItemContainer > div > input {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    font-size: 0.85em;\n    color: var(--white-text-color);\n    padding: 0.2em 0.5em;\n}\n\n/* #formTitleDivContainer {\n    position: absolute;\n    top: 0;\n    left: 0; \n} */\n\n#formTitleDiv {\n    position: sticky;\n    top: 0px;\n    background-color: var(--black-bg-color);\n    padding: 0.4em 0;\n    z-index: 2;\n    /* position: relative; */\n} \n /*to make the title stay at top even when scrolled not wroking*/\n\n#formTitleDiv > input {\n    font-size: 1em;\n}\n\nform > #taskListItemContainer > div > img {\n    width: 18px;\n    padding: 0.05em;\n}\n\nform > #taskListItemContainer > div > img:hover {\n    background-color: #333;\n}\n\n/* div which contains the various tasks in the form*/\n#taskListItemContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n /* div in which the plus and the text box to add list item reside*/\n#addTaskListItem,\n.taskListItem { \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-items: center;\n    padding: 0.2em 0.5em;\n    gap: 0.2em;\n    position: relative;\n}\n\n.taskListItem > input[type='text'] {\n    flex-grow: 1;\n}\n\n.taskListItem > input[type='checkbox'] {\n    position: relative;\n    z-index: 1; /*check box cannot be checked without z index set 0 and z index of title and the close button div needs to be set to 2 to avoid checkbox been on top of title on scroll*/\n    /* height: 0;\n    width: 0; */\n}\n\n.taskListItem > input[type='checkbox']::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 13px;\n    height: 13px;\n    background-color: var(--black-bg-color);\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: 2px;\n}\n\n.taskListItem > input[type='checkbox']:checked::before {\n    background-color: blue;\n}\n\n.taskListItem:focus-within::after,\n#addTaskListItem:focus-within::after {\n    position: absolute;\n    content: '';\n    top: 0;\n    bottom: 0;\n    right: -0.8em;\n    left: -0.8em;\n    border-top: 2px solid var(--white-border-color);\n    border-bottom: 2px solid var(--white-border-color);\n}\n\n#formCloseButtonDiv {\n    display: flex;\n    justify-content: flex-end;\n    position: sticky; \n    z-index: 2;\n    padding: 0.4em 0;\n    bottom: 0;\n    background-color: var(--black-bg-color);\n} /*to make the close stay at button even when scrolled not wroking*/\n\n#formTitleDiv::before,\n#formCloseButtonDiv::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -0.8em;\n    right: -0.8em;\n    background-color: var(--black-bg-color);\n    z-index: -1;\n}\n\n#closeFormButton {\n    background-color: var(--black-bg-color);\n    border: none;\n    color: var(--white-text-color);\n    padding: 0.25em 0.8em;\n    border: var(--border-thickness) solid transparent;\n    border-radius: var(--border-radius);\n}\n\n#closeFormButton:hover {\n    background-color: #333; /* back ground color of the close form button on hover*/\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/task_taskList.js":
/*!**************************************!*\
  !*** ./src/modules/task_taskList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ control)
/* harmony export */ });
function Task(title, dueDate, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
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
    
    (function() {
        currentTaskList = new TaskList('default', projects.length);
        projects.push(currentTaskList);
    })();

    function createTask() {
        let title = prompt('Enter the title of task') || 'task' + currentTaskList.taskList.length;
        let dueDate = prompt('Enter date in dd/mm/yy');
        let priority = prompt('Enter priority') || 0;
        currentTaskList.taskList.push(new Task(title, dueDate, priority));
    }

    function createTaskList() {
        let title = prompt('enter the title of the list') || 'taskList';
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
        createTask,
        createTaskList,
        displayCurrentTaskList,
        displayAllProjects,
        markTaskComplete,
        switchCurrentTaskListTo,
        currentTaskListIsComplete
    }
})();

function control(choice) {

    let index;
    switch(choice) {
        case "1":
            taskNTaskListManager.createTask();
            break;
        case "2":
            taskNTaskListManager.createTaskList();
            break;
        case "3":
            return taskNTaskListManager.displayCurrentTaskList() == 0 ? 'no task in the current task list' : 'All the task of the current task list displayed';
        case "4":
            taskNTaskListManager.displayAllProjects();
            break;
        case "5":
            index = prompt('Enter the index of task to mark complete');
            return taskNTaskListManager.markTaskComplete(index) == 1 ? 'task marked complete' : 'index is not in range of the current task list or index was undefined';
            break;
        case "6":
            index = prompt('Enter the index of task list to make current task list');
            return taskNTaskListManager.switchCurrentTaskListTo(index) == 1 ? 'current task list is switched' : 'index is not in range of the project list or index was undefined';
        case "7":
            let val = taskNTaskListManager.currentTaskListIsComplete();
            return val == 0 ? 'no task in the current task list' : val;
        default:
            console.log('Not a valid choice');
            break;
    }
}

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _assests_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assests/plus.svg */ "./src/assests/plus.svg");
/* harmony import */ var _assests_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assests/close.svg */ "./src/assests/close.svg");
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
        // let titleDivContainer = document.createElement('div');
        // titleDivContainer.setAttribute('id', 'formTitleDivContainer');
        let titleDiv = document.createElement('div');
        titleDiv.setAttribute('id', 'formTitleDiv');
        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('placeholder', 'Title');
        titleDiv.appendChild(titleInput);
        // titleDivContainer.appendChild(titleDiv);
        return titleDiv;
    }

    function createAddTaskListItem() {
        let div = document.createElement('div');
        div.setAttribute('id', 'addTaskListItem');
        let plus = document.createElement('img');
        plus.setAttribute('src', _assests_plus_svg__WEBPACK_IMPORTED_MODULE_0__);
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
        let close = document.createElement('img');
        close.setAttribute('src', _assests_close_svg__WEBPACK_IMPORTED_MODULE_1__);
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
        removeForm();
        createAddTaskButton();
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
/* harmony import */ var _modules_task_taskList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task_taskList.js */ "./src/modules/task_taskList.js");
/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui.js */ "./src/modules/ui.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





(0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxvRUFBb0UsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxXQUFXLDRCQUE0QixxQ0FBcUMsa0NBQWtDLDhCQUE4Qiw0QkFBNEIsR0FBRyxVQUFVLHdCQUF3Qiw4Q0FBOEMscUNBQXFDLG9CQUFvQixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQixzQkFBc0IsYUFBYSxHQUFHLFVBQVUsdUJBQXVCLG9CQUFvQiw2QkFBNkIscUJBQXFCLGdCQUFnQixHQUFHLHFDQUFxQyx5R0FBeUcsNEJBQTRCLDJCQUEyQixrQkFBa0IsbUNBQW1DLEdBQUcscUNBQXFDLDhFQUE4RSwwQkFBMEIsOEJBQThCLGtDQUFrQyxnQkFBZ0IsR0FBRyxzQ0FBc0MsOEdBQThHLHFCQUFxQiwyQkFBMkIsc0VBQXNFLDBDQUEwQyx3QkFBd0IsdUJBQXVCLGlCQUFpQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QixlQUFlLHNFQUFzRSwwQ0FBMEMsdUJBQXVCLHVCQUF1Qiw0QkFBNEIseUJBQXlCLEdBQUcseUVBQXlFLGdDQUFnQyxtQkFBbUIsb0JBQW9CLHdCQUF3QixxQ0FBcUMsMkJBQTJCLEdBQUcsK0JBQStCLHlCQUF5QixhQUFhLGVBQWUsSUFBSSxxQkFBcUIsdUJBQXVCLGVBQWUsOENBQThDLHVCQUF1QixpQkFBaUIsNkJBQTZCLE1BQU0sOEZBQThGLHFCQUFxQixHQUFHLCtDQUErQyxrQkFBa0Isc0JBQXNCLEdBQUcscURBQXFELDZCQUE2QixHQUFHLG1GQUFtRixvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyw2R0FBNkcsb0JBQW9CLDBCQUEwQiwwQkFBMEIsNEJBQTRCLDJCQUEyQixpQkFBaUIseUJBQXlCLEdBQUcsd0NBQXdDLG1CQUFtQixHQUFHLDRDQUE0Qyx5QkFBeUIsa0JBQWtCLDRMQUE0TCxnQkFBZ0IsS0FBSyxvREFBb0Qsa0JBQWtCLHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQiw4Q0FBOEMsc0VBQXNFLHlCQUF5QixHQUFHLDREQUE0RCw2QkFBNkIsR0FBRyw4RUFBOEUseUJBQXlCLGtCQUFrQixhQUFhLGdCQUFnQixvQkFBb0IsbUJBQW1CLHNEQUFzRCx5REFBeUQsR0FBRyx5QkFBeUIsb0JBQW9CLGdDQUFnQyx3QkFBd0IsaUJBQWlCLHVCQUF1QixnQkFBZ0IsOENBQThDLElBQUksNEhBQTRILGtCQUFrQix5QkFBeUIsYUFBYSxnQkFBZ0IsbUJBQW1CLG9CQUFvQiw4Q0FBOEMsa0JBQWtCLEdBQUcsc0JBQXNCLDhDQUE4QyxtQkFBbUIscUNBQXFDLDRCQUE0Qix3REFBd0QsMENBQTBDLEdBQUcsNEJBQTRCLDhCQUE4QiwyREFBMkQsT0FBTyxtRkFBbUYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sbUJBQW1CLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLG1CQUFtQixXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxtQkFBbUIsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSx1QkFBdUIsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLG1CQUFtQixPQUFPLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLHdCQUF3QixvREFBb0QsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxXQUFXLDRCQUE0QixxQ0FBcUMsa0NBQWtDLDhCQUE4Qiw0QkFBNEIsR0FBRyxVQUFVLHdCQUF3Qiw4Q0FBOEMscUNBQXFDLG9CQUFvQixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQixzQkFBc0IsYUFBYSxHQUFHLFVBQVUsdUJBQXVCLG9CQUFvQiw2QkFBNkIscUJBQXFCLGdCQUFnQixHQUFHLHFDQUFxQyx5R0FBeUcsNEJBQTRCLDJCQUEyQixrQkFBa0IsbUNBQW1DLEdBQUcscUNBQXFDLDhFQUE4RSwwQkFBMEIsOEJBQThCLGtDQUFrQyxnQkFBZ0IsR0FBRyxzQ0FBc0MsOEdBQThHLHFCQUFxQiwyQkFBMkIsc0VBQXNFLDBDQUEwQyx3QkFBd0IsdUJBQXVCLGlCQUFpQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QixlQUFlLHNFQUFzRSwwQ0FBMEMsdUJBQXVCLHVCQUF1Qiw0QkFBNEIseUJBQXlCLEdBQUcseUVBQXlFLGdDQUFnQyxtQkFBbUIsb0JBQW9CLHdCQUF3QixxQ0FBcUMsMkJBQTJCLEdBQUcsK0JBQStCLHlCQUF5QixhQUFhLGVBQWUsSUFBSSxxQkFBcUIsdUJBQXVCLGVBQWUsOENBQThDLHVCQUF1QixpQkFBaUIsNkJBQTZCLE1BQU0sOEZBQThGLHFCQUFxQixHQUFHLCtDQUErQyxrQkFBa0Isc0JBQXNCLEdBQUcscURBQXFELDZCQUE2QixHQUFHLG1GQUFtRixvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyw2R0FBNkcsb0JBQW9CLDBCQUEwQiwwQkFBMEIsNEJBQTRCLDJCQUEyQixpQkFBaUIseUJBQXlCLEdBQUcsd0NBQXdDLG1CQUFtQixHQUFHLDRDQUE0Qyx5QkFBeUIsa0JBQWtCLDRMQUE0TCxnQkFBZ0IsS0FBSyxvREFBb0Qsa0JBQWtCLHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQiw4Q0FBOEMsc0VBQXNFLHlCQUF5QixHQUFHLDREQUE0RCw2QkFBNkIsR0FBRyw4RUFBOEUseUJBQXlCLGtCQUFrQixhQUFhLGdCQUFnQixvQkFBb0IsbUJBQW1CLHNEQUFzRCx5REFBeUQsR0FBRyx5QkFBeUIsb0JBQW9CLGdDQUFnQyx3QkFBd0IsaUJBQWlCLHVCQUF1QixnQkFBZ0IsOENBQThDLElBQUksNEhBQTRILGtCQUFrQix5QkFBeUIsYUFBYSxnQkFBZ0IsbUJBQW1CLG9CQUFvQiw4Q0FBOEMsa0JBQWtCLEdBQUcsc0JBQXNCLDhDQUE4QyxtQkFBbUIscUNBQXFDLDRCQUE0Qix3REFBd0QsMENBQTBDLEdBQUcsNEJBQTRCLDhCQUE4QiwyREFBMkQsbUJBQW1CO0FBQzdrWTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJQTtBQUNBOztBQUU0QztBQUNDOztBQUU3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw4Q0FBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywrQ0FBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qix3QkFBd0I7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBaUQ7QUFDYjs7QUFFZjs7QUFFckIsMERBQUs7O0FBRUw7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL21vZHVsZXMvdGFza190YXNrTGlzdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmxhY2stYmctY29sb3I6IzIyMjtcXG4gICAgLS13aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLXdoaXRlLWJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIC0tYm9yZGVyLXRoaWNrbmVzczogMnB4O1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogNThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2J1dHRvbkZvcm1Db250YWluZXIgeyAgICAgICAgICAgLyogZGl2IGluc2lkZSBvZiBtYWluIHdoaWNoIGNvbnRhaW5lcyB0aGUgYnV0dG9uIGZvciB0aGUgY3JlYXRpb24gb2YgbGlzdCBhbmQgdGFza3MqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmcjtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgeyAgICAgICAgICAgICAgICAgLyogZGl2IGluc2lkZSBvZiB0aGUgbWFpbiB3aGljaCBjb250YWlucyB0aGUgdGFzayBsaXN0cyovXFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uIHsgICAgICAgICAgICAgICAgICAvKiBidXR0b24gYXQgdGhlIHRvcCB3aGljaCBjcmVhdGUgdGhlIGZvcm0gZWxlbWVudCB0byBtYWtlIGxpc3QgYW5kIHRoZSB0YXNrKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBmb250LXNpemU6IDAuODVlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDFmcjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBtYXgtaGVpZ2h0OiAyMGVtO1xcbiAgICBwYWRkaW5nOiAwIDAuOGVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2Zvcm1UaXRsZURpdiA+IGlucHV0LFxcbmZvcm0gPiAjdGFza0xpc3RJdGVtQ29udGFpbmVyID4gZGl2ID4gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcbn1cXG5cXG4vKiAjZm9ybVRpdGxlRGl2Q29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7IFxcbn0gKi9cXG5cXG4jZm9ybVRpdGxlRGl2IHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMC40ZW0gMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn0gXFxuIC8qdG8gbWFrZSB0aGUgdGl0bGUgc3RheSBhdCB0b3AgZXZlbiB3aGVuIHNjcm9sbGVkIG5vdCB3cm9raW5nKi9cXG5cXG4jZm9ybVRpdGxlRGl2ID4gaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuZm9ybSA+ICN0YXNrTGlzdEl0ZW1Db250YWluZXIgPiBkaXYgPiBpbWcge1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgcGFkZGluZzogMC4wNWVtO1xcbn1cXG5cXG5mb3JtID4gI3Rhc2tMaXN0SXRlbUNvbnRhaW5lciA+IGRpdiA+IGltZzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxufVxcblxcbi8qIGRpdiB3aGljaCBjb250YWlucyB0aGUgdmFyaW91cyB0YXNrcyBpbiB0aGUgZm9ybSovXFxuI3Rhc2tMaXN0SXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4gLyogZGl2IGluIHdoaWNoIHRoZSBwbHVzIGFuZCB0aGUgdGV4dCBib3ggdG8gYWRkIGxpc3QgaXRlbSByZXNpZGUqL1xcbiNhZGRUYXNrTGlzdEl0ZW0sXFxuLnRhc2tMaXN0SXRlbSB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcbiAgICBnYXA6IDAuMmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxOyAvKmNoZWNrIGJveCBjYW5ub3QgYmUgY2hlY2tlZCB3aXRob3V0IHogaW5kZXggc2V0IDAgYW5kIHogaW5kZXggb2YgdGl0bGUgYW5kIHRoZSBjbG9zZSBidXR0b24gZGl2IG5lZWRzIHRvIGJlIHNldCB0byAyIHRvIGF2b2lkIGNoZWNrYm94IGJlZW4gb24gdG9wIG9mIHRpdGxlIG9uIHNjcm9sbCovXFxuICAgIC8qIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7ICovXFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxM3B4O1xcbiAgICBoZWlnaHQ6IDEzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi50YXNrTGlzdEl0ZW06Zm9jdXMtd2l0aGluOjphZnRlcixcXG4jYWRkVGFza0xpc3RJdGVtOmZvY3VzLXdpdGhpbjo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IC0wLjhlbTtcXG4gICAgbGVmdDogLTAuOGVtO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxufVxcblxcbiNmb3JtQ2xvc2VCdXR0b25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5OyBcXG4gICAgei1pbmRleDogMjtcXG4gICAgcGFkZGluZzogMC40ZW0gMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxufSAvKnRvIG1ha2UgdGhlIGNsb3NlIHN0YXkgYXQgYnV0dG9uIGV2ZW4gd2hlbiBzY3JvbGxlZCBub3Qgd3Jva2luZyovXFxuXFxuI2Zvcm1UaXRsZURpdjo6YmVmb3JlLFxcbiNmb3JtQ2xvc2VCdXR0b25EaXY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAtMC44ZW07XFxuICAgIHJpZ2h0OiAtMC44ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbiNjbG9zZUZvcm1CdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC44ZW07XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4jY2xvc2VGb3JtQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgLyogYmFjayBncm91bmQgY29sb3Igb2YgdGhlIGNsb3NlIGZvcm0gYnV0dG9uIG9uIGhvdmVyKi9cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZC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RlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJsYWNrLWJnLWNvbG9yOiMyMjI7XFxuICAgIC0td2hpdGUtdGV4dC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS13aGl0ZS1ib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAtLWJvcmRlci10aGlja25lc3M6IDJweDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG59XFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDU4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNidXR0b25Gb3JtQ29udGFpbmVyIHsgICAgICAgICAgIC8qIGRpdiBpbnNpZGUgb2YgbWFpbiB3aGljaCBjb250YWluZXMgdGhlIGJ1dHRvbiBmb3IgdGhlIGNyZWF0aW9uIG9mIGxpc3QgYW5kIHRhc2tzKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC42ZnI7XFxufVxcblxcbiNsaXN0Q29udGFpbmVyIHsgICAgICAgICAgICAgICAgIC8qIGRpdiBpbnNpZGUgb2YgdGhlIG1haW4gd2hpY2ggY29udGFpbnMgdGhlIHRhc2sgbGlzdHMqL1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbiB7ICAgICAgICAgICAgICAgICAgLyogYnV0dG9uIGF0IHRoZSB0b3Agd2hpY2ggY3JlYXRlIHRoZSBmb3JtIGVsZW1lbnQgdG8gbWFrZSBsaXN0IGFuZCB0aGUgdGFzayovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOiAxZnI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgbWF4LWhlaWdodDogMjBlbTtcXG4gICAgcGFkZGluZzogMCAwLjhlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNmb3JtVGl0bGVEaXYgPiBpbnB1dCxcXG5mb3JtID4gI3Rhc2tMaXN0SXRlbUNvbnRhaW5lciA+IGRpdiA+IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDAuODVlbTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXG59XFxuXFxuLyogI2Zvcm1UaXRsZURpdkNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwOyBcXG59ICovXFxuXFxuI2Zvcm1UaXRsZURpdiB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59IFxcbiAvKnRvIG1ha2UgdGhlIHRpdGxlIHN0YXkgYXQgdG9wIGV2ZW4gd2hlbiBzY3JvbGxlZCBub3Qgd3Jva2luZyovXFxuXFxuI2Zvcm1UaXRsZURpdiA+IGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbmZvcm0gPiAjdGFza0xpc3RJdGVtQ29udGFpbmVyID4gZGl2ID4gaW1nIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDAuMDVlbTtcXG59XFxuXFxuZm9ybSA+ICN0YXNrTGlzdEl0ZW1Db250YWluZXIgPiBkaXYgPiBpbWc6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbn1cXG5cXG4vKiBkaXYgd2hpY2ggY29udGFpbnMgdGhlIHZhcmlvdXMgdGFza3MgaW4gdGhlIGZvcm0qL1xcbiN0YXNrTGlzdEl0ZW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuIC8qIGRpdiBpbiB3aGljaCB0aGUgcGx1cyBhbmQgdGhlIHRleHQgYm94IHRvIGFkZCBsaXN0IGl0ZW0gcmVzaWRlKi9cXG4jYWRkVGFza0xpc3RJdGVtLFxcbi50YXNrTGlzdEl0ZW0geyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXG4gICAgZ2FwOiAwLjJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTsgLypjaGVjayBib3ggY2Fubm90IGJlIGNoZWNrZWQgd2l0aG91dCB6IGluZGV4IHNldCAwIGFuZCB6IGluZGV4IG9mIHRpdGxlIGFuZCB0aGUgY2xvc2UgYnV0dG9uIGRpdiBuZWVkcyB0byBiZSBzZXQgdG8gMiB0byBhdm9pZCBjaGVja2JveCBiZWVuIG9uIHRvcCBvZiB0aXRsZSBvbiBzY3JvbGwqL1xcbiAgICAvKiBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwOyAqL1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTNweDtcXG4gICAgaGVpZ2h0OiAxM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4udGFza0xpc3RJdGVtOmZvY3VzLXdpdGhpbjo6YWZ0ZXIsXFxuI2FkZFRhc2tMaXN0SXRlbTpmb2N1cy13aXRoaW46OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAtMC44ZW07XFxuICAgIGxlZnQ6IC0wLjhlbTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4jZm9ybUNsb3NlQnV0dG9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcG9zaXRpb246IHN0aWNreTsgXFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbn0gLyp0byBtYWtlIHRoZSBjbG9zZSBzdGF5IGF0IGJ1dHRvbiBldmVuIHdoZW4gc2Nyb2xsZWQgbm90IHdyb2tpbmcqL1xcblxcbiNmb3JtVGl0bGVEaXY6OmJlZm9yZSxcXG4jZm9ybUNsb3NlQnV0dG9uRGl2OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogLTAuOGVtO1xcbiAgICByaWdodDogLTAuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4jY2xvc2VGb3JtQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS10ZXh0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMC4yNWVtIDAuOGVtO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuI2Nsb3NlRm9ybUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIGJhY2sgZ3JvdW5kIGNvbG9yIG9mIHRoZSBjbG9zZSBmb3JtIGJ1dHRvbiBvbiBob3ZlciovXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBUYXNrKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlU3RhdHVzID0gZmFsc2U7XG59XG5cblRhc2sucHJvdG90eXBlLm1hcmtDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY29tcGxldGVTdGF0dXMgPSB0cnVlO1xufVxuXG5UYXNrLnByb3RvdHlwZS5pc0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGVTdGF0dXM7XG59XG5cbmZ1bmN0aW9uIFRhc2tMaXN0KHRpdGxlLCBpbmRleCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xufVxuXG5UYXNrTGlzdC5wcm90b3R5cGUuZGlzcGxheUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IGNvbnNvbGUubG9nKHRhc2spKTtcbiAgICByZXR1cm4gMTtcbn1cblxuVGFza0xpc3QucHJvdG90eXBlLmlzQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrTGlzdC5ldmVyeSh0YXNrID0+IHRhc2suaXNDb21wbGV0ZSk7XG59XG5cbmNvbnN0IHRhc2tOVGFza0xpc3RNYW5hZ2VyID0gKGZ1bmN0aW9uIGNvbnRyb2woKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgbGV0IGN1cnJlbnRUYXNrTGlzdDtcbiAgICBcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdCA9IG5ldyBUYXNrTGlzdCgnZGVmYXVsdCcsIHByb2plY3RzLmxlbmd0aCk7XG4gICAgICAgIHByb2plY3RzLnB1c2goY3VycmVudFRhc2tMaXN0KTtcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gcHJvbXB0KCdFbnRlciB0aGUgdGl0bGUgb2YgdGFzaycpIHx8ICd0YXNrJyArIGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5sZW5ndGg7XG4gICAgICAgIGxldCBkdWVEYXRlID0gcHJvbXB0KCdFbnRlciBkYXRlIGluIGRkL21tL3l5Jyk7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IHByb21wdCgnRW50ZXIgcHJpb3JpdHknKSB8fCAwO1xuICAgICAgICBjdXJyZW50VGFza0xpc3QudGFza0xpc3QucHVzaChuZXcgVGFzayh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrTGlzdCgpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gcHJvbXB0KCdlbnRlciB0aGUgdGl0bGUgb2YgdGhlIGxpc3QnKSB8fCAndGFza0xpc3QnO1xuICAgICAgICBjdXJyZW50VGFza0xpc3QgPSBuZXcgVGFza0xpc3QodGl0bGUsIHByb2plY3RzLmxlbmd0aCk7XG4gICAgICAgIHByb2plY3RzLnB1c2goY3VycmVudFRhc2tMaXN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudFRhc2tMaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFza0xpc3QudGl0bGUpO1xuICAgICAgICBpZihjdXJyZW50VGFza0xpc3QudGFza0xpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFRhc2tMaXN0LmRpc3BsYXlBbGwoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUFsbFByb2plY3RzKCkge1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHRhc2tMaXN0ID0+IGNvbnNvbGUubG9nKHRhc2tMaXN0LnRpdGxlLCB0YXNrTGlzdC5pbmRleCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcmtUYXNrQ29tcGxldGUoaW5kZXgpIHtcbiAgICAgICAgaWYoY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0Lmxlbmd0aCA8IGluZGV4IHx8ICFpbmRleCB8fCBpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0W2luZGV4XS5tYXJrQ29tcGxldGUoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoQ3VycmVudFRhc2tMaXN0VG8oaW5kZXgpIHtcbiAgICAgICAgaWYocHJvamVjdHMubGVuZ3RoIDwgaW5kZXggfHwgIWluZGV4IHx8IGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VGFza0xpc3QgPSBwcm9qZWN0c1tpbmRleF07XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN1cnJlbnRUYXNrTGlzdElzQ29tcGxldGUoKSB7XG4gICAgICAgIGlmKGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUYXNrTGlzdC5pc0NvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVGFzayxcbiAgICAgICAgY3JlYXRlVGFza0xpc3QsXG4gICAgICAgIGRpc3BsYXlDdXJyZW50VGFza0xpc3QsXG4gICAgICAgIGRpc3BsYXlBbGxQcm9qZWN0cyxcbiAgICAgICAgbWFya1Rhc2tDb21wbGV0ZSxcbiAgICAgICAgc3dpdGNoQ3VycmVudFRhc2tMaXN0VG8sXG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdElzQ29tcGxldGVcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sKGNob2ljZSkge1xuXG4gICAgbGV0IGluZGV4O1xuICAgIHN3aXRjaChjaG9pY2UpIHtcbiAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgIHRhc2tOVGFza0xpc3RNYW5hZ2VyLmNyZWF0ZVRhc2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgdGFza05UYXNrTGlzdE1hbmFnZXIuY3JlYXRlVGFza0xpc3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRhc2tOVGFza0xpc3RNYW5hZ2VyLmRpc3BsYXlDdXJyZW50VGFza0xpc3QoKSA9PSAwID8gJ25vIHRhc2sgaW4gdGhlIGN1cnJlbnQgdGFzayBsaXN0JyA6ICdBbGwgdGhlIHRhc2sgb2YgdGhlIGN1cnJlbnQgdGFzayBsaXN0IGRpc3BsYXllZCc7XG4gICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICB0YXNrTlRhc2tMaXN0TWFuYWdlci5kaXNwbGF5QWxsUHJvamVjdHMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgaW5kZXggPSBwcm9tcHQoJ0VudGVyIHRoZSBpbmRleCBvZiB0YXNrIHRvIG1hcmsgY29tcGxldGUnKTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrTlRhc2tMaXN0TWFuYWdlci5tYXJrVGFza0NvbXBsZXRlKGluZGV4KSA9PSAxID8gJ3Rhc2sgbWFya2VkIGNvbXBsZXRlJyA6ICdpbmRleCBpcyBub3QgaW4gcmFuZ2Ugb2YgdGhlIGN1cnJlbnQgdGFzayBsaXN0IG9yIGluZGV4IHdhcyB1bmRlZmluZWQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICBpbmRleCA9IHByb21wdCgnRW50ZXIgdGhlIGluZGV4IG9mIHRhc2sgbGlzdCB0byBtYWtlIGN1cnJlbnQgdGFzayBsaXN0Jyk7XG4gICAgICAgICAgICByZXR1cm4gdGFza05UYXNrTGlzdE1hbmFnZXIuc3dpdGNoQ3VycmVudFRhc2tMaXN0VG8oaW5kZXgpID09IDEgPyAnY3VycmVudCB0YXNrIGxpc3QgaXMgc3dpdGNoZWQnIDogJ2luZGV4IGlzIG5vdCBpbiByYW5nZSBvZiB0aGUgcHJvamVjdCBsaXN0IG9yIGluZGV4IHdhcyB1bmRlZmluZWQnO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgbGV0IHZhbCA9IHRhc2tOVGFza0xpc3RNYW5hZ2VyLmN1cnJlbnRUYXNrTGlzdElzQ29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybiB2YWwgPT0gMCA/ICdubyB0YXNrIGluIHRoZSBjdXJyZW50IHRhc2sgbGlzdCcgOiB2YWw7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IGEgdmFsaWQgY2hvaWNlJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59IiwiLy8gY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzdCB0aGUgaGVhZGVyIHNlY3Rpb24gdGhlIG1haW4gc2VjdGlvbiBhbmQgXG4vLyB0aGUgZm9vdGVyIHNlY3Rpb24uXG5cbmltcG9ydCBwbHVzSW1hZ2UgZnJvbSAnLi4vYXNzZXN0cy9wbHVzLnN2Zyc7XG5pbXBvcnQgY2xvc2VJbWFnZSBmcm9tICcuLi9hc3Nlc3RzL2Nsb3NlLnN2ZydcblxuY29uc3QgdWlFbGVtZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGgxLnRleHRDb250ZW50ID0gJ1Rhc2tzJztcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VNYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICBsZXQgYWRkVGFza0J1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYnV0dG9uRm9ybUNvbnRhaW5lcicpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlzdENvbnRhaW5lcicpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b25EaXYpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUFkZFRhc2tCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFkZFRhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uRm9ybUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tCdXR0b24nKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ1Rha2UgYSBOb3RlLi4uJztcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFza0J1dHRvbkNsaWNrZWQpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uRGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRkVGFza0J1dHRvbihidG4pIHtcbiAgICAgICAgbGV0IGFkZFRhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uRm9ybUNvbnRhaW5lcicpO1xuICAgICAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrQnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIGFkZFRhc2tCdXR0b25EaXYucmVtb3ZlQ2hpbGQoYnRuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUYXNrQnV0dG9uQ2xpY2tlZChldmVudCkge1xuICAgICAgICByZW1vdmVBZGRUYXNrQnV0dG9uKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNyZWF0ZVRhc2tGb3JtKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oKSB7XG4gICAgICAgIGxldCBhZGRUYXNrQnV0dG9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbkZvcm1Db250YWluZXInKTtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0Zyb21UaXRsZSgpKTtcbiAgICAgICAgbGV0IHRhc2tEaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0RpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tMaXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFRhc2tMaXN0SXRlbSgpKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRGl2Q29udGFpbmVyKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVDbG9zZUZvcm1CdXR0b24oKSk7XG4gICAgICAgIGFkZFRhc2tCdXR0b25EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0Zyb21UaXRsZSgpIHtcbiAgICAgICAgLy8gbGV0IHRpdGxlRGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIHRpdGxlRGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybVRpdGxlRGl2Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1UaXRsZURpdicpO1xuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICAvLyB0aXRsZURpdkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgICAgIHJldHVybiB0aXRsZURpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVBZGRUYXNrTGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0xpc3RJdGVtJyk7XG4gICAgICAgIGxldCBwbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHBsdXMuc2V0QXR0cmlidXRlKCdzcmMnLCBwbHVzSW1hZ2UpO1xuICAgICAgICBwbHVzLnNldEF0dHJpYnV0ZSgnYWx0JywgJ3BsdXMgc2lnbicpOyAgICAgICBcbiAgICAgICAgbGV0IHRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0ZXh0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRleHRCb3guc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdMaXN0IGl0ZW0nKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHBsdXMpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dEJveCk7XG4gICAgICAgIHRleHRCb3guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0ZXh0SW5UZXh0Qm94KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlTGlzdEl0ZW0odGFza0RpdkNvbnRhaW5lcikge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tMaXN0SXRlbScpO1xuICAgICAgICBsZXQgaWRJbmRleCA9IHRhc2tEaXZDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggLSAxO1xuICAgICAgICBkaXYucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcsICcnK2lkSW5kZXgpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrTGlzdEl0ZW0nKTtcbiAgICAgICAgbGV0IHRleHRCb3ggPSBkaXYuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgdGV4dEJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRleHRJblRleHRCb3gpO1xuICAgICAgICB0ZXh0Qm94LnJlbW92ZUF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcbiAgICAgICAgdGV4dEJveC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZihldmVudC5jb2RlID09ICdFbnRlcicgJiYgTnVtYmVyKHRleHRCb3gudmFsdWUpICE9IDApIHtcbiAgICAgICAgICAgICAgICBlbnRlclByZXNzZWRPblRhc2tMaXN0SXRlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGRpdi5pbnNlcnRCZWZvcmUoY2hlY2tCb3gsIGRpdi5maXJzdENoaWxkKTtcbiAgICAgICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNsb3NlLnNldEF0dHJpYnV0ZSgnc3JjJywgY2xvc2VJbWFnZSk7XG4gICAgICAgIGNsb3NlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2Nsb3NlIHNpZ24nKTtcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrTGlzdEl0ZW1CdXR0b25DbGlja2VkKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXh0SW5UZXh0Qm94KCkge1xuICAgICAgICBsZXQgdGFza0RpdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgbWFrZUxpc3RJdGVtKHRhc2tEaXZDb250YWluZXIpO1xuICAgICAgICBsZXQgZGl2ID0gY3JlYXRlQWRkVGFza0xpc3RJdGVtKCk7XG4gICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW50ZXJQcmVzc2VkT25UYXNrTGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCBhZGRMaXN0SXRlbVRleHRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0xpc3RJdGVtID4gaW5wdXQnKTtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGZvcm0uc2Nyb2xsVG9wICs9IGZvcm0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBhZGRMaXN0SXRlbVRleHRCb3guZm9jdXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrTGlzdEl0ZW1CdXR0b25DbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGxldCByZW1vdmVkRGl2SW5kZXggPSByZW1vdmVUYXNrTGlzdEl0ZW0oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgdXBkYXRlRGF0YVRhc2tJbmRleChyZW1vdmVkRGl2SW5kZXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2tMaXN0SXRlbShpbWcpIHtcbiAgICAgICAgbGV0IHBhcmVudERpdiA9IGltZy5wYXJlbnRFbGVtZW50O1xuICAgICAgICB3aGlsZShwYXJlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGFyZW50RGl2LnJlbW92ZUNoaWxkKHBhcmVudERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGl2SW5kZXggPSBwYXJlbnREaXYuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpO1xuICAgICAgICBsZXQgdGFza0RpdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgdGFza0RpdkNvbnRhaW5lci5yZW1vdmVDaGlsZChwYXJlbnREaXYpO1xuICAgICAgICByZXR1cm4gZGl2SW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGF0YVRhc2tJbmRleChpbmRleCkge1xuICAgICAgICBsZXQgdGFza0xpc3RJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtdGFza0luZGV4XScpKTtcbiAgICAgICAgZm9yKGxldCBpPWluZGV4OyBpPHRhc2tMaXN0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhc2tMaXN0SXRlbXNbaV0uc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcsIFwiXCIraSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDbG9zZUZvcm1CdXR0b24oKSB7XG4gICAgICAgIGxldCBmb3JtQ2xvc2VCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUNsb3NlQnV0dG9uRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybUNsb3NlQnV0dG9uRGl2Jyk7IFxuICAgICAgICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlRm9ybUJ1dHRvbicpO1xuICAgICAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtQnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIGZvcm1DbG9zZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgICAgIHJldHVybiBmb3JtQ2xvc2VCdXR0b25EaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VGb3JtQnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgICAgICBjcmVhdGVBZGRUYXNrQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUZvcm1CdXR0b24nKTtcbiAgICAgICAgY2xvc2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm1CdXR0b25DbGlja2VkKTtcbiAgICAgICAgbGV0IGFkZFRhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uRm9ybUNvbnRhaW5lcicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uRGl2LnJlbW92ZUNoaWxkKGZvcm0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1ha2VIZWFkZXIsXG4gICAgICAgIG1ha2VNYWluLFxuICAgICAgICBjcmVhdGVBZGRUYXNrQnV0dG9uXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnQoZG9jdW1lbnQpIHtcbiAgICBcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHVpRWxlbWVudHMubWFrZUhlYWRlcigpO1xuICAgICAgICB1aUVsZW1lbnRzLm1ha2VNYWluKCk7XG4gICAgICAgIHVpRWxlbWVudHMuY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuICAgIH0pKCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjb250cm9sIGZyb20gJy4vbW9kdWxlcy90YXNrX3Rhc2tMaXN0LmpzJztcbmltcG9ydCBzdGFydCBmcm9tICcuL21vZHVsZXMvdWkuanMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcydcblxuc3RhcnQoZG9jdW1lbnQpO1xuXG4vLyBtYWtlSGVhZGVyKGRvY3VtZW50KTtcbi8vIGFkZFRhc2tCdXR0b24oZG9jdW1lbnQpO1xuXG5jb25zb2xlLmxvZygndG8gZG8gbGlzdCcpOyBcblxuXG4vLyBmdW5jdGlvbiBjaG9pY2VJbmRleCgpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiRW50ZXIgdGhlIGZvbGxvd2luZyBudW1iZXIgdG8gZG8gdGhlIGZvbGxvd2luZ1wiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIjEgQ3JlYXRlIFRhc2sgaW4gdGhlIGN1cnJlbnQgVGFzayBsaXN0XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiMiBDcmVhdGUgYSBuZXcgVGFzayBsaXN0IGFuZCBtYWtlcyBpdCBjdXJyZW50XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiMyBUbyBkaXNwbGF5IGFsbCB0aGUgdGFzayBpbiB0aGUgY3VycmVudCB0YXNrbGlzdFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIjQgRGlzcGxheSBhbGwgdGhlIHRhc2tsaXN0XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiNSBNYXJrIGEgdGFzayBjb21wbGV0ZVwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIjYgU3dpdGNoIHRvIGEgZGlmZmVyZW50IHRhc2sgbGlzdFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIjcgQXJlIGFsbCB0aGUgdGFzayBpbiBjdXJyZW50IHRhc2sgbGlzdCBjb21wbGV0ZVwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIjggZGlzcGxheSBjb250cm9scyBhZ2FpblwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuLy8gfVxuXG4vLyBjaG9pY2VJbmRleCgpO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgICBpZihldmVudC5rZXkgPT0gJzgnKSB7XG4vLyAgICAgICAgIGNob2ljZUluZGV4KCk7XG4vLyAgICAgfVxuLy8gICAgIGxldCBtZXNzYWdlID0gY29udHJvbChldmVudC5rZXkpO1xuLy8gICAgIGlmKG1lc3NhZ2UpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4vLyAgICAgfVxuLy8gfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9