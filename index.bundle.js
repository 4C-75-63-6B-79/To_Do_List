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
        currentTaskList.displayAll();
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
        localStorage.setItem(`${currentTaskList.index}`, JSON.stringify(currentTaskList));
        // console.log(localStorage);
    }

    function printLocalStorageKeys() {
        let keys;
        if(storageAvailable()) {
            keys = Object.keys(localStorage);
        }
        if(keys.length > 0) {
            keys.forEach(key => {
                let taskList = JSON.parse(localStorage.getItem(key));
                projects.push(taskList);
                // console.log(taskList);
                _make_task_info_form__WEBPACK_IMPORTED_MODULE_0__["default"].makeTaskListDiv.displayCurrentTaskList(taskList);
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
        newElement.childNodes[1].focus();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLG9FQUFvRSxnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLFdBQVcsNEJBQTRCLHFDQUFxQyxrQ0FBa0MsOEJBQThCLDRCQUE0QixHQUFHLFVBQVUsd0JBQXdCLDhDQUE4QyxxQ0FBcUMsa0JBQWtCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixHQUFHLFlBQVksa0JBQWtCLDJCQUEyQixnQ0FBZ0Msb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixpQkFBaUIsYUFBYSxHQUFHLFVBQVUsdUJBQXVCLG9CQUFvQiw2QkFBNkIscUJBQXFCLGdCQUFnQixHQUFHLHFDQUFxQyx5R0FBeUcsNEJBQTRCLDJCQUEyQixrQkFBa0IsbUNBQW1DLEdBQUcsc0NBQXNDLDhHQUE4RyxxQkFBcUIsMkJBQTJCLHNFQUFzRSwwQ0FBMEMsd0JBQXdCLHVCQUF1QixpQkFBaUIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsZUFBZSxzRUFBc0UsMENBQTBDLDZCQUE2Qix1QkFBdUIsdUJBQXVCLDRCQUE0Qix5QkFBeUIsR0FBRyx5RUFBeUUsZ0NBQWdDLG1CQUFtQixvQkFBb0Isd0JBQXdCLHFDQUFxQywyQkFBMkIsR0FBRyxtQkFBbUIsdUJBQXVCLGVBQWUsOENBQThDLHVCQUF1QixpQkFBaUIsb0JBQW9CLDZCQUE2QixLQUFLLDJCQUEyQixtQkFBbUIscUJBQXFCLDRCQUE0Qiw0QkFBNEIseUJBQXlCLEdBQUcsK0NBQStDLGtCQUFrQixzQkFBc0IsR0FBRyxxREFBcUQsNkJBQTZCLEdBQUcsbUZBQW1GLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLDZHQUE2RyxvQkFBb0IsMEJBQTBCLDBCQUEwQiw0QkFBNEIsMkJBQTJCLGlCQUFpQix5QkFBeUIsR0FBRyx3Q0FBd0MsbUJBQW1CLEdBQUcsZ0ZBQWdGLHlCQUF5QixrQkFBa0IsNExBQTRMLGdCQUFnQiw4QkFBOEIsS0FBSyxpR0FBaUcsbUJBQW1CLHlCQUF5QixnQkFBZ0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsOENBQThDLHNFQUFzRSx5QkFBeUIsR0FBRywrQ0FBK0MsZUFBZSxnQkFBZ0Isa0JBQWtCLG1CQUFtQixHQUFHLGdIQUFnSCwwRUFBMEUsMkZBQTJGLHlFQUF5RSx5QkFBeUIscUJBQXFCLGtCQUFrQixzRUFBc0UsOEVBQThFLHlCQUF5QixrQkFBa0IsYUFBYSxnQkFBZ0Isb0JBQW9CLG1CQUFtQixzREFBc0QseURBQXlELEdBQUcseUJBQXlCLG9CQUFvQixnQ0FBZ0Msd0JBQXdCLGlCQUFpQix1QkFBdUIsZ0JBQWdCLDhDQUE4QyxJQUFJLDRIQUE0SCxrQkFBa0IseUJBQXlCLGFBQWEsZ0JBQWdCLG1CQUFtQixvQkFBb0IsOENBQThDLGtCQUFrQixHQUFHLHNCQUFzQiw4Q0FBOEMsbUJBQW1CLHFDQUFxQyw0QkFBNEIsd0RBQXdELDBDQUEwQyxHQUFHLDRCQUE0Qiw4QkFBOEIsMkRBQTJELG9CQUFvQiw4QkFBOEIsb0JBQW9CLHFEQUFxRCxzQ0FBc0MsMkJBQTJCLGVBQWUsK0JBQStCLDZCQUE2QiwyQkFBMkIsMEJBQTBCLHNCQUFzQixlQUFlLCtCQUErQiw4QkFBOEIsS0FBSyxlQUFlLHFCQUFxQixrRkFBa0YsMENBQTBDLDRCQUE0Qix5QkFBeUIscUJBQXFCLHlCQUF5QixtQ0FBbUMsMkJBQTJCLG9CQUFvQiw2QkFBNkIscUJBQXFCLEtBQUssb0JBQW9CLHdCQUF3Qiw0QkFBNEIsNEJBQTRCLG9CQUFvQix1QkFBdUIsR0FBRywyQ0FBMkMsb0JBQW9CLDZCQUE2QixxQkFBcUIsS0FBSyxpRUFBaUUsdUJBQXVCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLGdCQUFnQixHQUFHLGdHQUFnRyx3QkFBd0IsdUJBQXVCLDRCQUE0Qiw0QkFBNEIscUJBQXFCLG9CQUFvQixvQkFBb0IsbUJBQW1CLHlCQUF5QixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyxzQkFBc0Isc0VBQXNFLDBDQUEwQyw4Q0FBOEMscUJBQXFCLCtCQUErQiwyQkFBMkIsaUJBQWlCLGVBQWUsZ0JBQWdCLG1CQUFtQiwwQkFBMEIsc0JBQXNCLDRCQUE0QixzQkFBc0IsNkJBQTZCLEdBQUcsMkJBQTJCLGdDQUFnQyxtQkFBbUIsb0JBQW9CLEdBQUcsT0FBTyxtRkFBbUYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxtQkFBbUIsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sbUJBQW1CLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksdUJBQXVCLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sd0JBQXdCLE9BQU8sTUFBTSxZQUFZLFdBQVcsc0JBQXNCLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksbUJBQW1CLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLG9EQUFvRCxnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLFdBQVcsNEJBQTRCLHFDQUFxQyxrQ0FBa0MsOEJBQThCLDRCQUE0QixHQUFHLFVBQVUsd0JBQXdCLDhDQUE4QyxxQ0FBcUMsa0JBQWtCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixHQUFHLFlBQVksa0JBQWtCLDJCQUEyQixnQ0FBZ0Msb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixpQkFBaUIsYUFBYSxHQUFHLFVBQVUsdUJBQXVCLG9CQUFvQiw2QkFBNkIscUJBQXFCLGdCQUFnQixHQUFHLHFDQUFxQyx5R0FBeUcsNEJBQTRCLDJCQUEyQixrQkFBa0IsbUNBQW1DLEdBQUcsc0NBQXNDLDhHQUE4RyxxQkFBcUIsMkJBQTJCLHNFQUFzRSwwQ0FBMEMsd0JBQXdCLHVCQUF1QixpQkFBaUIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsZUFBZSxzRUFBc0UsMENBQTBDLDZCQUE2Qix1QkFBdUIsdUJBQXVCLDRCQUE0Qix5QkFBeUIsR0FBRyx5RUFBeUUsZ0NBQWdDLG1CQUFtQixvQkFBb0Isd0JBQXdCLHFDQUFxQywyQkFBMkIsR0FBRyxtQkFBbUIsdUJBQXVCLGVBQWUsOENBQThDLHVCQUF1QixpQkFBaUIsb0JBQW9CLDZCQUE2QixLQUFLLDJCQUEyQixtQkFBbUIscUJBQXFCLDRCQUE0Qiw0QkFBNEIseUJBQXlCLEdBQUcsK0NBQStDLGtCQUFrQixzQkFBc0IsR0FBRyxxREFBcUQsNkJBQTZCLEdBQUcsbUZBQW1GLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLDZHQUE2RyxvQkFBb0IsMEJBQTBCLDBCQUEwQiw0QkFBNEIsMkJBQTJCLGlCQUFpQix5QkFBeUIsR0FBRyx3Q0FBd0MsbUJBQW1CLEdBQUcsZ0ZBQWdGLHlCQUF5QixrQkFBa0IsNExBQTRMLGdCQUFnQiw4QkFBOEIsS0FBSyxpR0FBaUcsbUJBQW1CLHlCQUF5QixnQkFBZ0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsOENBQThDLHNFQUFzRSx5QkFBeUIsR0FBRywrQ0FBK0MsZUFBZSxnQkFBZ0Isa0JBQWtCLG1CQUFtQixHQUFHLGdIQUFnSCxtREFBbUQsMkZBQTJGLHlFQUF5RSx5QkFBeUIscUJBQXFCLGtCQUFrQixzRUFBc0UsOEVBQThFLHlCQUF5QixrQkFBa0IsYUFBYSxnQkFBZ0Isb0JBQW9CLG1CQUFtQixzREFBc0QseURBQXlELEdBQUcseUJBQXlCLG9CQUFvQixnQ0FBZ0Msd0JBQXdCLGlCQUFpQix1QkFBdUIsZ0JBQWdCLDhDQUE4QyxJQUFJLDRIQUE0SCxrQkFBa0IseUJBQXlCLGFBQWEsZ0JBQWdCLG1CQUFtQixvQkFBb0IsOENBQThDLGtCQUFrQixHQUFHLHNCQUFzQiw4Q0FBOEMsbUJBQW1CLHFDQUFxQyw0QkFBNEIsd0RBQXdELDBDQUEwQyxHQUFHLDRCQUE0Qiw4QkFBOEIsMkRBQTJELG9CQUFvQiw4QkFBOEIsb0JBQW9CLHFEQUFxRCxzQ0FBc0MsMkJBQTJCLGVBQWUsK0JBQStCLDZCQUE2QiwyQkFBMkIsMEJBQTBCLHNCQUFzQixlQUFlLCtCQUErQiw4QkFBOEIsS0FBSyxlQUFlLHFCQUFxQixrRkFBa0YsMENBQTBDLDRCQUE0Qix5QkFBeUIscUJBQXFCLHlCQUF5QixtQ0FBbUMsMkJBQTJCLG9CQUFvQiw2QkFBNkIscUJBQXFCLEtBQUssb0JBQW9CLHdCQUF3Qiw0QkFBNEIsNEJBQTRCLG9CQUFvQix1QkFBdUIsR0FBRywyQ0FBMkMsb0JBQW9CLDZCQUE2QixxQkFBcUIsS0FBSyxpRUFBaUUsdUJBQXVCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLGdCQUFnQixHQUFHLGdHQUFnRyx3QkFBd0IsdUJBQXVCLDRCQUE0Qiw0QkFBNEIscUJBQXFCLG9CQUFvQixvQkFBb0IsbUJBQW1CLHlCQUF5QixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyxzQkFBc0Isc0VBQXNFLDBDQUEwQyw4Q0FBOEMscUJBQXFCLCtCQUErQiwyQkFBMkIsaUJBQWlCLGVBQWUsZ0JBQWdCLG1CQUFtQiwwQkFBMEIsc0JBQXNCLDRCQUE0QixzQkFBc0IsNkJBQTZCLEdBQUcsMkJBQTJCLGdDQUFnQyxtQkFBbUIsb0JBQW9CLEdBQUcsbUJBQW1CO0FBQ3Boa0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y2QztBQUNFO0FBQy9DOztBQUU0QztBQUNFOztBQUU5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw4Q0FBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQSxrQ0FBa0MsK0NBQVU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtFQUFPO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELE1BQU07QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUFRO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFPO0FBQ2YsUUFBUSxrRUFBTztBQUNmO0FBQ0EsdUZBQXVGLGFBQWE7QUFDcEcsd0ZBQXdGLGFBQWE7QUFDckc7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrRUFBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsQ0FBQyw0QkFBNEI7Ozs7Ozs7Ozs7Ozs7OztBQ3pUSjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsbUNBQW1DO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNCQUFzQjtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1HQUEwQztBQUMxRCxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjOztBQUVmO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEw4QztBQUNOOztBQUV6QjtBQUNmO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQU87QUFDWCwwQkFBMEIsa0VBQU87QUFDakM7QUFDQTtBQUNBLCtFQUErRSxjQUFjO0FBQzdGLDZFQUE2RSxjQUFjO0FBQzNGO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQ0FBbUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVDQUF1QztBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0dBQXVDO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQU87QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZCQUE2QjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9LQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ0c7O0FBRTlCOztBQUVyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtR0FBa0M7QUFDdEMsSUFBSSx1RUFBTztBQUNYLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL21vZHVsZXMvbWFrZV90YXNrX2luZm9fZm9ybS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL21vZHVsZXMvdGFza190YXNrTGlzdF9EYXRhLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvbW9kdWxlcy91aV90YXNrRGl2X2ludGVyYWN0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3Nlc3RzL2NoZWNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmxhY2stYmctY29sb3I6IzIyMjtcXG4gICAgLS13aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLXdoaXRlLWJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIC0tYm9yZGVyLXRoaWNrbmVzczogMnB4O1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogNThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2J1dHRvbkZvcm1Db250YWluZXIgeyAgICAgICAgICAgLyogZGl2IGluc2lkZSBvZiBtYWluIHdoaWNoIGNvbnRhaW5lcyB0aGUgYnV0dG9uIGZvciB0aGUgY3JlYXRpb24gb2YgbGlzdCBhbmQgdGFza3MqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjRmcjtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b24geyAgICAgICAgICAgICAgICAgIC8qIGJ1dHRvbiBhdCB0aGUgdG9wIHdoaWNoIGNyZWF0ZSB0aGUgZm9ybSBlbGVtZW50IHRvIG1ha2UgbGlzdCBhbmQgdGhlIHRhc2sqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW07XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMWZyO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC1oZWlnaHQ6IDIwZW07XFxuICAgIHBhZGRpbmc6IDAgMC44ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jZm9ybVRpdGxlRGl2ID4gaW5wdXQsXFxuZm9ybSA+ICN0YXNrTGlzdEl0ZW1Db250YWluZXIgPiBkaXYgPiBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS10ZXh0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxufVxcblxcbiNmb3JtVGl0bGVEaXYge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjRlbSAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbiNmb3JtVGl0bGVEaXYgPiBpbnB1dCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxufVxcblxcbmZvcm0gPiAjdGFza0xpc3RJdGVtQ29udGFpbmVyID4gZGl2ID4gaW1nIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDAuMDVlbTtcXG59XFxuXFxuZm9ybSA+ICN0YXNrTGlzdEl0ZW1Db250YWluZXIgPiBkaXYgPiBpbWc6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbn1cXG5cXG4vKiBkaXYgd2hpY2ggY29udGFpbnMgdGhlIHZhcmlvdXMgdGFza3MgaW4gdGhlIGZvcm0qL1xcbiN0YXNrTGlzdEl0ZW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuIC8qIGRpdiBpbiB3aGljaCB0aGUgcGx1cyBhbmQgdGhlIHRleHQgYm94IHRvIGFkZCBsaXN0IGl0ZW0gcmVzaWRlKi9cXG4jYWRkVGFza0xpc3RJdGVtLFxcbi50YXNrTGlzdEl0ZW0geyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXG4gICAgZ2FwOiAwLjJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSxcXG4udGFza0RpdiA+IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7IC8qY2hlY2sgYm94IGNhbm5vdCBiZSBjaGVja2VkIHdpdGhvdXQgeiBpbmRleCBzZXQgMCBhbmQgeiBpbmRleCBvZiB0aXRsZSBhbmQgdGhlIGNsb3NlIGJ1dHRvbiBkaXYgbmVlZHMgdG8gYmUgc2V0IHRvIDIgdG8gYXZvaWQgY2hlY2tib3ggYmVlbiBvbiB0b3Agb2YgdGl0bGUgb24gc2Nyb2xsKi9cXG4gICAgLyogaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDsgKi9cXG4gICAgLyogbWFyZ2luLXRvcDogMC4xZW07ICovXFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUsXFxuLnRhc2tEaXYgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUgIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTFweDtcXG4gICAgbGVmdDogLTFweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLnRhc2tEaXYgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUge1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUsXFxuLnRhc2tEaXYgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7ICAvKkkgZG9udCBrbm93IGlmIHRoaXMgaXMgYSBnb29kIHdheSB0byBkbyB0aGlzIG9yIHNob3VsZCB0aGlzIGJlIGRvbmUgdXNpbmcgamF2YXNjaXJwdCovXFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdkYXRlJ10sXFxuLnRhc2tEaXYgPiBpbnB1dCBbdHlwZT0nZGF0ZSddIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgei1pbmRleDogMTsgLyogd2l0aG91dCB0aGlzIHRoZSBkYXRlIHBpY2tlciB3YXMgbm90IHdvcmtpbmcgd2hlbiBjbGlja2VkIHVwb24qL1xcbn1cXG5cXG4udGFza0xpc3RJdGVtOmZvY3VzLXdpdGhpbjo6YWZ0ZXIsXFxuI2FkZFRhc2tMaXN0SXRlbTpmb2N1cy13aXRoaW46OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAtMC44ZW07XFxuICAgIGxlZnQ6IC0wLjhlbTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4jZm9ybUNsb3NlQnV0dG9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcG9zaXRpb246IHN0aWNreTsgXFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbn0gLyp0byBtYWtlIHRoZSBjbG9zZSBzdGF5IGF0IGJ1dHRvbiBldmVuIHdoZW4gc2Nyb2xsZWQgbm90IHdyb2tpbmcqL1xcblxcbiNmb3JtVGl0bGVEaXY6OmJlZm9yZSxcXG4jZm9ybUNsb3NlQnV0dG9uRGl2OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogLTAuOGVtO1xcbiAgICByaWdodDogLTAuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4jY2xvc2VGb3JtQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS10ZXh0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMC4yNWVtIDAuOGVtO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuI2Nsb3NlRm9ybUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIGJhY2sgZ3JvdW5kIGNvbG9yIG9mIHRoZSBjbG9zZSBmb3JtIGJ1dHRvbiBvbiBob3ZlciovXFxufVxcblxcbiNsaXN0Q29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMDBweCk7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogbWFzb25yeTsgKi9cXG4gICAgcGFkZGluZzogMC40ZW0gMmVtO1xcbiAgICBnYXA6IDFlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgKi9cXG59XFxuXFxuLnRhc2tMaXN0IHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlcjogdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKSBzb2xpZCBjYWxjKHZhcigtLWJvcmRlci10aGlja25lc3MpIC0gMXB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC1oZWlnaHQ6IDIxZW07ICBcXG5cXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICAvKiBmbGV4OiAwIDAgYXV0bzsgKi9cXG4gICAgLyogYWxpZ24tc2VsZjogZmxleC1zdGFydDsgKi9cXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZ2FwOiAwLjVlbTsgKi9cXG59XFxuXFxuLnRhc2tMaXN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbi51bkNvbXBsZXRlVGFza0RpdixcXG4uY29tcGxldGVUYXNrRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZ2FwOiAwLjJlbTsgKi9cXG59XFxuXFxuLnVuQ29tcGxldGVUYXNrRGl2ID4gLnRhc2tEaXYsXFxuLmNvbXBsZXRlVGFza0RpdiA+IC50YXNrRGl2IHtcXG4gICAgcGFkZGluZzogMC40ZW0gMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udW5Db21wbGV0ZVRhc2tEaXYgPiAudGFza0RpdiA+IC50YXNrVGl0bGVEaXYsXFxuLmNvbXBsZXRlVGFza0RpdiA+IC50YXNrRGl2ID4gLnRhc2tUaXRsZURpdntcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBtYXgtd2lkdGg6IDc0JTtcXG4gICAgYm9yZGVyOiBub25lOyBcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XFxufVxcblxcbi5jb21wbGV0ZVRhc2tEaXYge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbiNjdXJyZW50VGFza0xpc3Qge1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuNmVtO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDI1JTtcXG5cXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjdXJyZW50VGFza0xpc3QgaW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBLGlDQUFpQyxvRkFBb0Y7SUFDakgsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLDRCQUE0QjtBQUNoQzs7QUFFQSxrQ0FBa0MsNkVBQTZFO0lBQzNHLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLCtEQUErRDtJQUMvRCxtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUiwrREFBK0Q7SUFDL0QsbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDhC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QUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0RBQStEO0lBQy9ELG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLHdCQUF3Qjs7SUFFeEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUzs7SUFFVCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixxQkFBcUI7O0lBRXJCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1ibGFjay1iZy1jb2xvcjojMjIyO1xcbiAgICAtLXdoaXRlLXRleHQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC0td2hpdGUtYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1ib3JkZXItdGhpY2tuZXNzOiAycHg7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS10ZXh0LWNvbG9yKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbm1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiA1OHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jYnV0dG9uRm9ybUNvbnRhaW5lciB7ICAgICAgICAgICAvKiBkaXYgaW5zaWRlIG9mIG1haW4gd2hpY2ggY29udGFpbmVzIHRoZSBidXR0b24gZm9yIHRoZSBjcmVhdGlvbiBvZiBsaXN0IGFuZCB0YXNrcyovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNGZyO1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbiB7ICAgICAgICAgICAgICAgICAgLyogYnV0dG9uIGF0IHRoZSB0b3Agd2hpY2ggY3JlYXRlIHRoZSBmb3JtIGVsZW1lbnQgdG8gbWFrZSBsaXN0IGFuZCB0aGUgdGFzayovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOiAxZnI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWF4LWhlaWdodDogMjBlbTtcXG4gICAgcGFkZGluZzogMCAwLjhlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNmb3JtVGl0bGVEaXYgPiBpbnB1dCxcXG5mb3JtID4gI3Rhc2tMaXN0SXRlbUNvbnRhaW5lciA+IGRpdiA+IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDAuODVlbTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXG59XFxuXFxuI2Zvcm1UaXRsZURpdiB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59XFxuXFxuI2Zvcm1UaXRsZURpdiA+IGlucHV0IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIGhlaWdodDpmaXQtY29udGVudDtcXG59XFxuXFxuZm9ybSA+ICN0YXNrTGlzdEl0ZW1Db250YWluZXIgPiBkaXYgPiBpbWcge1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgcGFkZGluZzogMC4wNWVtO1xcbn1cXG5cXG5mb3JtID4gI3Rhc2tMaXN0SXRlbUNvbnRhaW5lciA+IGRpdiA+IGltZzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxufVxcblxcbi8qIGRpdiB3aGljaCBjb250YWlucyB0aGUgdmFyaW91cyB0YXNrcyBpbiB0aGUgZm9ybSovXFxuI3Rhc2tMaXN0SXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4gLyogZGl2IGluIHdoaWNoIHRoZSBwbHVzIGFuZCB0aGUgdGV4dCBib3ggdG8gYWRkIGxpc3QgaXRlbSByZXNpZGUqL1xcbiNhZGRUYXNrTGlzdEl0ZW0sXFxuLnRhc2tMaXN0SXRlbSB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcbiAgICBnYXA6IDAuMmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdjaGVja2JveCddLFxcbi50YXNrRGl2ID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTsgLypjaGVjayBib3ggY2Fubm90IGJlIGNoZWNrZWQgd2l0aG91dCB6IGluZGV4IHNldCAwIGFuZCB6IGluZGV4IG9mIHRpdGxlIGFuZCB0aGUgY2xvc2UgYnV0dG9uIGRpdiBuZWVkcyB0byBiZSBzZXQgdG8gMiB0byBhdm9pZCBjaGVja2JveCBiZWVuIG9uIHRvcCBvZiB0aXRsZSBvbiBzY3JvbGwqL1xcbiAgICAvKiBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwOyAqL1xcbiAgICAvKiBtYXJnaW4tdG9wOiAwLjFlbTsgKi9cXG59XFxuXFxuLnRhc2tMaXN0SXRlbSA+IGlucHV0W3R5cGU9J2NoZWNrYm94J106OmJlZm9yZSxcXG4udGFza0RpdiA+IGlucHV0W3R5cGU9J2NoZWNrYm94J106OmJlZm9yZSAge1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMXB4O1xcbiAgICBsZWZ0OiAtMXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4udGFza0RpdiA+IGlucHV0W3R5cGU9J2NoZWNrYm94J106OmJlZm9yZSB7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHdpZHRoOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSxcXG4udGFza0RpdiA+IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXN0cy9jaGVjay5zdmcpOyAgLypJIGRvbnQga25vdyBpZiB0aGlzIGlzIGEgZ29vZCB3YXkgdG8gZG8gdGhpcyBvciBzaG91bGQgdGhpcyBiZSBkb25lIHVzaW5nIGphdmFzY2lycHQqL1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nZGF0ZSddLFxcbi50YXNrRGl2ID4gaW5wdXQgW3R5cGU9J2RhdGUnXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHotaW5kZXg6IDE7IC8qIHdpdGhvdXQgdGhpcyB0aGUgZGF0ZSBwaWNrZXIgd2FzIG5vdCB3b3JraW5nIHdoZW4gY2xpY2tlZCB1cG9uKi9cXG59XFxuXFxuLnRhc2tMaXN0SXRlbTpmb2N1cy13aXRoaW46OmFmdGVyLFxcbiNhZGRUYXNrTGlzdEl0ZW06Zm9jdXMtd2l0aGluOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogLTAuOGVtO1xcbiAgICBsZWZ0OiAtMC44ZW07XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuI2Zvcm1DbG9zZUJ1dHRvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7IFxcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwYWRkaW5nOiAwLjRlbSAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG59IC8qdG8gbWFrZSB0aGUgY2xvc2Ugc3RheSBhdCBidXR0b24gZXZlbiB3aGVuIHNjcm9sbGVkIG5vdCB3cm9raW5nKi9cXG5cXG4jZm9ybVRpdGxlRGl2OjpiZWZvcmUsXFxuI2Zvcm1DbG9zZUJ1dHRvbkRpdjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IC0wLjhlbTtcXG4gICAgcmlnaHQ6IC0wLjhlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuI2Nsb3NlRm9ybUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjhlbTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiNjbG9zZUZvcm1CdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyAvKiBiYWNrIGdyb3VuZCBjb2xvciBvZiB0aGUgY2xvc2UgZm9ybSBidXR0b24gb24gaG92ZXIqL1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lciB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjAwcHgpO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IG1hc29ucnk7ICovXFxuICAgIHBhZGRpbmc6IDAuNGVtIDJlbTtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcblxcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMWVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgICovXFxufVxcblxcbi50YXNrTGlzdCB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXI6IHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcikgc29saWQgY2FsYyh2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSAtIDFweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtaGVpZ2h0OiAyMWVtOyAgXFxuXFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgLyogZmxleDogMCAwIGF1dG87ICovXFxuICAgIC8qIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7ICovXFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGdhcDogMC41ZW07ICovXFxufVxcblxcbi50YXNrTGlzdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwO1xcbn1cXG5cXG4udW5Db21wbGV0ZVRhc2tEaXYsXFxuLmNvbXBsZXRlVGFza0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGdhcDogMC4yZW07ICovXFxufVxcblxcbi51bkNvbXBsZXRlVGFza0RpdiA+IC50YXNrRGl2LFxcbi5jb21wbGV0ZVRhc2tEaXYgPiAudGFza0RpdiB7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnVuQ29tcGxldGVUYXNrRGl2ID4gLnRhc2tEaXYgPiAudGFza1RpdGxlRGl2LFxcbi5jb21wbGV0ZVRhc2tEaXYgPiAudGFza0RpdiA+IC50YXNrVGl0bGVEaXZ7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICBsaW5lLWhlaWdodDogMWVtO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgbWF4LXdpZHRoOiA3NCU7XFxuICAgIGJvcmRlcjogbm9uZTsgXFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbn1cXG5cXG4uY29tcGxldGVUYXNrRGl2IHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4jY3VycmVudFRhc2tMaXN0IHtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjZlbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIHRvcDogMjUlO1xcbiAgICBsZWZ0OiAyNSU7XFxuXFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY3VycmVudFRhc2tMaXN0IGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjb250cm9sIGZyb20gJy4vdGFza190YXNrTGlzdF9EYXRhLmpzJ1xuaW1wb3J0IGNvbnRyb2wyIGZyb20gJy4vdWlfdGFza0Rpdl9pbnRlcmFjdC5qcydcbi8vIGltcG9ydCBkaXNwbGF5Q3VycmVudFRhc2tMaXN0IGZyb20gJy4vdWlfdGFza0Rpdl9pbnRlcmFjdC5qcyc7XG5cbmltcG9ydCBwbHVzSW1hZ2UgZnJvbSAnLi4vYXNzZXN0cy9wbHVzLnN2Zyc7XG5pbXBvcnQgY2xvc2VJbWFnZSBmcm9tICcuLi9hc3Nlc3RzL2Nsb3NlLnN2Zyc7XG5cbmNvbnN0IHVpRWxlbWVudHMgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBjcmVhdGVBZGRUYXNrQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhZGRUYXNrQnV0dG9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbkZvcm1Db250YWluZXInKTtcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrQnV0dG9uJyk7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdUYWtlIGEgTm90ZS4uLic7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2tCdXR0b25DbGlja2VkKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbkRpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICByZXR1cm4gJ2FkZGVkJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBZGRUYXNrQnV0dG9uKGJ0bikge1xuICAgICAgICBsZXQgYWRkVGFza0J1dHRvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25Gb3JtQ29udGFpbmVyJyk7XG4gICAgICAgIGJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2tCdXR0b25DbGlja2VkKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbkRpdi5yZW1vdmVDaGlsZChidG4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRhc2tCdXR0b25DbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIHJlbW92ZUFkZFRhc2tCdXR0b24oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY3JlYXRlVGFza0Zvcm0oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSgpIHtcbiAgICAgICAgbGV0IGFkZFRhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uRm9ybUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRnJvbVRpdGxlKCkpO1xuICAgICAgICBsZXQgdGFza0RpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0xpc3RJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIHRhc2tEaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkVGFza0xpc3RJdGVtKCkpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tEaXZDb250YWluZXIpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUNsb3NlRm9ybUJ1dHRvbigpKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbkRpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRnJvbVRpdGxlKCkge1xuICAgICAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtVGl0bGVEaXYnKTtcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgICAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICAgICAgcmV0dXJuIHRpdGxlRGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tMaXN0SXRlbSgpIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrTGlzdEl0ZW0nKTtcbiAgICAgICAgbGV0IHBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcGx1cy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBsdXNJbWFnZSk7XG4gICAgICAgIHBsdXMuc2V0QXR0cmlidXRlKCdhbHQnLCAncGx1cyBzaWduJyk7ICAgICAgIFxuICAgICAgICBsZXQgdGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRleHRCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGV4dEJveC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0xpc3QgaXRlbScpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocGx1cyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0Qm94KTtcbiAgICAgICAgdGV4dEJveC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRleHRJblRleHRCb3gpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VMaXN0SXRlbSh0YXNrRGl2Q29udGFpbmVyKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0xpc3RJdGVtJyk7XG4gICAgICAgIGxldCBpZEluZGV4ID0gdGFza0RpdkNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7XG4gICAgICAgIGRpdi5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybVRhc2tJbmRleCcsICcnK2lkSW5kZXgpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrTGlzdEl0ZW0nKTtcbiAgICAgICAgbGV0IHRleHRCb3ggPSBkaXYuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgdGV4dEJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRleHRJblRleHRCb3gpO1xuICAgICAgICB0ZXh0Qm94LnJlbW92ZUF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcbiAgICAgICAgdGV4dEJveC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZihldmVudC5jb2RlID09ICdFbnRlcicgJiYgTnVtYmVyKHRleHRCb3gudmFsdWUpICE9IDApIHtcbiAgICAgICAgICAgICAgICBlbnRlclByZXNzZWRPblRhc2tMaXN0SXRlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGRpdi5pbnNlcnRCZWZvcmUoY2hlY2tCb3gsIGRpdi5maXJzdENoaWxkKTtcbiAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBnZXRDdXJyZW50RGF0ZSgpKTtcbiAgICAgICAgLy8gZGF0ZUlucHV0LnZhbHVlID0gYCR7Z2V0Q3VycmVudERhdGUoKX1gO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICAgICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNsb3NlLnNldEF0dHJpYnV0ZSgnc3JjJywgY2xvc2VJbWFnZSk7XG4gICAgICAgIGNsb3NlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2Nsb3NlIHNpZ24nKTtcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrTGlzdEl0ZW1CdXR0b25DbGlja2VkKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXh0SW5UZXh0Qm94KCkge1xuICAgICAgICBsZXQgdGFza0RpdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgbWFrZUxpc3RJdGVtKHRhc2tEaXZDb250YWluZXIpO1xuICAgICAgICBsZXQgZGl2ID0gY3JlYXRlQWRkVGFza0xpc3RJdGVtKCk7XG4gICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW50ZXJQcmVzc2VkT25UYXNrTGlzdEl0ZW0oKSB7XG4gICAgICAgIGxldCBhZGRMaXN0SXRlbVRleHRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0xpc3RJdGVtID4gaW5wdXQnKTtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGZvcm0uc2Nyb2xsVG9wICs9IGZvcm0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBhZGRMaXN0SXRlbVRleHRCb3guZm9jdXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrTGlzdEl0ZW1CdXR0b25DbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGxldCByZW1vdmVkRGl2SW5kZXggPSByZW1vdmVUYXNrTGlzdEl0ZW0oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgdXBkYXRlRGF0YVRhc2tJbmRleChyZW1vdmVkRGl2SW5kZXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2tMaXN0SXRlbShpbWcpIHtcbiAgICAgICAgbGV0IHBhcmVudERpdiA9IGltZy5wYXJlbnRFbGVtZW50O1xuICAgICAgICB3aGlsZShwYXJlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGFyZW50RGl2LnJlbW92ZUNoaWxkKHBhcmVudERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGl2SW5kZXggPSBwYXJlbnREaXYuZ2V0QXR0cmlidXRlKCdkYXRhLWZvcm1UYXNrSW5kZXgnKTtcbiAgICAgICAgbGV0IHRhc2tEaXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0xpc3RJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIHRhc2tEaXZDb250YWluZXIucmVtb3ZlQ2hpbGQocGFyZW50RGl2KTtcbiAgICAgICAgcmV0dXJuIGRpdkluZGV4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURhdGFUYXNrSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgbGV0IHRhc2tMaXN0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLWZvcm1UYXNrSW5kZXhdJykpO1xuICAgICAgICBmb3IobGV0IGk9aW5kZXg7IGk8dGFza0xpc3RJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFza0xpc3RJdGVtc1tpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybVRhc2tJbmRleCcsIFwiXCIraSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDbG9zZUZvcm1CdXR0b24oKSB7XG4gICAgICAgIGxldCBmb3JtQ2xvc2VCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUNsb3NlQnV0dG9uRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybUNsb3NlQnV0dG9uRGl2Jyk7IFxuICAgICAgICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlRm9ybUJ1dHRvbicpO1xuICAgICAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtQnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIGZvcm1DbG9zZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgICAgIHJldHVybiBmb3JtQ2xvc2VCdXR0b25EaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VGb3JtQnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgICAgbGV0IHRhc2tMaXN0T2JqZWN0ID0gY3JlYXRlVGFza0xpc3REZXRhaWxzKCk7XG4gICAgICAgIHJlbW92ZUZvcm0oKTtcbiAgICAgICAgY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuICAgICAgICBtYWtlVGFza0xpc3REaXYuZGlzcGxheUN1cnJlbnRUYXNrTGlzdChjb250cm9sKDEsIHRhc2tMaXN0T2JqZWN0KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0xpc3REZXRhaWxzKCkge1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVRpdGxlRGl2ID4gaW5wdXQnKS52YWx1ZSB8fCAnR2VuZXJhbCBUYXNrcyc7XG4gICAgICAgIGxldCB0YXNrc0xpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLWZvcm1UYXNraW5kZXhdJykpO1xuICAgICAgICBsZXQgdmFsdWVzID0gdGFza3NMaXN0Lm1hcCh0YXNrID0+IFt0YXNrLmNoaWxkTm9kZXNbMV0udmFsdWUsdGFzay5jaGlsZE5vZGVzWzJdLnZhbHVlLHRhc2suY2hpbGROb2Rlc1swXS5jaGVja2VkXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZSwgXG4gICAgICAgICAgICB2YWx1ZXNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlRm9ybUJ1dHRvbicpO1xuICAgICAgICBjbG9zZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybUJ1dHRvbkNsaWNrZWQpO1xuICAgICAgICBsZXQgYWRkVGFza0J1dHRvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25Gb3JtQ29udGFpbmVyJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b25EaXYucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlQWRkVGFza0J1dHRvbixcbiAgICB9XG59KSgpO1xuXG5jb25zdCBnZXRDdXJyZW50RGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgPiA5ID8gZGF0ZS5nZXRNb250aCgpIDogJzAnICsgZGF0ZS5nZXRNb250aCgpO1xuICAgIHJldHVybihkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyBtb250aCArICctJyArIGRhdGUuZ2V0RGF0ZSgpKTtcbn1cblxuY29uc3QgbWFrZVRhc2tMaXN0RGl2ID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRUYXNrTGlzdChjdXJyZW50VGFza0xpc3QpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrTGlzdERpdiA9IG1ha2VUYXNrTGlzdERpdihjdXJyZW50VGFza0xpc3QudGl0bGUsIGN1cnJlbnRUYXNrTGlzdC5pbmRleCk7XG4gICAgICAgIGxldCB0YXNrc0xpc3QgPSBjdXJyZW50VGFza0xpc3QudGFza0xpc3Q7XG4gICAgICAgIGxldCB1bkNvbXBsZXRlVGFza0RpdiA9IGN1cnJlbnRUYXNrTGlzdERpdi5jaGlsZE5vZGVzWzFdO1xuICAgICAgICBsZXQgY29tcGxldGVUYXNrRGl2ID0gY3VycmVudFRhc2tMaXN0RGl2LmNoaWxkTm9kZXNbMl07XG4gICAgICAgIGxldCBpPTAsIHBvcz0wO1xuICAgICAgICB3aGlsZShpIDwgMTAgJiYgcG9zIDwgdGFza3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYoIXRhc2tzTGlzdFtwb3NdLmNvbXBsZXRlU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgYWRkTGlzdEl0ZW0odGFza3NMaXN0W3Bvc10udGl0bGUsIHVuQ29tcGxldGVUYXNrRGl2LCBwb3MsIDApO1xuICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcyArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHBvcyA9IDA7XG4gICAgICAgIHdoaWxlKHBvcyA8IHRhc2tzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRhc2tzTGlzdFtwb3NdLmNvbXBsZXRlU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgYWRkTGlzdEl0ZW0odGFza3NMaXN0W3Bvc10udGl0bGUsIGNvbXBsZXRlVGFza0RpdiwgcG9zLCAxKTtcbiAgICAgICAgICAgICAgICAvLyBpICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3MgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBtYWtlVGFza0xpc3REaXYodGl0bGUsIGluZGV4KSB7XG4gICAgICAgIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RDb250YWluZXInKTtcbiAgICAgICAgbGV0IGxpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tMaXN0Jyk7XG4gICAgICAgIGxpc3REaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tMaXN0SW5kZXgnLCBgJHtpbmRleH1gKTtcbiAgICAgICAgbGlzdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsaWNrKCkge1xuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUYXNrTGlzdCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udHJvbDIobGlzdERpdik7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdGFza0xpc3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tMaXN0VGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrTGlzdFRpdGxlJyk7XG4gICAgICAgIHRhc2tMaXN0VGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdFRpdGxlRGl2KTtcbiAgICAgICAgbGV0IHVuQ29tcGxldGVkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB1bkNvbXBsZXRlZFRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd1bkNvbXBsZXRlVGFza0RpdicpO1xuICAgICAgICBsaXN0RGl2LmFwcGVuZENoaWxkKHVuQ29tcGxldGVkVGFza0NvbnRhaW5lcik7XG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbXBsZXRlZFRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21wbGV0ZVRhc2tEaXYnKTtcbiAgICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrQ29udGFpbmVyKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5pbnNlcnRCZWZvcmUobGlzdERpdiwgbGlzdENvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgcmV0dXJuIGxpc3REaXY7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZExpc3RJdGVtKHRpdGxlLCBsaXN0RGl2LCBpbmRleCwgdGFza1N0YXR1cz0wKSB7XG4gICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrRGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcsIGluZGV4KTtcbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza1RpdGxlRGl2Jyk7XG4gICAgICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBpZih0YXNrU3RhdHVzID09IDEpIHtcbiAgICAgICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB0YXNrQ2hlY2tCb3hDbGlja2VkKGV2ZW50ICxsaXN0RGl2LCB0YXNrRGl2KSk7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICBsaXN0RGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRhc2tDaGVja0JveENsaWNrZWQoZXZlbnQsIGxpc3REaXYsIHRhc2spIHtcbiAgICAgICAgbGV0IGxpc3REaXZJbmRleCA9IGxpc3REaXYucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0xpc3RJbmRleCcpXG4gICAgICAgIGxldCB0YXNrQ2xpY2tlZCA9IHRhc2s7XG4gICAgICAgIGNvbnRyb2woMywgbGlzdERpdkluZGV4KTtcbiAgICAgICAgY29udHJvbCgyLCB0YXNrQ2xpY2tlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JykpO1xuICAgICAgICBsZXQgY29tcGxldGVTdGF0dXMgPSB0YXNrLmNoaWxkTm9kZXNbMF0uY2hlY2tlZDtcbiAgICAgICAgbGV0IGNvbXBsZXRlVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS10YXNrbGlzdEluZGV4PVwiJHtsaXN0RGl2SW5kZXh9XCJdIC5jb21wbGV0ZVRhc2tEaXZgKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudFRhc2tMaXN0ID4gLmNvbXBsZXRlVGFza0RpdicpO1xuICAgICAgICBsZXQgdW5Db21wbGV0ZVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS10YXNrbGlzdEluZGV4PVwiJHtsaXN0RGl2SW5kZXh9XCJdIC51bkNvbXBsZXRlVGFza0RpdmApIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50VGFza0xpc3QgPiAudW5Db21wbGV0ZVRhc2tEaXYnKTtcbiAgICAgICAgaWYoY29tcGxldGVTdGF0dXMpIHtcbiAgICAgICAgICAgIG1hcmtUYXNrQ29tcGxldGUodGFza0NsaWNrZWQsIHVuQ29tcGxldGVUYXNrQ29udGFpbmVyLCBjb21wbGV0ZVRhc2tzQ29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hcmtUYXNrVW5jb21wbGV0ZSh0YXNrQ2xpY2tlZCwgdW5Db21wbGV0ZVRhc2tDb250YWluZXIsIGNvbXBsZXRlVGFza3NDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBzdG9wcyB0aGUgYnViYmxpbmcgdG8gdGhlIG1haW4gbGlzdCBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXJrVGFza0NvbXBsZXRlKHRhc2ssIHVuQ29tcGxldGVUYXNrQ29udGFpbmVyLCBjb21wbGV0ZVRhc2tDb250YWluZXIpIHtcbiAgICAgICAgbGV0IGxhc3RDaGlsZCA9IHVuQ29tcGxldGVUYXNrQ29udGFpbmVyLmNoaWxkTm9kZXNbdW5Db21wbGV0ZVRhc2tDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGxhc3RDaGlsZEluZGV4ID0gbGFzdENoaWxkLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnKTtcbiAgICAgICAgbGV0IGluZm8gPSBjb250cm9sKDQsIGxhc3RDaGlsZEluZGV4KTtcbiAgICAgICAgdW5Db21wbGV0ZVRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFzayk7XG4gICAgICAgIGlmKGluZm8gIT09ICBudWxsKSB7XG4gICAgICAgICAgICBhZGRMaXN0SXRlbShpbmZvLnRpdGxlLCB1bkNvbXBsZXRlVGFza0NvbnRhaW5lciwgaW5mby5pbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGFzay5jaGlsZE5vZGVzWzJdKSB7XG4gICAgICAgICAgICB0YXNrLmNoaWxkTm9kZXNbMV0uc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIHRhc2suY2hpbGROb2Rlc1syXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29tcGxldGVUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcmtUYXNrVW5jb21wbGV0ZSh0YXNrLCB1bkNvbXBsZXRlVGFza0NvbnRhaW5lciwgY29tcGxldGVUYXNrQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbXBsZXRlVGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrKTtcbiAgICAgICAgbGV0IGluZGV4ID0gdGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4Jyk7XG4gICAgICAgIGxldCB1bmNvbXBsZXRlVGFza3MgPSBBcnJheS5mcm9tKHVuQ29tcGxldGVUYXNrQ29udGFpbmVyLmNoaWxkTm9kZXMpO1xuICAgICAgICBpZih0YXNrLmNoaWxkTm9kZXNbMl0pIHtcbiAgICAgICAgICAgIHRhc2suY2hpbGROb2Rlc1sxXS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICAgICAgICB0YXNrLmNoaWxkTm9kZXNbMl0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb21wbGV0ZVRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgIGlmKHVuY29tcGxldGVUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHVuQ29tcGxldGVUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYoTnVtYmVyKGluZGV4KSA+IE51bWJlcih1bmNvbXBsZXRlVGFza3NbdW5jb21wbGV0ZVRhc2tzLmxlbmd0aCAtIDFdLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnKSkpIHtcbiAgICAgICAgICAgIHVuQ29tcGxldGVUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHVuY29tcGxldGVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRlbXBUYXNrID0gdW5jb21wbGV0ZVRhc2tzW2ldO1xuICAgICAgICAgICAgaWYoTnVtYmVyKHRlbXBUYXNrLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnKSkgPiBOdW1iZXIoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgdW5Db21wbGV0ZVRhc2tDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2ssIHRlbXBUYXNrKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXlDdXJyZW50VGFza0xpc3QsXG4gICAgICAgIHRhc2tDaGVja0JveENsaWNrZWRcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQge3VpRWxlbWVudHMsIG1ha2VUYXNrTGlzdERpdn07IiwiaW1wb3J0IG9iaiBmcm9tICcuL21ha2VfdGFza19pbmZvX2Zvcm0nO1xuXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkdWVEYXRlLCBjb21wbGV0ZVN0YXR1cz1mYWxzZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIC8vIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlU3RhdHVzID0gY29tcGxldGVTdGF0dXM7XG59XG5cblRhc2sucHJvdG90eXBlLm1hcmtDb21wbGV0ZV9VbmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jb21wbGV0ZVN0YXR1cyA9IHRoaXMuY29tcGxldGVTdGF0dXMgPyBmYWxzZSA6IHRydWU7XG59XG5cblRhc2sucHJvdG90eXBlLmlzQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wbGV0ZVN0YXR1cztcbn1cblxuZnVuY3Rpb24gVGFza0xpc3QodGl0bGUsIGluZGV4KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG59XG5cblRhc2tMaXN0LnByb3RvdHlwZS5kaXNwbGF5QWxsID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50YXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4gY29uc29sZS5sb2codGFzaykpO1xuICAgIHJldHVybiAxO1xufVxuXG5UYXNrTGlzdC5wcm90b3R5cGUuaXNDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tMaXN0LmV2ZXJ5KHRhc2sgPT4gdGFzay5pc0NvbXBsZXRlKTtcbn1cblxuY29uc3QgdGFza05UYXNrTGlzdE1hbmFnZXIgPSAoZnVuY3Rpb24gY29udHJvbCgpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgICBsZXQgY3VycmVudFRhc2tMaXN0O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZHVlRGF0ZSwgY29tcGxldGVTdGF0dXMpIHtcbiAgICAgICAgY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0LnB1c2gobmV3IFRhc2sodGl0bGUsIGR1ZURhdGUsIGNvbXBsZXRlU3RhdHVzKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0xpc3QodGl0bGUpIHtcbiAgICAgICAgdGl0bGUgPSB0aXRsZSA9PSAnR2VuZXJhbCBUYXNrcycgPyB0aXRsZStcIiBcIitwcm9qZWN0cy5sZW5ndGggOiB0aXRsZTtcbiAgICAgICAgY3VycmVudFRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0KHRpdGxlLCBwcm9qZWN0cy5sZW5ndGgpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKGN1cnJlbnRUYXNrTGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRUYXNrTGlzdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2tMaXN0LnRpdGxlKTtcbiAgICAgICAgaWYoY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdC5kaXNwbGF5QWxsKCk7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUYXNrTGlzdCgpIHtcbiAgICAgICAgY29uc3QgY29weUN1cnJlbnRUYXNrTGlzdCA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRUYXNrTGlzdCk7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICByZXR1cm4gY29weUN1cnJlbnRUYXNrTGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXJrVGFza0NvbXBsZXRlX1VuY29tcGxldGUoaW5kZXgpIHtcbiAgICAgICAgaWYoY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0Lmxlbmd0aCA8IGluZGV4IHx8ICFpbmRleCB8fCBpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0W2luZGV4XS5tYXJrQ29tcGxldGVfVW5jb21wbGV0ZSgpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoQ3VycmVudFRhc2tMaXN0VG8oaW5kZXgpIHtcbiAgICAgICAgaWYocHJvamVjdHMubGVuZ3RoIDwgaW5kZXggfHwgIWluZGV4IHx8IGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VGFza0xpc3QgPSBwcm9qZWN0c1tpbmRleF07XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFVuY29tcGxldGVkVGFza0FmdGVyKGluZGV4KSB7XG4gICAgICAgIGZvcihsZXQgaT1OdW1iZXIoaW5kZXgpKzE7IGk8Y3VycmVudFRhc2tMaXN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdFtpXTtcbiAgICAgICAgICAgIGlmKCF0YXNrLmlzQ29tcGxldGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0YXNrLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogdGFzay5kdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZVN0YXR1czogdGFzay5jb21wbGV0ZVN0YXR1cyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRUYXNrTGlzdCh0YXNrTGlzdCkge1xuICAgICAgICBjdXJyZW50VGFza0xpc3QudGl0bGUgPSB0YXNrTGlzdC50aXRsZTtcbiAgICAgICAgY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0ID0gW107XG4gICAgICAgIHRhc2tMaXN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5wdXNoKG5ldyBUYXNrKHRhc2sudGl0bGUsIHRhc2suZHVlRGF0ZSwgdGFzay5jb21wbGV0ZVN0YXR1cykpO1xuICAgICAgICB9KVxuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKCkge1xuICAgICAgICBsZXQgc3RvcmFnZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgICAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2UgdGVzdF9fJztcbiAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LHgpO1xuICAgICAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuICAgICAgICBpZighc3RvcmFnZUF2YWlsYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2N1cnJlbnRUYXNrTGlzdC5pbmRleH1gLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza0xpc3QpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmludExvY2FsU3RvcmFnZUtleXMoKSB7XG4gICAgICAgIGxldCBrZXlzO1xuICAgICAgICBpZihzdG9yYWdlQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHRhc2tMaXN0KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XG4gICAgICAgICAgICAgICAgb2JqLm1ha2VUYXNrTGlzdERpdi5kaXNwbGF5Q3VycmVudFRhc2tMaXN0KHRhc2tMaXN0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVGFzayxcbiAgICAgICAgY3JlYXRlVGFza0xpc3QsXG4gICAgICAgIGRpc3BsYXlDdXJyZW50VGFza0xpc3QsXG4gICAgICAgIGdldEN1cnJlbnRUYXNrTGlzdCxcbiAgICAgICAgbWFya1Rhc2tDb21wbGV0ZV9VbmNvbXBsZXRlLFxuICAgICAgICBzd2l0Y2hDdXJyZW50VGFza0xpc3RUbyxcbiAgICAgICAgZ2V0VW5jb21wbGV0ZWRUYXNrQWZ0ZXIsXG4gICAgICAgIHVwZGF0ZUN1cnJlbnRUYXNrTGlzdCxcbiAgICAgICAgcHJpbnRMb2NhbFN0b3JhZ2VLZXlzXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbChjaG9pY2UsIG9wdGlvbikge1xuXG4gICAgc3dpdGNoKGNob2ljZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0YXNrTlRhc2tMaXN0TWFuYWdlci5jcmVhdGVUYXNrTGlzdChvcHRpb24udGl0bGUpOyAvLyBoZXJlIG9wdGlvbiBpcyBvYmplY3Qgd2hpY2ggY3JlYXRlIGEgbmV3IHRhc2tsaXN0IHdpdGggYWxsIHRoZSB0YXNrXG4gICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2godmFsID0+IHRhc2tOVGFza0xpc3RNYW5hZ2VyLmNyZWF0ZVRhc2sodmFsWzBdLCB2YWxbMV0sIHZhbFsyXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tOVGFza0xpc3RNYW5hZ2VyLmdldEN1cnJlbnRUYXNrTGlzdCgpO1xuICAgICAgICBjYXNlIDI6IFxuICAgICAgICAgICAgdGFza05UYXNrTGlzdE1hbmFnZXIubWFya1Rhc2tDb21wbGV0ZV9VbmNvbXBsZXRlKG9wdGlvbik7IC8vIGhlcmUgb3B0aW9uIGlzIHRoZSBpbmRleCBvZiB0aGUgdGFzayB3aGljaCBuZWVkIHRvIGJlIG1hcmtlZCBjb21wbGV0ZSBpbiBzcGVjaWZpYyB0YXNrXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOiBcbiAgICAgICAgICAgIHRhc2tOVGFza0xpc3RNYW5hZ2VyLnN3aXRjaEN1cnJlbnRUYXNrTGlzdFRvKG9wdGlvbik7IC8vIGhlcmUgb3B0aW9uIGlzIHRoZSBpbmRleCBvZiB0aGUgdGFza2xpc3Qgd2hpY2ggbmVlZCB0byBiZSBtYWRlIGN1cnJlbnRcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IFxuICAgICAgICAgICAgcmV0dXJuKHRhc2tOVGFza0xpc3RNYW5hZ2VyLmdldFVuY29tcGxldGVkVGFza0FmdGVyKG9wdGlvbikpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHRhc2tOVGFza0xpc3RNYW5hZ2VyLmRpc3BsYXlDdXJyZW50VGFza0xpc3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gdGFza05UYXNrTGlzdE1hbmFnZXIuZ2V0Q3VycmVudFRhc2tMaXN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OiBcbiAgICAgICAgICAgIHRhc2tOVGFza0xpc3RNYW5hZ2VyLnVwZGF0ZUN1cnJlbnRUYXNrTGlzdChvcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIHRhc2tOVGFza0xpc3RNYW5hZ2VyLnByaW50TG9jYWxTdG9yYWdlS2V5cygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IGEgdmFsaWQgY2hvaWNlJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59IiwiaW1wb3J0IGNvbnRyb2wgZnJvbSAnLi90YXNrX3Rhc2tMaXN0X0RhdGEuanMnO1xuaW1wb3J0IG9iaiBmcm9tICcuL21ha2VfdGFza19pbmZvX2Zvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sMihsaXN0RGl2KSB7XG4gICAgY29uc29sZS5sb2cobGlzdERpdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0xpc3RJbmRleCcpKTtcbiAgICBsaXN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2tMaXN0Jyk7XG4gICAgbGV0IHRhc2tMaXN0SW5kZXggPSBsaXN0RGl2LmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrTGlzdEluZGV4Jyk7XG4gICAgY29udHJvbCgzLCB0YXNrTGlzdEluZGV4KTtcbiAgICBsZXQgY3VycmVudFRhc2tMaXN0ID0gY29udHJvbCg2LCB0YXNrTGlzdEluZGV4KTtcbiAgICBsaXN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY3VycmVudFRhc2tMaXN0Jyk7XG4gICAgbWFrZVRpdGxlRGl2RWRpdGFibGUobGlzdERpdiwgY3VycmVudFRhc2tMaXN0LnRpdGxlKTtcbiAgICBsZXQgdW5jb21wbGV0ZVRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtdGFza0xpc3RJbmRleD1cIiR7dGFza0xpc3RJbmRleH1cIl0gPiAudW5Db21wbGV0ZVRhc2tEaXZgKTtcbiAgICBsZXQgY29tcGxldGVUYXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLXRhc2tMaXN0SW5kZXg9XCIke3Rhc2tMaXN0SW5kZXh9XCJdID4gLmNvbXBsZXRlVGFza0RpdmApO1xuICAgIGxldCB1bkNvbXBsZXRlVGFza3MgPSB1bmNvbXBsZXRlVGFza0xpc3QuY2hpbGROb2RlcztcbiAgICBsZXQgY29tcGxldGVUYXNrcyA9IGNvbXBsZXRlVGFza0xpc3QuY2hpbGROb2RlcztcbiAgICBmb3IobGV0IGk9MDsgaTx1bkNvbXBsZXRlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGluZGV4ID0gTnVtYmVyKHVuQ29tcGxldGVUYXNrc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JykpO1xuICAgICAgICBtb2RpZnlFeGlzdGluZ1Rhc2sodW5Db21wbGV0ZVRhc2tzW2ldLCBjdXJyZW50VGFza0xpc3QudGFza0xpc3RbaW5kZXhdLmR1ZURhdGUpO1xuICAgIH1cbiAgICBmb3IobGV0IGk9MDsgaTxjb21wbGV0ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpbmRleCA9IE51bWJlcihjb21wbGV0ZVRhc2tzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnKSk7XG4gICAgICAgIG1vZGlmeUV4aXN0aW5nVGFzayhjb21wbGV0ZVRhc2tzW2ldLCBjdXJyZW50VGFza0xpc3QudGFza0xpc3RbaW5kZXhdLmR1ZURhdGUsIGZhbHNlKTtcbiAgICB9XG4gICAgbGV0IGxhc3RDaGlsZEluZGV4ID0gdW5jb21wbGV0ZVRhc2tMaXN0Lmxhc3RDaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4Jyk7XG4gICAgLy8gY29uc29sZS5sb2cobGFzdENoaWxkSW5kZXgpO1xuICAgIGZvcihsZXQgaT1OdW1iZXIobGFzdENoaWxkSW5kZXgpKzE7IGk8Y3VycmVudFRhc2tMaXN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0W2ldO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygpO1xuICAgICAgICBpZighdGFzay5jb21wbGV0ZVN0YXR1cykge1xuICAgICAgICAgICAgdW5jb21wbGV0ZVRhc2tMaXN0LmFwcGVuZENoaWxkKG1ha2VUYXNrKGksIHRhc2sudGl0bGUsIHRhc2suZHVlRGF0ZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQobWFrZUNsb3NlQnV0dG9uKCkpO1xuICAgIG1ha2VDdXJyZW50TGlzdENlbnRlcigpO1xufVxuXG5mdW5jdGlvbiBtYWtlQ3VycmVudExpc3RDZW50ZXIoKSB7XG4gICAgbGV0IGN1cnJlbnRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUYXNrTGlzdCcpO1xuICAgIGxldCBjdXJyZW50TGlzdEhlaWdodCA9IGN1cnJlbnRMaXN0Lm9mZnNldEhlaWdodDtcbiAgICBsZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGN1cnJlbnRMaXN0LnN0eWxlLnRvcCA9IGAkeyh3aW5kb3dIZWlnaHQgLSBjdXJyZW50TGlzdEhlaWdodCkgLyAyfXB4YFxufVxuXG5mdW5jdGlvbiBtYWtlVGl0bGVEaXZFZGl0YWJsZShsaXN0RGl2LCB0aXRsZSkge1xuICAgIGlmKGxpc3REaXYuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICd0YXNrTGlzdFRpdGxlJyApIHtcbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gbGlzdERpdi5maXJzdENoaWxkO1xuICAgICAgICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIFwidHJ1ZVwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1vZGlmeUV4aXN0aW5nVGFzayh0YXNrRGl2LCBkdWVEYXRlLCBpc0VkaXRhYmxlPXRydWUpIHtcbiAgICB0YXNrRGl2LmNoaWxkTm9kZXNbMV0uc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBpc0VkaXRhYmxlKTtcbiAgICB0YXNrRGl2LmNoaWxkTm9kZXNbMV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVudGVyUHJlc3NlZE9uRGl2KTtcbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGR1ZURhdGUgKTtcbiAgICBkYXRlSW5wdXQuZGlzYWJsZWQgPSAhaXNFZGl0YWJsZTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VUYXNrKGluZGV4LCB0aXRsZSwgZHVlRGF0ZSwgY29tcGxldGVTdGF0dXM9ZmFsc2UpIHtcbiAgICBsZXQgbGlzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFza0xpc3QnKTtcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrRGl2Jyk7XG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JywgaW5kZXgpO1xuICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrVGl0bGVEaXYnKTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IG9iai5tYWtlVGFza0xpc3REaXYudGFza0NoZWNrQm94Q2xpY2tlZChldmVudCwgbGlzdERpdiwgdGFza0RpdikpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZHVlRGF0ZSk7XG4gICAgaWYoY29tcGxldGVTdGF0dXMpIHtcbiAgICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgcmV0dXJuIHRhc2tEaXY7XG59XG5cbmZ1bmN0aW9uIGVudGVyUHJlc3NlZE9uRGl2KGV2ZW50KSB7XG4gICAgaWYoZXZlbnQua2V5Q29kZSA9PSAnMTMnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgbGV0IHBhcmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgaW5kZXggPSBwYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnKTtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQgPSBtYWtlVGFzayhudWxsLCBudWxsLCBudWxsKTtcbiAgICAgICAgcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShuZXdFbGVtZW50LCBwYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgaW5jcmVhc2VEYXRhSW5kZXhCeU9uZShOdW1iZXIoaW5kZXgpKTtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JywgTnVtYmVyKGluZGV4KSArIDEpO1xuICAgICAgICBuZXdFbGVtZW50LmNoaWxkTm9kZXNbMV0uZm9jdXMoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlYXNlRGF0YUluZGV4QnlPbmUoaW5kZXgpIHtcbiAgICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY3VycmVudFRhc2tMaXN0IGRpdltkYXRhLXRhc2tJbmRleF0nKTtcbiAgICB0YXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBsZXQgaSA9IHRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpO1xuICAgICAgICBpZihOdW1iZXIoaSkgPiBpbmRleCkge1xuICAgICAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JywgTnVtYmVyKGkpKzEpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbWFrZUNsb3NlQnV0dG9uKCkge1xuICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlRm9ybUJ1dHRvbicpO1xuICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQnV0dG9uQ2xpY2tlZCk7XG4gICAgcmV0dXJuIGNsb3NlQnRuO1xufVxuXG5mdW5jdGlvbiBjbG9zZUJ1dHRvbkNsaWNrZWQoZXZlbnQpIHtcbiAgICBsZXQgcGFyZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgcGFyZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgbGV0IHVwZGF0ZWRDdXJyZW50TGlzdCA9IG1ha2VUYXNrTGlzdChwYXJlbnQpO1xuICAgIHJlbW92ZUV4dHJhVW5jb21wbGV0ZVRhc2socGFyZW50KTtcbiAgICByZW1vdmVEdWVEYXRlRWxlbWVudChwYXJlbnQpO1xuICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCd0YXNrTGlzdCcpO1xuICAgIHBhcmVudC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGV2ZW50LnRhcmdldCk7XG4gICAgY29udHJvbCg3LCB1cGRhdGVkQ3VycmVudExpc3QpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBtYWtlVGFza0xpc3QocGFyZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2cocGFyZW50KTtcbiAgICBsZXQgdGl0bGUgPSBwYXJlbnQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudDtcbiAgICBsZXQgdGFza0xpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjdXJyZW50VGFza0xpc3QgZGl2W2RhdGEtdGFza0luZGV4XScpKTtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICBmb3IobGV0IGk9MDsgaTx0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGFzayA9IG1ha2VOZXdUYXNrKHRhc2tMaXN0W2ldKTtcbiAgICAgICAgdGFza3NbTnVtYmVyKHRhc2suaW5kZXgpXSA9IHRhc2s7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0YXNrc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFrZU5ld1Rhc2sodGFzaykge1xuICAgIGxldCBpbmRleCA9IHRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpO1xuICAgIGxldCB0aXRsZSA9IHRhc2suY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcbiAgICBsZXQgY29tcGxldGVTdGF0dXMgPSB0YXNrLmNoaWxkTm9kZXNbMF0uY2hlY2tlZDtcbiAgICBsZXQgZHVlRGF0ZSA9IHRhc2suY2hpbGROb2Rlc1syXS52YWx1ZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbmRleCwgXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBjb21wbGV0ZVN0YXR1cyxcbiAgICAgICAgZHVlRGF0ZVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV4dHJhVW5jb21wbGV0ZVRhc2socGFyZW50KSB7XG4gICAgcGFyZW50LmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKTtcbiAgICBsZXQgdW5jb21wbGV0ZVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudFRhc2tMaXN0Pi51bkNvbXBsZXRlVGFza0RpdicpO1xuICAgIGxldCB1bmNvbXBsZXRlVGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY3VycmVudFRhc2tMaXN0Pi51bkNvbXBsZXRlVGFza0Rpdj5kaXZbZGF0YS10YXNrSW5kZXhdJyk7XG4gICAgZm9yKGxldCBpPTk7IGk8dW5jb21wbGV0ZVRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHVuY29tcGxldGVUYXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHVuY29tcGxldGVUYXNrTGlzdFtpXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVEdWVEYXRlRWxlbWVudChwYXJlbnQpIHtcbiAgICBsZXQgdGFza3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2N1cnJlbnRUYXNrTGlzdCBkaXZbZGF0YS10YXNrSW5kZXhdJyk7XG4gICAgdGFza3NMaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIHRhc2suY2hpbGROb2Rlc1sxXS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpO1xuICAgICAgICB0YXNrLmNoaWxkTm9kZXNbMV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVudGVyUHJlc3NlZE9uRGl2KTtcbiAgICAgICAgdGFzay5yZW1vdmVDaGlsZCh0YXNrLmNoaWxkTm9kZXNbMl0pXG4gICAgfSk7XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IG9iaiBmcm9tICcuL21vZHVsZXMvbWFrZV90YXNrX2luZm9fZm9ybSc7XG5pbXBvcnQgY29udHJvbCBmcm9tICcuL21vZHVsZXMvdGFza190YXNrTGlzdF9EYXRhJztcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5cbmNvbnNvbGUubG9nKCd0byBkbyBsaXN0Jyk7IFxuXG5jb25zdCBiYXNpY19wYWdlID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaDEudGV4dENvbnRlbnQgPSAnVGFza3MnO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZU1haW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgICAgIGxldCBhZGRUYXNrQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b25EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdidXR0b25Gb3JtQ29udGFpbmVyJyk7XG4gICAgICAgIGxpc3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdsaXN0Q29udGFpbmVyJyk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbkRpdik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZUhlYWRlcixcbiAgICAgICAgbWFrZU1haW4sXG4gICAgfTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGJhc2ljX3BhZ2UubWFrZUhlYWRlcigpO1xuICAgIGJhc2ljX3BhZ2UubWFrZU1haW4oKTtcbiAgICBvYmoudWlFbGVtZW50cy5jcmVhdGVBZGRUYXNrQnV0dG9uKCk7XG4gICAgY29udHJvbCg4KTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9