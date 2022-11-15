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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/check.svg */ "./src/assests/check.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --black-bg-color:#222;\n    --white-text-color: whitesmoke;\n    --white-border-color: white;\n    --border-thickness: 2px;\n    --border-radius: 10px;\n}\n\nbody {\n    font-size: 1.1rem;\n    background-color: var(--black-bg-color);\n    color: var(--white-text-color);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\nheader {\n    width: 100%;\n    padding: 0.5em 0.8em;\n    background-color: inherit;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    z-index: 3;\n    top: 0;\n}\n\nmain {\n    margin-top: 58px;\n    display: flex;\n    flex-direction: column;\n    width: inherit;\n    gap: 20px;\n}\n\n#buttonFormContainer {           /* div inside of main which containes the button for the creation of list and tasks*/\n    display: grid;\n    place-content: center;\n    padding: 0.5em 0.8em;\n    width: 100%;\n    grid-template-columns: 0.4fr;\n}\n\n#addTaskButton {                  /* button at the top which create the form element to make list and the task*/\n    background-color: inherit;\n    color: inherit;\n    padding: 0.5em 0.8em;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    font-size: 0.85em;\n    text-align: left;\n    width: 1fr;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    min-width: fit-content;\n    max-height: 20em;\n    padding: 0 0.8em;\n    overflow: hidden auto;\n    position: relative;\n}\n\n#formTitleDiv > input,\nform > #taskListItemContainer > div > input {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    font-size: 0.85em;\n    color: var(--white-text-color);\n    padding: 0.2em 0.5em;\n}\n\n#formTitleDiv {\n    position: sticky;\n    top: 0px;\n    background-color: var(--black-bg-color);\n    padding: 0.4em 0;\n    z-index: 2;\n    display: flex;\n    /* position: relative; */\n}\n\n#formTitleDiv > input {\n    flex-grow: 1;\n    font-size: 1em;\n    word-wrap: break-word;\n    word-break: break-all;\n    height:fit-content;\n}\n\nform > #taskListItemContainer > div > img {\n    width: 18px;\n    padding: 0.05em;\n}\n\nform > #taskListItemContainer > div > img:hover {\n    background-color: #333;\n}\n\n/* div which contains the various tasks in the form*/\n#taskListItemContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n /* div in which the plus and the text box to add list item reside*/\n#addTaskListItem,\n.taskListItem { \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-items: center;\n    padding: 0.2em 0.5em;\n    gap: 0.2em;\n    position: relative;\n}\n\n.taskListItem > input[type='text'] {\n    flex-grow: 1;\n}\n\n.taskListItem > input[type='checkbox'],\n.taskDiv > input[type='checkbox'] {\n    position: relative;\n    z-index: 1; /*check box cannot be checked without z index set 0 and z index of title and the close button div needs to be set to 2 to avoid checkbox been on top of title on scroll*/\n    /* height: 0;\n    width: 0; */\n    /* margin-top: 0.1em; */\n}\n\n.taskListItem > input[type='checkbox']::before,\n.taskDiv > input[type='checkbox']::before  {\n    content: ' ';\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    width: 15px;\n    height: 15px;\n    background-color: var(--black-bg-color);\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: 2px;\n}\n\n.taskDiv > input[type='checkbox']::before {\n    top: 0px;\n    left: 0px;\n    width: 14px;\n    height: 14px;\n}\n\n.taskListItem > input[type='checkbox']:checked::before,\n.taskDiv > input[type='checkbox']:checked::before {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");  /*I dont know if this is a good way to do this or should this be done using javascirpt*/\n}\n\n.taskListItem > input[type='date'],\n.taskDiv > input [type='date'] {\n    position: relative;\n    flex-shrink: 0;\n    z-index: 1; /* without this the date picker was not working when clicked upon*/\n}\n\n.taskListItem:focus-within::after,\n#addTaskListItem:focus-within::after {\n    position: absolute;\n    content: '';\n    top: 0;\n    bottom: 0;\n    right: -0.8em;\n    left: -0.8em;\n    border-top: 2px solid var(--white-border-color);\n    border-bottom: 2px solid var(--white-border-color);\n}\n\n#formCloseButtonDiv {\n    display: flex;\n    justify-content: flex-end;\n    position: sticky; \n    z-index: 2;\n    padding: 0.4em 0;\n    bottom: 0;\n    background-color: var(--black-bg-color);\n} /*to make the close stay at button even when scrolled not wroking*/\n\n#formTitleDiv::before,\n#formCloseButtonDiv::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -0.8em;\n    right: -0.8em;\n    background-color: var(--black-bg-color);\n    z-index: -1;\n}\n\n#closeFormButton {\n    background-color: var(--black-bg-color);\n    border: none;\n    color: var(--white-text-color);\n    padding: 0.25em 0.8em;\n    border: var(--border-thickness) solid transparent;\n    border-radius: var(--border-radius);\n}\n\n#closeFormButton:hover {\n    background-color: #333; /* back ground color of the close form button on hover*/\n}\n\n#listContainer {\n    font-family: sans-serif;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 200px);\n    /* grid-template-rows: masonry; */\n    padding: 0.4em 2em;\n    gap: 1em;\n    justify-content: center; \n    /* position: relative; */\n\n    /* display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 1em;\n    justify-content: center; \n    align-content: center;  */\n}\n\n.taskList {\n    padding: 0.5em;\n    border: var(--white-border-color) solid calc(var(--border-thickness) - 1px);\n    border-radius: var(--border-radius);\n\n    height: fit-content;\n    max-height: 21em;  \n\n    width: 200px;\n    /* flex: 0 0 auto; */\n    /* align-self: flex-start; */\n\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    /* gap: 0.5em; */\n}\n\n.taskListTitle {\n    font-size: 1.15em;\n    word-wrap: break-word;\n    word-break: break-all;\n    outline: none;\n    padding: 0.2em 0;\n}\n\n.unCompleteTaskDiv,\n.completeTaskDiv {\n    display: flex;\n    flex-direction: column;\n    /* gap: 0.2em; */\n}\n\n.unCompleteTaskDiv > .taskDiv,\n.completeTaskDiv > .taskDiv {\n    padding: 0.4em 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 10px;\n}\n\n.unCompleteTaskDiv > .taskDiv > .taskTitleDiv,\n.completeTaskDiv > .taskDiv > .taskTitleDiv{\n    font-size: 0.85em;\n    line-height: 1em;\n    word-wrap: break-word;\n    word-break: break-all;\n    max-width: 74%;\n    border: none; \n    outline: none;\n    flex-grow: 1;\n    line-height: 1.2em;\n}\n\n.completeTaskDiv {\n    opacity: 0.5;\n}\n\n#currentTaskList {\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    background-color: var(--black-bg-color);\n    padding: 0.6em;\n    transform-origin: center;\n\n    position: absolute;\n    z-index: 4;\n    top: 25%;\n    left: 25%;\n\n    width: 50%;\n    height: fit-content;\n    max-height: 90%;\n    overflow: hidden auto;\n\n    display: flex;\n    flex-direction: column;\n}\n\n#currentTaskList input{\n    background-color: inherit;\n    border: none;\n    outline: none;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --black-bg-color:#222;\n    --white-text-color: whitesmoke;\n    --white-border-color: white;\n    --border-thickness: 2px;\n    --border-radius: 10px;\n}\n\nbody {\n    font-size: 1.1rem;\n    background-color: var(--black-bg-color);\n    color: var(--white-text-color);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\nheader {\n    width: 100%;\n    padding: 0.5em 0.8em;\n    background-color: inherit;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    z-index: 3;\n    top: 0;\n}\n\nmain {\n    margin-top: 58px;\n    display: flex;\n    flex-direction: column;\n    width: inherit;\n    gap: 20px;\n}\n\n#buttonFormContainer {           /* div inside of main which containes the button for the creation of list and tasks*/\n    display: grid;\n    place-content: center;\n    padding: 0.5em 0.8em;\n    width: 100%;\n    grid-template-columns: 0.4fr;\n}\n\n#addTaskButton {                  /* button at the top which create the form element to make list and the task*/\n    background-color: inherit;\n    color: inherit;\n    padding: 0.5em 0.8em;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    font-size: 0.85em;\n    text-align: left;\n    width: 1fr;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    min-width: fit-content;\n    max-height: 20em;\n    padding: 0 0.8em;\n    overflow: hidden auto;\n    position: relative;\n}\n\n#formTitleDiv > input,\nform > #taskListItemContainer > div > input {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    font-size: 0.85em;\n    color: var(--white-text-color);\n    padding: 0.2em 0.5em;\n}\n\n#formTitleDiv {\n    position: sticky;\n    top: 0px;\n    background-color: var(--black-bg-color);\n    padding: 0.4em 0;\n    z-index: 2;\n    display: flex;\n    /* position: relative; */\n}\n\n#formTitleDiv > input {\n    flex-grow: 1;\n    font-size: 1em;\n    word-wrap: break-word;\n    word-break: break-all;\n    height:fit-content;\n}\n\nform > #taskListItemContainer > div > img {\n    width: 18px;\n    padding: 0.05em;\n}\n\nform > #taskListItemContainer > div > img:hover {\n    background-color: #333;\n}\n\n/* div which contains the various tasks in the form*/\n#taskListItemContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n /* div in which the plus and the text box to add list item reside*/\n#addTaskListItem,\n.taskListItem { \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-items: center;\n    padding: 0.2em 0.5em;\n    gap: 0.2em;\n    position: relative;\n}\n\n.taskListItem > input[type='text'] {\n    flex-grow: 1;\n}\n\n.taskListItem > input[type='checkbox'],\n.taskDiv > input[type='checkbox'] {\n    position: relative;\n    z-index: 1; /*check box cannot be checked without z index set 0 and z index of title and the close button div needs to be set to 2 to avoid checkbox been on top of title on scroll*/\n    /* height: 0;\n    width: 0; */\n    /* margin-top: 0.1em; */\n}\n\n.taskListItem > input[type='checkbox']::before,\n.taskDiv > input[type='checkbox']::before  {\n    content: ' ';\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    width: 15px;\n    height: 15px;\n    background-color: var(--black-bg-color);\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: 2px;\n}\n\n.taskDiv > input[type='checkbox']::before {\n    top: 0px;\n    left: 0px;\n    width: 14px;\n    height: 14px;\n}\n\n.taskListItem > input[type='checkbox']:checked::before,\n.taskDiv > input[type='checkbox']:checked::before {\n    background-image: url(./assests/check.svg);  /*I dont know if this is a good way to do this or should this be done using javascirpt*/\n}\n\n.taskListItem > input[type='date'],\n.taskDiv > input [type='date'] {\n    position: relative;\n    flex-shrink: 0;\n    z-index: 1; /* without this the date picker was not working when clicked upon*/\n}\n\n.taskListItem:focus-within::after,\n#addTaskListItem:focus-within::after {\n    position: absolute;\n    content: '';\n    top: 0;\n    bottom: 0;\n    right: -0.8em;\n    left: -0.8em;\n    border-top: 2px solid var(--white-border-color);\n    border-bottom: 2px solid var(--white-border-color);\n}\n\n#formCloseButtonDiv {\n    display: flex;\n    justify-content: flex-end;\n    position: sticky; \n    z-index: 2;\n    padding: 0.4em 0;\n    bottom: 0;\n    background-color: var(--black-bg-color);\n} /*to make the close stay at button even when scrolled not wroking*/\n\n#formTitleDiv::before,\n#formCloseButtonDiv::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -0.8em;\n    right: -0.8em;\n    background-color: var(--black-bg-color);\n    z-index: -1;\n}\n\n#closeFormButton {\n    background-color: var(--black-bg-color);\n    border: none;\n    color: var(--white-text-color);\n    padding: 0.25em 0.8em;\n    border: var(--border-thickness) solid transparent;\n    border-radius: var(--border-radius);\n}\n\n#closeFormButton:hover {\n    background-color: #333; /* back ground color of the close form button on hover*/\n}\n\n#listContainer {\n    font-family: sans-serif;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 200px);\n    /* grid-template-rows: masonry; */\n    padding: 0.4em 2em;\n    gap: 1em;\n    justify-content: center; \n    /* position: relative; */\n\n    /* display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 1em;\n    justify-content: center; \n    align-content: center;  */\n}\n\n.taskList {\n    padding: 0.5em;\n    border: var(--white-border-color) solid calc(var(--border-thickness) - 1px);\n    border-radius: var(--border-radius);\n\n    height: fit-content;\n    max-height: 21em;  \n\n    width: 200px;\n    /* flex: 0 0 auto; */\n    /* align-self: flex-start; */\n\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    /* gap: 0.5em; */\n}\n\n.taskListTitle {\n    font-size: 1.15em;\n    word-wrap: break-word;\n    word-break: break-all;\n    outline: none;\n    padding: 0.2em 0;\n}\n\n.unCompleteTaskDiv,\n.completeTaskDiv {\n    display: flex;\n    flex-direction: column;\n    /* gap: 0.2em; */\n}\n\n.unCompleteTaskDiv > .taskDiv,\n.completeTaskDiv > .taskDiv {\n    padding: 0.4em 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 10px;\n}\n\n.unCompleteTaskDiv > .taskDiv > .taskTitleDiv,\n.completeTaskDiv > .taskDiv > .taskTitleDiv{\n    font-size: 0.85em;\n    line-height: 1em;\n    word-wrap: break-word;\n    word-break: break-all;\n    max-width: 74%;\n    border: none; \n    outline: none;\n    flex-grow: 1;\n    line-height: 1.2em;\n}\n\n.completeTaskDiv {\n    opacity: 0.5;\n}\n\n#currentTaskList {\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    background-color: var(--black-bg-color);\n    padding: 0.6em;\n    transform-origin: center;\n\n    position: absolute;\n    z-index: 4;\n    top: 25%;\n    left: 25%;\n\n    width: 50%;\n    height: fit-content;\n    max-height: 90%;\n    overflow: hidden auto;\n\n    display: flex;\n    flex-direction: column;\n}\n\n#currentTaskList input{\n    background-color: inherit;\n    border: none;\n    outline: none;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/modules/make_task_info_form.js":
/*!********************************************!*\
  !*** ./src/modules/make_task_info_form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_taskList_Data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_taskList_Data.js */ "./src/modules/task_taskList_Data.js");
/* harmony import */ var _ui_taskDiv_interact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui_taskDiv_interact.js */ "./src/modules/ui_taskDiv_interact.js");
/* harmony import */ var _assests_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/plus.svg */ "./src/assests/plus.svg");
/* harmony import */ var _assests_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/close.svg */ "./src/assests/close.svg");


// import displayCurrentTaskList from './ui_taskDiv_interact.js';




const uiElements = (function() {

    const createAddTaskButton = function() {
        let addTaskButtonDiv = document.getElementById('buttonFormContainer');
        let btn = document.createElement('button');
        btn.setAttribute('id', 'addTaskButton');
        btn.textContent = 'Take a Note...';
        btn.addEventListener('click', addTaskButtonClicked);
        addTaskButtonDiv.appendChild(btn);
        return 'added';
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
        plus.setAttribute('src', _assests_plus_svg__WEBPACK_IMPORTED_MODULE_2__);
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
        div.setAttribute('data-formTaskIndex', ''+idIndex);
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
        close.setAttribute('src', _assests_close_svg__WEBPACK_IMPORTED_MODULE_3__);
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
        let divIndex = parentDiv.getAttribute('data-formTaskIndex');
        let taskDivContainer = document.getElementById('taskListItemContainer');
        taskDivContainer.removeChild(parentDiv);
        return divIndex;
    }

    function updateDataTaskIndex(index) {
        let taskListItems = Array.from(document.querySelectorAll('div[data-formTaskIndex]'));
        for(let i=index; i<taskListItems.length; i++) {
            taskListItems[i].setAttribute('data-formTaskIndex', ""+i);
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
        let taskListObject = createTaskListDetails();
        removeForm();
        createAddTaskButton();
        makeTaskListDiv.displayCurrentTaskList((0,_task_taskList_Data_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, taskListObject));
    }

    function createTaskListDetails() {
        let title = document.querySelector('#formTitleDiv > input').value || 'General Tasks';
        let tasksList = Array.from(document.querySelectorAll('div[data-formTaskindex]'));
        let values = tasksList.map(task => [task.childNodes[1].value,task.childNodes[2].value,task.childNodes[0].checked]);
        return {
            title, 
            values
        };
    }

    function removeForm() {
        let form = document.querySelector('form');
        let closeBtn = document.getElementById('closeFormButton');
        closeBtn.removeEventListener('click', closeFormButtonClicked);
        let addTaskButtonDiv = document.getElementById('buttonFormContainer');
        addTaskButtonDiv.removeChild(form);
    }

    return {
        createAddTaskButton,
    }
})();

const getCurrentDate = function() {
    let date = new Date();
    let month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth();
    return(date.getFullYear() + '-' + month + '-' + date.getDate());
}

const makeTaskListDiv = (function() {

    function displayCurrentTaskList(currentTaskList) {
        let currentTaskListDiv = makeTaskListDiv(currentTaskList.title, currentTaskList.index);
        let tasksList = currentTaskList.taskList;
        let unCompleteTaskDiv = currentTaskListDiv.childNodes[1];
        let completeTaskDiv = currentTaskListDiv.childNodes[2];
        let i=0, pos=0;
        while(i < 10 && pos < tasksList.length) {
            if(!tasksList[pos].completeStatus) {
                addListItem(tasksList[pos].title, unCompleteTaskDiv, pos, 0);
                i += 1;
            }
            pos += 1;
        }
        pos = 0;
        while(pos < tasksList.length) {
            if(tasksList[pos].completeStatus) {
                addListItem(tasksList[pos].title, completeTaskDiv, pos, 1);
                // i += 1;
            }
            pos += 1;
        }
    }
    
    function makeTaskListDiv(title, index) {
        let listContainer = document.getElementById('listContainer');
        let listDiv = document.createElement('div');
        listDiv.setAttribute('class', 'taskList');
        listDiv.setAttribute('data-taskListIndex', `${index}`);
        listDiv.addEventListener('click', function click() {
            if(document.getElementById('currentTaskList')) {
                return;
            }
            (0,_ui_taskDiv_interact_js__WEBPACK_IMPORTED_MODULE_1__["default"])(listDiv);
        });
        let taskListTitleDiv = document.createElement('div')
        taskListTitleDiv.setAttribute('class', 'taskListTitle');
        taskListTitleDiv.textContent = title;
        listDiv.appendChild(taskListTitleDiv);
        let unCompletedTaskContainer = document.createElement('div');
        unCompletedTaskContainer.setAttribute('class', 'unCompleteTaskDiv');
        listDiv.appendChild(unCompletedTaskContainer);
        let completedTaskContainer = document.createElement('div');
        completedTaskContainer.setAttribute('class', 'completeTaskDiv');
        listDiv.appendChild(completedTaskContainer);
        listContainer.insertBefore(listDiv, listContainer.childNodes[0]);
        return listDiv;
    }
    
    function addListItem(title, listDiv, index, taskStatus=0) {
        let taskDiv = document.createElement('div');
        taskDiv.setAttribute('class', 'taskDiv');
        taskDiv.setAttribute('data-taskIndex', index);
        let taskTitle = document.createElement('p');
        taskTitle.setAttribute('class', 'taskTitleDiv');
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        if(taskStatus == 1) {
            checkBox.checked = true;
        }
        checkBox.addEventListener('click', (event) => taskCheckBoxClicked(event ,listDiv, taskDiv));
        taskTitle.textContent = title;
        taskDiv.appendChild(checkBox);
        taskDiv.appendChild(taskTitle);
        listDiv.appendChild(taskDiv);
    }

    function taskCheckBoxClicked(event, listDiv, task) {
        let listDivIndex = listDiv.parentElement.getAttribute('data-taskListIndex')
        let taskClicked = task;
        (0,_task_taskList_Data_js__WEBPACK_IMPORTED_MODULE_0__["default"])(3, listDivIndex);
        (0,_task_taskList_Data_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, taskClicked.getAttribute('data-taskIndex'));
        let completeStatus = task.childNodes[0].checked;
        let completeTasksContainer = document.querySelector(`div[data-tasklistIndex="${listDivIndex}"] .completeTaskDiv`) || document.querySelector('#currentTaskList > .completeTaskDiv');
        let unCompleteTaskContainer = document.querySelector(`div[data-tasklistIndex="${listDivIndex}"] .unCompleteTaskDiv`) || document.querySelector('#currentTaskList > .unCompleteTaskDiv');
        if(completeStatus) {
            markTaskComplete(taskClicked, unCompleteTaskContainer, completeTasksContainer);
        } else {
            markTaskUncomplete(taskClicked, unCompleteTaskContainer, completeTasksContainer);
        }
        event.stopPropagation(); // stops the bubbling to the main list 
    }

    function markTaskComplete(task, unCompleteTaskContainer, completeTaskContainer) {
        let lastChild = unCompleteTaskContainer.childNodes[unCompleteTaskContainer.childNodes.length - 1];
        let lastChildIndex = lastChild.getAttribute('data-taskIndex');
        let info = (0,_task_taskList_Data_js__WEBPACK_IMPORTED_MODULE_0__["default"])(4, lastChildIndex);
        unCompleteTaskContainer.removeChild(task);
        if(info !==  null) {
            addListItem(info.title, unCompleteTaskContainer, info.index);
        }
        if(task.childNodes[2]) {
            task.childNodes[1].setAttribute('contenteditable', 'false');
            task.childNodes[2].disabled = true;
        }
        completeTaskContainer.appendChild(task);
    }

    function markTaskUncomplete(task, unCompleteTaskContainer, completeTaskContainer) {
        completeTaskContainer.removeChild(task);
        let index = task.getAttribute('data-taskIndex');
        let uncompleteTasks = Array.from(unCompleteTaskContainer.childNodes);
        if(task.childNodes[2]) {
            task.childNodes[1].setAttribute('contenteditable', 'true');
            task.childNodes[2].disabled = false;
        }
        completeTaskContainer.appendChild(task);
        if(uncompleteTasks.length === 0) {
            unCompleteTaskContainer.appendChild(task);
            return;
        } else if(Number(index) > Number(uncompleteTasks[uncompleteTasks.length - 1].getAttribute('data-taskIndex'))) {
            unCompleteTaskContainer.appendChild(task);
            return;
        }
        for(let i=0; i<uncompleteTasks.length; i++) {
            let tempTask = uncompleteTasks[i];
            if(Number(tempTask.getAttribute('data-taskIndex')) > Number(index)) {
                unCompleteTaskContainer.insertBefore(task, tempTask);
                break;
            }
        }
    }

    return {
        displayCurrentTaskList,
        taskCheckBoxClicked
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({uiElements, makeTaskListDiv});

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
/* harmony import */ var _make_task_info_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make_task_info_form */ "./src/modules/make_task_info_form.js");


function Task(title, dueDate, completeStatus=false) {
    this.title = title;
    this.dueDate = dueDate;
    // this.priority = priority;
    this.completeStatus = completeStatus;
}

Task.prototype.markComplete_Uncomplete = function() {
    this.completeStatus = this.completeStatus ? false : true;
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

    function createTask(title, dueDate, completeStatus) {
        currentTaskList.taskList.push(new Task(title, dueDate, completeStatus));
    }

    function createTaskList(title) {
        title = title == 'General Tasks' ? title+" "+projects.length : title;
        currentTaskList = new TaskList(title, projects.length);
        projects.push(currentTaskList);
    }

    function displayCurrentTaskList() {
        console.log(currentTaskList.title);
        if(currentTaskList.taskList.length == 0) {
            return 0
        }
        // currentTaskList.displayAll();
        return 1;
    }

    function getCurrentTaskList() {
        const copyCurrentTaskList = Object.assign({}, currentTaskList);
        populateStorage();
        return copyCurrentTaskList;
    }

    function markTaskComplete_Uncomplete(index) {
        if(currentTaskList.taskList.length < index || !index || index == -1) {
            return 0;
        }
        currentTaskList.taskList[index].markComplete_Uncomplete();
        populateStorage();
        return 1;
    }

    function switchCurrentTaskListTo(index) {
        if(projects.length < index || !index || index == -1) {
            return 0;
        }
        currentTaskList = projects[index];
        return 1;
    }

    function getUncompletedTaskAfter(index) {
        for(let i=Number(index)+1; i<currentTaskList.taskList.length; i++) {
            let task = currentTaskList.taskList[i];
            if(!task.isComplete()) {
                return {
                    title: task.title,
                    index: i,
                    dueDate: task.dueDate,
                    completeStatus: task.completeStatus,
                };
            }
        }
        return null;
    }

    function updateCurrentTaskList(taskList) {
        currentTaskList.title = taskList.title;
        currentTaskList.taskList = [];
        taskList.tasks.forEach((task) => {
            currentTaskList.taskList.push(new Task(task.title, task.dueDate, task.completeStatus));
        })
        populateStorage();
    }

    function storageAvailable() {
        let storage;
        try {
            storage = window.localStorage;
            const x = '__storage test__';
            storage.setItem(x,x);
            storage.removeItem(x);
            return true;
        } catch(e) {
            // console.log(e);
        }
    }
    
    function populateStorage() {
        if(!storageAvailable) {
            return;
        }
        console.log(currentTaskList);
        localStorage.setItem(`${currentTaskList.index}`, JSON.stringify(currentTaskList));
        // console.log(localStorage);
    }

    function printLocalStorageKeys() {
        let keys;
        if(storageAvailable()) {
            keys = Object.keys(localStorage);
            keys = keys.sort();
        }
        // console.log(keys);
        if(keys.length > 0) {
            keys.forEach(key => {
                let taskList = JSON.parse(localStorage.getItem(key));
                console.log(taskList.index);
                createTaskList(taskList.title);
                taskList.taskList.forEach(task => createTask(task.title, task.dueDate, task.completeStatus));
                
                _make_task_info_form__WEBPACK_IMPORTED_MODULE_0__["default"].makeTaskListDiv.displayCurrentTaskList(currentTaskList);
            })
        }
        
    }

    return {
        createTask,
        createTaskList,
        displayCurrentTaskList,
        getCurrentTaskList,
        markTaskComplete_Uncomplete,
        switchCurrentTaskListTo,
        getUncompletedTaskAfter,
        updateCurrentTaskList,
        printLocalStorageKeys
    }
})();

function control(choice, option) {

    switch(choice) {
        case 1:
            taskNTaskListManager.createTaskList(option.title); // here option is object which create a new tasklist with all the task
            option.values.forEach(val => taskNTaskListManager.createTask(val[0], val[1], val[2]));
            return taskNTaskListManager.getCurrentTaskList();
        case 2: 
            taskNTaskListManager.markTaskComplete_Uncomplete(option); // here option is the index of the task which need to be marked complete in specific task
            break;
        case 3: 
            taskNTaskListManager.switchCurrentTaskListTo(option); // here option is the index of the tasklist which need to be made current
            break;
        case 4: 
            return(taskNTaskListManager.getUncompletedTaskAfter(option));
            break;
        case 5:
            taskNTaskListManager.displayCurrentTaskList();
            break;
        case 6:
            return taskNTaskListManager.getCurrentTaskList();
            break;
        case 7: 
            taskNTaskListManager.updateCurrentTaskList(option);
            break;
        case 8:
            taskNTaskListManager.printLocalStorageKeys();
            break;
        default:
            console.log('Not a valid choice');
            break;
    }
}

/***/ }),

/***/ "./src/modules/ui_taskDiv_interact.js":
/*!********************************************!*\
  !*** ./src/modules/ui_taskDiv_interact.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ control2)
/* harmony export */ });
/* harmony import */ var _task_taskList_Data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_taskList_Data.js */ "./src/modules/task_taskList_Data.js");
/* harmony import */ var _make_task_info_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make_task_info_form */ "./src/modules/make_task_info_form.js");



function control2(listDiv) {
    console.log(listDiv.getAttribute('data-taskListIndex'));
    listDiv.classList.remove('taskList');
    let taskListIndex = listDiv.getAttribute('data-taskListIndex');
    (0,_task_taskList_Data_js__WEBPACK_IMPORTED_MODULE_0__["default"])(3, taskListIndex);
    let currentTaskList = (0,_task_taskList_Data_js__WEBPACK_IMPORTED_MODULE_0__["default"])(6, taskListIndex);
    listDiv.setAttribute('id', 'currentTaskList');
    makeTitleDivEditable(listDiv, currentTaskList.title);
    let uncompleteTaskList = document.querySelector(`div[data-taskListIndex="${taskListIndex}"] > .unCompleteTaskDiv`);
    let completeTaskList = document.querySelector(`div[data-taskListIndex="${taskListIndex}"] > .completeTaskDiv`);
    let unCompleteTasks = uncompleteTaskList.childNodes;
    let completeTasks = completeTaskList.childNodes;
    for(let i=0; i<unCompleteTasks.length; i++) {
        console.log(unCompleteTasks[i]);
        let index = Number(unCompleteTasks[i].getAttribute('data-taskIndex'));
        modifyExistingTask(unCompleteTasks[i], currentTaskList.taskList[index].dueDate);
    }
    for(let i=0; i<completeTasks.length; i++) {
        let index = Number(completeTasks[i].getAttribute('data-taskIndex'));
        modifyExistingTask(completeTasks[i], currentTaskList.taskList[index].dueDate, false);
    }
    let lastChildIndex = uncompleteTaskList.lastChild.getAttribute('data-taskIndex');
    // console.log(lastChildIndex);
    for(let i=Number(lastChildIndex)+1; i<currentTaskList.taskList.length; i++) {
        let task = currentTaskList.taskList[i];
        // console.log();
        if(!task.completeStatus) {
            uncompleteTaskList.appendChild(makeTask(i, task.title, task.dueDate));
        }
    }
    listDiv.appendChild(makeCloseButton());
    makeCurrentListCenter();
}

function makeCurrentListCenter() {
    let currentList = document.getElementById('currentTaskList');
    let currentListHeight = currentList.offsetHeight;
    let windowHeight = window.innerHeight;
    currentList.style.top = `${(windowHeight - currentListHeight) / 2}px`
}

function makeTitleDivEditable(listDiv, title) {
    if(listDiv.firstChild.getAttribute('class') === 'taskListTitle' ) {
        let titleDiv = listDiv.firstChild;
        titleDiv.setAttribute('contenteditable', "true");
    }
}

function modifyExistingTask(taskDiv, dueDate, isEditable=true) {
    taskDiv.childNodes[1].setAttribute('contenteditable', isEditable);
    taskDiv.childNodes[1].addEventListener('keydown', enterPressedOnDiv);
    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('value', dueDate );
    dateInput.disabled = !isEditable;
    taskDiv.appendChild(dateInput);
}

function makeTask(index, title, dueDate, completeStatus=false) {
    let listDiv = document.getElementById('currentTaskList');
    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'taskDiv');
    taskDiv.setAttribute('data-taskIndex', index);
    let taskTitle = document.createElement('div');
    taskTitle.setAttribute('class', 'taskTitleDiv');
    taskTitle.setAttribute('contenteditable', 'true');
    taskTitle.textContent = title;
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('click', (event) => _make_task_info_form__WEBPACK_IMPORTED_MODULE_1__["default"].makeTaskListDiv.taskCheckBoxClicked(event, listDiv, taskDiv));
    taskTitle.textContent = title;
    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('value', dueDate);
    if(completeStatus) {
        checkBox.checked = true;
    }
    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(dateInput);
    return taskDiv;
}

function enterPressedOnDiv(event) {
    if(event.keyCode == '13') {
        // console.log(event.target.parentElement);
        let parentElement = event.target.parentElement
        event.preventDefault();
        let index = parentElement.getAttribute('data-taskIndex');
        let newElement = makeTask(null, null, null);
        parentElement.parentElement.insertBefore(newElement, parentElement.nextSibling);
        increaseDataIndexByOne(Number(index));
        newElement.setAttribute('data-taskIndex', Number(index) + 1);
        newElement.addEventListener('keydown', enterPressedOnDiv);
        newElement.childNodes[1].focus();
        makeCurrentListCenter();
    }
}

function increaseDataIndexByOne(index) {
    let taskList = document.querySelectorAll('#currentTaskList div[data-taskIndex]');
    taskList.forEach(task => {
        let i = task.getAttribute('data-taskIndex');
        if(Number(i) > index) {
            task.setAttribute('data-taskIndex', Number(i)+1);
        }
    })
}

function makeCloseButton() {
    let closeBtn = document.createElement('button');
    closeBtn.setAttribute('type', 'button');
    closeBtn.setAttribute('id', 'closeFormButton');
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', closeButtonClicked);
    return closeBtn;
}

function closeButtonClicked(event) {
    let parent = event.target.parentElement;
    parent.scrollTop = 0;
    let updatedCurrentList = makeTaskList(parent);
    removeExtraUncompleteTask(parent);
    removeDueDateElement(parent);
    parent.classList.add('taskList');
    parent.removeAttribute('id');
    parent.removeChild(event.target);
    (0,_task_taskList_Data_js__WEBPACK_IMPORTED_MODULE_0__["default"])(7, updatedCurrentList);
    event.stopPropagation();
}

function makeTaskList(parent) {
    // console.log(parent);
    let title = parent.childNodes[0].textContent;
    let taskList = Array.from(document.querySelectorAll('#currentTaskList div[data-taskIndex]'));
    let tasks = [];
    for(let i=0; i<taskList.length; i++) {
        let task = makeNewTask(taskList[i]);
        tasks[Number(task.index)] = task;
    }
    return {
        title,
        tasks
    }
}

function makeNewTask(task) {
    let index = task.getAttribute('data-taskIndex');
    let title = task.childNodes[1].textContent;
    let completeStatus = task.childNodes[0].checked;
    let dueDate = task.childNodes[2].value;
    return {
        index, 
        title,
        completeStatus,
        dueDate
    };
}

function removeExtraUncompleteTask(parent) {
    parent.childNodes[0].setAttribute('contenteditable', 'false');
    let uncompleteTaskContainer = document.querySelector('#currentTaskList>.unCompleteTaskDiv');
    let uncompleteTaskList = document.querySelectorAll('#currentTaskList>.unCompleteTaskDiv>div[data-taskIndex]');
    for(let i=9; i<uncompleteTaskList.length; i++) {
        uncompleteTaskContainer.removeChild(uncompleteTaskList[i]);
    }
}

function removeDueDateElement(parent) {
    let tasksList = document.querySelectorAll('#currentTaskList div[data-taskIndex]');
    tasksList.forEach(task => {
        task.childNodes[1].setAttribute('contenteditable', 'false');
        task.childNodes[1].removeEventListener('keydown', enterPressedOnDiv);
        task.removeChild(task.childNodes[2])
    });
}



/***/ }),

/***/ "./src/assests/check.svg":
/*!*******************************!*\
  !*** ./src/assests/check.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c3f0dda811edbc14a80.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _modules_make_task_info_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/make_task_info_form */ "./src/modules/make_task_info_form.js");
/* harmony import */ var _modules_task_taskList_Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task_taskList_Data */ "./src/modules/task_taskList_Data.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





console.log('to do list'); 

const basic_page = (function() {
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

    return {
        makeHeader,
        makeMain,
    };
})();


(function start() {
    basic_page.makeHeader();
    basic_page.makeMain();
    _modules_make_task_info_form__WEBPACK_IMPORTED_MODULE_0__["default"].uiElements.createAddTaskButton();
    (0,_modules_task_taskList_Data__WEBPACK_IMPORTED_MODULE_1__["default"])(8);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLG9FQUFvRSxnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLFdBQVcsNEJBQTRCLHFDQUFxQyxrQ0FBa0MsOEJBQThCLDRCQUE0QixHQUFHLFVBQVUsd0JBQXdCLDhDQUE4QyxxQ0FBcUMsa0JBQWtCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixHQUFHLFlBQVksa0JBQWtCLDJCQUEyQixnQ0FBZ0Msb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixpQkFBaUIsYUFBYSxHQUFHLFVBQVUsdUJBQXVCLG9CQUFvQiw2QkFBNkIscUJBQXFCLGdCQUFnQixHQUFHLHFDQUFxQyx5R0FBeUcsNEJBQTRCLDJCQUEyQixrQkFBa0IsbUNBQW1DLEdBQUcsc0NBQXNDLDhHQUE4RyxxQkFBcUIsMkJBQTJCLHNFQUFzRSwwQ0FBMEMsd0JBQXdCLHVCQUF1QixpQkFBaUIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsZUFBZSxzRUFBc0UsMENBQTBDLDZCQUE2Qix1QkFBdUIsdUJBQXVCLDRCQUE0Qix5QkFBeUIsR0FBRyx5RUFBeUUsZ0NBQWdDLG1CQUFtQixvQkFBb0Isd0JBQXdCLHFDQUFxQywyQkFBMkIsR0FBRyxtQkFBbUIsdUJBQXVCLGVBQWUsOENBQThDLHVCQUF1QixpQkFBaUIsb0JBQW9CLDZCQUE2QixLQUFLLDJCQUEyQixtQkFBbUIscUJBQXFCLDRCQUE0Qiw0QkFBNEIseUJBQXlCLEdBQUcsK0NBQStDLGtCQUFrQixzQkFBc0IsR0FBRyxxREFBcUQsNkJBQTZCLEdBQUcsbUZBQW1GLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLDZHQUE2RyxvQkFBb0IsMEJBQTBCLDBCQUEwQiw0QkFBNEIsMkJBQTJCLGlCQUFpQix5QkFBeUIsR0FBRyx3Q0FBd0MsbUJBQW1CLEdBQUcsZ0ZBQWdGLHlCQUF5QixrQkFBa0IsNExBQTRMLGdCQUFnQiw4QkFBOEIsS0FBSyxpR0FBaUcsbUJBQW1CLHlCQUF5QixnQkFBZ0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsOENBQThDLHNFQUFzRSx5QkFBeUIsR0FBRywrQ0FBK0MsZUFBZSxnQkFBZ0Isa0JBQWtCLG1CQUFtQixHQUFHLGdIQUFnSCwwRUFBMEUsMkZBQTJGLHlFQUF5RSx5QkFBeUIscUJBQXFCLGtCQUFrQixzRUFBc0UsOEVBQThFLHlCQUF5QixrQkFBa0IsYUFBYSxnQkFBZ0Isb0JBQW9CLG1CQUFtQixzREFBc0QseURBQXlELEdBQUcseUJBQXlCLG9CQUFvQixnQ0FBZ0Msd0JBQXdCLGlCQUFpQix1QkFBdUIsZ0JBQWdCLDhDQUE4QyxJQUFJLDRIQUE0SCxrQkFBa0IseUJBQXlCLGFBQWEsZ0JBQWdCLG1CQUFtQixvQkFBb0IsOENBQThDLGtCQUFrQixHQUFHLHNCQUFzQiw4Q0FBOEMsbUJBQW1CLHFDQUFxQyw0QkFBNEIsd0RBQXdELDBDQUEwQyxHQUFHLDRCQUE0Qiw4QkFBOEIsMkRBQTJELG9CQUFvQiw4QkFBOEIsb0JBQW9CLHFEQUFxRCxzQ0FBc0MsMkJBQTJCLGVBQWUsK0JBQStCLDZCQUE2QiwyQkFBMkIsMEJBQTBCLHNCQUFzQixlQUFlLCtCQUErQiw4QkFBOEIsS0FBSyxlQUFlLHFCQUFxQixrRkFBa0YsMENBQTBDLDRCQUE0Qix5QkFBeUIscUJBQXFCLHlCQUF5QixtQ0FBbUMsMkJBQTJCLG9CQUFvQiw2QkFBNkIscUJBQXFCLEtBQUssb0JBQW9CLHdCQUF3Qiw0QkFBNEIsNEJBQTRCLG9CQUFvQix1QkFBdUIsR0FBRywyQ0FBMkMsb0JBQW9CLDZCQUE2QixxQkFBcUIsS0FBSyxpRUFBaUUsdUJBQXVCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLGdCQUFnQixHQUFHLGdHQUFnRyx3QkFBd0IsdUJBQXVCLDRCQUE0Qiw0QkFBNEIscUJBQXFCLG9CQUFvQixvQkFBb0IsbUJBQW1CLHlCQUF5QixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyxzQkFBc0Isc0VBQXNFLDBDQUEwQyw4Q0FBOEMscUJBQXFCLCtCQUErQiwyQkFBMkIsaUJBQWlCLGVBQWUsZ0JBQWdCLG1CQUFtQiwwQkFBMEIsc0JBQXNCLDRCQUE0QixzQkFBc0IsNkJBQTZCLEdBQUcsMkJBQTJCLGdDQUFnQyxtQkFBbUIsb0JBQW9CLEdBQUcsT0FBTyxtRkFBbUYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxtQkFBbUIsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sbUJBQW1CLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksdUJBQXVCLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sd0JBQXdCLE9BQU8sTUFBTSxZQUFZLFdBQVcsc0JBQXNCLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksbUJBQW1CLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLG9EQUFvRCxnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLFdBQVcsNEJBQTRCLHFDQUFxQyxrQ0FBa0MsOEJBQThCLDRCQUE0QixHQUFHLFVBQVUsd0JBQXdCLDhDQUE4QyxxQ0FBcUMsa0JBQWtCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixHQUFHLFlBQVksa0JBQWtCLDJCQUEyQixnQ0FBZ0Msb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixpQkFBaUIsYUFBYSxHQUFHLFVBQVUsdUJBQXVCLG9CQUFvQiw2QkFBNkIscUJBQXFCLGdCQUFnQixHQUFHLHFDQUFxQyx5R0FBeUcsNEJBQTRCLDJCQUEyQixrQkFBa0IsbUNBQW1DLEdBQUcsc0NBQXNDLDhHQUE4RyxxQkFBcUIsMkJBQTJCLHNFQUFzRSwwQ0FBMEMsd0JBQXdCLHVCQUF1QixpQkFBaUIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsZUFBZSxzRUFBc0UsMENBQTBDLDZCQUE2Qix1QkFBdUIsdUJBQXVCLDRCQUE0Qix5QkFBeUIsR0FBRyx5RUFBeUUsZ0NBQWdDLG1CQUFtQixvQkFBb0Isd0JBQXdCLHFDQUFxQywyQkFBMkIsR0FBRyxtQkFBbUIsdUJBQXVCLGVBQWUsOENBQThDLHVCQUF1QixpQkFBaUIsb0JBQW9CLDZCQUE2QixLQUFLLDJCQUEyQixtQkFBbUIscUJBQXFCLDRCQUE0Qiw0QkFBNEIseUJBQXlCLEdBQUcsK0NBQStDLGtCQUFrQixzQkFBc0IsR0FBRyxxREFBcUQsNkJBQTZCLEdBQUcsbUZBQW1GLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLDZHQUE2RyxvQkFBb0IsMEJBQTBCLDBCQUEwQiw0QkFBNEIsMkJBQTJCLGlCQUFpQix5QkFBeUIsR0FBRyx3Q0FBd0MsbUJBQW1CLEdBQUcsZ0ZBQWdGLHlCQUF5QixrQkFBa0IsNExBQTRMLGdCQUFnQiw4QkFBOEIsS0FBSyxpR0FBaUcsbUJBQW1CLHlCQUF5QixnQkFBZ0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsOENBQThDLHNFQUFzRSx5QkFBeUIsR0FBRywrQ0FBK0MsZUFBZSxnQkFBZ0Isa0JBQWtCLG1CQUFtQixHQUFHLGdIQUFnSCxtREFBbUQsMkZBQTJGLHlFQUF5RSx5QkFBeUIscUJBQXFCLGtCQUFrQixzRUFBc0UsOEVBQThFLHlCQUF5QixrQkFBa0IsYUFBYSxnQkFBZ0Isb0JBQW9CLG1CQUFtQixzREFBc0QseURBQXlELEdBQUcseUJBQXlCLG9CQUFvQixnQ0FBZ0Msd0JBQXdCLGlCQUFpQix1QkFBdUIsZ0JBQWdCLDhDQUE4QyxJQUFJLDRIQUE0SCxrQkFBa0IseUJBQXlCLGFBQWEsZ0JBQWdCLG1CQUFtQixvQkFBb0IsOENBQThDLGtCQUFrQixHQUFHLHNCQUFzQiw4Q0FBOEMsbUJBQW1CLHFDQUFxQyw0QkFBNEIsd0RBQXdELDBDQUEwQyxHQUFHLDRCQUE0Qiw4QkFBOEIsMkRBQTJELG9CQUFvQiw4QkFBOEIsb0JBQW9CLHFEQUFxRCxzQ0FBc0MsMkJBQTJCLGVBQWUsK0JBQStCLDZCQUE2QiwyQkFBMkIsMEJBQTBCLHNCQUFzQixlQUFlLCtCQUErQiw4QkFBOEIsS0FBSyxlQUFlLHFCQUFxQixrRkFBa0YsMENBQTBDLDRCQUE0Qix5QkFBeUIscUJBQXFCLHlCQUF5QixtQ0FBbUMsMkJBQTJCLG9CQUFvQiw2QkFBNkIscUJBQXFCLEtBQUssb0JBQW9CLHdCQUF3Qiw0QkFBNEIsNEJBQTRCLG9CQUFvQix1QkFBdUIsR0FBRywyQ0FBMkMsb0JBQW9CLDZCQUE2QixxQkFBcUIsS0FBSyxpRUFBaUUsdUJBQXVCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLGdCQUFnQixHQUFHLGdHQUFnRyx3QkFBd0IsdUJBQXVCLDRCQUE0Qiw0QkFBNEIscUJBQXFCLG9CQUFvQixvQkFBb0IsbUJBQW1CLHlCQUF5QixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyxzQkFBc0Isc0VBQXNFLDBDQUEwQyw4Q0FBOEMscUJBQXFCLCtCQUErQiwyQkFBMkIsaUJBQWlCLGVBQWUsZ0JBQWdCLG1CQUFtQiwwQkFBMEIsc0JBQXNCLDRCQUE0QixzQkFBc0IsNkJBQTZCLEdBQUcsMkJBQTJCLGdDQUFnQyxtQkFBbUIsb0JBQW9CLEdBQUcsbUJBQW1CO0FBQ3Boa0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y2QztBQUNFO0FBQy9DOztBQUU0QztBQUNFOztBQUU5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw4Q0FBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQSxrQ0FBa0MsK0NBQVU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtFQUFPO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELE1BQU07QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUFRO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFPO0FBQ2YsUUFBUSxrRUFBTztBQUNmO0FBQ0EsdUZBQXVGLGFBQWE7QUFDcEcsd0ZBQXdGLGFBQWE7QUFDckc7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrRUFBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsQ0FBQyw0QkFBNEI7Ozs7Ozs7Ozs7Ozs7OztBQ3pUSjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsbUNBQW1DO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtR0FBMEM7QUFDMUQsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYzs7QUFFZjtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdMOEM7QUFDTjs7QUFFekI7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFPO0FBQ1gsMEJBQTBCLGtFQUFPO0FBQ2pDO0FBQ0E7QUFDQSwrRUFBK0UsY0FBYztBQUM3Riw2RUFBNkUsY0FBYztBQUMzRjtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQ0FBbUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVDQUF1QztBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0dBQXVDO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFPO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2QkFBNkI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FnRDtBQUNHOztBQUU5Qjs7QUFFckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLElBQUksbUdBQWtDO0FBQ3RDLElBQUksdUVBQU87QUFDWCxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9tb2R1bGVzL21ha2VfdGFza19pbmZvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tfdGFza0xpc3RfRGF0YS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL21vZHVsZXMvdWlfdGFza0Rpdl9pbnRlcmFjdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXN0cy9jaGVjay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJsYWNrLWJnLWNvbG9yOiMyMjI7XFxuICAgIC0td2hpdGUtdGV4dC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS13aGl0ZS1ib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAtLWJvcmRlci10aGlja25lc3M6IDJweDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHRvcDogMDtcXG59XFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDU4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNidXR0b25Gb3JtQ29udGFpbmVyIHsgICAgICAgICAgIC8qIGRpdiBpbnNpZGUgb2YgbWFpbiB3aGljaCBjb250YWluZXMgdGhlIGJ1dHRvbiBmb3IgdGhlIGNyZWF0aW9uIG9mIGxpc3QgYW5kIHRhc2tzKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC40ZnI7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uIHsgICAgICAgICAgICAgICAgICAvKiBidXR0b24gYXQgdGhlIHRvcCB3aGljaCBjcmVhdGUgdGhlIGZvcm0gZWxlbWVudCB0byBtYWtlIGxpc3QgYW5kIHRoZSB0YXNrKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBmb250LXNpemU6IDAuODVlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDFmcjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtaGVpZ2h0OiAyMGVtO1xcbiAgICBwYWRkaW5nOiAwIDAuOGVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2Zvcm1UaXRsZURpdiA+IGlucHV0LFxcbmZvcm0gPiAjdGFza0xpc3RJdGVtQ29udGFpbmVyID4gZGl2ID4gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcbn1cXG5cXG4jZm9ybVRpdGxlRGl2IHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMC40ZW0gMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn1cXG5cXG4jZm9ybVRpdGxlRGl2ID4gaW5wdXQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcbn1cXG5cXG5mb3JtID4gI3Rhc2tMaXN0SXRlbUNvbnRhaW5lciA+IGRpdiA+IGltZyB7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBwYWRkaW5nOiAwLjA1ZW07XFxufVxcblxcbmZvcm0gPiAjdGFza0xpc3RJdGVtQ29udGFpbmVyID4gZGl2ID4gaW1nOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG59XFxuXFxuLyogZGl2IHdoaWNoIGNvbnRhaW5zIHRoZSB2YXJpb3VzIHRhc2tzIGluIHRoZSBmb3JtKi9cXG4jdGFza0xpc3RJdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiAvKiBkaXYgaW4gd2hpY2ggdGhlIHBsdXMgYW5kIHRoZSB0ZXh0IGJveCB0byBhZGQgbGlzdCBpdGVtIHJlc2lkZSovXFxuI2FkZFRhc2tMaXN0SXRlbSxcXG4udGFza0xpc3RJdGVtIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxuICAgIGdhcDogMC4yZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2tMaXN0SXRlbSA+IGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnRhc2tMaXN0SXRlbSA+IGlucHV0W3R5cGU9J2NoZWNrYm94J10sXFxuLnRhc2tEaXYgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxOyAvKmNoZWNrIGJveCBjYW5ub3QgYmUgY2hlY2tlZCB3aXRob3V0IHogaW5kZXggc2V0IDAgYW5kIHogaW5kZXggb2YgdGl0bGUgYW5kIHRoZSBjbG9zZSBidXR0b24gZGl2IG5lZWRzIHRvIGJlIHNldCB0byAyIHRvIGF2b2lkIGNoZWNrYm94IGJlZW4gb24gdG9wIG9mIHRpdGxlIG9uIHNjcm9sbCovXFxuICAgIC8qIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7ICovXFxuICAgIC8qIG1hcmdpbi10b3A6IDAuMWVtOyAqL1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlLFxcbi50YXNrRGl2ID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlICB7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xcHg7XFxuICAgIGxlZnQ6IC0xcHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi50YXNrRGl2ID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgd2lkdGg6IDE0cHg7XFxuICAgIGhlaWdodDogMTRweDtcXG59XFxuXFxuLnRhc2tMaXN0SXRlbSA+IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlLFxcbi50YXNrRGl2ID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyAgLypJIGRvbnQga25vdyBpZiB0aGlzIGlzIGEgZ29vZCB3YXkgdG8gZG8gdGhpcyBvciBzaG91bGQgdGhpcyBiZSBkb25lIHVzaW5nIGphdmFzY2lycHQqL1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nZGF0ZSddLFxcbi50YXNrRGl2ID4gaW5wdXQgW3R5cGU9J2RhdGUnXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHotaW5kZXg6IDE7IC8qIHdpdGhvdXQgdGhpcyB0aGUgZGF0ZSBwaWNrZXIgd2FzIG5vdCB3b3JraW5nIHdoZW4gY2xpY2tlZCB1cG9uKi9cXG59XFxuXFxuLnRhc2tMaXN0SXRlbTpmb2N1cy13aXRoaW46OmFmdGVyLFxcbiNhZGRUYXNrTGlzdEl0ZW06Zm9jdXMtd2l0aGluOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogLTAuOGVtO1xcbiAgICBsZWZ0OiAtMC44ZW07XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuI2Zvcm1DbG9zZUJ1dHRvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7IFxcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwYWRkaW5nOiAwLjRlbSAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG59IC8qdG8gbWFrZSB0aGUgY2xvc2Ugc3RheSBhdCBidXR0b24gZXZlbiB3aGVuIHNjcm9sbGVkIG5vdCB3cm9raW5nKi9cXG5cXG4jZm9ybVRpdGxlRGl2OjpiZWZvcmUsXFxuI2Zvcm1DbG9zZUJ1dHRvbkRpdjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IC0wLjhlbTtcXG4gICAgcmlnaHQ6IC0wLjhlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuI2Nsb3NlRm9ybUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjhlbTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiNjbG9zZUZvcm1CdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyAvKiBiYWNrIGdyb3VuZCBjb2xvciBvZiB0aGUgY2xvc2UgZm9ybSBidXR0b24gb24gaG92ZXIqL1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lciB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjAwcHgpO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IG1hc29ucnk7ICovXFxuICAgIHBhZGRpbmc6IDAuNGVtIDJlbTtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcblxcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMWVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgICovXFxufVxcblxcbi50YXNrTGlzdCB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXI6IHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcikgc29saWQgY2FsYyh2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSAtIDFweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtaGVpZ2h0OiAyMWVtOyAgXFxuXFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgLyogZmxleDogMCAwIGF1dG87ICovXFxuICAgIC8qIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7ICovXFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGdhcDogMC41ZW07ICovXFxufVxcblxcbi50YXNrTGlzdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwO1xcbn1cXG5cXG4udW5Db21wbGV0ZVRhc2tEaXYsXFxuLmNvbXBsZXRlVGFza0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGdhcDogMC4yZW07ICovXFxufVxcblxcbi51bkNvbXBsZXRlVGFza0RpdiA+IC50YXNrRGl2LFxcbi5jb21wbGV0ZVRhc2tEaXYgPiAudGFza0RpdiB7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnVuQ29tcGxldGVUYXNrRGl2ID4gLnRhc2tEaXYgPiAudGFza1RpdGxlRGl2LFxcbi5jb21wbGV0ZVRhc2tEaXYgPiAudGFza0RpdiA+IC50YXNrVGl0bGVEaXZ7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICBsaW5lLWhlaWdodDogMWVtO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgbWF4LXdpZHRoOiA3NCU7XFxuICAgIGJvcmRlcjogbm9uZTsgXFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbn1cXG5cXG4uY29tcGxldGVUYXNrRGl2IHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4jY3VycmVudFRhc2tMaXN0IHtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjZlbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIHRvcDogMjUlO1xcbiAgICBsZWZ0OiAyNSU7XFxuXFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY3VycmVudFRhc2tMaXN0IGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixVQUFVO0lBQ1YsTUFBTTtBQUNWOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFNBQVM7QUFDYjs7QUFFQSxpQ0FBaUMsb0ZBQW9GO0lBQ2pILGFBQWE7SUFDYixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCw0QkFBNEI7QUFDaEM7O0FBRUEsa0NBQWtDLDZFQUE2RTtJQUMzRyx5QkFBeUI7SUFDekIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwrREFBK0Q7SUFDL0QsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsK0RBQStEO0lBQy9ELG1DQUFtQztJQUNuQyxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHlCQUF5QjtJ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SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtEQUErRDtJQUMvRCxtQ0FBbUM7SUFDbkMsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCx3QkFBd0I7O0lBRXhCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7O0lBRVQsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUJBQXFCOztJQUVyQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmxhY2stYmctY29sb3I6IzIyMjtcXG4gICAgLS13aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLXdoaXRlLWJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIC0tYm9yZGVyLXRoaWNrbmVzczogMnB4O1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogNThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2J1dHRvbkZvcm1Db250YWluZXIgeyAgICAgICAgICAgLyogZGl2IGluc2lkZSBvZiBtYWluIHdoaWNoIGNvbnRhaW5lcyB0aGUgYnV0dG9uIGZvciB0aGUgY3JlYXRpb24gb2YgbGlzdCBhbmQgdGFza3MqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjRmcjtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b24geyAgICAgICAgICAgICAgICAgIC8qIGJ1dHRvbiBhdCB0aGUgdG9wIHdoaWNoIGNyZWF0ZSB0aGUgZm9ybSBlbGVtZW50IHRvIG1ha2UgbGlzdCBhbmQgdGhlIHRhc2sqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW07XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMWZyO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC1oZWlnaHQ6IDIwZW07XFxuICAgIHBhZGRpbmc6IDAgMC44ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jZm9ybVRpdGxlRGl2ID4gaW5wdXQsXFxuZm9ybSA+ICN0YXNrTGlzdEl0ZW1Db250YWluZXIgPiBkaXYgPiBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS10ZXh0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxufVxcblxcbiNmb3JtVGl0bGVEaXYge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjRlbSAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbiNmb3JtVGl0bGVEaXYgPiBpbnB1dCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxufVxcblxcbmZvcm0gPiAjdGFza0xpc3RJdGVtQ29udGFpbmVyID4gZGl2ID4gaW1nIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDAuMDVlbTtcXG59XFxuXFxuZm9ybSA+ICN0YXNrTGlzdEl0ZW1Db250YWluZXIgPiBkaXYgPiBpbWc6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbn1cXG5cXG4vKiBkaXYgd2hpY2ggY29udGFpbnMgdGhlIHZhcmlvdXMgdGFza3MgaW4gdGhlIGZvcm0qL1xcbiN0YXNrTGlzdEl0ZW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuIC8qIGRpdiBpbiB3aGljaCB0aGUgcGx1cyBhbmQgdGhlIHRleHQgYm94IHRvIGFkZCBsaXN0IGl0ZW0gcmVzaWRlKi9cXG4jYWRkVGFza0xpc3RJdGVtLFxcbi50YXNrTGlzdEl0ZW0geyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXG4gICAgZ2FwOiAwLjJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSxcXG4udGFza0RpdiA+IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7IC8qY2hlY2sgYm94IGNhbm5vdCBiZSBjaGVja2VkIHdpdGhvdXQgeiBpbmRleCBzZXQgMCBhbmQgeiBpbmRleCBvZiB0aXRsZSBhbmQgdGhlIGNsb3NlIGJ1dHRvbiBkaXYgbmVlZHMgdG8gYmUgc2V0IHRvIDIgdG8gYXZvaWQgY2hlY2tib3ggYmVlbiBvbiB0b3Agb2YgdGl0bGUgb24gc2Nyb2xsKi9cXG4gICAgLyogaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDsgKi9cXG4gICAgLyogbWFyZ2luLXRvcDogMC4xZW07ICovXFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUsXFxuLnRhc2tEaXYgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUgIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTFweDtcXG4gICAgbGVmdDogLTFweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLnRhc2tEaXYgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUge1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUsXFxuLnRhc2tEaXYgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2VzdHMvY2hlY2suc3ZnKTsgIC8qSSBkb250IGtub3cgaWYgdGhpcyBpcyBhIGdvb2Qgd2F5IHRvIGRvIHRoaXMgb3Igc2hvdWxkIHRoaXMgYmUgZG9uZSB1c2luZyBqYXZhc2NpcnB0Ki9cXG59XFxuXFxuLnRhc2tMaXN0SXRlbSA+IGlucHV0W3R5cGU9J2RhdGUnXSxcXG4udGFza0RpdiA+IGlucHV0IFt0eXBlPSdkYXRlJ10ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB6LWluZGV4OiAxOyAvKiB3aXRob3V0IHRoaXMgdGhlIGRhdGUgcGlja2VyIHdhcyBub3Qgd29ya2luZyB3aGVuIGNsaWNrZWQgdXBvbiovXFxufVxcblxcbi50YXNrTGlzdEl0ZW06Zm9jdXMtd2l0aGluOjphZnRlcixcXG4jYWRkVGFza0xpc3RJdGVtOmZvY3VzLXdpdGhpbjo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IC0wLjhlbTtcXG4gICAgbGVmdDogLTAuOGVtO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxufVxcblxcbiNmb3JtQ2xvc2VCdXR0b25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5OyBcXG4gICAgei1pbmRleDogMjtcXG4gICAgcGFkZGluZzogMC40ZW0gMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxufSAvKnRvIG1ha2UgdGhlIGNsb3NlIHN0YXkgYXQgYnV0dG9uIGV2ZW4gd2hlbiBzY3JvbGxlZCBub3Qgd3Jva2luZyovXFxuXFxuI2Zvcm1UaXRsZURpdjo6YmVmb3JlLFxcbiNmb3JtQ2xvc2VCdXR0b25EaXY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAtMC44ZW07XFxuICAgIHJpZ2h0OiAtMC44ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbiNjbG9zZUZvcm1CdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC44ZW07XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4jY2xvc2VGb3JtQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgLyogYmFjayBncm91bmQgY29sb3Igb2YgdGhlIGNsb3NlIGZvcm0gYnV0dG9uIG9uIGhvdmVyKi9cXG59XFxuXFxuI2xpc3RDb250YWluZXIge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDIwMHB4KTtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXNvbnJ5OyAqL1xcbiAgICBwYWRkaW5nOiAwLjRlbSAyZW07XFxuICAgIGdhcDogMWVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG5cXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDFlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICAqL1xcbn1cXG5cXG4udGFza0xpc3Qge1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyOiB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpIHNvbGlkIGNhbGModmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgLSAxcHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWF4LWhlaWdodDogMjFlbTsgIFxcblxcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIC8qIGZsZXg6IDAgMCBhdXRvOyAqL1xcbiAgICAvKiBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyAqL1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBnYXA6IDAuNWVtOyAqL1xcbn1cXG5cXG4udGFza0xpc3RUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMC4yZW0gMDtcXG59XFxuXFxuLnVuQ29tcGxldGVUYXNrRGl2LFxcbi5jb21wbGV0ZVRhc2tEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBnYXA6IDAuMmVtOyAqL1xcbn1cXG5cXG4udW5Db21wbGV0ZVRhc2tEaXYgPiAudGFza0RpdixcXG4uY29tcGxldGVUYXNrRGl2ID4gLnRhc2tEaXYge1xcbiAgICBwYWRkaW5nOiAwLjRlbSAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi51bkNvbXBsZXRlVGFza0RpdiA+IC50YXNrRGl2ID4gLnRhc2tUaXRsZURpdixcXG4uY29tcGxldGVUYXNrRGl2ID4gLnRhc2tEaXYgPiAudGFza1RpdGxlRGl2e1xcbiAgICBmb250LXNpemU6IDAuODVlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIG1heC13aWR0aDogNzQlO1xcbiAgICBib3JkZXI6IG5vbmU7IFxcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG59XFxuXFxuLmNvbXBsZXRlVGFza0RpdiB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuI2N1cnJlbnRUYXNrTGlzdCB7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMC42ZW07XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiA0O1xcbiAgICB0b3A6IDI1JTtcXG4gICAgbGVmdDogMjUlO1xcblxcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2N1cnJlbnRUYXNrTGlzdCBpbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY29udHJvbCBmcm9tICcuL3Rhc2tfdGFza0xpc3RfRGF0YS5qcydcbmltcG9ydCBjb250cm9sMiBmcm9tICcuL3VpX3Rhc2tEaXZfaW50ZXJhY3QuanMnXG4vLyBpbXBvcnQgZGlzcGxheUN1cnJlbnRUYXNrTGlzdCBmcm9tICcuL3VpX3Rhc2tEaXZfaW50ZXJhY3QuanMnO1xuXG5pbXBvcnQgcGx1c0ltYWdlIGZyb20gJy4uL2Fzc2VzdHMvcGx1cy5zdmcnO1xuaW1wb3J0IGNsb3NlSW1hZ2UgZnJvbSAnLi4vYXNzZXN0cy9jbG9zZS5zdmcnO1xuXG5jb25zdCB1aUVsZW1lbnRzID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgY3JlYXRlQWRkVGFza0J1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWRkVGFza0J1dHRvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25Gb3JtQ29udGFpbmVyJyk7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0J1dHRvbicpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnVGFrZSBhIE5vdGUuLi4nO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrQnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIGFkZFRhc2tCdXR0b25EaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgcmV0dXJuICdhZGRlZCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRkVGFza0J1dHRvbihidG4pIHtcbiAgICAgICAgbGV0IGFkZFRhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uRm9ybUNvbnRhaW5lcicpO1xuICAgICAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrQnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIGFkZFRhc2tCdXR0b25EaXYucmVtb3ZlQ2hpbGQoYnRuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUYXNrQnV0dG9uQ2xpY2tlZChldmVudCkge1xuICAgICAgICByZW1vdmVBZGRUYXNrQnV0dG9uKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNyZWF0ZVRhc2tGb3JtKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oKSB7XG4gICAgICAgIGxldCBhZGRUYXNrQnV0dG9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbkZvcm1Db250YWluZXInKTtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0Zyb21UaXRsZSgpKTtcbiAgICAgICAgbGV0IHRhc2tEaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0RpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tMaXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFRhc2tMaXN0SXRlbSgpKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRGl2Q29udGFpbmVyKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVDbG9zZUZvcm1CdXR0b24oKSk7XG4gICAgICAgIGFkZFRhc2tCdXR0b25EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0Zyb21UaXRsZSgpIHtcbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybVRpdGxlRGl2Jyk7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIHJldHVybiB0aXRsZURpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVBZGRUYXNrTGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0xpc3RJdGVtJyk7XG4gICAgICAgIGxldCBwbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHBsdXMuc2V0QXR0cmlidXRlKCdzcmMnLCBwbHVzSW1hZ2UpO1xuICAgICAgICBwbHVzLnNldEF0dHJpYnV0ZSgnYWx0JywgJ3BsdXMgc2lnbicpOyAgICAgICBcbiAgICAgICAgbGV0IHRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0ZXh0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRleHRCb3guc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdMaXN0IGl0ZW0nKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHBsdXMpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dEJveCk7XG4gICAgICAgIHRleHRCb3guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0ZXh0SW5UZXh0Qm94KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlTGlzdEl0ZW0odGFza0RpdkNvbnRhaW5lcikge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tMaXN0SXRlbScpO1xuICAgICAgICBsZXQgaWRJbmRleCA9IHRhc2tEaXZDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggLSAxO1xuICAgICAgICBkaXYucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWZvcm1UYXNrSW5kZXgnLCAnJytpZEluZGV4KTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza0xpc3RJdGVtJyk7XG4gICAgICAgIGxldCB0ZXh0Qm94ID0gZGl2LmNoaWxkTm9kZXNbMV07XG4gICAgICAgIHRleHRCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0ZXh0SW5UZXh0Qm94KTtcbiAgICAgICAgdGV4dEJveC5yZW1vdmVBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIHRleHRCb3guYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYoZXZlbnQuY29kZSA9PSAnRW50ZXInICYmIE51bWJlcih0ZXh0Qm94LnZhbHVlKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgZW50ZXJQcmVzc2VkT25UYXNrTGlzdEl0ZW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBkaXYuaW5zZXJ0QmVmb3JlKGNoZWNrQm94LCBkaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgZ2V0Q3VycmVudERhdGUoKSk7XG4gICAgICAgIC8vIGRhdGVJbnB1dC52YWx1ZSA9IGAke2dldEN1cnJlbnREYXRlKCl9YDtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjbG9zZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNsb3NlSW1hZ2UpO1xuICAgICAgICBjbG9zZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdjbG9zZSBzaWduJyk7XG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFza0xpc3RJdGVtQnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjbG9zZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGV4dEluVGV4dEJveCgpIHtcbiAgICAgICAgbGV0IHRhc2tEaXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0xpc3RJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIG1ha2VMaXN0SXRlbSh0YXNrRGl2Q29udGFpbmVyKTtcbiAgICAgICAgbGV0IGRpdiA9IGNyZWF0ZUFkZFRhc2tMaXN0SXRlbSgpO1xuICAgICAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVudGVyUHJlc3NlZE9uVGFza0xpc3RJdGVtKCkge1xuICAgICAgICBsZXQgYWRkTGlzdEl0ZW1UZXh0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tMaXN0SXRlbSA+IGlucHV0Jyk7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgICBmb3JtLnNjcm9sbFRvcCArPSBmb3JtLm9mZnNldEhlaWdodDtcbiAgICAgICAgYWRkTGlzdEl0ZW1UZXh0Qm94LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFza0xpc3RJdGVtQnV0dG9uQ2xpY2tlZChldmVudCkge1xuICAgICAgICBsZXQgcmVtb3ZlZERpdkluZGV4ID0gcmVtb3ZlVGFza0xpc3RJdGVtKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIHVwZGF0ZURhdGFUYXNrSW5kZXgocmVtb3ZlZERpdkluZGV4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrTGlzdEl0ZW0oaW1nKSB7XG4gICAgICAgIGxldCBwYXJlbnREaXYgPSBpbWcucGFyZW50RWxlbWVudDtcbiAgICAgICAgd2hpbGUocGFyZW50RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudERpdi5yZW1vdmVDaGlsZChwYXJlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRpdkluZGV4ID0gcGFyZW50RGl2LmdldEF0dHJpYnV0ZSgnZGF0YS1mb3JtVGFza0luZGV4Jyk7XG4gICAgICAgIGxldCB0YXNrRGl2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRGl2Q29udGFpbmVyLnJlbW92ZUNoaWxkKHBhcmVudERpdik7XG4gICAgICAgIHJldHVybiBkaXZJbmRleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEYXRhVGFza0luZGV4KGluZGV4KSB7XG4gICAgICAgIGxldCB0YXNrTGlzdEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbZGF0YS1mb3JtVGFza0luZGV4XScpKTtcbiAgICAgICAgZm9yKGxldCBpPWluZGV4OyBpPHRhc2tMaXN0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhc2tMaXN0SXRlbXNbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWZvcm1UYXNrSW5kZXgnLCBcIlwiK2kpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2xvc2VGb3JtQnV0dG9uKCkge1xuICAgICAgICBsZXQgZm9ybUNsb3NlQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1DbG9zZUJ1dHRvbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1DbG9zZUJ1dHRvbkRpdicpOyBcbiAgICAgICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZUZvcm1CdXR0b24nKTtcbiAgICAgICAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybUJ1dHRvbkNsaWNrZWQpO1xuICAgICAgICBmb3JtQ2xvc2VCdXR0b25EaXYuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgICAgICByZXR1cm4gZm9ybUNsb3NlQnV0dG9uRGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlRm9ybUJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICAgIGxldCB0YXNrTGlzdE9iamVjdCA9IGNyZWF0ZVRhc2tMaXN0RGV0YWlscygpO1xuICAgICAgICByZW1vdmVGb3JtKCk7XG4gICAgICAgIGNyZWF0ZUFkZFRhc2tCdXR0b24oKTtcbiAgICAgICAgbWFrZVRhc2tMaXN0RGl2LmRpc3BsYXlDdXJyZW50VGFza0xpc3QoY29udHJvbCgxLCB0YXNrTGlzdE9iamVjdCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tMaXN0RGV0YWlscygpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1UaXRsZURpdiA+IGlucHV0JykudmFsdWUgfHwgJ0dlbmVyYWwgVGFza3MnO1xuICAgICAgICBsZXQgdGFza3NMaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbZGF0YS1mb3JtVGFza2luZGV4XScpKTtcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRhc2tzTGlzdC5tYXAodGFzayA9PiBbdGFzay5jaGlsZE5vZGVzWzFdLnZhbHVlLHRhc2suY2hpbGROb2Rlc1syXS52YWx1ZSx0YXNrLmNoaWxkTm9kZXNbMF0uY2hlY2tlZF0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGUsIFxuICAgICAgICAgICAgdmFsdWVzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUZvcm1CdXR0b24nKTtcbiAgICAgICAgY2xvc2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm1CdXR0b25DbGlja2VkKTtcbiAgICAgICAgbGV0IGFkZFRhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uRm9ybUNvbnRhaW5lcicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uRGl2LnJlbW92ZUNoaWxkKGZvcm0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUFkZFRhc2tCdXR0b24sXG4gICAgfVxufSkoKTtcblxuY29uc3QgZ2V0Q3VycmVudERhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpID4gOSA/IGRhdGUuZ2V0TW9udGgoKSA6ICcwJyArIGRhdGUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4oZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nICsgbW9udGggKyAnLScgKyBkYXRlLmdldERhdGUoKSk7XG59XG5cbmNvbnN0IG1ha2VUYXNrTGlzdERpdiA9IChmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50VGFza0xpc3QoY3VycmVudFRhc2tMaXN0KSB7XG4gICAgICAgIGxldCBjdXJyZW50VGFza0xpc3REaXYgPSBtYWtlVGFza0xpc3REaXYoY3VycmVudFRhc2tMaXN0LnRpdGxlLCBjdXJyZW50VGFza0xpc3QuaW5kZXgpO1xuICAgICAgICBsZXQgdGFza3NMaXN0ID0gY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0O1xuICAgICAgICBsZXQgdW5Db21wbGV0ZVRhc2tEaXYgPSBjdXJyZW50VGFza0xpc3REaXYuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgbGV0IGNvbXBsZXRlVGFza0RpdiA9IGN1cnJlbnRUYXNrTGlzdERpdi5jaGlsZE5vZGVzWzJdO1xuICAgICAgICBsZXQgaT0wLCBwb3M9MDtcbiAgICAgICAgd2hpbGUoaSA8IDEwICYmIHBvcyA8IHRhc2tzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKCF0YXNrc0xpc3RbcG9zXS5jb21wbGV0ZVN0YXR1cykge1xuICAgICAgICAgICAgICAgIGFkZExpc3RJdGVtKHRhc2tzTGlzdFtwb3NdLnRpdGxlLCB1bkNvbXBsZXRlVGFza0RpdiwgcG9zLCAwKTtcbiAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3MgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBwb3MgPSAwO1xuICAgICAgICB3aGlsZShwb3MgPCB0YXNrc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0YXNrc0xpc3RbcG9zXS5jb21wbGV0ZVN0YXR1cykge1xuICAgICAgICAgICAgICAgIGFkZExpc3RJdGVtKHRhc2tzTGlzdFtwb3NdLnRpdGxlLCBjb21wbGV0ZVRhc2tEaXYsIHBvcywgMSk7XG4gICAgICAgICAgICAgICAgLy8gaSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbWFrZVRhc2tMaXN0RGl2KHRpdGxlLCBpbmRleCkge1xuICAgICAgICBsZXQgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Q29udGFpbmVyJyk7XG4gICAgICAgIGxldCBsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3REaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrTGlzdCcpO1xuICAgICAgICBsaXN0RGl2LnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrTGlzdEluZGV4JywgYCR7aW5kZXh9YCk7XG4gICAgICAgIGxpc3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjbGljaygpIHtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFza0xpc3QnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRyb2wyKGxpc3REaXYpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHRhc2tMaXN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrTGlzdFRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza0xpc3RUaXRsZScpO1xuICAgICAgICB0YXNrTGlzdFRpdGxlRGl2LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQodGFza0xpc3RUaXRsZURpdik7XG4gICAgICAgIGxldCB1bkNvbXBsZXRlZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdW5Db21wbGV0ZWRUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndW5Db21wbGV0ZVRhc2tEaXYnKTtcbiAgICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZCh1bkNvbXBsZXRlZFRhc2tDb250YWluZXIpO1xuICAgICAgICBsZXQgY29tcGxldGVkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb21wbGV0ZWRUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tcGxldGVUYXNrRGl2Jyk7XG4gICAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza0NvbnRhaW5lcik7XG4gICAgICAgIGxpc3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKGxpc3REaXYsIGxpc3RDb250YWluZXIuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIHJldHVybiBsaXN0RGl2O1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRMaXN0SXRlbSh0aXRsZSwgbGlzdERpdiwgaW5kZXgsIHRhc2tTdGF0dXM9MCkge1xuICAgICAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza0RpdicpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnLCBpbmRleCk7XG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tUaXRsZURpdicpO1xuICAgICAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgaWYodGFza1N0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gdGFza0NoZWNrQm94Q2xpY2tlZChldmVudCAsbGlzdERpdiwgdGFza0RpdikpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0YXNrQ2hlY2tCb3hDbGlja2VkKGV2ZW50LCBsaXN0RGl2LCB0YXNrKSB7XG4gICAgICAgIGxldCBsaXN0RGl2SW5kZXggPSBsaXN0RGl2LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tMaXN0SW5kZXgnKVxuICAgICAgICBsZXQgdGFza0NsaWNrZWQgPSB0YXNrO1xuICAgICAgICBjb250cm9sKDMsIGxpc3REaXZJbmRleCk7XG4gICAgICAgIGNvbnRyb2woMiwgdGFza0NsaWNrZWQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpKTtcbiAgICAgICAgbGV0IGNvbXBsZXRlU3RhdHVzID0gdGFzay5jaGlsZE5vZGVzWzBdLmNoZWNrZWQ7XG4gICAgICAgIGxldCBjb21wbGV0ZVRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtdGFza2xpc3RJbmRleD1cIiR7bGlzdERpdkluZGV4fVwiXSAuY29tcGxldGVUYXNrRGl2YCkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnRUYXNrTGlzdCA+IC5jb21wbGV0ZVRhc2tEaXYnKTtcbiAgICAgICAgbGV0IHVuQ29tcGxldGVUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtdGFza2xpc3RJbmRleD1cIiR7bGlzdERpdkluZGV4fVwiXSAudW5Db21wbGV0ZVRhc2tEaXZgKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudFRhc2tMaXN0ID4gLnVuQ29tcGxldGVUYXNrRGl2Jyk7XG4gICAgICAgIGlmKGNvbXBsZXRlU3RhdHVzKSB7XG4gICAgICAgICAgICBtYXJrVGFza0NvbXBsZXRlKHRhc2tDbGlja2VkLCB1bkNvbXBsZXRlVGFza0NvbnRhaW5lciwgY29tcGxldGVUYXNrc0NvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXJrVGFza1VuY29tcGxldGUodGFza0NsaWNrZWQsIHVuQ29tcGxldGVUYXNrQ29udGFpbmVyLCBjb21wbGV0ZVRhc2tzQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcHMgdGhlIGJ1YmJsaW5nIHRvIHRoZSBtYWluIGxpc3QgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFya1Rhc2tDb21wbGV0ZSh0YXNrLCB1bkNvbXBsZXRlVGFza0NvbnRhaW5lciwgY29tcGxldGVUYXNrQ29udGFpbmVyKSB7XG4gICAgICAgIGxldCBsYXN0Q2hpbGQgPSB1bkNvbXBsZXRlVGFza0NvbnRhaW5lci5jaGlsZE5vZGVzW3VuQ29tcGxldGVUYXNrQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBsYXN0Q2hpbGRJbmRleCA9IGxhc3RDaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4Jyk7XG4gICAgICAgIGxldCBpbmZvID0gY29udHJvbCg0LCBsYXN0Q2hpbGRJbmRleCk7XG4gICAgICAgIHVuQ29tcGxldGVUYXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2spO1xuICAgICAgICBpZihpbmZvICE9PSAgbnVsbCkge1xuICAgICAgICAgICAgYWRkTGlzdEl0ZW0oaW5mby50aXRsZSwgdW5Db21wbGV0ZVRhc2tDb250YWluZXIsIGluZm8uaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRhc2suY2hpbGROb2Rlc1syXSkge1xuICAgICAgICAgICAgdGFzay5jaGlsZE5vZGVzWzFdLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICB0YXNrLmNoaWxkTm9kZXNbMl0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBsZXRlVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXJrVGFza1VuY29tcGxldGUodGFzaywgdW5Db21wbGV0ZVRhc2tDb250YWluZXIsIGNvbXBsZXRlVGFza0NvbnRhaW5lcikge1xuICAgICAgICBjb21wbGV0ZVRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFzayk7XG4gICAgICAgIGxldCBpbmRleCA9IHRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpO1xuICAgICAgICBsZXQgdW5jb21wbGV0ZVRhc2tzID0gQXJyYXkuZnJvbSh1bkNvbXBsZXRlVGFza0NvbnRhaW5lci5jaGlsZE5vZGVzKTtcbiAgICAgICAgaWYodGFzay5jaGlsZE5vZGVzWzJdKSB7XG4gICAgICAgICAgICB0YXNrLmNoaWxkTm9kZXNbMV0uc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgdGFzay5jaGlsZE5vZGVzWzJdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29tcGxldGVUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICBpZih1bmNvbXBsZXRlVGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB1bkNvbXBsZXRlVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmKE51bWJlcihpbmRleCkgPiBOdW1iZXIodW5jb21wbGV0ZVRhc2tzW3VuY29tcGxldGVUYXNrcy5sZW5ndGggLSAxXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JykpKSB7XG4gICAgICAgICAgICB1bkNvbXBsZXRlVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGk9MDsgaTx1bmNvbXBsZXRlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0ZW1wVGFzayA9IHVuY29tcGxldGVUYXNrc1tpXTtcbiAgICAgICAgICAgIGlmKE51bWJlcih0ZW1wVGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JykpID4gTnVtYmVyKGluZGV4KSkge1xuICAgICAgICAgICAgICAgIHVuQ29tcGxldGVUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrLCB0ZW1wVGFzayk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5Q3VycmVudFRhc2tMaXN0LFxuICAgICAgICB0YXNrQ2hlY2tCb3hDbGlja2VkXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHt1aUVsZW1lbnRzLCBtYWtlVGFza0xpc3REaXZ9OyIsImltcG9ydCBvYmogZnJvbSAnLi9tYWtlX3Rhc2tfaW5mb19mb3JtJztcblxuZnVuY3Rpb24gVGFzayh0aXRsZSwgZHVlRGF0ZSwgY29tcGxldGVTdGF0dXM9ZmFsc2UpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAvLyB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZVN0YXR1cyA9IGNvbXBsZXRlU3RhdHVzO1xufVxuXG5UYXNrLnByb3RvdHlwZS5tYXJrQ29tcGxldGVfVW5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY29tcGxldGVTdGF0dXMgPSB0aGlzLmNvbXBsZXRlU3RhdHVzID8gZmFsc2UgOiB0cnVlO1xufVxuXG5UYXNrLnByb3RvdHlwZS5pc0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGVTdGF0dXM7XG59XG5cbmZ1bmN0aW9uIFRhc2tMaXN0KHRpdGxlLCBpbmRleCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xufVxuXG5UYXNrTGlzdC5wcm90b3R5cGUuZGlzcGxheUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IGNvbnNvbGUubG9nKHRhc2spKTtcbiAgICByZXR1cm4gMTtcbn1cblxuVGFza0xpc3QucHJvdG90eXBlLmlzQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrTGlzdC5ldmVyeSh0YXNrID0+IHRhc2suaXNDb21wbGV0ZSk7XG59XG5cbmNvbnN0IHRhc2tOVGFza0xpc3RNYW5hZ2VyID0gKGZ1bmN0aW9uIGNvbnRyb2woKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgbGV0IGN1cnJlbnRUYXNrTGlzdDtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIGNvbXBsZXRlU3RhdHVzKSB7XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5wdXNoKG5ldyBUYXNrKHRpdGxlLCBkdWVEYXRlLCBjb21wbGV0ZVN0YXR1cykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tMaXN0KHRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gdGl0bGUgPT0gJ0dlbmVyYWwgVGFza3MnID8gdGl0bGUrXCIgXCIrcHJvamVjdHMubGVuZ3RoIDogdGl0bGU7XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdCA9IG5ldyBUYXNrTGlzdCh0aXRsZSwgcHJvamVjdHMubGVuZ3RoKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChjdXJyZW50VGFza0xpc3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50VGFza0xpc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrTGlzdC50aXRsZSk7XG4gICAgICAgIGlmKGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfVxuICAgICAgICAvLyBjdXJyZW50VGFza0xpc3QuZGlzcGxheUFsbCgpO1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VGFza0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IGNvcHlDdXJyZW50VGFza0xpc3QgPSBPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50VGFza0xpc3QpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgcmV0dXJuIGNvcHlDdXJyZW50VGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFya1Rhc2tDb21wbGV0ZV9VbmNvbXBsZXRlKGluZGV4KSB7XG4gICAgICAgIGlmKGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5sZW5ndGggPCBpbmRleCB8fCAhaW5kZXggfHwgaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdFtpbmRleF0ubWFya0NvbXBsZXRlX1VuY29tcGxldGUoKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaEN1cnJlbnRUYXNrTGlzdFRvKGluZGV4KSB7XG4gICAgICAgIGlmKHByb2plY3RzLmxlbmd0aCA8IGluZGV4IHx8ICFpbmRleCB8fCBpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFRhc2tMaXN0ID0gcHJvamVjdHNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRVbmNvbXBsZXRlZFRhc2tBZnRlcihpbmRleCkge1xuICAgICAgICBmb3IobGV0IGk9TnVtYmVyKGluZGV4KSsxOyBpPGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBjdXJyZW50VGFza0xpc3QudGFza0xpc3RbaV07XG4gICAgICAgICAgICBpZighdGFzay5pc0NvbXBsZXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGFzay50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6IHRhc2suZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVTdGF0dXM6IHRhc2suY29tcGxldGVTdGF0dXMsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDdXJyZW50VGFza0xpc3QodGFza0xpc3QpIHtcbiAgICAgICAgY3VycmVudFRhc2tMaXN0LnRpdGxlID0gdGFza0xpc3QudGl0bGU7XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdCA9IFtdO1xuICAgICAgICB0YXNrTGlzdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50VGFza0xpc3QudGFza0xpc3QucHVzaChuZXcgVGFzayh0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUsIHRhc2suY29tcGxldGVTdGF0dXMpKTtcbiAgICAgICAgfSlcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSgpIHtcbiAgICAgICAgbGV0IHN0b3JhZ2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgICAgICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlIHRlc3RfXyc7XG4gICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCx4KTtcbiAgICAgICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICAgICAgaWYoIXN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFza0xpc3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtjdXJyZW50VGFza0xpc3QuaW5kZXh9YCwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tMaXN0KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJpbnRMb2NhbFN0b3JhZ2VLZXlzKCkge1xuICAgICAgICBsZXQga2V5cztcbiAgICAgICAgaWYoc3RvcmFnZUF2YWlsYWJsZSgpKSB7XG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLnNvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhrZXlzKTtcbiAgICAgICAgaWYoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0LmluZGV4KTtcbiAgICAgICAgICAgICAgICBjcmVhdGVUYXNrTGlzdCh0YXNrTGlzdC50aXRsZSk7XG4gICAgICAgICAgICAgICAgdGFza0xpc3QudGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IGNyZWF0ZVRhc2sodGFzay50aXRsZSwgdGFzay5kdWVEYXRlLCB0YXNrLmNvbXBsZXRlU3RhdHVzKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgb2JqLm1ha2VUYXNrTGlzdERpdi5kaXNwbGF5Q3VycmVudFRhc2tMaXN0KGN1cnJlbnRUYXNrTGlzdCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRhc2ssXG4gICAgICAgIGNyZWF0ZVRhc2tMaXN0LFxuICAgICAgICBkaXNwbGF5Q3VycmVudFRhc2tMaXN0LFxuICAgICAgICBnZXRDdXJyZW50VGFza0xpc3QsXG4gICAgICAgIG1hcmtUYXNrQ29tcGxldGVfVW5jb21wbGV0ZSxcbiAgICAgICAgc3dpdGNoQ3VycmVudFRhc2tMaXN0VG8sXG4gICAgICAgIGdldFVuY29tcGxldGVkVGFza0FmdGVyLFxuICAgICAgICB1cGRhdGVDdXJyZW50VGFza0xpc3QsXG4gICAgICAgIHByaW50TG9jYWxTdG9yYWdlS2V5c1xuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2woY2hvaWNlLCBvcHRpb24pIHtcblxuICAgIHN3aXRjaChjaG9pY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGFza05UYXNrTGlzdE1hbmFnZXIuY3JlYXRlVGFza0xpc3Qob3B0aW9uLnRpdGxlKTsgLy8gaGVyZSBvcHRpb24gaXMgb2JqZWN0IHdoaWNoIGNyZWF0ZSBhIG5ldyB0YXNrbGlzdCB3aXRoIGFsbCB0aGUgdGFza1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlcy5mb3JFYWNoKHZhbCA9PiB0YXNrTlRhc2tMaXN0TWFuYWdlci5jcmVhdGVUYXNrKHZhbFswXSwgdmFsWzFdLCB2YWxbMl0pKTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrTlRhc2tMaXN0TWFuYWdlci5nZXRDdXJyZW50VGFza0xpc3QoKTtcbiAgICAgICAgY2FzZSAyOiBcbiAgICAgICAgICAgIHRhc2tOVGFza0xpc3RNYW5hZ2VyLm1hcmtUYXNrQ29tcGxldGVfVW5jb21wbGV0ZShvcHRpb24pOyAvLyBoZXJlIG9wdGlvbiBpcyB0aGUgaW5kZXggb2YgdGhlIHRhc2sgd2hpY2ggbmVlZCB0byBiZSBtYXJrZWQgY29tcGxldGUgaW4gc3BlY2lmaWMgdGFza1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogXG4gICAgICAgICAgICB0YXNrTlRhc2tMaXN0TWFuYWdlci5zd2l0Y2hDdXJyZW50VGFza0xpc3RUbyhvcHRpb24pOyAvLyBoZXJlIG9wdGlvbiBpcyB0aGUgaW5kZXggb2YgdGhlIHRhc2tsaXN0IHdoaWNoIG5lZWQgdG8gYmUgbWFkZSBjdXJyZW50XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OiBcbiAgICAgICAgICAgIHJldHVybih0YXNrTlRhc2tMaXN0TWFuYWdlci5nZXRVbmNvbXBsZXRlZFRhc2tBZnRlcihvcHRpb24pKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICB0YXNrTlRhc2tMaXN0TWFuYWdlci5kaXNwbGF5Q3VycmVudFRhc2tMaXN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuIHRhc2tOVGFza0xpc3RNYW5hZ2VyLmdldEN1cnJlbnRUYXNrTGlzdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzogXG4gICAgICAgICAgICB0YXNrTlRhc2tMaXN0TWFuYWdlci51cGRhdGVDdXJyZW50VGFza0xpc3Qob3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICB0YXNrTlRhc2tMaXN0TWFuYWdlci5wcmludExvY2FsU3RvcmFnZUtleXMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCBhIHZhbGlkIGNob2ljZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSIsImltcG9ydCBjb250cm9sIGZyb20gJy4vdGFza190YXNrTGlzdF9EYXRhLmpzJztcbmltcG9ydCBvYmogZnJvbSAnLi9tYWtlX3Rhc2tfaW5mb19mb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbDIobGlzdERpdikge1xuICAgIGNvbnNvbGUubG9nKGxpc3REaXYuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tMaXN0SW5kZXgnKSk7XG4gICAgbGlzdERpdi5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrTGlzdCcpO1xuICAgIGxldCB0YXNrTGlzdEluZGV4ID0gbGlzdERpdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0xpc3RJbmRleCcpO1xuICAgIGNvbnRyb2woMywgdGFza0xpc3RJbmRleCk7XG4gICAgbGV0IGN1cnJlbnRUYXNrTGlzdCA9IGNvbnRyb2woNiwgdGFza0xpc3RJbmRleCk7XG4gICAgbGlzdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2N1cnJlbnRUYXNrTGlzdCcpO1xuICAgIG1ha2VUaXRsZURpdkVkaXRhYmxlKGxpc3REaXYsIGN1cnJlbnRUYXNrTGlzdC50aXRsZSk7XG4gICAgbGV0IHVuY29tcGxldGVUYXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLXRhc2tMaXN0SW5kZXg9XCIke3Rhc2tMaXN0SW5kZXh9XCJdID4gLnVuQ29tcGxldGVUYXNrRGl2YCk7XG4gICAgbGV0IGNvbXBsZXRlVGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS10YXNrTGlzdEluZGV4PVwiJHt0YXNrTGlzdEluZGV4fVwiXSA+IC5jb21wbGV0ZVRhc2tEaXZgKTtcbiAgICBsZXQgdW5Db21wbGV0ZVRhc2tzID0gdW5jb21wbGV0ZVRhc2tMaXN0LmNoaWxkTm9kZXM7XG4gICAgbGV0IGNvbXBsZXRlVGFza3MgPSBjb21wbGV0ZVRhc2tMaXN0LmNoaWxkTm9kZXM7XG4gICAgZm9yKGxldCBpPTA7IGk8dW5Db21wbGV0ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVuQ29tcGxldGVUYXNrc1tpXSk7XG4gICAgICAgIGxldCBpbmRleCA9IE51bWJlcih1bkNvbXBsZXRlVGFza3NbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpKTtcbiAgICAgICAgbW9kaWZ5RXhpc3RpbmdUYXNrKHVuQ29tcGxldGVUYXNrc1tpXSwgY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0W2luZGV4XS5kdWVEYXRlKTtcbiAgICB9XG4gICAgZm9yKGxldCBpPTA7IGk8Y29tcGxldGVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaW5kZXggPSBOdW1iZXIoY29tcGxldGVUYXNrc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JykpO1xuICAgICAgICBtb2RpZnlFeGlzdGluZ1Rhc2soY29tcGxldGVUYXNrc1tpXSwgY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0W2luZGV4XS5kdWVEYXRlLCBmYWxzZSk7XG4gICAgfVxuICAgIGxldCBsYXN0Q2hpbGRJbmRleCA9IHVuY29tcGxldGVUYXNrTGlzdC5sYXN0Q2hpbGQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGxhc3RDaGlsZEluZGV4KTtcbiAgICBmb3IobGV0IGk9TnVtYmVyKGxhc3RDaGlsZEluZGV4KSsxOyBpPGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGFzayA9IGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdFtpXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coKTtcbiAgICAgICAgaWYoIXRhc2suY29tcGxldGVTdGF0dXMpIHtcbiAgICAgICAgICAgIHVuY29tcGxldGVUYXNrTGlzdC5hcHBlbmRDaGlsZChtYWtlVGFzayhpLCB0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsaXN0RGl2LmFwcGVuZENoaWxkKG1ha2VDbG9zZUJ1dHRvbigpKTtcbiAgICBtYWtlQ3VycmVudExpc3RDZW50ZXIoKTtcbn1cblxuZnVuY3Rpb24gbWFrZUN1cnJlbnRMaXN0Q2VudGVyKCkge1xuICAgIGxldCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFza0xpc3QnKTtcbiAgICBsZXQgY3VycmVudExpc3RIZWlnaHQgPSBjdXJyZW50TGlzdC5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjdXJyZW50TGlzdC5zdHlsZS50b3AgPSBgJHsod2luZG93SGVpZ2h0IC0gY3VycmVudExpc3RIZWlnaHQpIC8gMn1weGBcbn1cblxuZnVuY3Rpb24gbWFrZVRpdGxlRGl2RWRpdGFibGUobGlzdERpdiwgdGl0bGUpIHtcbiAgICBpZihsaXN0RGl2LmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAndGFza0xpc3RUaXRsZScgKSB7XG4gICAgICAgIGxldCB0aXRsZURpdiA9IGxpc3REaXYuZmlyc3RDaGlsZDtcbiAgICAgICAgdGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBcInRydWVcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtb2RpZnlFeGlzdGluZ1Rhc2sodGFza0RpdiwgZHVlRGF0ZSwgaXNFZGl0YWJsZT10cnVlKSB7XG4gICAgdGFza0Rpdi5jaGlsZE5vZGVzWzFdLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgaXNFZGl0YWJsZSk7XG4gICAgdGFza0Rpdi5jaGlsZE5vZGVzWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlbnRlclByZXNzZWRPbkRpdik7XG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkdWVEYXRlICk7XG4gICAgZGF0ZUlucHV0LmRpc2FibGVkID0gIWlzRWRpdGFibGU7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xufVxuXG5mdW5jdGlvbiBtYWtlVGFzayhpbmRleCwgdGl0bGUsIGR1ZURhdGUsIGNvbXBsZXRlU3RhdHVzPWZhbHNlKSB7XG4gICAgbGV0IGxpc3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRhc2tMaXN0Jyk7XG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza0RpdicpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcsIGluZGV4KTtcbiAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza1RpdGxlRGl2Jyk7XG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiBvYmoubWFrZVRhc2tMaXN0RGl2LnRhc2tDaGVja0JveENsaWNrZWQoZXZlbnQsIGxpc3REaXYsIHRhc2tEaXYpKTtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGR1ZURhdGUpO1xuICAgIGlmKGNvbXBsZXRlU3RhdHVzKSB7XG4gICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIHJldHVybiB0YXNrRGl2O1xufVxuXG5mdW5jdGlvbiBlbnRlclByZXNzZWRPbkRpdihldmVudCkge1xuICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gJzEzJykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGluZGV4ID0gcGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4Jyk7XG4gICAgICAgIGxldCBuZXdFbGVtZW50ID0gbWFrZVRhc2sobnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgICAgIHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobmV3RWxlbWVudCwgcGFyZW50RWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICAgIGluY3JlYXNlRGF0YUluZGV4QnlPbmUoTnVtYmVyKGluZGV4KSk7XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcsIE51bWJlcihpbmRleCkgKyAxKTtcbiAgICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZW50ZXJQcmVzc2VkT25EaXYpO1xuICAgICAgICBuZXdFbGVtZW50LmNoaWxkTm9kZXNbMV0uZm9jdXMoKTtcbiAgICAgICAgbWFrZUN1cnJlbnRMaXN0Q2VudGVyKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZWFzZURhdGFJbmRleEJ5T25lKGluZGV4KSB7XG4gICAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2N1cnJlbnRUYXNrTGlzdCBkaXZbZGF0YS10YXNrSW5kZXhdJyk7XG4gICAgdGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgbGV0IGkgPSB0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnKTtcbiAgICAgICAgaWYoTnVtYmVyKGkpID4gaW5kZXgpIHtcbiAgICAgICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcsIE51bWJlcihpKSsxKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG1ha2VDbG9zZUJ1dHRvbigpIHtcbiAgICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZUZvcm1CdXR0b24nKTtcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUJ1dHRvbkNsaWNrZWQpO1xuICAgIHJldHVybiBjbG9zZUJ0bjtcbn1cblxuZnVuY3Rpb24gY2xvc2VCdXR0b25DbGlja2VkKGV2ZW50KSB7XG4gICAgbGV0IHBhcmVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIHBhcmVudC5zY3JvbGxUb3AgPSAwO1xuICAgIGxldCB1cGRhdGVkQ3VycmVudExpc3QgPSBtYWtlVGFza0xpc3QocGFyZW50KTtcbiAgICByZW1vdmVFeHRyYVVuY29tcGxldGVUYXNrKHBhcmVudCk7XG4gICAgcmVtb3ZlRHVlRGF0ZUVsZW1lbnQocGFyZW50KTtcbiAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgndGFza0xpc3QnKTtcbiAgICBwYXJlbnQucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChldmVudC50YXJnZXQpO1xuICAgIGNvbnRyb2woNywgdXBkYXRlZEN1cnJlbnRMaXN0KTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gbWFrZVRhc2tMaXN0KHBhcmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudCk7XG4gICAgbGV0IHRpdGxlID0gcGFyZW50LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQ7XG4gICAgbGV0IHRhc2tMaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY3VycmVudFRhc2tMaXN0IGRpdltkYXRhLXRhc2tJbmRleF0nKSk7XG4gICAgbGV0IHRhc2tzID0gW107XG4gICAgZm9yKGxldCBpPTA7IGk8dGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRhc2sgPSBtYWtlTmV3VGFzayh0YXNrTGlzdFtpXSk7XG4gICAgICAgIHRhc2tzW051bWJlcih0YXNrLmluZGV4KV0gPSB0YXNrO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdGFza3NcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VOZXdUYXNrKHRhc2spIHtcbiAgICBsZXQgaW5kZXggPSB0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnKTtcbiAgICBsZXQgdGl0bGUgPSB0YXNrLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG4gICAgbGV0IGNvbXBsZXRlU3RhdHVzID0gdGFzay5jaGlsZE5vZGVzWzBdLmNoZWNrZWQ7XG4gICAgbGV0IGR1ZURhdGUgPSB0YXNrLmNoaWxkTm9kZXNbMl0udmFsdWU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXgsIFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgY29tcGxldGVTdGF0dXMsXG4gICAgICAgIGR1ZURhdGVcbiAgICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVFeHRyYVVuY29tcGxldGVUYXNrKHBhcmVudCkge1xuICAgIHBhcmVudC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJyk7XG4gICAgbGV0IHVuY29tcGxldGVUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnRUYXNrTGlzdD4udW5Db21wbGV0ZVRhc2tEaXYnKTtcbiAgICBsZXQgdW5jb21wbGV0ZVRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2N1cnJlbnRUYXNrTGlzdD4udW5Db21wbGV0ZVRhc2tEaXY+ZGl2W2RhdGEtdGFza0luZGV4XScpO1xuICAgIGZvcihsZXQgaT05OyBpPHVuY29tcGxldGVUYXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICB1bmNvbXBsZXRlVGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh1bmNvbXBsZXRlVGFza0xpc3RbaV0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRHVlRGF0ZUVsZW1lbnQocGFyZW50KSB7XG4gICAgbGV0IHRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjdXJyZW50VGFza0xpc3QgZGl2W2RhdGEtdGFza0luZGV4XScpO1xuICAgIHRhc2tzTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICB0YXNrLmNoaWxkTm9kZXNbMV0uc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKTtcbiAgICAgICAgdGFzay5jaGlsZE5vZGVzWzFdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlbnRlclByZXNzZWRPbkRpdik7XG4gICAgICAgIHRhc2sucmVtb3ZlQ2hpbGQodGFzay5jaGlsZE5vZGVzWzJdKVxuICAgIH0pO1xufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBvYmogZnJvbSAnLi9tb2R1bGVzL21ha2VfdGFza19pbmZvX2Zvcm0nO1xuaW1wb3J0IGNvbnRyb2wgZnJvbSAnLi9tb2R1bGVzL3Rhc2tfdGFza0xpc3RfRGF0YSc7XG5cbmltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuXG5jb25zb2xlLmxvZygndG8gZG8gbGlzdCcpOyBcblxuY29uc3QgYmFzaWNfcGFnZSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGgxLnRleHRDb250ZW50ID0gJ1Rhc2tzJztcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VNYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICBsZXQgYWRkVGFza0J1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYnV0dG9uRm9ybUNvbnRhaW5lcicpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlzdENvbnRhaW5lcicpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b25EaXYpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1ha2VIZWFkZXIsXG4gICAgICAgIG1ha2VNYWluLFxuICAgIH07XG59KSgpO1xuXG5cbihmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBiYXNpY19wYWdlLm1ha2VIZWFkZXIoKTtcbiAgICBiYXNpY19wYWdlLm1ha2VNYWluKCk7XG4gICAgb2JqLnVpRWxlbWVudHMuY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuICAgIGNvbnRyb2woOCk7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==