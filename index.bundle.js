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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --black-bg-color:#222;\n    --white-text-color: whitesmoke;\n    --white-border-color: white;\n    --border-thickness: 2px;\n    --border-radius: 10px;\n}\n\nbody {\n    font-size: 1.1rem;\n    background-color: var(--black-bg-color);\n    color: var(--white-text-color);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\nheader {\n    width: 100%;\n    padding: 0.5em 0.8em;\n    background-color: inherit;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    z-index: 3;\n    top: 0;\n}\n\nmain {\n    margin-top: 58px;\n    display: flex;\n    flex-direction: column;\n    width: inherit;\n    gap: 20px;\n}\n\n#buttonFormContainer {           /* div inside of main which containes the button for the creation of list and tasks*/\n    display: grid;\n    place-content: center;\n    padding: 0.5em 0.8em;\n    width: 100%;\n    grid-template-columns: 0.4fr;\n}\n\n#addTaskButton {                  /* button at the top which create the form element to make list and the task*/\n    background-color: inherit;\n    color: inherit;\n    padding: 0.5em 0.8em;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    font-size: 0.85em;\n    text-align: left;\n    width: 1fr;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    min-width: fit-content;\n    max-height: 20em;\n    padding: 0 0.8em;\n    overflow: hidden auto;\n    position: relative;\n}\n\n#formTitleDiv > input,\nform > #taskListItemContainer > div > input {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    font-size: 0.85em;\n    color: var(--white-text-color);\n    padding: 0.2em 0.5em;\n}\n\n#formTitleDiv {\n    position: sticky;\n    top: 0px;\n    background-color: var(--black-bg-color);\n    padding: 0.4em 0;\n    z-index: 2;\n    display: flex;\n    /* position: relative; */\n}\n\n#formTitleDiv > input {\n    flex-grow: 1;\n    font-size: 1em;\n    word-wrap: break-word;\n    word-break: break-all;\n    height:fit-content;\n}\n\nform > #taskListItemContainer > div > img,\n#currentTaskList img {\n    width: 18px;\n    padding: 0.05em;\n}\n\nform > #taskListItemContainer > div > img:hover,\n#currentTaskList img:hover {\n    background-color: #333;\n}\n\n/* div which contains the various tasks in the form*/\n#taskListItemContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n /* div in which the plus and the text box to add list item reside*/\n#addTaskListItem,\n.taskListItem { \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-items: center;\n    padding: 0.2em 0.5em;\n    gap: 0.2em;\n    position: relative;\n}\n\n.taskListItem > input[type='text'] {\n    flex-grow: 1;\n}\n\n.taskListItem > input[type='checkbox'],\n.taskDiv > input[type='checkbox'] {\n    position: relative;\n    z-index: 1; /*check box cannot be checked without z index set 0 and z index of title and the close button div needs to be set to 2 to avoid checkbox been on top of title on scroll*/\n    /* height: 0;\n    width: 0; */\n    /* margin-top: 0.1em; */\n}\n\n.taskListItem > input[type='checkbox']::before,\n.taskDiv > input[type='checkbox']::before  {\n    content: ' ';\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    width: 15px;\n    height: 15px;\n    background-color: var(--black-bg-color);\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: 2px;\n}\n\n.taskDiv > input[type='checkbox']::before {\n    top: 0px;\n    left: 0px;\n    width: 14px;\n    height: 14px;\n}\n\n.taskListItem > input[type='checkbox']:checked::before,\n.taskDiv > input[type='checkbox']:checked::before {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");  /*I dont know if this is a good way to do this or should this be done using javascirpt*/\n}\n\n.taskListItem > input[type='date'],\n.taskDiv > input [type='date'] {\n    position: relative;\n    flex-shrink: 0;\n    z-index: 1; /* without this the date picker was not working when clicked upon*/\n}\n\n.taskListItem:focus-within::after,\n#addTaskListItem:focus-within::after {\n    position: absolute;\n    content: '';\n    top: 0;\n    bottom: 0;\n    right: -0.8em;\n    left: -0.8em;\n    border-top: 2px solid var(--white-border-color);\n    border-bottom: 2px solid var(--white-border-color);\n}\n\n#formCloseButtonDiv {\n    display: flex;\n    justify-content: flex-end;\n    position: sticky; \n    z-index: 2;\n    padding: 0.4em 0;\n    bottom: 0;\n    background-color: var(--black-bg-color);\n} /*to make the close stay at button even when scrolled not wroking*/\n\n#formTitleDiv::before,\n#formCloseButtonDiv::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -0.8em;\n    right: -0.8em;\n    background-color: var(--black-bg-color);\n    z-index: -1;\n}\n\n#closeFormButton {\n    background-color: var(--black-bg-color);\n    border: none;\n    color: var(--white-text-color);\n    padding: 0.25em 0.8em;\n    border: var(--border-thickness) solid transparent;\n    border-radius: var(--border-radius);\n}\n\n#closeFormButton:hover {\n    background-color: #333; /* back ground color of the close form button on hover*/\n}\n\n#listContainer {\n    font-family: sans-serif;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 200px);\n    /* grid-template-rows: masonry; */\n    padding: 0.4em 2em;\n    gap: 1em;\n    justify-content: center; \n    /* position: relative; */\n\n    /* display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 1em;\n    justify-content: center; \n    align-content: center;  */\n}\n\n.taskList {\n    padding: 0.5em;\n    border: var(--white-border-color) solid calc(var(--border-thickness) - 1px);\n    border-radius: var(--border-radius);\n\n    height: fit-content;\n    max-height: 21em;  \n\n    width: 200px;\n    /* flex: 0 0 auto; */\n    /* align-self: flex-start; */\n\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    /* gap: 0.5em; */\n}\n\n.taskListTitle {\n    font-size: 1.15em;\n    word-wrap: break-word;\n    word-break: break-all;\n    outline: none;\n    padding: 0.2em 0;\n}\n\n.unCompleteTaskDiv,\n.completeTaskDiv {\n    display: flex;\n    flex-direction: column;\n    /* gap: 0.2em; */\n}\n\n.unCompleteTaskDiv > .taskDiv,\n.completeTaskDiv > .taskDiv {\n    padding: 0.4em 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 10px;\n}\n\n.unCompleteTaskDiv > .taskDiv > .taskTitleDiv,\n.completeTaskDiv > .taskDiv > .taskTitleDiv{\n    font-size: 0.85em;\n    line-height: 1em;\n    word-wrap: break-word;\n    word-break: break-all;\n    max-width: 60%;\n    border: none; \n    outline: none;\n    flex-grow: 1;\n    line-height: 1.2em;\n}\n\n.completeTaskDiv {\n    opacity: 0.5;\n}\n\n#currentTaskList {\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    background-color: var(--black-bg-color);\n    padding: 0.6em;\n    transform-origin: center;\n\n    position: absolute;\n    z-index: 4;\n    top: 25%;\n    left: 25%;\n\n    width: 50%;\n    height: fit-content;\n    max-height: 90%;\n    overflow: hidden auto;\n\n    display: flex;\n    flex-direction: column;\n}\n\n#currentTaskList input{\n    background-color: inherit;\n    border: none;\n    outline: none;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --black-bg-color:#222;\n    --white-text-color: whitesmoke;\n    --white-border-color: white;\n    --border-thickness: 2px;\n    --border-radius: 10px;\n}\n\nbody {\n    font-size: 1.1rem;\n    background-color: var(--black-bg-color);\n    color: var(--white-text-color);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\nheader {\n    width: 100%;\n    padding: 0.5em 0.8em;\n    background-color: inherit;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    z-index: 3;\n    top: 0;\n}\n\nmain {\n    margin-top: 58px;\n    display: flex;\n    flex-direction: column;\n    width: inherit;\n    gap: 20px;\n}\n\n#buttonFormContainer {           /* div inside of main which containes the button for the creation of list and tasks*/\n    display: grid;\n    place-content: center;\n    padding: 0.5em 0.8em;\n    width: 100%;\n    grid-template-columns: 0.4fr;\n}\n\n#addTaskButton {                  /* button at the top which create the form element to make list and the task*/\n    background-color: inherit;\n    color: inherit;\n    padding: 0.5em 0.8em;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    font-size: 0.85em;\n    text-align: left;\n    width: 1fr;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    min-width: fit-content;\n    max-height: 20em;\n    padding: 0 0.8em;\n    overflow: hidden auto;\n    position: relative;\n}\n\n#formTitleDiv > input,\nform > #taskListItemContainer > div > input {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    font-size: 0.85em;\n    color: var(--white-text-color);\n    padding: 0.2em 0.5em;\n}\n\n#formTitleDiv {\n    position: sticky;\n    top: 0px;\n    background-color: var(--black-bg-color);\n    padding: 0.4em 0;\n    z-index: 2;\n    display: flex;\n    /* position: relative; */\n}\n\n#formTitleDiv > input {\n    flex-grow: 1;\n    font-size: 1em;\n    word-wrap: break-word;\n    word-break: break-all;\n    height:fit-content;\n}\n\nform > #taskListItemContainer > div > img,\n#currentTaskList img {\n    width: 18px;\n    padding: 0.05em;\n}\n\nform > #taskListItemContainer > div > img:hover,\n#currentTaskList img:hover {\n    background-color: #333;\n}\n\n/* div which contains the various tasks in the form*/\n#taskListItemContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n /* div in which the plus and the text box to add list item reside*/\n#addTaskListItem,\n.taskListItem { \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-items: center;\n    padding: 0.2em 0.5em;\n    gap: 0.2em;\n    position: relative;\n}\n\n.taskListItem > input[type='text'] {\n    flex-grow: 1;\n}\n\n.taskListItem > input[type='checkbox'],\n.taskDiv > input[type='checkbox'] {\n    position: relative;\n    z-index: 1; /*check box cannot be checked without z index set 0 and z index of title and the close button div needs to be set to 2 to avoid checkbox been on top of title on scroll*/\n    /* height: 0;\n    width: 0; */\n    /* margin-top: 0.1em; */\n}\n\n.taskListItem > input[type='checkbox']::before,\n.taskDiv > input[type='checkbox']::before  {\n    content: ' ';\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    width: 15px;\n    height: 15px;\n    background-color: var(--black-bg-color);\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: 2px;\n}\n\n.taskDiv > input[type='checkbox']::before {\n    top: 0px;\n    left: 0px;\n    width: 14px;\n    height: 14px;\n}\n\n.taskListItem > input[type='checkbox']:checked::before,\n.taskDiv > input[type='checkbox']:checked::before {\n    background-image: url(./assests/check.svg);  /*I dont know if this is a good way to do this or should this be done using javascirpt*/\n}\n\n.taskListItem > input[type='date'],\n.taskDiv > input [type='date'] {\n    position: relative;\n    flex-shrink: 0;\n    z-index: 1; /* without this the date picker was not working when clicked upon*/\n}\n\n.taskListItem:focus-within::after,\n#addTaskListItem:focus-within::after {\n    position: absolute;\n    content: '';\n    top: 0;\n    bottom: 0;\n    right: -0.8em;\n    left: -0.8em;\n    border-top: 2px solid var(--white-border-color);\n    border-bottom: 2px solid var(--white-border-color);\n}\n\n#formCloseButtonDiv {\n    display: flex;\n    justify-content: flex-end;\n    position: sticky; \n    z-index: 2;\n    padding: 0.4em 0;\n    bottom: 0;\n    background-color: var(--black-bg-color);\n} /*to make the close stay at button even when scrolled not wroking*/\n\n#formTitleDiv::before,\n#formCloseButtonDiv::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -0.8em;\n    right: -0.8em;\n    background-color: var(--black-bg-color);\n    z-index: -1;\n}\n\n#closeFormButton {\n    background-color: var(--black-bg-color);\n    border: none;\n    color: var(--white-text-color);\n    padding: 0.25em 0.8em;\n    border: var(--border-thickness) solid transparent;\n    border-radius: var(--border-radius);\n}\n\n#closeFormButton:hover {\n    background-color: #333; /* back ground color of the close form button on hover*/\n}\n\n#listContainer {\n    font-family: sans-serif;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 200px);\n    /* grid-template-rows: masonry; */\n    padding: 0.4em 2em;\n    gap: 1em;\n    justify-content: center; \n    /* position: relative; */\n\n    /* display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 1em;\n    justify-content: center; \n    align-content: center;  */\n}\n\n.taskList {\n    padding: 0.5em;\n    border: var(--white-border-color) solid calc(var(--border-thickness) - 1px);\n    border-radius: var(--border-radius);\n\n    height: fit-content;\n    max-height: 21em;  \n\n    width: 200px;\n    /* flex: 0 0 auto; */\n    /* align-self: flex-start; */\n\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    /* gap: 0.5em; */\n}\n\n.taskListTitle {\n    font-size: 1.15em;\n    word-wrap: break-word;\n    word-break: break-all;\n    outline: none;\n    padding: 0.2em 0;\n}\n\n.unCompleteTaskDiv,\n.completeTaskDiv {\n    display: flex;\n    flex-direction: column;\n    /* gap: 0.2em; */\n}\n\n.unCompleteTaskDiv > .taskDiv,\n.completeTaskDiv > .taskDiv {\n    padding: 0.4em 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 10px;\n}\n\n.unCompleteTaskDiv > .taskDiv > .taskTitleDiv,\n.completeTaskDiv > .taskDiv > .taskTitleDiv{\n    font-size: 0.85em;\n    line-height: 1em;\n    word-wrap: break-word;\n    word-break: break-all;\n    max-width: 60%;\n    border: none; \n    outline: none;\n    flex-grow: 1;\n    line-height: 1.2em;\n}\n\n.completeTaskDiv {\n    opacity: 0.5;\n}\n\n#currentTaskList {\n    border: var(--border-thickness) solid var(--white-border-color);\n    border-radius: var(--border-radius);\n    background-color: var(--black-bg-color);\n    padding: 0.6em;\n    transform-origin: center;\n\n    position: absolute;\n    z-index: 4;\n    top: 25%;\n    left: 25%;\n\n    width: 50%;\n    height: fit-content;\n    max-height: 90%;\n    overflow: hidden auto;\n\n    display: flex;\n    flex-direction: column;\n}\n\n#currentTaskList input{\n    background-color: inherit;\n    border: none;\n    outline: none;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _assests_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/close.svg */ "./src/assests/close.svg");





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
    let close = document.createElement('img');
    close.setAttribute('src', _assests_close_svg__WEBPACK_IMPORTED_MODULE_2__);
    close.setAttribute('alt', 'close sign');
    close.addEventListener('click', crossSignClicked);
    taskDiv.appendChild(close);
}

function makeTask(index, title, dueDate, completeStatus=false) {
    let listDiv = document.getElementById('currentTaskList');
    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'taskDiv');
    taskDiv.setAttribute('data-taskIndex', index);
    let taskTitle = document.createElement('div');
    taskTitle.setAttribute('class', 'taskTitleDiv');
    taskTitle.setAttribute('contenteditable', 'true');
    taskTitle.addEventListener('keydown', enterPressedOnDiv);
    taskTitle.textContent = title;
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('click', (event) => _make_task_info_form__WEBPACK_IMPORTED_MODULE_1__["default"].makeTaskListDiv.taskCheckBoxClicked(event, listDiv, taskDiv));
    taskTitle.textContent = title;
    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('value', dueDate);
    let close = document.createElement('img');
    close.setAttribute('src', _assests_close_svg__WEBPACK_IMPORTED_MODULE_2__);
    close.setAttribute('alt', 'close sign');
    close.addEventListener('click', crossSignClicked);
    if(completeStatus) {
        checkBox.checked = true;
    }
    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(dateInput);
    taskDiv.appendChild(close);
    return taskDiv;
}

function crossSignClicked(event) {
    console.log(event.target.parentElement);
    let parent = event.target.parentElement;
    let index = parent.getAttribute('data-taskIndex');
    parent.parentElement.removeChild(parent);
    decreaseDataIndexByOne(Number(index));
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
        // newElement.addEventListener('keydown', enterPressedOnDiv);
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

function decreaseDataIndexByOne(index) {
    let taskList = document.querySelectorAll('#currentTaskList div[data-taskIndex]');
    taskList.forEach(task => {
        let i = task.getAttribute('data-taskIndex');
        if(Number(i) > index) {
            task.setAttribute('data-taskIndex', Number(i)-1);
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
        task.removeChild(task.childNodes[2]);
        task.removeChild(task.childNodes[2]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ0c7O0FBRTlCOztBQUVyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtR0FBa0M7QUFDdEMsSUFBSSx1RUFBTztBQUNYLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL21vZHVsZXMvbWFrZV90YXNrX2luZm9fZm9ybS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL21vZHVsZXMvdGFza190YXNrTGlzdF9EYXRhLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvbW9kdWxlcy91aV90YXNrRGl2X2ludGVyYWN0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3Nlc3RzL2NoZWNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmxhY2stYmctY29sb3I6IzIyMjtcXG4gICAgLS13aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLXdoaXRlLWJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIC0tYm9yZGVyLXRoaWNrbmVzczogMnB4O1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogNThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2J1dHRvbkZvcm1Db250YWluZXIgeyAgICAgICAgICAgLyogZGl2IGluc2lkZSBvZiBtYWluIHdoaWNoIGNvbnRhaW5lcyB0aGUgYnV0dG9uIGZvciB0aGUgY3JlYXRpb24gb2YgbGlzdCBhbmQgdGFza3MqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjRmcjtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b24geyAgICAgICAgICAgICAgICAgIC8qIGJ1dHRvbiBhdCB0aGUgdG9wIHdoaWNoIGNyZWF0ZSB0aGUgZm9ybSBlbGVtZW50IHRvIG1ha2UgbGlzdCBhbmQgdGhlIHRhc2sqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW07XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMWZyO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXRoaWNrbmVzcykgc29saWQgdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC1oZWlnaHQ6IDIwZW07XFxuICAgIHBhZGRpbmc6IDAgMC44ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jZm9ybVRpdGxlRGl2ID4gaW5wdXQsXFxuZm9ybSA+ICN0YXNrTGlzdEl0ZW1Db250YWluZXIgPiBkaXYgPiBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS10ZXh0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxufVxcblxcbiNmb3JtVGl0bGVEaXYge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjRlbSAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbiNmb3JtVGl0bGVEaXYgPiBpbnB1dCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxufVxcblxcbmZvcm0gPiAjdGFza0xpc3RJdGVtQ29udGFpbmVyID4gZGl2ID4gaW1nLFxcbiNjdXJyZW50VGFza0xpc3QgaW1nIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDAuMDVlbTtcXG59XFxuXFxuZm9ybSA+ICN0YXNrTGlzdEl0ZW1Db250YWluZXIgPiBkaXYgPiBpbWc6aG92ZXIsXFxuI2N1cnJlbnRUYXNrTGlzdCBpbWc6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbn1cXG5cXG4vKiBkaXYgd2hpY2ggY29udGFpbnMgdGhlIHZhcmlvdXMgdGFza3MgaW4gdGhlIGZvcm0qL1xcbiN0YXNrTGlzdEl0ZW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuIC8qIGRpdiBpbiB3aGljaCB0aGUgcGx1cyBhbmQgdGhlIHRleHQgYm94IHRvIGFkZCBsaXN0IGl0ZW0gcmVzaWRlKi9cXG4jYWRkVGFza0xpc3RJdGVtLFxcbi50YXNrTGlzdEl0ZW0geyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXG4gICAgZ2FwOiAwLjJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSxcXG4udGFza0RpdiA+IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7IC8qY2hlY2sgYm94IGNhbm5vdCBiZSBjaGVja2VkIHdpdGhvdXQgeiBpbmRleCBzZXQgMCBhbmQgeiBpbmRleCBvZiB0aXRsZSBhbmQgdGhlIGNsb3NlIGJ1dHRvbiBkaXYgbmVlZHMgdG8gYmUgc2V0IHRvIDIgdG8gYXZvaWQgY2hlY2tib3ggYmVlbiBvbiB0b3Agb2YgdGl0bGUgb24gc2Nyb2xsKi9cXG4gICAgLyogaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDsgKi9cXG4gICAgLyogbWFyZ2luLXRvcDogMC4xZW07ICovXFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUsXFxuLnRhc2tEaXYgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUgIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTFweDtcXG4gICAgbGVmdDogLTFweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLnRhc2tEaXYgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUge1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUsXFxuLnRhc2tEaXYgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7ICAvKkkgZG9udCBrbm93IGlmIHRoaXMgaXMgYSBnb29kIHdheSB0byBkbyB0aGlzIG9yIHNob3VsZCB0aGlzIGJlIGRvbmUgdXNpbmcgamF2YXNjaXJwdCovXFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdkYXRlJ10sXFxuLnRhc2tEaXYgPiBpbnB1dCBbdHlwZT0nZGF0ZSddIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgei1pbmRleDogMTsgLyogd2l0aG91dCB0aGlzIHRoZSBkYXRlIHBpY2tlciB3YXMgbm90IHdvcmtpbmcgd2hlbiBjbGlja2VkIHVwb24qL1xcbn1cXG5cXG4udGFza0xpc3RJdGVtOmZvY3VzLXdpdGhpbjo6YWZ0ZXIsXFxuI2FkZFRhc2tMaXN0SXRlbTpmb2N1cy13aXRoaW46OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAtMC44ZW07XFxuICAgIGxlZnQ6IC0wLjhlbTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4jZm9ybUNsb3NlQnV0dG9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcG9zaXRpb246IHN0aWNreTsgXFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbn0gLyp0byBtYWtlIHRoZSBjbG9zZSBzdGF5IGF0IGJ1dHRvbiBldmVuIHdoZW4gc2Nyb2xsZWQgbm90IHdyb2tpbmcqL1xcblxcbiNmb3JtVGl0bGVEaXY6OmJlZm9yZSxcXG4jZm9ybUNsb3NlQnV0dG9uRGl2OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogLTAuOGVtO1xcbiAgICByaWdodDogLTAuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4jY2xvc2VGb3JtQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS10ZXh0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMC4yNWVtIDAuOGVtO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuI2Nsb3NlRm9ybUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIGJhY2sgZ3JvdW5kIGNvbG9yIG9mIHRoZSBjbG9zZSBmb3JtIGJ1dHRvbiBvbiBob3ZlciovXFxufVxcblxcbiNsaXN0Q29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMDBweCk7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogbWFzb25yeTsgKi9cXG4gICAgcGFkZGluZzogMC40ZW0gMmVtO1xcbiAgICBnYXA6IDFlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgKi9cXG59XFxuXFxuLnRhc2tMaXN0IHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlcjogdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKSBzb2xpZCBjYWxjKHZhcigtLWJvcmRlci10aGlja25lc3MpIC0gMXB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC1oZWlnaHQ6IDIxZW07ICBcXG5cXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICAvKiBmbGV4OiAwIDAgYXV0bzsgKi9cXG4gICAgLyogYWxpZ24tc2VsZjogZmxleC1zdGFydDsgKi9cXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZ2FwOiAwLjVlbTsgKi9cXG59XFxuXFxuLnRhc2tMaXN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbi51bkNvbXBsZXRlVGFza0RpdixcXG4uY29tcGxldGVUYXNrRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZ2FwOiAwLjJlbTsgKi9cXG59XFxuXFxuLnVuQ29tcGxldGVUYXNrRGl2ID4gLnRhc2tEaXYsXFxuLmNvbXBsZXRlVGFza0RpdiA+IC50YXNrRGl2IHtcXG4gICAgcGFkZGluZzogMC40ZW0gMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udW5Db21wbGV0ZVRhc2tEaXYgPiAudGFza0RpdiA+IC50YXNrVGl0bGVEaXYsXFxuLmNvbXBsZXRlVGFza0RpdiA+IC50YXNrRGl2ID4gLnRhc2tUaXRsZURpdntcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgYm9yZGVyOiBub25lOyBcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XFxufVxcblxcbi5jb21wbGV0ZVRhc2tEaXYge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbiNjdXJyZW50VGFza0xpc3Qge1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuNmVtO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDI1JTtcXG5cXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjdXJyZW50VGFza0xpc3QgaW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBLGlDQUFpQyxvRkFBb0Y7SUFDakgsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLDRCQUE0QjtBQUNoQzs7QUFFQSxrQ0FBa0MsNkVBQTZFO0lBQzNHLHlCQUF5QjtJQUN6QixjQUFj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O0lBQ3JCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrREFBK0Q7SUFDL0QsbUNBQW1DO0lBQ25DLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2Qsd0JBQXdCOztJQUV4QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTOztJQUVULFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHFCQUFxQjs7SUFFckIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJsYWNrLWJnLWNvbG9yOiMyMjI7XFxuICAgIC0td2hpdGUtdGV4dC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS13aGl0ZS1ib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAtLWJvcmRlci10aGlja25lc3M6IDJweDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHRvcDogMDtcXG59XFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDU4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNidXR0b25Gb3JtQ29udGFpbmVyIHsgICAgICAgICAgIC8qIGRpdiBpbnNpZGUgb2YgbWFpbiB3aGljaCBjb250YWluZXMgdGhlIGJ1dHRvbiBmb3IgdGhlIGNyZWF0aW9uIG9mIGxpc3QgYW5kIHRhc2tzKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC40ZnI7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uIHsgICAgICAgICAgICAgICAgICAvKiBidXR0b24gYXQgdGhlIHRvcCB3aGljaCBjcmVhdGUgdGhlIGZvcm0gZWxlbWVudCB0byBtYWtlIGxpc3QgYW5kIHRoZSB0YXNrKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBmb250LXNpemU6IDAuODVlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDFmcjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtaGVpZ2h0OiAyMGVtO1xcbiAgICBwYWRkaW5nOiAwIDAuOGVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2Zvcm1UaXRsZURpdiA+IGlucHV0LFxcbmZvcm0gPiAjdGFza0xpc3RJdGVtQ29udGFpbmVyID4gZGl2ID4gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcbn1cXG5cXG4jZm9ybVRpdGxlRGl2IHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMC40ZW0gMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn1cXG5cXG4jZm9ybVRpdGxlRGl2ID4gaW5wdXQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcbn1cXG5cXG5mb3JtID4gI3Rhc2tMaXN0SXRlbUNvbnRhaW5lciA+IGRpdiA+IGltZyxcXG4jY3VycmVudFRhc2tMaXN0IGltZyB7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBwYWRkaW5nOiAwLjA1ZW07XFxufVxcblxcbmZvcm0gPiAjdGFza0xpc3RJdGVtQ29udGFpbmVyID4gZGl2ID4gaW1nOmhvdmVyLFxcbiNjdXJyZW50VGFza0xpc3QgaW1nOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG59XFxuXFxuLyogZGl2IHdoaWNoIGNvbnRhaW5zIHRoZSB2YXJpb3VzIHRhc2tzIGluIHRoZSBmb3JtKi9cXG4jdGFza0xpc3RJdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiAvKiBkaXYgaW4gd2hpY2ggdGhlIHBsdXMgYW5kIHRoZSB0ZXh0IGJveCB0byBhZGQgbGlzdCBpdGVtIHJlc2lkZSovXFxuI2FkZFRhc2tMaXN0SXRlbSxcXG4udGFza0xpc3RJdGVtIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxuICAgIGdhcDogMC4yZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2tMaXN0SXRlbSA+IGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnRhc2tMaXN0SXRlbSA+IGlucHV0W3R5cGU9J2NoZWNrYm94J10sXFxuLnRhc2tEaXYgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxOyAvKmNoZWNrIGJveCBjYW5ub3QgYmUgY2hlY2tlZCB3aXRob3V0IHogaW5kZXggc2V0IDAgYW5kIHogaW5kZXggb2YgdGl0bGUgYW5kIHRoZSBjbG9zZSBidXR0b24gZGl2IG5lZWRzIHRvIGJlIHNldCB0byAyIHRvIGF2b2lkIGNoZWNrYm94IGJlZW4gb24gdG9wIG9mIHRpdGxlIG9uIHNjcm9sbCovXFxuICAgIC8qIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7ICovXFxuICAgIC8qIG1hcmdpbi10b3A6IDAuMWVtOyAqL1xcbn1cXG5cXG4udGFza0xpc3RJdGVtID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlLFxcbi50YXNrRGl2ID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlICB7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xcHg7XFxuICAgIGxlZnQ6IC0xcHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi50YXNrRGl2ID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgd2lkdGg6IDE0cHg7XFxuICAgIGhlaWdodDogMTRweDtcXG59XFxuXFxuLnRhc2tMaXN0SXRlbSA+IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlLFxcbi50YXNrRGl2ID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3Nlc3RzL2NoZWNrLnN2Zyk7ICAvKkkgZG9udCBrbm93IGlmIHRoaXMgaXMgYSBnb29kIHdheSB0byBkbyB0aGlzIG9yIHNob3VsZCB0aGlzIGJlIGRvbmUgdXNpbmcgamF2YXNjaXJwdCovXFxufVxcblxcbi50YXNrTGlzdEl0ZW0gPiBpbnB1dFt0eXBlPSdkYXRlJ10sXFxuLnRhc2tEaXYgPiBpbnB1dCBbdHlwZT0nZGF0ZSddIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgei1pbmRleDogMTsgLyogd2l0aG91dCB0aGlzIHRoZSBkYXRlIHBpY2tlciB3YXMgbm90IHdvcmtpbmcgd2hlbiBjbGlja2VkIHVwb24qL1xcbn1cXG5cXG4udGFza0xpc3RJdGVtOmZvY3VzLXdpdGhpbjo6YWZ0ZXIsXFxuI2FkZFRhc2tMaXN0SXRlbTpmb2N1cy13aXRoaW46OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAtMC44ZW07XFxuICAgIGxlZnQ6IC0wLjhlbTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4jZm9ybUNsb3NlQnV0dG9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcG9zaXRpb246IHN0aWNreTsgXFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbn0gLyp0byBtYWtlIHRoZSBjbG9zZSBzdGF5IGF0IGJ1dHRvbiBldmVuIHdoZW4gc2Nyb2xsZWQgbm90IHdyb2tpbmcqL1xcblxcbiNmb3JtVGl0bGVEaXY6OmJlZm9yZSxcXG4jZm9ybUNsb3NlQnV0dG9uRGl2OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogLTAuOGVtO1xcbiAgICByaWdodDogLTAuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4jY2xvc2VGb3JtQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS10ZXh0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMC4yNWVtIDAuOGVtO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuI2Nsb3NlRm9ybUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIGJhY2sgZ3JvdW5kIGNvbG9yIG9mIHRoZSBjbG9zZSBmb3JtIGJ1dHRvbiBvbiBob3ZlciovXFxufVxcblxcbiNsaXN0Q29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMDBweCk7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogbWFzb25yeTsgKi9cXG4gICAgcGFkZGluZzogMC40ZW0gMmVtO1xcbiAgICBnYXA6IDFlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgKi9cXG59XFxuXFxuLnRhc2tMaXN0IHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlcjogdmFyKC0td2hpdGUtYm9yZGVyLWNvbG9yKSBzb2xpZCBjYWxjKHZhcigtLWJvcmRlci10aGlja25lc3MpIC0gMXB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC1oZWlnaHQ6IDIxZW07ICBcXG5cXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICAvKiBmbGV4OiAwIDAgYXV0bzsgKi9cXG4gICAgLyogYWxpZ24tc2VsZjogZmxleC1zdGFydDsgKi9cXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZ2FwOiAwLjVlbTsgKi9cXG59XFxuXFxuLnRhc2tMaXN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbi51bkNvbXBsZXRlVGFza0RpdixcXG4uY29tcGxldGVUYXNrRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZ2FwOiAwLjJlbTsgKi9cXG59XFxuXFxuLnVuQ29tcGxldGVUYXNrRGl2ID4gLnRhc2tEaXYsXFxuLmNvbXBsZXRlVGFza0RpdiA+IC50YXNrRGl2IHtcXG4gICAgcGFkZGluZzogMC40ZW0gMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udW5Db21wbGV0ZVRhc2tEaXYgPiAudGFza0RpdiA+IC50YXNrVGl0bGVEaXYsXFxuLmNvbXBsZXRlVGFza0RpdiA+IC50YXNrRGl2ID4gLnRhc2tUaXRsZURpdntcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgYm9yZGVyOiBub25lOyBcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XFxufVxcblxcbi5jb21wbGV0ZVRhc2tEaXYge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbiNjdXJyZW50VGFza0xpc3Qge1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci10aGlja25lc3MpIHNvbGlkIHZhcigtLXdoaXRlLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuNmVtO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDI1JTtcXG5cXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjdXJyZW50VGFza0xpc3QgaW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNvbnRyb2wgZnJvbSAnLi90YXNrX3Rhc2tMaXN0X0RhdGEuanMnXG5pbXBvcnQgY29udHJvbDIgZnJvbSAnLi91aV90YXNrRGl2X2ludGVyYWN0LmpzJ1xuLy8gaW1wb3J0IGRpc3BsYXlDdXJyZW50VGFza0xpc3QgZnJvbSAnLi91aV90YXNrRGl2X2ludGVyYWN0LmpzJztcblxuaW1wb3J0IHBsdXNJbWFnZSBmcm9tICcuLi9hc3Nlc3RzL3BsdXMuc3ZnJztcbmltcG9ydCBjbG9zZUltYWdlIGZyb20gJy4uL2Fzc2VzdHMvY2xvc2Uuc3ZnJztcblxuY29uc3QgdWlFbGVtZW50cyA9IChmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IGNyZWF0ZUFkZFRhc2tCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFkZFRhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uRm9ybUNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tCdXR0b24nKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ1Rha2UgYSBOb3RlLi4uJztcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFza0J1dHRvbkNsaWNrZWQpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uRGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgIHJldHVybiAnYWRkZWQnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFkZFRhc2tCdXR0b24oYnRuKSB7XG4gICAgICAgIGxldCBhZGRUYXNrQnV0dG9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbkZvcm1Db250YWluZXInKTtcbiAgICAgICAgYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFza0J1dHRvbkNsaWNrZWQpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uRGl2LnJlbW92ZUNoaWxkKGJ0bik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGFza0J1dHRvbkNsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgcmVtb3ZlQWRkVGFza0J1dHRvbihldmVudC50YXJnZXQpO1xuICAgICAgICBjcmVhdGVUYXNrRm9ybSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKCkge1xuICAgICAgICBsZXQgYWRkVGFza0J1dHRvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25Gb3JtQ29udGFpbmVyJyk7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tGcm9tVGl0bGUoKSk7XG4gICAgICAgIGxldCB0YXNrRGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXZDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrTGlzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgdGFza0RpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRUYXNrTGlzdEl0ZW0oKSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza0RpdkNvbnRhaW5lcik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlQ2xvc2VGb3JtQnV0dG9uKCkpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tGcm9tVGl0bGUoKSB7XG4gICAgICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1UaXRsZURpdicpO1xuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICByZXR1cm4gdGl0bGVEaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRkVGFza0xpc3RJdGVtKCkge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tMaXN0SXRlbScpO1xuICAgICAgICBsZXQgcGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwbHVzLnNldEF0dHJpYnV0ZSgnc3JjJywgcGx1c0ltYWdlKTtcbiAgICAgICAgcGx1cy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdwbHVzIHNpZ24nKTsgICAgICAgXG4gICAgICAgIGxldCB0ZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGV4dEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0ZXh0Qm94LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTGlzdCBpdGVtJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwbHVzKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRleHRCb3gpO1xuICAgICAgICB0ZXh0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGV4dEluVGV4dEJveCk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUxpc3RJdGVtKHRhc2tEaXZDb250YWluZXIpIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrTGlzdEl0ZW0nKTtcbiAgICAgICAgbGV0IGlkSW5kZXggPSB0YXNrRGl2Q29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgZGl2LnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1mb3JtVGFza0luZGV4JywgJycraWRJbmRleCk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tMaXN0SXRlbScpO1xuICAgICAgICBsZXQgdGV4dEJveCA9IGRpdi5jaGlsZE5vZGVzWzFdO1xuICAgICAgICB0ZXh0Qm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGV4dEluVGV4dEJveCk7XG4gICAgICAgIHRleHRCb3gucmVtb3ZlQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICB0ZXh0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKGV2ZW50LmNvZGUgPT0gJ0VudGVyJyAmJiBOdW1iZXIodGV4dEJveC52YWx1ZSkgIT0gMCkge1xuICAgICAgICAgICAgICAgIGVudGVyUHJlc3NlZE9uVGFza0xpc3RJdGVtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgZGl2Lmluc2VydEJlZm9yZShjaGVja0JveCwgZGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIGdldEN1cnJlbnREYXRlKCkpO1xuICAgICAgICAvLyBkYXRlSW5wdXQudmFsdWUgPSBgJHtnZXRDdXJyZW50RGF0ZSgpfWA7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgICAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY2xvc2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBjbG9zZUltYWdlKTtcbiAgICAgICAgY2xvc2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAnY2xvc2Ugc2lnbicpO1xuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRhc2tMaXN0SXRlbUJ1dHRvbkNsaWNrZWQpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRleHRJblRleHRCb3goKSB7XG4gICAgICAgIGxldCB0YXNrRGl2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICBtYWtlTGlzdEl0ZW0odGFza0RpdkNvbnRhaW5lcik7XG4gICAgICAgIGxldCBkaXYgPSBjcmVhdGVBZGRUYXNrTGlzdEl0ZW0oKTtcbiAgICAgICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0xpc3RJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbnRlclByZXNzZWRPblRhc2tMaXN0SXRlbSgpIHtcbiAgICAgICAgbGV0IGFkZExpc3RJdGVtVGV4dEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrTGlzdEl0ZW0gPiBpbnB1dCcpO1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5zY3JvbGxUb3AgKz0gZm9ybS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGFkZExpc3RJdGVtVGV4dEJveC5mb2N1cygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2tMaXN0SXRlbUJ1dHRvbkNsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgbGV0IHJlbW92ZWREaXZJbmRleCA9IHJlbW92ZVRhc2tMaXN0SXRlbShldmVudC50YXJnZXQpO1xuICAgICAgICB1cGRhdGVEYXRhVGFza0luZGV4KHJlbW92ZWREaXZJbmRleCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFza0xpc3RJdGVtKGltZykge1xuICAgICAgICBsZXQgcGFyZW50RGl2ID0gaW1nLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHdoaWxlKHBhcmVudERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwYXJlbnREaXYucmVtb3ZlQ2hpbGQocGFyZW50RGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkaXZJbmRleCA9IHBhcmVudERpdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybVRhc2tJbmRleCcpO1xuICAgICAgICBsZXQgdGFza0RpdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgdGFza0RpdkNvbnRhaW5lci5yZW1vdmVDaGlsZChwYXJlbnREaXYpO1xuICAgICAgICByZXR1cm4gZGl2SW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGF0YVRhc2tJbmRleChpbmRleCkge1xuICAgICAgICBsZXQgdGFza0xpc3RJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtZm9ybVRhc2tJbmRleF0nKSk7XG4gICAgICAgIGZvcihsZXQgaT1pbmRleDsgaTx0YXNrTGlzdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YXNrTGlzdEl0ZW1zW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1mb3JtVGFza0luZGV4JywgXCJcIitpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNsb3NlRm9ybUJ1dHRvbigpIHtcbiAgICAgICAgbGV0IGZvcm1DbG9zZUJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtQ2xvc2VCdXR0b25EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtQ2xvc2VCdXR0b25EaXYnKTsgXG4gICAgICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2VGb3JtQnV0dG9uJyk7XG4gICAgICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm1CdXR0b25DbGlja2VkKTtcbiAgICAgICAgZm9ybUNsb3NlQnV0dG9uRGl2LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICAgICAgcmV0dXJuIGZvcm1DbG9zZUJ1dHRvbkRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUZvcm1CdXR0b25DbGlja2VkKCkge1xuICAgICAgICBsZXQgdGFza0xpc3RPYmplY3QgPSBjcmVhdGVUYXNrTGlzdERldGFpbHMoKTtcbiAgICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgICAgICBjcmVhdGVBZGRUYXNrQnV0dG9uKCk7XG4gICAgICAgIG1ha2VUYXNrTGlzdERpdi5kaXNwbGF5Q3VycmVudFRhc2tMaXN0KGNvbnRyb2woMSwgdGFza0xpc3RPYmplY3QpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrTGlzdERldGFpbHMoKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtVGl0bGVEaXYgPiBpbnB1dCcpLnZhbHVlIHx8ICdHZW5lcmFsIFRhc2tzJztcbiAgICAgICAgbGV0IHRhc2tzTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtZm9ybVRhc2tpbmRleF0nKSk7XG4gICAgICAgIGxldCB2YWx1ZXMgPSB0YXNrc0xpc3QubWFwKHRhc2sgPT4gW3Rhc2suY2hpbGROb2Rlc1sxXS52YWx1ZSx0YXNrLmNoaWxkTm9kZXNbMl0udmFsdWUsdGFzay5jaGlsZE5vZGVzWzBdLmNoZWNrZWRdKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlLCBcbiAgICAgICAgICAgIHZhbHVlc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VGb3JtQnV0dG9uJyk7XG4gICAgICAgIGNsb3NlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtQnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIGxldCBhZGRUYXNrQnV0dG9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbkZvcm1Db250YWluZXInKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbkRpdi5yZW1vdmVDaGlsZChmb3JtKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVBZGRUYXNrQnV0dG9uLFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IGdldEN1cnJlbnREYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSA+IDkgPyBkYXRlLmdldE1vbnRoKCkgOiAnMCcgKyBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuKGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArIG1vbnRoICsgJy0nICsgZGF0ZS5nZXREYXRlKCkpO1xufVxuXG5jb25zdCBtYWtlVGFza0xpc3REaXYgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudFRhc2tMaXN0KGN1cnJlbnRUYXNrTGlzdCkge1xuICAgICAgICBsZXQgY3VycmVudFRhc2tMaXN0RGl2ID0gbWFrZVRhc2tMaXN0RGl2KGN1cnJlbnRUYXNrTGlzdC50aXRsZSwgY3VycmVudFRhc2tMaXN0LmluZGV4KTtcbiAgICAgICAgbGV0IHRhc2tzTGlzdCA9IGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdDtcbiAgICAgICAgbGV0IHVuQ29tcGxldGVUYXNrRGl2ID0gY3VycmVudFRhc2tMaXN0RGl2LmNoaWxkTm9kZXNbMV07XG4gICAgICAgIGxldCBjb21wbGV0ZVRhc2tEaXYgPSBjdXJyZW50VGFza0xpc3REaXYuY2hpbGROb2Rlc1syXTtcbiAgICAgICAgbGV0IGk9MCwgcG9zPTA7XG4gICAgICAgIHdoaWxlKGkgPCAxMCAmJiBwb3MgPCB0YXNrc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZighdGFza3NMaXN0W3Bvc10uY29tcGxldGVTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBhZGRMaXN0SXRlbSh0YXNrc0xpc3RbcG9zXS50aXRsZSwgdW5Db21wbGV0ZVRhc2tEaXYsIHBvcywgMCk7XG4gICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcG9zID0gMDtcbiAgICAgICAgd2hpbGUocG9zIDwgdGFza3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodGFza3NMaXN0W3Bvc10uY29tcGxldGVTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBhZGRMaXN0SXRlbSh0YXNrc0xpc3RbcG9zXS50aXRsZSwgY29tcGxldGVUYXNrRGl2LCBwb3MsIDEpO1xuICAgICAgICAgICAgICAgIC8vIGkgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcyArPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIG1ha2VUYXNrTGlzdERpdih0aXRsZSwgaW5kZXgpIHtcbiAgICAgICAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdENvbnRhaW5lcicpO1xuICAgICAgICBsZXQgbGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza0xpc3QnKTtcbiAgICAgICAgbGlzdERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0xpc3RJbmRleCcsIGAke2luZGV4fWApO1xuICAgICAgICBsaXN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gY2xpY2soKSB7XG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRhc2tMaXN0JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250cm9sMihsaXN0RGl2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCB0YXNrTGlzdFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGFza0xpc3RUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tMaXN0VGl0bGUnKTtcbiAgICAgICAgdGFza0xpc3RUaXRsZURpdi50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBsaXN0RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0VGl0bGVEaXYpO1xuICAgICAgICBsZXQgdW5Db21wbGV0ZWRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHVuQ29tcGxldGVkVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3VuQ29tcGxldGVUYXNrRGl2Jyk7XG4gICAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQodW5Db21wbGV0ZWRUYXNrQ29udGFpbmVyKTtcbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29tcGxldGVkVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbXBsZXRlVGFza0RpdicpO1xuICAgICAgICBsaXN0RGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tDb250YWluZXIpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmluc2VydEJlZm9yZShsaXN0RGl2LCBsaXN0Q29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICByZXR1cm4gbGlzdERpdjtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkTGlzdEl0ZW0odGl0bGUsIGxpc3REaXYsIGluZGV4LCB0YXNrU3RhdHVzPTApIHtcbiAgICAgICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tEaXYnKTtcbiAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JywgaW5kZXgpO1xuICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrVGl0bGVEaXYnKTtcbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGlmKHRhc2tTdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHRhc2tDaGVja0JveENsaWNrZWQoZXZlbnQgLGxpc3REaXYsIHRhc2tEaXYpKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGFza0NoZWNrQm94Q2xpY2tlZChldmVudCwgbGlzdERpdiwgdGFzaykge1xuICAgICAgICBsZXQgbGlzdERpdkluZGV4ID0gbGlzdERpdi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrTGlzdEluZGV4JylcbiAgICAgICAgbGV0IHRhc2tDbGlja2VkID0gdGFzaztcbiAgICAgICAgY29udHJvbCgzLCBsaXN0RGl2SW5kZXgpO1xuICAgICAgICBjb250cm9sKDIsIHRhc2tDbGlja2VkLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnKSk7XG4gICAgICAgIGxldCBjb21wbGV0ZVN0YXR1cyA9IHRhc2suY2hpbGROb2Rlc1swXS5jaGVja2VkO1xuICAgICAgICBsZXQgY29tcGxldGVUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLXRhc2tsaXN0SW5kZXg9XCIke2xpc3REaXZJbmRleH1cIl0gLmNvbXBsZXRlVGFza0RpdmApIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50VGFza0xpc3QgPiAuY29tcGxldGVUYXNrRGl2Jyk7XG4gICAgICAgIGxldCB1bkNvbXBsZXRlVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLXRhc2tsaXN0SW5kZXg9XCIke2xpc3REaXZJbmRleH1cIl0gLnVuQ29tcGxldGVUYXNrRGl2YCkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnRUYXNrTGlzdCA+IC51bkNvbXBsZXRlVGFza0RpdicpO1xuICAgICAgICBpZihjb21wbGV0ZVN0YXR1cykge1xuICAgICAgICAgICAgbWFya1Rhc2tDb21wbGV0ZSh0YXNrQ2xpY2tlZCwgdW5Db21wbGV0ZVRhc2tDb250YWluZXIsIGNvbXBsZXRlVGFza3NDb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFya1Rhc2tVbmNvbXBsZXRlKHRhc2tDbGlja2VkLCB1bkNvbXBsZXRlVGFza0NvbnRhaW5lciwgY29tcGxldGVUYXNrc0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIHN0b3BzIHRoZSBidWJibGluZyB0byB0aGUgbWFpbiBsaXN0IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcmtUYXNrQ29tcGxldGUodGFzaywgdW5Db21wbGV0ZVRhc2tDb250YWluZXIsIGNvbXBsZXRlVGFza0NvbnRhaW5lcikge1xuICAgICAgICBsZXQgbGFzdENoaWxkID0gdW5Db21wbGV0ZVRhc2tDb250YWluZXIuY2hpbGROb2Rlc1t1bkNvbXBsZXRlVGFza0NvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgbGFzdENoaWxkSW5kZXggPSBsYXN0Q2hpbGQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpO1xuICAgICAgICBsZXQgaW5mbyA9IGNvbnRyb2woNCwgbGFzdENoaWxkSW5kZXgpO1xuICAgICAgICB1bkNvbXBsZXRlVGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrKTtcbiAgICAgICAgaWYoaW5mbyAhPT0gIG51bGwpIHtcbiAgICAgICAgICAgIGFkZExpc3RJdGVtKGluZm8udGl0bGUsIHVuQ29tcGxldGVUYXNrQ29udGFpbmVyLCBpbmZvLmluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZih0YXNrLmNoaWxkTm9kZXNbMl0pIHtcbiAgICAgICAgICAgIHRhc2suY2hpbGROb2Rlc1sxXS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpO1xuICAgICAgICAgICAgdGFzay5jaGlsZE5vZGVzWzJdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb21wbGV0ZVRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFya1Rhc2tVbmNvbXBsZXRlKHRhc2ssIHVuQ29tcGxldGVUYXNrQ29udGFpbmVyLCBjb21wbGV0ZVRhc2tDb250YWluZXIpIHtcbiAgICAgICAgY29tcGxldGVUYXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2spO1xuICAgICAgICBsZXQgaW5kZXggPSB0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnKTtcbiAgICAgICAgbGV0IHVuY29tcGxldGVUYXNrcyA9IEFycmF5LmZyb20odW5Db21wbGV0ZVRhc2tDb250YWluZXIuY2hpbGROb2Rlcyk7XG4gICAgICAgIGlmKHRhc2suY2hpbGROb2Rlc1syXSkge1xuICAgICAgICAgICAgdGFzay5jaGlsZE5vZGVzWzFdLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgICAgIHRhc2suY2hpbGROb2Rlc1syXS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBsZXRlVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgaWYodW5jb21wbGV0ZVRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdW5Db21wbGV0ZVRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZihOdW1iZXIoaW5kZXgpID4gTnVtYmVyKHVuY29tcGxldGVUYXNrc1t1bmNvbXBsZXRlVGFza3MubGVuZ3RoIC0gMV0uZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpKSkge1xuICAgICAgICAgICAgdW5Db21wbGV0ZVRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dW5jb21wbGV0ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGVtcFRhc2sgPSB1bmNvbXBsZXRlVGFza3NbaV07XG4gICAgICAgICAgICBpZihOdW1iZXIodGVtcFRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpKSA+IE51bWJlcihpbmRleCkpIHtcbiAgICAgICAgICAgICAgICB1bkNvbXBsZXRlVGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFzaywgdGVtcFRhc2spO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheUN1cnJlbnRUYXNrTGlzdCxcbiAgICAgICAgdGFza0NoZWNrQm94Q2xpY2tlZFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB7dWlFbGVtZW50cywgbWFrZVRhc2tMaXN0RGl2fTsiLCJpbXBvcnQgb2JqIGZyb20gJy4vbWFrZV90YXNrX2luZm9fZm9ybSc7XG5cbmZ1bmN0aW9uIFRhc2sodGl0bGUsIGR1ZURhdGUsIGNvbXBsZXRlU3RhdHVzPWZhbHNlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgLy8gdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGVTdGF0dXMgPSBjb21wbGV0ZVN0YXR1cztcbn1cblxuVGFzay5wcm90b3R5cGUubWFya0NvbXBsZXRlX1VuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNvbXBsZXRlU3RhdHVzID0gdGhpcy5jb21wbGV0ZVN0YXR1cyA/IGZhbHNlIDogdHJ1ZTtcbn1cblxuVGFzay5wcm90b3R5cGUuaXNDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRlU3RhdHVzO1xufVxuXG5mdW5jdGlvbiBUYXNrTGlzdCh0aXRsZSwgaW5kZXgpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbn1cblxuVGFza0xpc3QucHJvdG90eXBlLmRpc3BsYXlBbGwgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRhc2tMaXN0LmZvckVhY2godGFzayA9PiBjb25zb2xlLmxvZyh0YXNrKSk7XG4gICAgcmV0dXJuIDE7XG59XG5cblRhc2tMaXN0LnByb3RvdHlwZS5pc0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza0xpc3QuZXZlcnkodGFzayA9PiB0YXNrLmlzQ29tcGxldGUpO1xufVxuXG5jb25zdCB0YXNrTlRhc2tMaXN0TWFuYWdlciA9IChmdW5jdGlvbiBjb250cm9sKCkge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuICAgIGxldCBjdXJyZW50VGFza0xpc3Q7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkdWVEYXRlLCBjb21wbGV0ZVN0YXR1cykge1xuICAgICAgICBjdXJyZW50VGFza0xpc3QudGFza0xpc3QucHVzaChuZXcgVGFzayh0aXRsZSwgZHVlRGF0ZSwgY29tcGxldGVTdGF0dXMpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrTGlzdCh0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IHRpdGxlID09ICdHZW5lcmFsIFRhc2tzJyA/IHRpdGxlK1wiIFwiK3Byb2plY3RzLmxlbmd0aCA6IHRpdGxlO1xuICAgICAgICBjdXJyZW50VGFza0xpc3QgPSBuZXcgVGFza0xpc3QodGl0bGUsIHByb2plY3RzLmxlbmd0aCk7XG4gICAgICAgIHByb2plY3RzLnB1c2goY3VycmVudFRhc2tMaXN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudFRhc2tMaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFza0xpc3QudGl0bGUpO1xuICAgICAgICBpZihjdXJyZW50VGFza0xpc3QudGFza0xpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICAgICAgLy8gY3VycmVudFRhc2tMaXN0LmRpc3BsYXlBbGwoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFRhc2tMaXN0KCkge1xuICAgICAgICBjb25zdCBjb3B5Q3VycmVudFRhc2tMaXN0ID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudFRhc2tMaXN0KTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgIHJldHVybiBjb3B5Q3VycmVudFRhc2tMaXN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcmtUYXNrQ29tcGxldGVfVW5jb21wbGV0ZShpbmRleCkge1xuICAgICAgICBpZihjdXJyZW50VGFza0xpc3QudGFza0xpc3QubGVuZ3RoIDwgaW5kZXggfHwgIWluZGV4IHx8IGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VGFza0xpc3QudGFza0xpc3RbaW5kZXhdLm1hcmtDb21wbGV0ZV9VbmNvbXBsZXRlKCk7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hDdXJyZW50VGFza0xpc3RUbyhpbmRleCkge1xuICAgICAgICBpZihwcm9qZWN0cy5sZW5ndGggPCBpbmRleCB8fCAhaW5kZXggfHwgaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdCA9IHByb2plY3RzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VW5jb21wbGV0ZWRUYXNrQWZ0ZXIoaW5kZXgpIHtcbiAgICAgICAgZm9yKGxldCBpPU51bWJlcihpbmRleCkrMTsgaTxjdXJyZW50VGFza0xpc3QudGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0YXNrID0gY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0W2ldO1xuICAgICAgICAgICAgaWYoIXRhc2suaXNDb21wbGV0ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRhc2sudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiB0YXNrLmR1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlU3RhdHVzOiB0YXNrLmNvbXBsZXRlU3RhdHVzLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ3VycmVudFRhc2tMaXN0KHRhc2tMaXN0KSB7XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdC50aXRsZSA9IHRhc2tMaXN0LnRpdGxlO1xuICAgICAgICBjdXJyZW50VGFza0xpc3QudGFza0xpc3QgPSBbXTtcbiAgICAgICAgdGFza0xpc3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0LnB1c2gobmV3IFRhc2sodGFzay50aXRsZSwgdGFzay5kdWVEYXRlLCB0YXNrLmNvbXBsZXRlU3RhdHVzKSk7XG4gICAgICAgIH0pXG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUoKSB7XG4gICAgICAgIGxldCBzdG9yYWdlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZSB0ZXN0X18nO1xuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgseCk7XG4gICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG4gICAgICAgIGlmKCFzdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2tMaXN0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7Y3VycmVudFRhc2tMaXN0LmluZGV4fWAsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrTGlzdCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByaW50TG9jYWxTdG9yYWdlS2V5cygpIHtcbiAgICAgICAgbGV0IGtleXM7XG4gICAgICAgIGlmKHN0b3JhZ2VBdmFpbGFibGUoKSkge1xuICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5zb3J0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coa2V5cyk7XG4gICAgICAgIGlmKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdC5pbmRleCk7XG4gICAgICAgICAgICAgICAgY3JlYXRlVGFza0xpc3QodGFza0xpc3QudGl0bGUpO1xuICAgICAgICAgICAgICAgIHRhc2tMaXN0LnRhc2tMaXN0LmZvckVhY2godGFzayA9PiBjcmVhdGVUYXNrKHRhc2sudGl0bGUsIHRhc2suZHVlRGF0ZSwgdGFzay5jb21wbGV0ZVN0YXR1cykpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG9iai5tYWtlVGFza0xpc3REaXYuZGlzcGxheUN1cnJlbnRUYXNrTGlzdChjdXJyZW50VGFza0xpc3QpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUYXNrLFxuICAgICAgICBjcmVhdGVUYXNrTGlzdCxcbiAgICAgICAgZGlzcGxheUN1cnJlbnRUYXNrTGlzdCxcbiAgICAgICAgZ2V0Q3VycmVudFRhc2tMaXN0LFxuICAgICAgICBtYXJrVGFza0NvbXBsZXRlX1VuY29tcGxldGUsXG4gICAgICAgIHN3aXRjaEN1cnJlbnRUYXNrTGlzdFRvLFxuICAgICAgICBnZXRVbmNvbXBsZXRlZFRhc2tBZnRlcixcbiAgICAgICAgdXBkYXRlQ3VycmVudFRhc2tMaXN0LFxuICAgICAgICBwcmludExvY2FsU3RvcmFnZUtleXNcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sKGNob2ljZSwgb3B0aW9uKSB7XG5cbiAgICBzd2l0Y2goY2hvaWNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRhc2tOVGFza0xpc3RNYW5hZ2VyLmNyZWF0ZVRhc2tMaXN0KG9wdGlvbi50aXRsZSk7IC8vIGhlcmUgb3B0aW9uIGlzIG9iamVjdCB3aGljaCBjcmVhdGUgYSBuZXcgdGFza2xpc3Qgd2l0aCBhbGwgdGhlIHRhc2tcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZXMuZm9yRWFjaCh2YWwgPT4gdGFza05UYXNrTGlzdE1hbmFnZXIuY3JlYXRlVGFzayh2YWxbMF0sIHZhbFsxXSwgdmFsWzJdKSk7XG4gICAgICAgICAgICByZXR1cm4gdGFza05UYXNrTGlzdE1hbmFnZXIuZ2V0Q3VycmVudFRhc2tMaXN0KCk7XG4gICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICB0YXNrTlRhc2tMaXN0TWFuYWdlci5tYXJrVGFza0NvbXBsZXRlX1VuY29tcGxldGUob3B0aW9uKTsgLy8gaGVyZSBvcHRpb24gaXMgdGhlIGluZGV4IG9mIHRoZSB0YXNrIHdoaWNoIG5lZWQgdG8gYmUgbWFya2VkIGNvbXBsZXRlIGluIHNwZWNpZmljIHRhc2tcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgdGFza05UYXNrTGlzdE1hbmFnZXIuc3dpdGNoQ3VycmVudFRhc2tMaXN0VG8ob3B0aW9uKTsgLy8gaGVyZSBvcHRpb24gaXMgdGhlIGluZGV4IG9mIHRoZSB0YXNrbGlzdCB3aGljaCBuZWVkIHRvIGJlIG1hZGUgY3VycmVudFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogXG4gICAgICAgICAgICByZXR1cm4odGFza05UYXNrTGlzdE1hbmFnZXIuZ2V0VW5jb21wbGV0ZWRUYXNrQWZ0ZXIob3B0aW9uKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgdGFza05UYXNrTGlzdE1hbmFnZXIuZGlzcGxheUN1cnJlbnRUYXNrTGlzdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiB0YXNrTlRhc2tMaXN0TWFuYWdlci5nZXRDdXJyZW50VGFza0xpc3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6IFxuICAgICAgICAgICAgdGFza05UYXNrTGlzdE1hbmFnZXIudXBkYXRlQ3VycmVudFRhc2tMaXN0KG9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgdGFza05UYXNrTGlzdE1hbmFnZXIucHJpbnRMb2NhbFN0b3JhZ2VLZXlzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb3QgYSB2YWxpZCBjaG9pY2UnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0iLCJpbXBvcnQgY29udHJvbCBmcm9tICcuL3Rhc2tfdGFza0xpc3RfRGF0YS5qcyc7XG5pbXBvcnQgb2JqIGZyb20gJy4vbWFrZV90YXNrX2luZm9fZm9ybSc7XG5cbmltcG9ydCBjbG9zZUltYWdlIGZyb20gJy4uL2Fzc2VzdHMvY2xvc2Uuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbDIobGlzdERpdikge1xuICAgIGNvbnNvbGUubG9nKGxpc3REaXYuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tMaXN0SW5kZXgnKSk7XG4gICAgbGlzdERpdi5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrTGlzdCcpO1xuICAgIGxldCB0YXNrTGlzdEluZGV4ID0gbGlzdERpdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0xpc3RJbmRleCcpO1xuICAgIGNvbnRyb2woMywgdGFza0xpc3RJbmRleCk7XG4gICAgbGV0IGN1cnJlbnRUYXNrTGlzdCA9IGNvbnRyb2woNiwgdGFza0xpc3RJbmRleCk7XG4gICAgbGlzdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2N1cnJlbnRUYXNrTGlzdCcpO1xuICAgIG1ha2VUaXRsZURpdkVkaXRhYmxlKGxpc3REaXYsIGN1cnJlbnRUYXNrTGlzdC50aXRsZSk7XG4gICAgbGV0IHVuY29tcGxldGVUYXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLXRhc2tMaXN0SW5kZXg9XCIke3Rhc2tMaXN0SW5kZXh9XCJdID4gLnVuQ29tcGxldGVUYXNrRGl2YCk7XG4gICAgbGV0IGNvbXBsZXRlVGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS10YXNrTGlzdEluZGV4PVwiJHt0YXNrTGlzdEluZGV4fVwiXSA+IC5jb21wbGV0ZVRhc2tEaXZgKTtcbiAgICBsZXQgdW5Db21wbGV0ZVRhc2tzID0gdW5jb21wbGV0ZVRhc2tMaXN0LmNoaWxkTm9kZXM7XG4gICAgbGV0IGNvbXBsZXRlVGFza3MgPSBjb21wbGV0ZVRhc2tMaXN0LmNoaWxkTm9kZXM7XG4gICAgZm9yKGxldCBpPTA7IGk8dW5Db21wbGV0ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVuQ29tcGxldGVUYXNrc1tpXSk7XG4gICAgICAgIGxldCBpbmRleCA9IE51bWJlcih1bkNvbXBsZXRlVGFza3NbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpKTtcbiAgICAgICAgbW9kaWZ5RXhpc3RpbmdUYXNrKHVuQ29tcGxldGVUYXNrc1tpXSwgY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0W2luZGV4XS5kdWVEYXRlKTtcbiAgICB9XG4gICAgZm9yKGxldCBpPTA7IGk8Y29tcGxldGVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaW5kZXggPSBOdW1iZXIoY29tcGxldGVUYXNrc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JykpO1xuICAgICAgICBtb2RpZnlFeGlzdGluZ1Rhc2soY29tcGxldGVUYXNrc1tpXSwgY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0W2luZGV4XS5kdWVEYXRlLCBmYWxzZSk7XG4gICAgfVxuICAgIGxldCBsYXN0Q2hpbGRJbmRleCA9IHVuY29tcGxldGVUYXNrTGlzdC5sYXN0Q2hpbGQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGxhc3RDaGlsZEluZGV4KTtcbiAgICBmb3IobGV0IGk9TnVtYmVyKGxhc3RDaGlsZEluZGV4KSsxOyBpPGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGFzayA9IGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdFtpXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coKTtcbiAgICAgICAgaWYoIXRhc2suY29tcGxldGVTdGF0dXMpIHtcbiAgICAgICAgICAgIHVuY29tcGxldGVUYXNrTGlzdC5hcHBlbmRDaGlsZChtYWtlVGFzayhpLCB0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsaXN0RGl2LmFwcGVuZENoaWxkKG1ha2VDbG9zZUJ1dHRvbigpKTtcbiAgICBtYWtlQ3VycmVudExpc3RDZW50ZXIoKTtcbn1cblxuZnVuY3Rpb24gbWFrZUN1cnJlbnRMaXN0Q2VudGVyKCkge1xuICAgIGxldCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFza0xpc3QnKTtcbiAgICBsZXQgY3VycmVudExpc3RIZWlnaHQgPSBjdXJyZW50TGlzdC5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjdXJyZW50TGlzdC5zdHlsZS50b3AgPSBgJHsod2luZG93SGVpZ2h0IC0gY3VycmVudExpc3RIZWlnaHQpIC8gMn1weGBcbn1cblxuZnVuY3Rpb24gbWFrZVRpdGxlRGl2RWRpdGFibGUobGlzdERpdiwgdGl0bGUpIHtcbiAgICBpZihsaXN0RGl2LmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAndGFza0xpc3RUaXRsZScgKSB7XG4gICAgICAgIGxldCB0aXRsZURpdiA9IGxpc3REaXYuZmlyc3RDaGlsZDtcbiAgICAgICAgdGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBcInRydWVcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtb2RpZnlFeGlzdGluZ1Rhc2sodGFza0RpdiwgZHVlRGF0ZSwgaXNFZGl0YWJsZT10cnVlKSB7XG4gICAgdGFza0Rpdi5jaGlsZE5vZGVzWzFdLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgaXNFZGl0YWJsZSk7XG4gICAgdGFza0Rpdi5jaGlsZE5vZGVzWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlbnRlclByZXNzZWRPbkRpdik7XG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkdWVEYXRlICk7XG4gICAgZGF0ZUlucHV0LmRpc2FibGVkID0gIWlzRWRpdGFibGU7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNsb3NlLnNldEF0dHJpYnV0ZSgnc3JjJywgY2xvc2VJbWFnZSk7XG4gICAgY2xvc2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAnY2xvc2Ugc2lnbicpO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3Jvc3NTaWduQ2xpY2tlZCk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjbG9zZSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VUYXNrKGluZGV4LCB0aXRsZSwgZHVlRGF0ZSwgY29tcGxldGVTdGF0dXM9ZmFsc2UpIHtcbiAgICBsZXQgbGlzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFza0xpc3QnKTtcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrRGl2Jyk7XG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JywgaW5kZXgpO1xuICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrVGl0bGVEaXYnKTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZW50ZXJQcmVzc2VkT25EaXYpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IG9iai5tYWtlVGFza0xpc3REaXYudGFza0NoZWNrQm94Q2xpY2tlZChldmVudCwgbGlzdERpdiwgdGFza0RpdikpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZHVlRGF0ZSk7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2xvc2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBjbG9zZUltYWdlKTtcbiAgICBjbG9zZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdjbG9zZSBzaWduJyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcm9zc1NpZ25DbGlja2VkKTtcbiAgICBpZihjb21wbGV0ZVN0YXR1cykge1xuICAgICAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICByZXR1cm4gdGFza0Rpdjtcbn1cblxuZnVuY3Rpb24gY3Jvc3NTaWduQ2xpY2tlZChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICBsZXQgcGFyZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IGluZGV4ID0gcGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnKTtcbiAgICBwYXJlbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwYXJlbnQpO1xuICAgIGRlY3JlYXNlRGF0YUluZGV4QnlPbmUoTnVtYmVyKGluZGV4KSk7XG59XG5cbmZ1bmN0aW9uIGVudGVyUHJlc3NlZE9uRGl2KGV2ZW50KSB7XG4gICAgaWYoZXZlbnQua2V5Q29kZSA9PSAnMTMnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgbGV0IHBhcmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgaW5kZXggPSBwYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnKTtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQgPSBtYWtlVGFzayhudWxsLCBudWxsLCBudWxsKTtcbiAgICAgICAgcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShuZXdFbGVtZW50LCBwYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgaW5jcmVhc2VEYXRhSW5kZXhCeU9uZShOdW1iZXIoaW5kZXgpKTtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JywgTnVtYmVyKGluZGV4KSArIDEpO1xuICAgICAgICAvLyBuZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlbnRlclByZXNzZWRPbkRpdik7XG4gICAgICAgIG5ld0VsZW1lbnQuY2hpbGROb2Rlc1sxXS5mb2N1cygpO1xuICAgICAgICBtYWtlQ3VycmVudExpc3RDZW50ZXIoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlYXNlRGF0YUluZGV4QnlPbmUoaW5kZXgpIHtcbiAgICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY3VycmVudFRhc2tMaXN0IGRpdltkYXRhLXRhc2tJbmRleF0nKTtcbiAgICB0YXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBsZXQgaSA9IHRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpO1xuICAgICAgICBpZihOdW1iZXIoaSkgPiBpbmRleCkge1xuICAgICAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4JywgTnVtYmVyKGkpKzEpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGVjcmVhc2VEYXRhSW5kZXhCeU9uZShpbmRleCkge1xuICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjdXJyZW50VGFza0xpc3QgZGl2W2RhdGEtdGFza0luZGV4XScpO1xuICAgIHRhc2tMaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGxldCBpID0gdGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4Jyk7XG4gICAgICAgIGlmKE51bWJlcihpKSA+IGluZGV4KSB7XG4gICAgICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnLCBOdW1iZXIoaSktMSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBtYWtlQ2xvc2VCdXR0b24oKSB7XG4gICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2VGb3JtQnV0dG9uJyk7XG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VCdXR0b25DbGlja2VkKTtcbiAgICByZXR1cm4gY2xvc2VCdG47XG59XG5cbmZ1bmN0aW9uIGNsb3NlQnV0dG9uQ2xpY2tlZChldmVudCkge1xuICAgIGxldCBwYXJlbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBwYXJlbnQuc2Nyb2xsVG9wID0gMDtcbiAgICBsZXQgdXBkYXRlZEN1cnJlbnRMaXN0ID0gbWFrZVRhc2tMaXN0KHBhcmVudCk7XG4gICAgcmVtb3ZlRXh0cmFVbmNvbXBsZXRlVGFzayhwYXJlbnQpO1xuICAgIHJlbW92ZUR1ZURhdGVFbGVtZW50KHBhcmVudCk7XG4gICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2tMaXN0Jyk7XG4gICAgcGFyZW50LnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoZXZlbnQudGFyZ2V0KTtcbiAgICBjb250cm9sKDcsIHVwZGF0ZWRDdXJyZW50TGlzdCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VUYXNrTGlzdChwYXJlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhwYXJlbnQpO1xuICAgIGxldCB0aXRsZSA9IHBhcmVudC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50O1xuICAgIGxldCB0YXNrTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2N1cnJlbnRUYXNrTGlzdCBkaXZbZGF0YS10YXNrSW5kZXhdJykpO1xuICAgIGxldCB0YXNrcyA9IFtdO1xuICAgIGZvcihsZXQgaT0wOyBpPHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gbWFrZU5ld1Rhc2sodGFza0xpc3RbaV0pO1xuICAgICAgICB0YXNrc1tOdW1iZXIodGFzay5pbmRleCldID0gdGFzaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHRhc2tzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlTmV3VGFzayh0YXNrKSB7XG4gICAgbGV0IGluZGV4ID0gdGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0luZGV4Jyk7XG4gICAgbGV0IHRpdGxlID0gdGFzay5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuICAgIGxldCBjb21wbGV0ZVN0YXR1cyA9IHRhc2suY2hpbGROb2Rlc1swXS5jaGVja2VkO1xuICAgIGxldCBkdWVEYXRlID0gdGFzay5jaGlsZE5vZGVzWzJdLnZhbHVlO1xuICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4LCBcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGNvbXBsZXRlU3RhdHVzLFxuICAgICAgICBkdWVEYXRlXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXh0cmFVbmNvbXBsZXRlVGFzayhwYXJlbnQpIHtcbiAgICBwYXJlbnQuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpO1xuICAgIGxldCB1bmNvbXBsZXRlVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50VGFza0xpc3Q+LnVuQ29tcGxldGVUYXNrRGl2Jyk7XG4gICAgbGV0IHVuY29tcGxldGVUYXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjdXJyZW50VGFza0xpc3Q+LnVuQ29tcGxldGVUYXNrRGl2PmRpdltkYXRhLXRhc2tJbmRleF0nKTtcbiAgICBmb3IobGV0IGk9OTsgaTx1bmNvbXBsZXRlVGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdW5jb21wbGV0ZVRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodW5jb21wbGV0ZVRhc2tMaXN0W2ldKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUR1ZURhdGVFbGVtZW50KHBhcmVudCkge1xuICAgIGxldCB0YXNrc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY3VycmVudFRhc2tMaXN0IGRpdltkYXRhLXRhc2tJbmRleF0nKTtcbiAgICB0YXNrc0xpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFzay5jaGlsZE5vZGVzWzFdLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJyk7XG4gICAgICAgIHRhc2suY2hpbGROb2Rlc1sxXS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZW50ZXJQcmVzc2VkT25EaXYpO1xuICAgICAgICB0YXNrLnJlbW92ZUNoaWxkKHRhc2suY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIHRhc2sucmVtb3ZlQ2hpbGQodGFzay5jaGlsZE5vZGVzWzJdKTtcbiAgICB9KTtcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgb2JqIGZyb20gJy4vbW9kdWxlcy9tYWtlX3Rhc2tfaW5mb19mb3JtJztcbmltcG9ydCBjb250cm9sIGZyb20gJy4vbW9kdWxlcy90YXNrX3Rhc2tMaXN0X0RhdGEnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcydcblxuY29uc29sZS5sb2coJ3RvIGRvIGxpc3QnKTsgXG5cbmNvbnN0IGJhc2ljX3BhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGNvbnN0IG1ha2VIZWFkZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoMS50ZXh0Q29udGVudCA9ICdUYXNrcyc7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlTWFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgICAgbGV0IGFkZFRhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1dHRvbkZvcm1Db250YWluZXInKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xpc3RDb250YWluZXInKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uRGl2KTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWtlSGVhZGVyLFxuICAgICAgICBtYWtlTWFpbixcbiAgICB9O1xufSkoKTtcblxuXG4oZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgYmFzaWNfcGFnZS5tYWtlSGVhZGVyKCk7XG4gICAgYmFzaWNfcGFnZS5tYWtlTWFpbigpO1xuICAgIG9iai51aUVsZW1lbnRzLmNyZWF0ZUFkZFRhc2tCdXR0b24oKTtcbiAgICBjb250cm9sKDgpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=