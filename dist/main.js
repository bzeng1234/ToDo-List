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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader,\nfooter {\n    width: 100%;\n    height: 100px;\n    background-color: #dc2626;\n}\n\n.main-container {\n    width: 100%;\n    flex: 1;\n    display: flex;\n}\n\n.sidebar {\n    width: 300px;\n    background-color: #f5f5f5;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.task-list,\n.project-container,\n.project-list {\n    width: 70%;\n    list-style: none;\n    font-size: 20px;\n    margin-top: 50px;\n}\n\n.task {\n    height: 40px;\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n    padding: 0px 5px;\n}\n\n.task:hover {\n    background-color: white;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.inbox-icon,\n.today-icon,\n.week-icon,\n.complete-icon {\n    width: 30px;\n    height: 30px;\n}\n\n.inbox-icon {\n    background-image: url(https://lovrozagar.github.io/To-Do-List/inbox.svg);\n}\n\n.today-icon {\n    background-image: url(https://lovrozagar.github.io/To-Do-List/today.svg);\n}\n\n.week-icon {\n    background-image: url(https://lovrozagar.github.io/To-Do-List/thisWeek.svg);\n}\n\n.complete-icon {\n    background-image: url(https://lovrozagar.github.io/To-Do-List/completed.svg);\n}\n\n.task > p {\n    margin-left: 10px;\n}\n\n.project-container {\n    margin-top: 10px;\n    width: 70%;\n}\n\n#proj-input,\n#task-name,\n#task-date,\n#task-description,\n#task-priority {\n    font-size: 20px;\n    height: 30px;\n    width: 100%;\n    border: 3px solid #a1a1aa;\n    border-radius: 5px;\n    padding-left: 6px;\n}\n\n.project-btn-container {\n    width: 100%;\n    margin: 5px 0px 0px 5px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 5px;\n}\n\n.clear-proj-btn,\n.add-proj-btn,\n.add-task-btn,\n.clear-item,\n.add-item {\n    font-size: 15px;\n    font-weight: 600;\n    width: 100%;\n    height: 30px;\n    border: 0;\n    border-radius: 5px;\n    color: white;\n    background-color: #dc2626;\n}\n\n.clear-btn:hover,\n.add-proj-btn:hover,\n.add-task-btn:hover,\n.clear-item:hover,\n.add-item:hover {\n    cursor: pointer;\n    background-color: #991b1b;\n}\n\n.project-list {\n    width: 100%;\n    border-radius: 5px;\n    margin-top: 10px;\n    padding-left: 5px;\n}\n\n.project {\n    background-color: #e4e4e7;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 30px;\n    font-weight: 300;\n    border-radius: 5px;\n    margin-bottom: 2px;\n}\n\n.project:hover {\n    background-color: #d4d4d4;\n    cursor: pointer;\n}\n\n.content {\n    flex: 1;\n    background-color: #fafafa;\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-header {\n    display: flex;\n    justify-content: space-around;\n    height: 50px;\n    align-items: center;\n    padding: 20px;\n    font-weight: bold;\n}\n\n.todo-title {\n    font-size: 40px;\n    width: 200px;\n}\n\n.add-task-btn {\n    width: 120px;\n}\n\n.add-task-form {\n    width: 800px;\n    height: 150px;\n    display: none;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-self: center;\n    padding: 20px 10px 0px 30px;\n    background-color: #e4e4e7;\n    border-radius: 10px;\n}\n\n#task-name,\n#task-date,\n#task-priority,\n.add-item {\n    width: 90%;\n}\n\n#task-name {\n    grid-column: 1 / 2;\n}\n\n#task-date {\n    grid-column: 2 / 3;\n}\n\n#task-description {\n    grid-column: 1 / 3;\n    width: 95%;\n}\n\n.todo-list {\n    align-self: center;\n    text-align: center;\n    width: 90%;\n    list-style: none;\n    font-size: 25px;\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-items {\n    margin-bottom: 5px;\n    padding: 20px;\n    border-bottom: 1px solid gray;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 60px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,WAAW;IACX,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,OAAO;IACP,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;;;IAGI,UAAU;IACV,gBAAgB;IAChB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;;;;IAII,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,wEAAwE;AAC5E;;AAEA;IACI,wEAAwE;AAC5E;;AAEA;IACI,2EAA2E;AAC/E;;AAEA;IACI,4EAA4E;AAChF;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;;;;;IAKI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,qCAAqC;IACrC,QAAQ;AACZ;;AAEA;;;;;IAKI,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;;;;;IAKI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,OAAO;IACP,yBAAyB;IACzB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;IAC/B,kBAAkB;IAClB,2BAA2B;IAC3B,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;;;;IAII,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader,\nfooter {\n    width: 100%;\n    height: 100px;\n    background-color: #dc2626;\n}\n\n.main-container {\n    width: 100%;\n    flex: 1;\n    display: flex;\n}\n\n.sidebar {\n    width: 300px;\n    background-color: #f5f5f5;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.task-list,\n.project-container,\n.project-list {\n    width: 70%;\n    list-style: none;\n    font-size: 20px;\n    margin-top: 50px;\n}\n\n.task {\n    height: 40px;\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n    padding: 0px 5px;\n}\n\n.task:hover {\n    background-color: white;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.inbox-icon,\n.today-icon,\n.week-icon,\n.complete-icon {\n    width: 30px;\n    height: 30px;\n}\n\n.inbox-icon {\n    background-image: url(https://lovrozagar.github.io/To-Do-List/inbox.svg);\n}\n\n.today-icon {\n    background-image: url(https://lovrozagar.github.io/To-Do-List/today.svg);\n}\n\n.week-icon {\n    background-image: url(https://lovrozagar.github.io/To-Do-List/thisWeek.svg);\n}\n\n.complete-icon {\n    background-image: url(https://lovrozagar.github.io/To-Do-List/completed.svg);\n}\n\n.task > p {\n    margin-left: 10px;\n}\n\n.project-container {\n    margin-top: 10px;\n    width: 70%;\n}\n\n#proj-input,\n#task-name,\n#task-date,\n#task-description,\n#task-priority {\n    font-size: 20px;\n    height: 30px;\n    width: 100%;\n    border: 3px solid #a1a1aa;\n    border-radius: 5px;\n    padding-left: 6px;\n}\n\n.project-btn-container {\n    width: 100%;\n    margin: 5px 0px 0px 5px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 5px;\n}\n\n.clear-proj-btn,\n.add-proj-btn,\n.add-task-btn,\n.clear-item,\n.add-item {\n    font-size: 15px;\n    font-weight: 600;\n    width: 100%;\n    height: 30px;\n    border: 0;\n    border-radius: 5px;\n    color: white;\n    background-color: #dc2626;\n}\n\n.clear-btn:hover,\n.add-proj-btn:hover,\n.add-task-btn:hover,\n.clear-item:hover,\n.add-item:hover {\n    cursor: pointer;\n    background-color: #991b1b;\n}\n\n.project-list {\n    width: 100%;\n    border-radius: 5px;\n    margin-top: 10px;\n    padding-left: 5px;\n}\n\n.project {\n    background-color: #e4e4e7;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 30px;\n    font-weight: 300;\n    border-radius: 5px;\n    margin-bottom: 2px;\n}\n\n.project:hover {\n    background-color: #d4d4d4;\n    cursor: pointer;\n}\n\n.content {\n    flex: 1;\n    background-color: #fafafa;\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-header {\n    display: flex;\n    justify-content: space-around;\n    height: 50px;\n    align-items: center;\n    padding: 20px;\n    font-weight: bold;\n}\n\n.todo-title {\n    font-size: 40px;\n    width: 200px;\n}\n\n.add-task-btn {\n    width: 120px;\n}\n\n.add-task-form {\n    width: 800px;\n    height: 150px;\n    display: none;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-self: center;\n    padding: 20px 10px 0px 30px;\n    background-color: #e4e4e7;\n    border-radius: 10px;\n}\n\n#task-name,\n#task-date,\n#task-priority,\n.add-item {\n    width: 90%;\n}\n\n#task-name {\n    grid-column: 1 / 2;\n}\n\n#task-date {\n    grid-column: 2 / 3;\n}\n\n#task-description {\n    grid-column: 1 / 3;\n    width: 95%;\n}\n\n.todo-list {\n    align-self: center;\n    text-align: center;\n    width: 90%;\n    list-style: none;\n    font-size: 25px;\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-items {\n    margin-bottom: 5px;\n    padding: 20px;\n    border-bottom: 1px solid gray;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 60px;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
let project = (name) => {
    let list = [];

    let addToList = function(...toDo) {
        for (let arg of toDo) {
            list.push(arg);
        }
    };

    return { name, addToList, list };
};

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDo": () => (/* binding */ toDo)
/* harmony export */ });
let toDo = (name, description, dueDate, priority) => {
    return { name, description, dueDate, priority };
};

/***/ }),

/***/ "./src/websiteInterface.js":
/*!*********************************!*\
  !*** ./src/websiteInterface.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "websiteInterface": () => (/* binding */ websiteInterface)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



let websiteInterface = () => {

    let projectList = [];

    let updateProjects = (projectLists) => {
        projectList.push(projectLists);
        console.log(projectList);
    };

    let clearContentScreen = () => {
        let todoListElem = document.querySelector('.todo-list');
        todoListElem.replaceChildren();
    };

    let addToContentScreen = (todoItem) => {
        let newItem = document.createElement('li');
        newItem.classList.add('todo-items');
        newItem.textContent = `${todoItem.name} : ${todoItem.description} : ${todoItem.dueDate} : ${todoItem.priority}`;
        
        let todoListElem = document.querySelector('.todo-list');
        todoListElem.appendChild(newItem);
    };

    let updateContent = (project) => {
        let todoTitle = document.querySelector('.todo-title');
        todoTitle.textContent = project.name;
        clearContentScreen();
        project.list.forEach(todoItem => {
            addToContentScreen(todoItem);
        });
    };
    let initInbox = () => {
        let inboxElem = document.getElementById('Inbox');
        console.log(inboxElem);

        inboxElem.addEventListener('click', (e) => {
            let project = projectList.find(element => element.name === 'Inbox');
            updateContent(project);
        });
    }

    let initToday = () => {
        let todayElem = document.getElementById('Today');
        console.log(todayElem);

        todayElem.addEventListener('click', (e) => {
            console.log(todayElem);
        });
    };

    let initWeek = () => {
        let weekElem = document.getElementById('Week');
        console.log(weekElem);

        weekElem.addEventListener('click', (e) => {
            console.log(weekElem);
        });
    };

    let initCompleted = () => {
        let completeElem = document.getElementById('Completed');
        console.log(completeElem);

        completeElem.addEventListener('click', (e) => {
            console.log(completeElem);
        });
    };

    let initProjectForm = () => {
        let addProjBtn = document.querySelector('.add-proj-btn');
        addProjBtn.addEventListener('click', (e) => {
            e.preventDefault();

            createNewProj();
            clearInput();
            initProjList();
        });

        let clearProjBtn = document.querySelector('.clear-proj-btn');
        clearProjBtn.addEventListener('click', (e) => {
            e.preventDefault();

            clearInput();
        });
    };

    let createNewProj = () => {
        let newProjName = document.getElementById('proj-input');
        console.log(newProjName.value);

        let newProjElem = document.createElement('li');
        newProjElem.classList.add('project');
        newProjElem.innerHTML = newProjName.value;

        let projListElem = document.querySelector('.project-list');
        projListElem.appendChild(newProjElem);

        projectList.push((0,_project__WEBPACK_IMPORTED_MODULE_1__.project)(newProjName.value));
    };

    let clearInput = () => {
        let projInputElem = document.getElementById('proj-input');
        projInputElem.value = "";
    };

    let clearForm = () => {
        let taskNameElem = document.getElementById('task-name');
        let taskDateElem = document.getElementById('task-date');
        let taskDescriptionElem = document.getElementById('task-description');

        taskNameElem.value = "";
        taskDateElem.value = "";
        taskDescriptionElem.value = "";
    }

    let initProjList = () => {
        let projListElem = document.querySelectorAll('.project');


        projListElem.forEach(element => {
            element.addEventListener('click', (e) => {
                let proj = projectList.find(elem => elem.name === e.target.textContent);
                updateContent(proj);
            });
        });
    };

    let initAddTaskButton = () => {
        let addTaskBtnElem = document.querySelector('.add-task-btn');
        addTaskBtnElem.addEventListener('click', (e) => {
            let taskForm = document.querySelector('.add-task-form');
            if(taskForm.style.display == "grid") {
                taskForm.style.display = "none";
                clearForm();
            } else {
                taskForm.style.display = "grid";
            }
        });
    };

    let initTaskForm = () => {
        let addItemElem = document.querySelector('.add-item');
        addItemElem.addEventListener('click', (e) => {
            e.preventDefault();

            let taskName = document.getElementById('task-name').value;
            let taskDate = document.getElementById('task-date').value;
            let taskDescription = document.getElementById('task-description').value;
            let taskPriority = document.getElementById('task-priority').value;

            let currProjName = document.querySelector(".todo-title").textContent;
            let proj = projectList.find(elem => elem.name === currProjName);
            proj.addToList((0,_todo__WEBPACK_IMPORTED_MODULE_0__.toDo)(taskName, taskDescription, taskDate, taskPriority));
            updateContent(proj);
        });
    };

    let initContent = () => {
        // initalize add task button
        initAddTaskButton();
        initTaskForm();
        updateContent(projectList[0]);
    }

    let initSidebar = () => {

        // initialize top side bar buttons
        initInbox();
        initToday();
        initWeek();
        initCompleted();

        // initalize project form for adding new projects
        initProjectForm();
        initProjList();
    };

    let initWebsite = () => {
        let defaultProj = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)('Inbox');
        defaultProj.addToList((0,_todo__WEBPACK_IMPORTED_MODULE_0__.toDo)('get milk','go to the grocery store','03/15/2022','high'));
        projectList.push(defaultProj);
        initSidebar();
        initContent();
    };

    
    
    return {projectList, updateProjects, initWebsite, initSidebar};
};

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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _websiteInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websiteInterface */ "./src/websiteInterface.js");



let websiteintf = (0,_websiteInterface__WEBPACK_IMPORTED_MODULE_1__.websiteInterface)();
websiteintf.initWebsite();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3dlYnNpdGVJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1saXN0LFxcbi5wcm9qZWN0LWNvbnRhaW5lcixcXG4ucHJvamVjdC1saXN0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5ib3gtaWNvbixcXG4udG9kYXktaWNvbixcXG4ud2Vlay1pY29uLFxcbi5jb21wbGV0ZS1pY29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmluYm94LWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9sb3Zyb3phZ2FyLmdpdGh1Yi5pby9Uby1Eby1MaXN0L2luYm94LnN2Zyk7XFxufVxcblxcbi50b2RheS1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbG92cm96YWdhci5naXRodWIuaW8vVG8tRG8tTGlzdC90b2RheS5zdmcpO1xcbn1cXG5cXG4ud2Vlay1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbG92cm96YWdhci5naXRodWIuaW8vVG8tRG8tTGlzdC90aGlzV2Vlay5zdmcpO1xcbn1cXG5cXG4uY29tcGxldGUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2xvdnJvemFnYXIuZ2l0aHViLmlvL1RvLURvLUxpc3QvY29tcGxldGVkLnN2Zyk7XFxufVxcblxcbi50YXNrID4gcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG4jcHJvai1pbnB1dCxcXG4jdGFzay1uYW1lLFxcbiN0YXNrLWRhdGUsXFxuI3Rhc2stZGVzY3JpcHRpb24sXFxuI3Rhc2stcHJpb3JpdHkge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNhMWExYWE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2xlYXItcHJvai1idG4sXFxuLmFkZC1wcm9qLWJ0bixcXG4uYWRkLXRhc2stYnRuLFxcbi5jbGVhci1pdGVtLFxcbi5hZGQtaXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXG59XFxuXFxuLmNsZWFyLWJ0bjpob3ZlcixcXG4uYWRkLXByb2otYnRuOmhvdmVyLFxcbi5hZGQtdGFzay1idG46aG92ZXIsXFxuLmNsZWFyLWl0ZW06aG92ZXIsXFxuLmFkZC1pdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkxYjFiO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSB7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3Rhc2stbmFtZSxcXG4jdGFzay1kYXRlLFxcbiN0YXNrLXByaW9yaXR5LFxcbi5hZGQtaXRlbSB7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbiN0YXNrLW5hbWUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbiN0YXNrLWRhdGUge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG8taXRlbXMge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLE9BQU87SUFDUCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0lBR0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTs7OztJQUlJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0ksd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0ksMkVBQTJFO0FBQy9FOztBQUVBO0lBQ0ksNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTs7Ozs7SUFLSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxRQUFRO0FBQ1o7O0FBRUE7Ozs7O0lBS0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTs7Ozs7SUFLSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztJQUNQLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7OztJQUlJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1saXN0LFxcbi5wcm9qZWN0LWNvbnRhaW5lcixcXG4ucHJvamVjdC1saXN0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5ib3gtaWNvbixcXG4udG9kYXktaWNvbixcXG4ud2Vlay1pY29uLFxcbi5jb21wbGV0ZS1pY29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmluYm94LWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9sb3Zyb3phZ2FyLmdpdGh1Yi5pby9Uby1Eby1MaXN0L2luYm94LnN2Zyk7XFxufVxcblxcbi50b2RheS1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbG92cm96YWdhci5naXRodWIuaW8vVG8tRG8tTGlzdC90b2RheS5zdmcpO1xcbn1cXG5cXG4ud2Vlay1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbG92cm96YWdhci5naXRodWIuaW8vVG8tRG8tTGlzdC90aGlzV2Vlay5zdmcpO1xcbn1cXG5cXG4uY29tcGxldGUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2xvdnJvemFnYXIuZ2l0aHViLmlvL1RvLURvLUxpc3QvY29tcGxldGVkLnN2Zyk7XFxufVxcblxcbi50YXNrID4gcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG4jcHJvai1pbnB1dCxcXG4jdGFzay1uYW1lLFxcbiN0YXNrLWRhdGUsXFxuI3Rhc2stZGVzY3JpcHRpb24sXFxuI3Rhc2stcHJpb3JpdHkge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNhMWExYWE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2xlYXItcHJvai1idG4sXFxuLmFkZC1wcm9qLWJ0bixcXG4uYWRkLXRhc2stYnRuLFxcbi5jbGVhci1pdGVtLFxcbi5hZGQtaXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXG59XFxuXFxuLmNsZWFyLWJ0bjpob3ZlcixcXG4uYWRkLXByb2otYnRuOmhvdmVyLFxcbi5hZGQtdGFzay1idG46aG92ZXIsXFxuLmNsZWFyLWl0ZW06aG92ZXIsXFxuLmFkZC1pdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkxYjFiO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSB7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3Rhc2stbmFtZSxcXG4jdGFzay1kYXRlLFxcbiN0YXNrLXByaW9yaXR5LFxcbi5hZGQtaXRlbSB7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbiN0YXNrLW5hbWUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbiN0YXNrLWRhdGUge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG8taXRlbXMge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgbGV0IHByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIGxldCBsaXN0ID0gW107XG5cbiAgICBsZXQgYWRkVG9MaXN0ID0gZnVuY3Rpb24oLi4udG9Ebykge1xuICAgICAgICBmb3IgKGxldCBhcmcgb2YgdG9Ebykge1xuICAgICAgICAgICAgbGlzdC5wdXNoKGFyZyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgbmFtZSwgYWRkVG9MaXN0LCBsaXN0IH07XG59OyIsImV4cG9ydCBsZXQgdG9EbyA9IChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4geyBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcbn07IiwiaW1wb3J0IHsgdG9EbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcblxuZXhwb3J0IGxldCB3ZWJzaXRlSW50ZXJmYWNlID0gKCkgPT4ge1xuXG4gICAgbGV0IHByb2plY3RMaXN0ID0gW107XG5cbiAgICBsZXQgdXBkYXRlUHJvamVjdHMgPSAocHJvamVjdExpc3RzKSA9PiB7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdExpc3RzKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgIH07XG5cbiAgICBsZXQgY2xlYXJDb250ZW50U2NyZWVuID0gKCkgPT4ge1xuICAgICAgICBsZXQgdG9kb0xpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgICAgICB0b2RvTGlzdEVsZW0ucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfTtcblxuICAgIGxldCBhZGRUb0NvbnRlbnRTY3JlZW4gPSAodG9kb0l0ZW0pID0+IHtcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbXMnKTtcbiAgICAgICAgbmV3SXRlbS50ZXh0Q29udGVudCA9IGAke3RvZG9JdGVtLm5hbWV9IDogJHt0b2RvSXRlbS5kZXNjcmlwdGlvbn0gOiAke3RvZG9JdGVtLmR1ZURhdGV9IDogJHt0b2RvSXRlbS5wcmlvcml0eX1gO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRvZG9MaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICAgICAgdG9kb0xpc3RFbGVtLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xuICAgIH07XG5cbiAgICBsZXQgdXBkYXRlQ29udGVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby10aXRsZScpO1xuICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGNsZWFyQ29udGVudFNjcmVlbigpO1xuICAgICAgICBwcm9qZWN0Lmxpc3QuZm9yRWFjaCh0b2RvSXRlbSA9PiB7XG4gICAgICAgICAgICBhZGRUb0NvbnRlbnRTY3JlZW4odG9kb0l0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGxldCBpbml0SW5ib3ggPSAoKSA9PiB7XG4gICAgICAgIGxldCBpbmJveEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5ib3gnKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5ib3hFbGVtKTtcblxuICAgICAgICBpbmJveEVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0TGlzdC5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSAnSW5ib3gnKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbnRlbnQocHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBpbml0VG9kYXkgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0b2RheUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVG9kYXknKTtcbiAgICAgICAgY29uc29sZS5sb2codG9kYXlFbGVtKTtcblxuICAgICAgICB0b2RheUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kYXlFbGVtKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBpbml0V2VlayA9ICgpID0+IHtcbiAgICAgICAgbGV0IHdlZWtFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1dlZWsnKTtcbiAgICAgICAgY29uc29sZS5sb2cod2Vla0VsZW0pO1xuXG4gICAgICAgIHdlZWtFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdlZWtFbGVtKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBpbml0Q29tcGxldGVkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29tcGxldGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbXBsZXRlZCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb21wbGV0ZUVsZW0pO1xuXG4gICAgICAgIGNvbXBsZXRlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wbGV0ZUVsZW0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgbGV0IGluaXRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2otYnRuJyk7XG4gICAgICAgIGFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjcmVhdGVOZXdQcm9qKCk7XG4gICAgICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgICAgICAgICBpbml0UHJvakxpc3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNsZWFyUHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1wcm9qLWJ0bicpO1xuICAgICAgICBjbGVhclByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsZXQgY3JlYXRlTmV3UHJvaiA9ICgpID0+IHtcbiAgICAgICAgbGV0IG5ld1Byb2pOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2otaW5wdXQnKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3UHJvak5hbWUudmFsdWUpO1xuXG4gICAgICAgIGxldCBuZXdQcm9qRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld1Byb2pFbGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgbmV3UHJvakVsZW0uaW5uZXJIVE1MID0gbmV3UHJvak5hbWUudmFsdWU7XG5cbiAgICAgICAgbGV0IHByb2pMaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTtcbiAgICAgICAgcHJvakxpc3RFbGVtLmFwcGVuZENoaWxkKG5ld1Byb2pFbGVtKTtcblxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QobmV3UHJvak5hbWUudmFsdWUpKTtcbiAgICB9O1xuXG4gICAgbGV0IGNsZWFySW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qSW5wdXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2otaW5wdXQnKTtcbiAgICAgICAgcHJvaklucHV0RWxlbS52YWx1ZSA9IFwiXCI7XG4gICAgfTtcblxuICAgIGxldCBjbGVhckZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGxldCB0YXNrTmFtZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1uYW1lJyk7XG4gICAgICAgIGxldCB0YXNrRGF0ZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJyk7XG4gICAgICAgIGxldCB0YXNrRGVzY3JpcHRpb25FbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzY3JpcHRpb24nKTtcblxuICAgICAgICB0YXNrTmFtZUVsZW0udmFsdWUgPSBcIlwiO1xuICAgICAgICB0YXNrRGF0ZUVsZW0udmFsdWUgPSBcIlwiO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb25FbGVtLnZhbHVlID0gXCJcIjtcbiAgICB9XG5cbiAgICBsZXQgaW5pdFByb2pMaXN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvakxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcblxuXG4gICAgICAgIHByb2pMaXN0RWxlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2ogPSBwcm9qZWN0TGlzdC5maW5kKGVsZW0gPT4gZWxlbS5uYW1lID09PSBlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ29udGVudChwcm9qKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgbGV0IGluaXRBZGRUYXNrQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWRkVGFza0J0bkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG5FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJyk7XG4gICAgICAgICAgICBpZih0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09IFwiZ3JpZFwiKSB7XG4gICAgICAgICAgICAgICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGNsZWFyRm9ybSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsZXQgaW5pdFRhc2tGb3JtID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWRkSXRlbUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0nKTtcbiAgICAgICAgYWRkSXRlbUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1uYW1lJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wcmlvcml0eScpLnZhbHVlO1xuXG4gICAgICAgICAgICBsZXQgY3VyclByb2pOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgbGV0IHByb2ogPSBwcm9qZWN0TGlzdC5maW5kKGVsZW0gPT4gZWxlbS5uYW1lID09PSBjdXJyUHJvak5hbWUpO1xuICAgICAgICAgICAgcHJvai5hZGRUb0xpc3QodG9Ebyh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5KSk7XG4gICAgICAgICAgICB1cGRhdGVDb250ZW50KHByb2opO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgbGV0IGluaXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICAvLyBpbml0YWxpemUgYWRkIHRhc2sgYnV0dG9uXG4gICAgICAgIGluaXRBZGRUYXNrQnV0dG9uKCk7XG4gICAgICAgIGluaXRUYXNrRm9ybSgpO1xuICAgICAgICB1cGRhdGVDb250ZW50KHByb2plY3RMaXN0WzBdKTtcbiAgICB9XG5cbiAgICBsZXQgaW5pdFNpZGViYXIgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0b3Agc2lkZSBiYXIgYnV0dG9uc1xuICAgICAgICBpbml0SW5ib3goKTtcbiAgICAgICAgaW5pdFRvZGF5KCk7XG4gICAgICAgIGluaXRXZWVrKCk7XG4gICAgICAgIGluaXRDb21wbGV0ZWQoKTtcblxuICAgICAgICAvLyBpbml0YWxpemUgcHJvamVjdCBmb3JtIGZvciBhZGRpbmcgbmV3IHByb2plY3RzXG4gICAgICAgIGluaXRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICBpbml0UHJvakxpc3QoKTtcbiAgICB9O1xuXG4gICAgbGV0IGluaXRXZWJzaXRlID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGVmYXVsdFByb2ogPSBwcm9qZWN0KCdJbmJveCcpO1xuICAgICAgICBkZWZhdWx0UHJvai5hZGRUb0xpc3QodG9EbygnZ2V0IG1pbGsnLCdnbyB0byB0aGUgZ3JvY2VyeSBzdG9yZScsJzAzLzE1LzIwMjInLCdoaWdoJykpO1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKGRlZmF1bHRQcm9qKTtcbiAgICAgICAgaW5pdFNpZGViYXIoKTtcbiAgICAgICAgaW5pdENvbnRlbnQoKTtcbiAgICB9O1xuXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIHtwcm9qZWN0TGlzdCwgdXBkYXRlUHJvamVjdHMsIGluaXRXZWJzaXRlLCBpbml0U2lkZWJhcn07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IHdlYnNpdGVJbnRlcmZhY2UgfSBmcm9tICcuL3dlYnNpdGVJbnRlcmZhY2UnO1xuXG5sZXQgd2Vic2l0ZWludGYgPSB3ZWJzaXRlSW50ZXJmYWNlKCk7XG53ZWJzaXRlaW50Zi5pbml0V2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9