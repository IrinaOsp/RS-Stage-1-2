/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/flag.svg */ "./src/assets/flag.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: #000;
}
.header {
  margin: 10px 0 20px;
}
button {
  text-transform: uppercase;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
.button_header {
  margin-left: 10px;
  padding: 2px 4px;
  background-color: #9dba1d;
  border-bottom: 4px solid #617211;
}
.main {
  margin-top: 10px;
  padding: 10px;
}
.button-garage {
  padding: 1px 13px;
  background-color: rgb(196, 226, 241);
  border-bottom: 3px solid rgb(145, 191, 213);
  font-size: 0.7em;
  grid-column: span 1;
}
.button-garage:disabled {
  cursor: not-allowed;
}
.control-block {
  max-width: 400px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 100px 3fr 1fr;
  grid-template-rows: auto;
  row-gap: 10px;
  column-gap: 5px;
  align-content: center;
  justify-content: center;
}
.input-name {
  grid-column-start: 1;
  grid-column-end: 3;
}
.control-block button:last-child {
  grid-column-start: 3;
  grid-column-end: 5;
}
.input-color {
  height: 1.5em;
  border: none;
  padding: 0;
}
.button-yellow {
  justify-self: center;
  width: 100px;
  background-color: #d5f3a0;
  border-color: #9eb575;
}
.wrapper {
  margin-bottom: 25px;
}
.garage-heading {
  margin-bottom: 10px;
  color: #fff;
}
.page-heading {
  margin-bottom: 10px;
  color: #fff;
}
.car-container {
  border-bottom: 2px #fff dashed;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.car_subcontainer {
  display: flex;
  justify-content: start;
  width: 100%;
}
.car-name {
  margin-left: 10px;
  color: orange;
  font-weight: 600;
}
.button-move {
  margin: 10px 3px 5px;
  padding: 1px 4px;
  height: 22px;
  background-color: black;
  border: 1px solid;
  border-radius: 5px;
  font-size: 0.8em;
}
.car-container button.move {
  border-color: #d5f3a0;
  color: #d5f3a0;
}
.car-container button.stop {
  border-color: #d06b49;
  color: #d06b49;
}
.car-container button.move:hover, .car-container button.stop:hover {
  border-color: rgb(196, 226, 241);
  color: rgb(196, 226, 241);
}
.car-container button.move:disabled,
.car-container button.stop:disabled,
.car-container button.move:disabled:hover
.car-container button.stop:disabled:hover {
  border-color: gray;
  color: gray;
  cursor: not-allowed;
}
.car {
  width: 75px;
  height: 50px;
  margin: 3px 10px 0 20px;
  transform: scale(-1, 1);
  filter: drop-shadow(0px -1px 4px rgb(255, 255, 255));
  position: relative;
  left: 0;
}
.flag {
  width: 60px;
  height: 50px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat bottom/65%;
  position: absolute;
  right: 70px;
  top: 15px
}
.winners_table {
  color: #fff;
  border: 1px solid gray;
  text-align: center;
}
.winners_thead {
  background-color: rgb(61, 95, 245);
}
.winners_thead th {
  padding: 0 10px 0;
}
.th_wins, .th_time {
  position: relative;
}
.th_wins::before, .th_wins::after, .th_time::before, .th_time::after {
  content: '';
  position: absolute;
  right: 0;
  border: 4px solid transparent;
  border-bottom: 4px solid gray;
}
.th_wins::after, .th_time::after {
  top: 10px;
  border-top: 4px solid gray;
  border-bottom: none;
}
.ASC::before, .ASC::before {
  border-bottom: 4px solid #fff;
}
.DESC::after, .DESC::after {
  border-top: 4px solid #fff;
}
td.winners_car {
  transform: scale(-0.8, 0.8);
  filter: drop-shadow(0px -1px 4px rgb(255, 255, 255));
}
.prev, .win-prev {
  margin-right: 15px;
}
.popup {
  position: absolute;
  top: 50%;
  left: 40%;
  width: 200px;
  height: 100px;
  padding-top: 35px;
  text-align: center;
  background-color: #d5f3a0;
}
/* info popup styles */
.popup-message {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: none;
}
.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;AACA;EACE,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,gCAAgC;AAClC;AACA;EACE,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,oCAAoC;EACpC,2CAA2C;EAC3C,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,oCAAoC;EACpC,wBAAwB;EACxB,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,uBAAuB;AACzB;AACA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,YAAY;EACZ,UAAU;AACZ;AACA;EACE,oBAAoB;EACpB,YAAY;EACZ,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,8BAA8B;EAC9B,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,gCAAgC;EAChC,yBAAyB;AAC3B;AACA;;;;EAIE,kBAAkB;EAClB,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;EACvB,oDAAoD;EACpD,kBAAkB;EAClB,OAAO;AACT;AACA;EACE,WAAW;EACX,YAAY;EACZ,wEAAyD;EACzD,kBAAkB;EAClB,WAAW;EACX;AACF;AACA;EACE,WAAW;EACX,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,kCAAkC;AACpC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,6BAA6B;EAC7B,6BAA6B;AAC/B;AACA;EACE,SAAS;EACT,0BAA0B;EAC1B,mBAAmB;AACrB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,2BAA2B;EAC3B,oDAAoD;AACtD;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;AAC3B;AACA,sBAAsB;AACtB;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,sBAAsB;EACtB,aAAa;EACb,kBAAkB;EAClB,wCAAwC;EACxC,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,eAAe;EACf,eAAe;AACjB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  background-color: #000;\r\n}\r\n.header {\r\n  margin: 10px 0 20px;\r\n}\r\nbutton {\r\n  text-transform: uppercase;\r\n  border-radius: 6px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n.button_header {\r\n  margin-left: 10px;\r\n  padding: 2px 4px;\r\n  background-color: #9dba1d;\r\n  border-bottom: 4px solid #617211;\r\n}\r\n.main {\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n}\r\n.button-garage {\r\n  padding: 1px 13px;\r\n  background-color: rgb(196, 226, 241);\r\n  border-bottom: 3px solid rgb(145, 191, 213);\r\n  font-size: 0.7em;\r\n  grid-column: span 1;\r\n}\r\n.button-garage:disabled {\r\n  cursor: not-allowed;\r\n}\r\n.control-block {\r\n  max-width: 400px;\r\n  margin-bottom: 30px;\r\n  display: grid;\r\n  grid-template-columns: 100px 3fr 1fr;\r\n  grid-template-rows: auto;\r\n  row-gap: 10px;\r\n  column-gap: 5px;\r\n  align-content: center;\r\n  justify-content: center;\r\n}\r\n.input-name {\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n}\r\n.control-block button:last-child {\r\n  grid-column-start: 3;\r\n  grid-column-end: 5;\r\n}\r\n.input-color {\r\n  height: 1.5em;\r\n  border: none;\r\n  padding: 0;\r\n}\r\n.button-yellow {\r\n  justify-self: center;\r\n  width: 100px;\r\n  background-color: #d5f3a0;\r\n  border-color: #9eb575;\r\n}\r\n.wrapper {\r\n  margin-bottom: 25px;\r\n}\r\n.garage-heading {\r\n  margin-bottom: 10px;\r\n  color: #fff;\r\n}\r\n.page-heading {\r\n  margin-bottom: 10px;\r\n  color: #fff;\r\n}\r\n.car-container {\r\n  border-bottom: 2px #fff dashed;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  position: relative;\r\n}\r\n.car_subcontainer {\r\n  display: flex;\r\n  justify-content: start;\r\n  width: 100%;\r\n}\r\n.car-name {\r\n  margin-left: 10px;\r\n  color: orange;\r\n  font-weight: 600;\r\n}\r\n.button-move {\r\n  margin: 10px 3px 5px;\r\n  padding: 1px 4px;\r\n  height: 22px;\r\n  background-color: black;\r\n  border: 1px solid;\r\n  border-radius: 5px;\r\n  font-size: 0.8em;\r\n}\r\n.car-container button.move {\r\n  border-color: #d5f3a0;\r\n  color: #d5f3a0;\r\n}\r\n.car-container button.stop {\r\n  border-color: #d06b49;\r\n  color: #d06b49;\r\n}\r\n.car-container button.move:hover, .car-container button.stop:hover {\r\n  border-color: rgb(196, 226, 241);\r\n  color: rgb(196, 226, 241);\r\n}\r\n.car-container button.move:disabled,\r\n.car-container button.stop:disabled,\r\n.car-container button.move:disabled:hover\r\n.car-container button.stop:disabled:hover {\r\n  border-color: gray;\r\n  color: gray;\r\n  cursor: not-allowed;\r\n}\r\n.car {\r\n  width: 75px;\r\n  height: 50px;\r\n  margin: 3px 10px 0 20px;\r\n  transform: scale(-1, 1);\r\n  filter: drop-shadow(0px -1px 4px rgb(255, 255, 255));\r\n  position: relative;\r\n  left: 0;\r\n}\r\n.flag {\r\n  width: 60px;\r\n  height: 50px;\r\n  background: url('./assets/flag.svg') no-repeat bottom/65%;\r\n  position: absolute;\r\n  right: 70px;\r\n  top: 15px\r\n}\r\n.winners_table {\r\n  color: #fff;\r\n  border: 1px solid gray;\r\n  text-align: center;\r\n}\r\n.winners_thead {\r\n  background-color: rgb(61, 95, 245);\r\n}\r\n.winners_thead th {\r\n  padding: 0 10px 0;\r\n}\r\n.th_wins, .th_time {\r\n  position: relative;\r\n}\r\n.th_wins::before, .th_wins::after, .th_time::before, .th_time::after {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  border: 4px solid transparent;\r\n  border-bottom: 4px solid gray;\r\n}\r\n.th_wins::after, .th_time::after {\r\n  top: 10px;\r\n  border-top: 4px solid gray;\r\n  border-bottom: none;\r\n}\r\n.ASC::before, .ASC::before {\r\n  border-bottom: 4px solid #fff;\r\n}\r\n.DESC::after, .DESC::after {\r\n  border-top: 4px solid #fff;\r\n}\r\ntd.winners_car {\r\n  transform: scale(-0.8, 0.8);\r\n  filter: drop-shadow(0px -1px 4px rgb(255, 255, 255));\r\n}\r\n.prev, .win-prev {\r\n  margin-right: 15px;\r\n}\r\n.popup {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 40%;\r\n  width: 200px;\r\n  height: 100px;\r\n  padding-top: 35px;\r\n  text-align: center;\r\n  background-color: #d5f3a0;\r\n}\r\n/* info popup styles */\r\n.popup-message {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  background-color: #f0f0f0;\r\n  border: 1px solid #ccc;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\r\n  display: none;\r\n}\r\n.close-btn {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateWinner = exports.deleteWinner = exports.createWinner = exports.getWinner = exports.getWinners = exports.driveMode = exports.startStopEngine = exports.deleteCar = exports.updateCar = exports.createCar = exports.getCar = exports.getCars = void 0;
const race_1 = __webpack_require__(/*! ./race */ "./src/race.ts");
const popup_message_1 = __webpack_require__(/*! ./util/popup_message */ "./src/util/popup_message.ts");
const baseUrl = 'http://127.0.0.1:3000/';
const path = {
    garage: 'garage',
    winners: 'winners',
    engine: 'engine',
};
const generateQueryString = (queryParams = []) => queryParams.length ? `?${queryParams.map((x) => `${x.key}=${x.value}`).join('&')}` : '';
const getCars = (queryParams) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${baseUrl}${path.garage}${generateQueryString(queryParams)}`);
    const carsNumber = Number(response.headers.get('X-Total-Count'));
    // console.log(carsNumber);
    const cars = yield response.json();
    // console.log({ cars, carsNumber });
    return { cars, carsNumber };
});
exports.getCars = getCars;
const getCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${baseUrl}${path.garage}/${id}`);
    const car = yield response.json();
    return car;
});
exports.getCar = getCar;
const createCar = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${baseUrl}${path.garage}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const car = yield response.json();
    return car;
});
exports.createCar = createCar;
const updateCar = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${baseUrl}${path.garage}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const car = yield response.json();
    return car;
});
exports.updateCar = updateCar;
const deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${baseUrl}${path.garage}/${id}`, {
        method: 'DELETE',
    })
        .then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error(res.statusText);
    })
        .catch((e) => e.message);
    // console.log(response);
    return response;
});
exports.deleteCar = deleteCar;
const startStopEngine = (queryParams) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${baseUrl}${path.engine}${generateQueryString(queryParams)}`, {
        method: 'PATCH',
    });
    const startParams = yield response.json();
    // console.log(startParams);
    return startParams.distance / startParams.velocity;
});
exports.startStopEngine = startStopEngine;
const driveMode = (queryParams) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fetch(`${baseUrl}${path.engine}${generateQueryString(queryParams)}`, {
        method: 'PATCH',
        signal: race_1.abortController.signal,
    }).then((res) => {
        if (res.status === 500) {
            throw new Error('Error 500');
        }
        else if (res.status === 400 || res.status === 404 || res.status === 429) {
            (0, popup_message_1.popupMessage)('Error 4xx');
        }
        else if (!res.ok) {
            (0, popup_message_1.popupMessage)('fetch error');
        }
        return res.json();
    });
    // .catch(() => null);
    return result;
});
exports.driveMode = driveMode;
const getWinners = (queryParams) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${baseUrl}${path.winners}${generateQueryString(queryParams)}`);
    const winnersNumber = Number(response.headers.get('X-Total-Count'));
    // console.log(winnersNumber);
    const winners = yield response.json();
    // console.log({ winners, winnersNumber });
    return { winners, winnersNumber };
});
exports.getWinners = getWinners;
const getWinner = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fetch(`${baseUrl}${path.winners}/${id}`)
        .then((res) => {
        if (res.status === 404) {
            throw new Error('Winner not found');
        }
        else if (!res.ok) {
            throw new Error('getWinner fetch error');
        }
        return res.json();
    })
        .catch((e) => e.message);
    return result;
});
exports.getWinner = getWinner;
const createWinner = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fetch(`${baseUrl}${path.winners}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((res) => {
        if (res.status === 500) {
            throw new Error('Error 500');
        }
        else if (!res.ok) {
            throw new Error('createWinner fetch error');
        }
        return res.json();
    })
        .catch((e) => e.message);
    return result;
});
exports.createWinner = createWinner;
const deleteWinner = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fetch(`${baseUrl}${path.winners}/${id}`, {
        method: 'DELETE',
    })
        .then((res) => {
        if (res.status === 404) {
            throw new Error('Error 404 Not found');
        }
        else if (!res.ok) {
            throw new Error('deleteWinner error');
        }
        return res.json();
    })
        .catch((e) => e.message);
    return result;
});
exports.deleteWinner = deleteWinner;
const updateWinner = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fetch(`${baseUrl}${path.winners}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((res) => {
        if (res.status === 404) {
            throw new Error('Error 404 Not found');
        }
        else if (!res.ok) {
            throw new Error('updateWinner error');
        }
        return res.json();
    })
        .catch((e) => e.message);
    return result;
});
exports.updateWinner = updateWinner;


/***/ }),

/***/ "./src/car_generation/car_generator.ts":
/*!*********************************************!*\
  !*** ./src/car_generation/car_generator.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateCars = void 0;
const app_data_1 = __webpack_require__(/*! ../data/app_data */ "./src/data/app_data.ts");
const api_1 = __webpack_require__(/*! ../api */ "./src/api.ts");
const view_main_1 = __webpack_require__(/*! ../view/view_main */ "./src/view/view_main.ts");
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function generateName() {
    const n = Object.keys(app_data_1.CAR_MODELS).length - 1;
    const randomBrand = Object.keys(app_data_1.CAR_MODELS)[getRandomInt(n)];
    const modelsArr = app_data_1.CAR_MODELS[randomBrand];
    const randomModel = app_data_1.CAR_MODELS[randomBrand][getRandomInt(modelsArr.length - 1)];
    return `${randomBrand} ${randomModel}`;
}
const generateCars = () => {
    for (let i = 1; i <= 100; i += 1) {
        const NAME = generateName();
        const COLOR = getRandomHexColor();
        (0, api_1.createCar)({ name: NAME, color: COLOR }).catch((e) => e.message);
    }
    (0, view_main_1.updateHeadings)();
};
exports.generateCars = generateCars;


/***/ }),

/***/ "./src/data/app_data.ts":
/*!******************************!*\
  !*** ./src/data/app_data.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CAR_MODELS = exports.WINNERS_PER_PAGE = exports.CARS_PER_PAGE = void 0;
exports.CARS_PER_PAGE = 7;
exports.WINNERS_PER_PAGE = 10;
exports.CAR_MODELS = {
    Toyota: ['Camry', 'Corolla', 'Prius', 'RAV4', 'Highlander', 'Tacoma', 'Sienna', '4Runner', 'Land Cruiser', 'Supra'],
    Honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'HR-V', 'Fit', 'Ridgeline', 'Passport', 'Insight'],
    Ford: ['Mustang', 'F-150', 'Explorer', 'Escape', 'Fusion', 'Edge', 'Focus', 'Ranger', 'Expedition', 'Bronco'],
    Chevrolet: [
        'Silverado',
        'Equinox',
        'Tahoe',
        'Malibu',
        'Traverse',
        'Camaro',
        'Suburban',
        'Impala',
        'Corvette',
        'Blazer',
    ],
    Volkswagen: ['Golf', 'Jetta', 'Passat', 'Tiguan', 'Atlas', 'Beetle', 'Touareg', 'Arteon', 'ID.4'],
    BMW: ['3 Series', '5 Series', 'X3', 'X5', '7 Series', 'X1', 'X7', '2 Series', '4 Series', 'X6'],
    Mercedes: ['C-Class', 'E-Class', 'S-Class', 'GLE', 'GLC', 'GLB', 'A-Class', 'CLA', 'GLA', 'G-Class'],
    Audi: ['A4', 'A6', 'Q5', 'Q7', 'A3', 'Q3', 'A5', 'Q8', 'A7', 'RS6'],
    Nissan: ['Altima', 'Rogue', 'Sentra', 'Murano', 'Pathfinder', 'Maxima', 'Versa', 'Frontier', 'Titan', 'Armada'],
    Hyundai: ['Sonata', 'Elantra', 'Tucson', 'Santa Fe', 'Kona', 'Palisade', 'Venue', 'Accent', 'Veloster', 'Ioniq'],
    Kia: ['Optima', 'Sorento', 'Sportage', 'Soul', 'Telluride', 'Forte', 'Sedona', 'Rio', 'Stinger', 'Niro'],
    Tesla: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck', 'Roadster'],
    Subaru: ['Outback', 'Forester', 'Impreza', 'Crosstrek', 'Legacy', 'Ascent', 'WRX', 'BRZ'],
    Lexus: ['ES', 'RX', 'NX', 'IS', 'UX', 'GX', 'LS', 'LX', 'RC', 'LC'],
    Porsche: ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan', 'Boxster', 'Cayman'],
    Ferrari: ['488', 'F8 Tributo', 'Portofino', 'Roma', 'SF90 Stradale', 'GTC4Lusso'],
    Lamborghini: ['Aventador', 'Huracán', 'Urus'],
    Jaguar: ['F-PACE', 'XE', 'XF', 'E-PACE', 'F-TYPE', 'I-PACE'],
    Volvo: ['XC90', 'XC60', 'XC40', 'S60', 'S90', 'V60', 'V90'],
    Maserati: ['Ghibli', 'Levante', 'Quattroporte'],
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCarsData = void 0;
__webpack_require__(/*! ./main.css */ "./src/main.css");
const view_garage_1 = __webpack_require__(/*! ./view/view_garage */ "./src/view/view_garage.ts");
const view_header_1 = __importDefault(__webpack_require__(/*! ./view/view_header */ "./src/view/view_header.ts"));
const view_main_1 = __webpack_require__(/*! ./view/view_main */ "./src/view/view_main.ts");
const api_1 = __webpack_require__(/*! ./api */ "./src/api.ts");
const app_data_1 = __webpack_require__(/*! ./data/app_data */ "./src/data/app_data.ts");
const popup_message_1 = __webpack_require__(/*! ./util/popup_message */ "./src/util/popup_message.ts");
localStorage.removeItem('garage pages');
localStorage.removeItem('winners pages');
(0, view_header_1.default)();
(0, view_garage_1.drawGarageInputs)();
const getCarsData = (page = 1, limit = app_data_1.CARS_PER_PAGE) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, api_1.getCars)([
        { key: '_page', value: page },
        { key: '_limit', value: limit },
    ])
        .then((res) => {
        const pages = Math.ceil(res.carsNumber / limit);
        (0, view_main_1.drawMain)(res.carsNumber, page, pages);
        res.cars.forEach((car) => (0, view_garage_1.drawGarageCars)(car.name, car.color, car.id ? car.id : 0));
        return res;
    })
        .catch((error) => (0, popup_message_1.popupMessage)(error.message.toString()));
});
exports.getCarsData = getCarsData;
(0, exports.getCarsData)();


/***/ }),

/***/ "./src/race.ts":
/*!*********************!*\
  !*** ./src/race.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetCars = exports.startRace = exports.stopDrive = exports.startDrive = exports.abortController = void 0;
const api_1 = __webpack_require__(/*! ./api */ "./src/api.ts");
const types_1 = __webpack_require__(/*! ./types/types */ "./src/types/types.ts");
const view_elements_1 = __webpack_require__(/*! ./view/view_elements */ "./src/view/view_elements.ts");
const view_main_1 = __webpack_require__(/*! ./view/view_main */ "./src/view/view_main.ts");
exports.abortController = new AbortController();
let ANIMATION_ID;
let count = 1;
// const promisesArr: Promise<void | null | (Response | string | number)[]>[] = []; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function getResult(id, time) {
    console.log(id, time);
    let WINNER_NAME = '';
    const NODE_NAME = document.querySelector(`.car-container#a${id} .car-name`);
    if (NODE_NAME && NODE_NAME.textContent)
        WINNER_NAME = NODE_NAME.textContent;
    const ID = Number(id);
    const WINNER_TIME = Math.round(time / 10) / 100;
    let POPUP;
    setTimeout(() => {
        POPUP = (0, view_elements_1.createElem)(view_main_1.MAIN, types_1.HTMLTags.div, 'popup', `Winner ${WINNER_NAME}, time ${WINNER_TIME} s`);
    }, WINNER_TIME);
    setTimeout(() => {
        POPUP.remove();
    }, 3000);
    (0, api_1.getWinner)(ID).then((res) => {
        if (res === 'Winner not found') {
            (0, api_1.createWinner)({ id: ID, wins: 1, time: WINNER_TIME });
        }
        else if (typeof res !== 'string') {
            let newTime;
            const newWins = res.wins + 1;
            if (res.time > WINNER_TIME) {
                newTime = WINNER_TIME;
            }
            else {
                newTime = res.time;
            }
            (0, api_1.updateWinner)(ID, { wins: newWins, time: newTime });
        }
    });
}
function animationControl(el, time, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const initialPosition = el.getClientRects()[0].x;
        const startTime = performance.now();
        let DISTANCE;
        const CONTAINER = document.querySelector('.car-container');
        if (CONTAINER instanceof HTMLElement && initialPosition) {
            DISTANCE = CONTAINER.getClientRects()[0].width - el.clientWidth - initialPosition;
        }
        function animate(currentTime) {
            console.log('animate');
            const timeDelta = currentTime - startTime;
            const progress = timeDelta / time;
            const ELEMENT = el;
            if (progress < 1 && DISTANCE) {
                const newPosition = DISTANCE * progress;
                ELEMENT.style.left = `${newPosition}px`;
                ANIMATION_ID = requestAnimationFrame(animate);
            }
            else {
                ELEMENT.style.left = `${DISTANCE}px`;
            }
        }
        ANIMATION_ID = requestAnimationFrame(animate);
        (0, api_1.driveMode)([
            { key: 'id', value: id },
            { key: 'status', value: 'drive' },
        ])
            .then((res) => {
            console.log(res);
            if (res && count === 0) {
                getResult(id, time);
                count += 1;
            }
        })
            .catch(() => {
            cancelAnimationFrame(ANIMATION_ID);
        });
        // console.log('----', promisesArr.length);
        // if (promisesArr.length === document.querySelectorAll('.car').length) getResult();
    });
}
const startDrive = (target) => __awaiter(void 0, void 0, void 0, function* () {
    let id = '0';
    let container;
    const BTN_MOVE = target;
    if (BTN_MOVE instanceof HTMLButtonElement) {
        BTN_MOVE.disabled = true;
        container = BTN_MOVE.closest('.car-container');
        if (container) {
            id = container.id.slice(1);
            const TIME = yield (0, api_1.startStopEngine)([
                { key: 'id', value: id },
                { key: 'status', value: 'started' },
            ]);
            const BUTTON_STOP = BTN_MOVE.nextElementSibling;
            if (BUTTON_STOP instanceof HTMLButtonElement)
                BUTTON_STOP.disabled = false;
            const CAR = container === null || container === void 0 ? void 0 : container.childNodes[container.childNodes.length - 2];
            if (CAR instanceof HTMLElement)
                animationControl(CAR, TIME, id);
        }
    }
});
exports.startDrive = startDrive;
const stopDrive = (target) => __awaiter(void 0, void 0, void 0, function* () {
    let id = '0';
    const TARGET = target;
    let container;
    if (TARGET instanceof HTMLButtonElement) {
        TARGET.disabled = true;
        const BTN_MOVE = TARGET.previousSibling;
        if (BTN_MOVE instanceof HTMLButtonElement)
            BTN_MOVE.disabled = false;
        container = TARGET.closest('.car-container');
        if (container) {
            if (container.id)
                id = container.id.slice(1);
            const CAR = container === null || container === void 0 ? void 0 : container.childNodes[container.childNodes.length - 2];
            cancelAnimationFrame(ANIMATION_ID);
            if (CAR instanceof HTMLElement)
                CAR.style.left = '0';
            exports.abortController.abort();
            yield (0, api_1.startStopEngine)([
                { key: 'id', value: id },
                { key: 'status', value: 'stopped' },
            ]);
            exports.abortController = new AbortController();
        }
    }
});
exports.stopDrive = stopDrive;
const startRace = (target) => {
    console.log('start race');
    const TARGET = target;
    const BUTTON_RESET = document.querySelector('.reset');
    if (TARGET instanceof HTMLButtonElement)
        TARGET.disabled = true;
    if (BUTTON_RESET instanceof HTMLButtonElement)
        BUTTON_RESET.disabled = false;
    count = 0;
    document.querySelectorAll('.move').forEach((btn) => {
        if (btn instanceof HTMLButtonElement)
            btn.click();
    });
};
exports.startRace = startRace;
// function getResult() {
//   console.log(promisesArr);
//   Promise.race(promisesArr.filter(Boolean)).then((res) => {
//     console.log(res);
//     if (Array.isArray(res)) {
//       let WINNER_NAME = '';
//       const NODE_NAME = document.querySelector(`.car-container#a${res[1]} .car-name`)
//       if (NODE_NAME && NODE_NAME.textContent) WINNER_NAME = NODE_NAME.textContent;
//       const ID = Number(res[1]);
//       console.log(WINNER_NAME);
//       console.log(res[2]);
//       const WINNER_TIME = Math.round(res[2] as number / 10) / 100;
//       let POPUP: HTMLElement;
//       setTimeout(() => {
//         POPUP = createElem(MAIN, HTMLTags.div, 'popup', `Winner ${WINNER_NAME}, time ${WINNER_TIME} s`);
//       }, WINNER_TIME);
//       setTimeout(() => {
//         POPUP.remove();
//       }, 3000);
//       promisesArr.length = 0;
//       getWinner(ID).then((res) => {
//         if (res === 'Winner not found') {
//           createWinner({id: ID, wins: 1, time: WINNER_TIME});
//         } else if (typeof res !== 'string') {
//           let newTime: number;
//           const newWins = res.wins + 1;
//           res.time > WINNER_TIME ? newTime = WINNER_TIME : newTime = res.time;
//           updateWinner(ID, {wins: newWins, time: newTime})
//         }
//     });
//     }
//   });
// }
const resetCars = (target) => {
    console.log('stop race');
    const TARGET = target;
    const BUTTON_RACE = document.querySelector('.race');
    if (TARGET instanceof HTMLButtonElement)
        TARGET.disabled = true;
    if (BUTTON_RACE instanceof HTMLButtonElement)
        BUTTON_RACE.disabled = false;
    document.querySelectorAll('.stop').forEach((btn) => {
        const BUTTON = btn;
        if (BUTTON instanceof HTMLButtonElement) {
            BUTTON.disabled = false;
            BUTTON.click();
            BUTTON.disabled = true;
        }
    });
};
exports.resetCars = resetCars;


/***/ }),

/***/ "./src/types/types.ts":
/*!****************************!*\
  !*** ./src/types/types.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HTMLTags = void 0;
var HTMLTags;
(function (HTMLTags) {
    HTMLTags["div"] = "div";
    HTMLTags["span"] = "span";
    HTMLTags["input"] = "input";
    HTMLTags["button"] = "button";
    HTMLTags["table"] = "table";
    HTMLTags["thead"] = "thead";
    HTMLTags["tr"] = "tr";
    HTMLTags["th"] = "th";
    HTMLTags["tbody"] = "tbody";
    HTMLTags["td"] = "td";
    HTMLTags["h2"] = "h2";
    HTMLTags["h3"] = "h3";
})(HTMLTags || (exports.HTMLTags = HTMLTags = {}));


/***/ }),

/***/ "./src/util/popup_message.ts":
/*!***********************************!*\
  !*** ./src/util/popup_message.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.popupMessage = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const view_elements_1 = __webpack_require__(/*! ../view/view_elements */ "./src/view/view_elements.ts");
function hidePopup(popup) {
    const POP = popup;
    POP.style.display = 'none';
}
function showPopup(popup, popupText, text) {
    const POP = popup;
    POP.style.display = 'block';
    const POP_TEXT = popupText;
    POP_TEXT.textContent = text;
    setTimeout(() => hidePopup(popup), 2000);
}
const popupMessage = (text) => {
    if (!document.querySelector('popup-message')) {
        const POPUP = (0, view_elements_1.createElem)(document.body, types_1.HTMLTags.div, 'popup-message');
        const CLOSE_POPUP = (0, view_elements_1.createElem)(POPUP, types_1.HTMLTags.span, 'close-btn', '&times;');
        const POPUP_TEXT = (0, view_elements_1.createElem)(POPUP, types_1.HTMLTags.span, 'popup-message_text');
        CLOSE_POPUP.addEventListener('click', () => hidePopup(POPUP));
        showPopup(POPUP, POPUP_TEXT, text);
    }
    else {
        const POPUP = document.querySelector('.popup-message');
        const POPUP_TEXT = document.querySelector('.popup-message_text');
        if (POPUP instanceof HTMLElement && POPUP_TEXT instanceof HTMLElement)
            showPopup(POPUP, POPUP_TEXT, text);
    }
};
exports.popupMessage = popupMessage;


/***/ }),

/***/ "./src/view/change_view/change_cars.ts":
/*!*********************************************!*\
  !*** ./src/view/change_view/change_cars.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeCar = exports.selectCar = exports.updateCarView = exports.drawAddedCar = void 0;
const view_garage_1 = __webpack_require__(/*! ../view_garage */ "./src/view/view_garage.ts");
const api_1 = __webpack_require__(/*! ../../api */ "./src/api.ts");
const app_data_1 = __webpack_require__(/*! ../../data/app_data */ "./src/data/app_data.ts");
const view_main_1 = __webpack_require__(/*! ../view_main */ "./src/view/view_main.ts");
const popup_message_1 = __webpack_require__(/*! ../../util/popup_message */ "./src/util/popup_message.ts");
const drawAddedCar = () => {
    let name = '';
    let color = '';
    const CREATE_NAME = document.querySelector('.create-name');
    const CREATE_COLOR = document.querySelector('.create-color');
    if (CREATE_NAME instanceof HTMLInputElement)
        name = CREATE_NAME.value;
    if (CREATE_COLOR instanceof HTMLInputElement)
        color = CREATE_COLOR.value;
    if (name && color) {
        (0, api_1.createCar)({ name, color }).then((carID) => {
            if (document.querySelectorAll('.car-container').length < app_data_1.CARS_PER_PAGE)
                (0, view_garage_1.drawGarageCars)(carID.name, carID.color, carID.id ? carID.id : 0);
            (0, view_main_1.updateHeadings)();
        });
    }
};
exports.drawAddedCar = drawAddedCar;
const updateCarView = () => {
    var _a, _b, _c;
    // console.log('updateCar');
    let name = '';
    let color = '';
    let id = 0;
    const CAR = document.querySelector('.selected');
    const CREATE_NAME = document.querySelector('.update-name');
    const CREATE_COLOR = document.querySelector('.update-color');
    if (CREATE_NAME instanceof HTMLInputElement)
        name = CREATE_NAME.value;
    if (CREATE_COLOR instanceof HTMLInputElement)
        color = CREATE_COLOR.value;
    if (name && color && CAR instanceof HTMLDivElement) {
        const carNameSpan = (_a = CAR.closest('.car-container')) === null || _a === void 0 ? void 0 : _a.querySelector('.car-name');
        if (carNameSpan instanceof HTMLSpanElement)
            carNameSpan.textContent = name;
        const svgEl = CAR.firstChild;
        if (svgEl instanceof SVGElement)
            svgEl.style.fill = color;
        id = Number((_c = (_b = CAR.closest('.car-container')) === null || _b === void 0 ? void 0 : _b.getAttribute('id')) === null || _c === void 0 ? void 0 : _c.slice(1));
    }
    (0, api_1.updateCar)(id, { name, color });
};
exports.updateCarView = updateCarView;
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}
function rgbToHex(rgb) {
    const arr = rgb.slice(4, -1).split(', ');
    const res = `#${arr.map((el) => componentToHex(Number(el))).join('')}`;
    // console.log(res)
    return res;
}
const selectCar = (event) => {
    var _a, _b, _c, _d, _e, _f;
    document.querySelectorAll('.selected').forEach((el) => el.classList.remove('selected'));
    if (event.target instanceof HTMLElement) {
        (_b = (_a = event.target.closest('.car-container')) === null || _a === void 0 ? void 0 : _a.querySelector('.car')) === null || _b === void 0 ? void 0 : _b.classList.add('selected');
        const SELECTED_CAR = document.querySelector('.selected');
        if (SELECTED_CAR) {
            // const styles = window.getComputedStyle(SELECTED_CAR);
            const UPDATE_NAME = document.querySelector('.update-name');
            const UPDATE_COLOR = document.querySelector('.update-color');
            if (UPDATE_NAME instanceof HTMLInputElement && UPDATE_COLOR instanceof HTMLInputElement) {
                UPDATE_NAME.value = ((_d = (_c = event.target.closest('.car-container')) === null || _c === void 0 ? void 0 : _c.querySelector('.car-name')) === null || _d === void 0 ? void 0 : _d.textContent) || '';
                const color = (_f = (_e = event.target.closest('.car-container')) === null || _e === void 0 ? void 0 : _e.querySelector('svg')) === null || _f === void 0 ? void 0 : _f.style.fill;
                if (color)
                    UPDATE_COLOR.value = rgbToHex(color);
            }
        }
    }
};
exports.selectCar = selectCar;
const removeCar = (event) => {
    var _a;
    let id = 0;
    if (event.target instanceof HTMLElement) {
        const container = event.target.closest('.car-container');
        if (container === null || container === void 0 ? void 0 : container.hasAttribute('id'))
            id = Number((_a = container.getAttribute('id')) === null || _a === void 0 ? void 0 : _a.slice(1));
        (0, api_1.deleteCar)(id).then((response) => {
            var _a, _b;
            if (response === 'Not Found') {
                (0, popup_message_1.popupMessage)('car is not found');
            }
            else {
                if (container === null || container === void 0 ? void 0 : container.parentNode)
                    container.parentNode.removeChild(container);
                (0, view_main_1.updateHeadings)();
                if (document.querySelectorAll('.car-container').length < app_data_1.CARS_PER_PAGE) {
                    const page = Number((_b = (_a = document.querySelector('.page-count')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.slice(0, 1));
                    (0, api_1.getCars)([
                        { key: '_page', value: page + 1 },
                        { key: '_limit', value: app_data_1.CARS_PER_PAGE },
                    ]).then((res) => {
                        if (res.cars.length > 0) {
                            (0, view_garage_1.drawGarageCars)(res.cars[0].name, res.cars[0].color, res.cars[0].id ? res.cars[0].id : 0);
                        }
                    });
                }
            }
        });
        (0, api_1.deleteWinner)(id);
    }
};
exports.removeCar = removeCar;


/***/ }),

/***/ "./src/view/view_elements.ts":
/*!***********************************!*\
  !*** ./src/view/view_elements.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createElem = void 0;
const createElem = (parent, elem, className, text = '') => {
    const ELEM = document.createElement(`${elem}`);
    ELEM.className = className;
    parent.append(ELEM);
    if (text)
        ELEM.textContent = text;
    return ELEM;
};
exports.createElem = createElem;


/***/ }),

/***/ "./src/view/view_garage.ts":
/*!*********************************!*\
  !*** ./src/view/view_garage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.drawGarageCars = exports.drawGarageInputs = void 0;
const view_main_1 = __webpack_require__(/*! ./view_main */ "./src/view/view_main.ts");
const view_elements_1 = __webpack_require__(/*! ./view_elements */ "./src/view/view_elements.ts");
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const change_cars_1 = __webpack_require__(/*! ./change_view/change_cars */ "./src/view/change_view/change_cars.ts");
const race_1 = __webpack_require__(/*! ../race */ "./src/race.ts");
const car_generator_1 = __webpack_require__(/*! ../car_generation/car_generator */ "./src/car_generation/car_generator.ts");
let UPDATE_NAME;
let UPDATE_COLOR;
const drawGarageInputs = () => {
    const CONTROL_BLOCK = (0, view_elements_1.createElem)(view_main_1.MAIN, types_1.HTMLTags.div, 'control-block');
    (0, view_elements_1.createElem)(CONTROL_BLOCK, types_1.HTMLTags.input, 'input-name create-name');
    const CREATE_COLOR = (0, view_elements_1.createElem)(CONTROL_BLOCK, types_1.HTMLTags.input, 'input-color create-color');
    CREATE_COLOR.setAttribute('type', 'color');
    CREATE_COLOR.setAttribute('value', '#ffffff');
    const BUTTON_CREATE = (0, view_elements_1.createElem)(CONTROL_BLOCK, types_1.HTMLTags.button, 'button-garage', 'create');
    BUTTON_CREATE.addEventListener('click', () => (0, change_cars_1.drawAddedCar)());
    UPDATE_NAME = (0, view_elements_1.createElem)(CONTROL_BLOCK, types_1.HTMLTags.input, 'input-name update-name');
    UPDATE_NAME.setAttribute('type', 'text');
    UPDATE_COLOR = (0, view_elements_1.createElem)(CONTROL_BLOCK, types_1.HTMLTags.input, 'input-color update-color');
    UPDATE_COLOR.setAttribute('type', 'color');
    UPDATE_COLOR.setAttribute('value', '#bcbcbc');
    const BUTTON_UPDATE = (0, view_elements_1.createElem)(CONTROL_BLOCK, types_1.HTMLTags.button, 'button-garage', 'update');
    BUTTON_UPDATE.addEventListener('click', () => (0, change_cars_1.updateCarView)());
    const BUTTON_RACE = (0, view_elements_1.createElem)(CONTROL_BLOCK, types_1.HTMLTags.button, 'button-garage button-yellow race', 'race');
    BUTTON_RACE.addEventListener('click', (event) => (0, race_1.startRace)(event.target));
    const BUTTON_RESET = (0, view_elements_1.createElem)(CONTROL_BLOCK, types_1.HTMLTags.button, 'button-garage button-yellow reset', 'reset');
    BUTTON_RESET.addEventListener('click', (event) => (0, race_1.resetCars)(event.target));
    if (BUTTON_RESET instanceof HTMLButtonElement)
        BUTTON_RESET.disabled = true;
    const BUTTON_GENERATE = (0, view_elements_1.createElem)(CONTROL_BLOCK, types_1.HTMLTags.button, 'button-garage', 'generate cars');
    BUTTON_GENERATE.addEventListener('click', () => (0, car_generator_1.generateCars)());
};
exports.drawGarageInputs = drawGarageInputs;
const drawGarageCars = (name, color, id) => {
    // console.log('drawGarageCars');
    const CAR_CONTAINER = (0, view_elements_1.createElem)(view_main_1.WRAPPER, types_1.HTMLTags.div, 'car-container');
    CAR_CONTAINER.id = `a${id}`;
    const CONTAINER_HEAD = (0, view_elements_1.createElem)(CAR_CONTAINER, types_1.HTMLTags.div, 'car_subcontainer');
    const BUTTON_SELECT = (0, view_elements_1.createElem)(CONTAINER_HEAD, types_1.HTMLTags.button, 'button-garage select-car', 'select');
    BUTTON_SELECT.addEventListener('click', change_cars_1.selectCar);
    const BUTTON_REMOVE = (0, view_elements_1.createElem)(CONTAINER_HEAD, types_1.HTMLTags.button, 'button-garage remove-car', 'remove');
    BUTTON_REMOVE.addEventListener('click', change_cars_1.removeCar);
    (0, view_elements_1.createElem)(CONTAINER_HEAD, types_1.HTMLTags.span, 'car-name', name);
    const BUTTON_START = (0, view_elements_1.createElem)(CAR_CONTAINER, types_1.HTMLTags.button, 'button-move move', 'a');
    const BUTTON_STOP = (0, view_elements_1.createElem)(CAR_CONTAINER, types_1.HTMLTags.button, 'button-move stop', 'b');
    if (BUTTON_STOP instanceof HTMLButtonElement)
        BUTTON_STOP.disabled = true;
    BUTTON_START.addEventListener('click', (event) => (0, race_1.startDrive)(event === null || event === void 0 ? void 0 : event.target));
    BUTTON_STOP.addEventListener('click', (event) => (0, race_1.stopDrive)(event === null || event === void 0 ? void 0 : event.target));
    const CAR = (0, view_elements_1.createElem)(CAR_CONTAINER, types_1.HTMLTags.div, 'car');
    CAR.innerHTML =
        '<svg fill="#000000" width="75px" height="70px" viewBox="0 -39.69 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style="enable-background:new 0 0 122.88 43.49" xml:space="preserve"> <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style> <g> <path class="st0" d="M103.94,23.97c5.39,0,9.76,4.37,9.76,9.76c0,5.39-4.37,9.76-9.76,9.76c-5.39,0-9.76-4.37-9.76-9.76 C94.18,28.34,98.55,23.97,103.94,23.97L103.94,23.97z M23,29.07v3.51h3.51C26.09,30.86,24.73,29.49,23,29.07L23,29.07z M26.52,34.87H23v3.51C24.73,37.97,26.09,36.6,26.52,34.87L26.52,34.87z M20.71,38.39v-3.51H17.2 C17.62,36.6,18.99,37.96,20.71,38.39L20.71,38.39z M17.2,32.59h3.51v-3.51C18.99,29.49,17.62,30.86,17.2,32.59L17.2,32.59z M105.09,29.07v3.51h3.51C108.18,30.86,106.82,29.49,105.09,29.07L105.09,29.07z M108.6,34.87h-3.51v3.51 C106.82,37.97,108.18,36.6,108.6,34.87L108.6,34.87z M102.8,38.39v-3.51h-3.51C99.71,36.6,101.07,37.96,102.8,38.39L102.8,38.39z M99.28,32.59h3.51v-3.51C101.07,29.49,99.71,30.86,99.28,32.59L99.28,32.59z M49.29,12.79c-1.54-0.35-3.07-0.35-4.61-0.28 C56.73,6.18,61.46,2.07,75.57,2.9l-1.94,12.87L50.4,16.65c0.21-0.61,0.33-0.94,0.37-1.55C50.88,13.36,50.86,13.15,49.29,12.79 L49.29,12.79z M79.12,3.13L76.6,15.6l24.13-0.98c2.48-0.1,2.91-1.19,1.41-3.28c-0.68-0.95-1.44-1.89-2.31-2.82 C93.59,1.86,87.38,3.24,79.12,3.13L79.12,3.13z M0.46,27.28H1.2c0.46-2.04,1.37-3.88,2.71-5.53c2.94-3.66,4.28-3.2,8.65-3.99 l24.46-4.61c5.43-3.86,11.98-7.3,19.97-10.2C64.4,0.25,69.63-0.01,77.56,0c4.54,0.01,9.14,0.28,13.81,0.84 c2.37,0.15,4.69,0.47,6.97,0.93c2.73,0.55,5.41,1.31,8.04,2.21l9.8,5.66c2.89,1.67,3.51,3.62,3.88,6.81l1.38,11.78h1.43v6.51 c-0.2,2.19-1.06,2.52-2.88,2.52h-2.37c0.92-20.59-28.05-24.11-27.42,1.63H34.76c3.73-17.75-14.17-23.91-22.96-13.76 c-2.67,3.09-3.6,7.31-3.36,12.3H2.03c-0.51-0.24-0.91-0.57-1.21-0.98c-1.05-1.43-0.82-5.74-0.74-8.23 C0.09,27.55-0.12,27.28,0.46,27.28L0.46,27.28z M21.86,23.97c5.39,0,9.76,4.37,9.76,9.76c0,5.39-4.37,9.76-9.76,9.76 c-5.39,0-9.76-4.37-9.76-9.76C12.1,28.34,16.47,23.97,21.86,23.97L21.86,23.97z"/></g> </svg>';
    const svgEl = CAR.firstChild;
    if (svgEl instanceof SVGElement)
        svgEl.style.fill = color;
    (0, view_elements_1.createElem)(CAR_CONTAINER, types_1.HTMLTags.div, 'flag');
};
exports.drawGarageCars = drawGarageCars;


/***/ }),

/***/ "./src/view/view_header.ts":
/*!*********************************!*\
  !*** ./src/view/view_header.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const view_elements_1 = __webpack_require__(/*! ./view_elements */ "./src/view/view_elements.ts");
const view_winners_1 = __webpack_require__(/*! ./view_winners */ "./src/view/view_winners.ts");
const drawHeader = () => {
    const HEADER = document.createElement('header');
    HEADER.classList.add('header');
    document.body.append(HEADER);
    const BUTTON_GARAGE = (0, view_elements_1.createElem)(HEADER, types_1.HTMLTags.button, 'button_header', 'to garage');
    BUTTON_GARAGE.addEventListener('click', () => (0, view_winners_1.hideWinners)());
    const BUTTON_WINNERS = (0, view_elements_1.createElem)(HEADER, types_1.HTMLTags.button, 'button_header', 'to winners');
    BUTTON_WINNERS.addEventListener('click', () => (0, view_winners_1.drawWinners)());
};
exports["default"] = drawHeader;


/***/ }),

/***/ "./src/view/view_main.ts":
/*!*******************************!*\
  !*** ./src/view/view_main.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateHeadings = exports.drawMain = exports.WRAPPER = exports.MAIN = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const view_elements_1 = __webpack_require__(/*! ./view_elements */ "./src/view/view_elements.ts");
const view_pagination_1 = __webpack_require__(/*! ./view_pagination */ "./src/view/view_pagination.ts");
const api_1 = __webpack_require__(/*! ../api */ "./src/api.ts");
const app_data_1 = __webpack_require__(/*! ../data/app_data */ "./src/data/app_data.ts");
exports.MAIN = document.createElement('main');
exports.WRAPPER = document.createElement('div');
const drawMain = (cars, page, pages) => {
    exports.MAIN.classList.add('main');
    document.body.append(exports.MAIN);
    exports.WRAPPER.className = 'wrapper';
    exports.MAIN.append(exports.WRAPPER);
    // const GARAGE_HEADING =
    (0, view_elements_1.createElem)(exports.WRAPPER, types_1.HTMLTags.h2, 'garage-heading', `Garage (${cars})`);
    const PAGE_HEADING = (0, view_elements_1.createElem)(exports.WRAPPER, types_1.HTMLTags.h3, 'page-heading', 'Page #');
    // const CARS_COUNT = createElem(GARAGE_HEADING, HTMLTags.span, 'cars-count', `(${cars})`);
    // const PAGE_COUNT =
    (0, view_elements_1.createElem)(PAGE_HEADING, types_1.HTMLTags.span, 'page-count', `${page} / ${pages}`);
    const PAGINATION = (0, view_elements_1.createElem)(exports.MAIN, types_1.HTMLTags.div, 'pagination-block');
    const PREV = (0, view_elements_1.createElem)(PAGINATION, types_1.HTMLTags.button, 'button-garage prev', 'prev');
    const NEXT = (0, view_elements_1.createElem)(PAGINATION, types_1.HTMLTags.button, 'button-garage next', 'next');
    const WIN_PREV = (0, view_elements_1.createElem)(PAGINATION, types_1.HTMLTags.button, 'button-garage win-prev', 'prev');
    const WIN_NEXT = (0, view_elements_1.createElem)(PAGINATION, types_1.HTMLTags.button, 'button-garage win-next', 'next');
    WIN_PREV.style.display = 'none';
    WIN_NEXT.style.display = 'none';
    if (PREV instanceof HTMLButtonElement && NEXT instanceof HTMLButtonElement) {
        if (page === pages)
            NEXT.disabled = true;
        if (page === 1)
            PREV.disabled = true;
        PREV.addEventListener('click', (event) => (0, view_pagination_1.paginationGarage)(event.target, page, pages));
        NEXT.addEventListener('click', (event) => (0, view_pagination_1.paginationGarage)(event.target, page, pages));
    }
};
exports.drawMain = drawMain;
const updateHeadings = () => {
    (0, api_1.getCars)([{ key: '_limit', value: app_data_1.CARS_PER_PAGE }]).then((res) => {
        const CARS_NUM = document.querySelector('.garage-heading');
        if (CARS_NUM)
            CARS_NUM.textContent = `Garage (${res.carsNumber})`;
        const PAGES_NUM = document.querySelector('.page-count');
        if (PAGES_NUM instanceof HTMLElement && PAGES_NUM.textContent) {
            const GARAGE_TOTAL_PAGES = Math.ceil(res.carsNumber / app_data_1.CARS_PER_PAGE);
            const PAGES_INFO = localStorage.getItem('garage pages');
            if (PAGES_INFO) {
                const PAGES_ARR = JSON.parse(PAGES_INFO);
                if (PAGES_ARR instanceof Array) {
                    const CURRENT_PAGE = PAGES_ARR[0];
                    PAGES_NUM.textContent = `${CURRENT_PAGE} / ${GARAGE_TOTAL_PAGES}`;
                }
            }
            else {
                let text = PAGES_NUM.textContent;
                text = text.slice(0, text.indexOf('/') + 2).concat(`${GARAGE_TOTAL_PAGES}`);
                PAGES_NUM.textContent = text;
            }
        }
    });
};
exports.updateHeadings = updateHeadings;


/***/ }),

/***/ "./src/view/view_pagination.ts":
/*!*************************************!*\
  !*** ./src/view/view_pagination.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.paginationWinners = exports.paginationGarage = void 0;
const api_1 = __webpack_require__(/*! ../api */ "./src/api.ts");
const view_garage_1 = __webpack_require__(/*! ./view_garage */ "./src/view/view_garage.ts");
const view_main_1 = __webpack_require__(/*! ./view_main */ "./src/view/view_main.ts");
const app_data_1 = __webpack_require__(/*! ../data/app_data */ "./src/data/app_data.ts");
const view_winners_1 = __webpack_require__(/*! ./view_winners */ "./src/view/view_winners.ts");
const paginationGarage = (target, page, pages) => {
    let currentPage = page;
    const BTN = target;
    if (BTN instanceof HTMLButtonElement) {
        (0, api_1.getCars)([
            { key: '_page', value: BTN.classList.contains('next') ? (currentPage += 1) : (currentPage -= 1) },
            { key: '_limit', value: app_data_1.CARS_PER_PAGE },
        ]).then((res) => {
            var _a;
            const WRAPPER = document.querySelector('.wrapper');
            if (WRAPPER) {
                WRAPPER.remove();
                while (WRAPPER.firstChild) {
                    WRAPPER.removeChild(WRAPPER.firstChild);
                }
            }
            (_a = document.querySelector('.pagination-block')) === null || _a === void 0 ? void 0 : _a.remove();
            (0, view_main_1.drawMain)(res.carsNumber, currentPage, pages);
            localStorage.setItem('garage pages', JSON.stringify([currentPage, pages]));
            res.cars.forEach((car) => (0, view_garage_1.drawGarageCars)(car.name, car.color, car.id ? car.id : 0));
        });
    }
};
exports.paginationGarage = paginationGarage;
function getSortOrder(currentPage) {
    let sort;
    let order;
    const WINS_HEADING = document.querySelector('.th_wins');
    const TIME_HEADING = document.querySelector('.th_time');
    if (WINS_HEADING && WINS_HEADING.classList.length > 2) {
        const LAST_ELEM_IN_ARR = WINS_HEADING.classList[WINS_HEADING.classList.length - 1];
        if (LAST_ELEM_IN_ARR === 'ASC' || LAST_ELEM_IN_ARR === 'DESC') {
            order = WINS_HEADING.classList[WINS_HEADING.classList.length - 1];
            sort = 'wins';
            if (order === 'ASC' || order === 'DESC') {
                (0, view_winners_1.drawWinnersLines)(currentPage, sort, order);
            }
        }
    }
    else if (TIME_HEADING && TIME_HEADING.classList.length > 2) {
        const LAST_ELEM_IN_ARR = TIME_HEADING.classList[TIME_HEADING.classList.length - 1];
        if (LAST_ELEM_IN_ARR === 'ASC' || LAST_ELEM_IN_ARR === 'DESC') {
            order = TIME_HEADING.classList[TIME_HEADING.classList.length - 1];
            sort = 'time';
            if (order === 'ASC' || order === 'DESC')
                (0, view_winners_1.drawWinnersLines)(currentPage, sort, order);
        }
    }
}
const paginationWinners = (target, page) => {
    let currentPage = page;
    let currentPages;
    (0, api_1.getWinners)([{ key: '_limit', value: app_data_1.WINNERS_PER_PAGE }]).then((res) => {
        currentPages = Math.ceil(res.winnersNumber / app_data_1.WINNERS_PER_PAGE);
        const PAGES_STR = localStorage.getItem('winners pages');
        if (PAGES_STR) {
            currentPage = JSON.parse(PAGES_STR).at(0);
        }
        const BTN = target;
        if (BTN instanceof HTMLButtonElement) {
            if (BTN.classList.contains('win-next')) {
                currentPage += 1;
                if (currentPage === currentPages)
                    BTN.disabled = true;
                const PREV = BTN.previousElementSibling;
                if (PREV instanceof HTMLButtonElement)
                    PREV.disabled = false;
            }
            else {
                currentPage -= 1;
                if (currentPage === 1)
                    BTN.disabled = true;
                const NEXT = BTN.nextElementSibling;
                if (NEXT instanceof HTMLButtonElement)
                    NEXT.disabled = false;
            }
            const TABLE_BODY = document.querySelector('.winners_tbody');
            while (TABLE_BODY instanceof HTMLElement && TABLE_BODY.firstChild) {
                TABLE_BODY.removeChild(TABLE_BODY.firstChild);
            }
            localStorage.setItem('winners pages', JSON.stringify([currentPage, currentPages]));
            getSortOrder(currentPage);
            (0, view_winners_1.setHeadings)(currentPage, currentPages);
        }
    });
};
exports.paginationWinners = paginationWinners;


/***/ }),

/***/ "./src/view/view_winners.ts":
/*!**********************************!*\
  !*** ./src/view/view_winners.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hideWinners = exports.drawWinners = exports.drawWinnersLines = exports.setHeadings = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const view_elements_1 = __webpack_require__(/*! ./view_elements */ "./src/view/view_elements.ts");
const view_main_1 = __webpack_require__(/*! ./view_main */ "./src/view/view_main.ts");
const api_1 = __webpack_require__(/*! ../api */ "./src/api.ts");
const app_data_1 = __webpack_require__(/*! ../data/app_data */ "./src/data/app_data.ts");
const view_pagination_1 = __webpack_require__(/*! ./view_pagination */ "./src/view/view_pagination.ts");
let CONTROL = document.querySelector('.control-block');
let CARS = document.querySelectorAll('.car-container');
let TABLE;
const currentWinnersPage = 1;
let PREV = document.querySelector('.prev');
let NEXT = document.querySelector('.next');
let WIN_PREV = document.querySelector('.win-prev');
let WIN_NEXT = document.querySelector('.win-next');
function hideGarage() {
    CONTROL = document.querySelector('.control-block');
    if (CONTROL instanceof HTMLElement)
        CONTROL.style.display = 'none';
    CARS = document.querySelectorAll('.car-container');
    CARS.forEach((car) => {
        const CAR = car;
        if (CAR instanceof HTMLElement)
            CAR.style.display = 'none';
    });
    PREV = document.querySelector('.prev');
    NEXT = document.querySelector('.next');
    if (PREV instanceof HTMLElement && NEXT instanceof HTMLElement) {
        PREV.style.display = 'none';
        NEXT.style.display = 'none';
    }
}
function setPaginationBtns(page, pages) {
    WIN_PREV = document.querySelector('.win-prev');
    WIN_NEXT = document.querySelector('.win-next');
    if (WIN_PREV instanceof HTMLButtonElement && WIN_NEXT instanceof HTMLButtonElement) {
        WIN_PREV.style.display = 'inline-block';
        WIN_NEXT.style.display = 'inline-block';
        WIN_PREV.addEventListener('click', (event) => (0, view_pagination_1.paginationWinners)(event.target, page));
        WIN_NEXT.addEventListener('click', (event) => (0, view_pagination_1.paginationWinners)(event.target, page));
        if (page === 1 && pages === 1) {
            WIN_NEXT.disabled = true;
            WIN_PREV.disabled = true;
        }
        else if (page === 1) {
            WIN_PREV.disabled = true;
        }
        else if (page > 1 && page === pages) {
            WIN_NEXT.disabled = true;
        }
    }
}
const HEADING_TEXT = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'];
function setHeadings(page, winnersPages, winnersNumber) {
    if (winnersNumber) {
        const GARAGE_HEADING = document.querySelector('.garage-heading');
        if (GARAGE_HEADING)
            GARAGE_HEADING.textContent = `Winners (${winnersNumber})`;
    }
    const PAGE_HEADING = document.querySelector('.page-count');
    if (PAGE_HEADING)
        PAGE_HEADING.textContent = `${page} / ${winnersPages}`;
}
exports.setHeadings = setHeadings;
const drawWinnersLines = (page, sort = 'time', order = 'ASC') => __awaiter(void 0, void 0, void 0, function* () {
    return (0, api_1.getWinners)([
        { key: '_page', value: page },
        { key: '_limit', value: app_data_1.WINNERS_PER_PAGE },
        { key: '_sort', value: sort },
        { key: '_order', value: order },
    ]).then((response) => {
        const TBODY = document.querySelector('.winners_tbody');
        if (TBODY) {
            response.winners.forEach((winner, ind) => {
                const TR_BODY = (0, view_elements_1.createElem)(TBODY, types_1.HTMLTags.tr, '');
                (0, view_elements_1.createElem)(TR_BODY, types_1.HTMLTags.td, '', (ind + 1).toString());
                const TD_CAR = (0, view_elements_1.createElem)(TR_BODY, types_1.HTMLTags.td, 'winners_car');
                TD_CAR.innerHTML =
                    '<svg fill="#000000" width="45px" height="40px" viewBox="0 -39.69 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style="enable-background:new 0 0 122.88 43.49" xml:space="preserve"> <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style> <g> <path class="st0" d="M103.94,23.97c5.39,0,9.76,4.37,9.76,9.76c0,5.39-4.37,9.76-9.76,9.76c-5.39,0-9.76-4.37-9.76-9.76 C94.18,28.34,98.55,23.97,103.94,23.97L103.94,23.97z M23,29.07v3.51h3.51C26.09,30.86,24.73,29.49,23,29.07L23,29.07z M26.52,34.87H23v3.51C24.73,37.97,26.09,36.6,26.52,34.87L26.52,34.87z M20.71,38.39v-3.51H17.2 C17.62,36.6,18.99,37.96,20.71,38.39L20.71,38.39z M17.2,32.59h3.51v-3.51C18.99,29.49,17.62,30.86,17.2,32.59L17.2,32.59z M105.09,29.07v3.51h3.51C108.18,30.86,106.82,29.49,105.09,29.07L105.09,29.07z M108.6,34.87h-3.51v3.51 C106.82,37.97,108.18,36.6,108.6,34.87L108.6,34.87z M102.8,38.39v-3.51h-3.51C99.71,36.6,101.07,37.96,102.8,38.39L102.8,38.39z M99.28,32.59h3.51v-3.51C101.07,29.49,99.71,30.86,99.28,32.59L99.28,32.59z M49.29,12.79c-1.54-0.35-3.07-0.35-4.61-0.28 C56.73,6.18,61.46,2.07,75.57,2.9l-1.94,12.87L50.4,16.65c0.21-0.61,0.33-0.94,0.37-1.55C50.88,13.36,50.86,13.15,49.29,12.79 L49.29,12.79z M79.12,3.13L76.6,15.6l24.13-0.98c2.48-0.1,2.91-1.19,1.41-3.28c-0.68-0.95-1.44-1.89-2.31-2.82 C93.59,1.86,87.38,3.24,79.12,3.13L79.12,3.13z M0.46,27.28H1.2c0.46-2.04,1.37-3.88,2.71-5.53c2.94-3.66,4.28-3.2,8.65-3.99 l24.46-4.61c5.43-3.86,11.98-7.3,19.97-10.2C64.4,0.25,69.63-0.01,77.56,0c4.54,0.01,9.14,0.28,13.81,0.84 c2.37,0.15,4.69,0.47,6.97,0.93c2.73,0.55,5.41,1.31,8.04,2.21l9.8,5.66c2.89,1.67,3.51,3.62,3.88,6.81l1.38,11.78h1.43v6.51 c-0.2,2.19-1.06,2.52-2.88,2.52h-2.37c0.92-20.59-28.05-24.11-27.42,1.63H34.76c3.73-17.75-14.17-23.91-22.96-13.76 c-2.67,3.09-3.6,7.31-3.36,12.3H2.03c-0.51-0.24-0.91-0.57-1.21-0.98c-1.05-1.43-0.82-5.74-0.74-8.23 C0.09,27.55-0.12,27.28,0.46,27.28L0.46,27.28z M21.86,23.97c5.39,0,9.76,4.37,9.76,9.76c0,5.39-4.37,9.76-9.76,9.76 c-5.39,0-9.76-4.37-9.76-9.76C12.1,28.34,16.47,23.97,21.86,23.97L21.86,23.97z"/></g> </svg>';
                const svgEl = TD_CAR.firstChild;
                if (winner.id) {
                    (0, api_1.getCar)(winner.id).then((res) => {
                        if (svgEl instanceof SVGElement)
                            svgEl.style.fill = res.color;
                        (0, view_elements_1.createElem)(TR_BODY, types_1.HTMLTags.td, '', res.name);
                        (0, view_elements_1.createElem)(TR_BODY, types_1.HTMLTags.td, '', winner.wins.toString());
                        (0, view_elements_1.createElem)(TR_BODY, types_1.HTMLTags.td, '', winner.time.toString());
                    });
                }
            });
        }
        return response;
    });
});
exports.drawWinnersLines = drawWinnersLines;
function sortWinners(target) {
    const TARGET = target;
    let order;
    let sort;
    if (TARGET instanceof HTMLElement) {
        if (TARGET.classList.contains('ASC')) {
            document.querySelectorAll('.ASC').forEach((el) => el.classList.remove('ASC'));
            document.querySelectorAll('.DESC').forEach((el) => el.classList.remove('DESC'));
            TARGET.classList.add('DESC');
            order = 'DESC';
        }
        else {
            document.querySelectorAll('.ASC').forEach((el) => el.classList.remove('ASC'));
            document.querySelectorAll('.DESC').forEach((el) => el.classList.remove('DESC'));
            TARGET.classList.add('ASC');
            order = 'ASC';
        }
        if (TARGET.classList.contains('th_wins')) {
            sort = 'wins';
        }
        else {
            sort = 'time';
        }
        const arr = localStorage.getItem('winners pages');
        const TABLE_BODY = document.querySelector('.winners_tbody');
        while (TABLE_BODY instanceof HTMLElement && TABLE_BODY.firstChild) {
            TABLE_BODY.removeChild(TABLE_BODY.firstChild);
        }
        if (arr) {
            const page = JSON.parse(arr);
            (0, exports.drawWinnersLines)(page[0], sort, order);
        }
        else {
            (0, exports.drawWinnersLines)(1, sort, order);
        }
    }
}
function addSortingListeners() {
    const WINS_CELL = document.querySelector('.th_wins');
    const BEST_TIME_CELL = document.querySelector('.th_time');
    if (WINS_CELL instanceof HTMLElement && BEST_TIME_CELL instanceof HTMLElement) {
        WINS_CELL.addEventListener('click', (event) => sortWinners(event.target));
        BEST_TIME_CELL.addEventListener('click', (event) => sortWinners(event.target));
    }
}
const drawWinners = (page = currentWinnersPage) => {
    if (TABLE)
        TABLE.remove();
    hideGarage();
    let PAGE = page;
    const PAGE_ARR = localStorage.getItem('winners pages');
    if (PAGE_ARR)
        PAGE = JSON.parse(PAGE_ARR).at(0);
    TABLE = (0, view_elements_1.createElem)(view_main_1.WRAPPER, types_1.HTMLTags.table, 'winners_table');
    const THEAD = (0, view_elements_1.createElem)(TABLE, types_1.HTMLTags.thead, 'winners_thead');
    const TR = (0, view_elements_1.createElem)(THEAD, types_1.HTMLTags.tr, '');
    HEADING_TEXT.forEach((colName, ind) => {
        const TH = (0, view_elements_1.createElem)(TR, types_1.HTMLTags.th, 'winners_thead_tr', colName);
        if (ind === 3)
            TH.classList.add('th_wins');
        if (ind === 4)
            TH.className = 'winners_thead_tr th_time ASC';
    });
    (0, view_elements_1.createElem)(TABLE, types_1.HTMLTags.tbody, 'winners_tbody');
    (0, exports.drawWinnersLines)(PAGE).then((response) => {
        const winnersPages = Math.ceil(response.winnersNumber / app_data_1.WINNERS_PER_PAGE);
        setHeadings(PAGE, winnersPages, response.winnersNumber);
        setPaginationBtns(PAGE, winnersPages);
        addSortingListeners();
    });
};
exports.drawWinners = drawWinners;
const hideWinners = () => {
    if (CONTROL instanceof HTMLElement)
        CONTROL.style.display = 'grid';
    CARS.forEach((car) => {
        const CAR = car;
        if (CAR instanceof HTMLElement)
            CAR.style.display = 'flex';
    });
    if (TABLE)
        TABLE.remove();
    (0, view_main_1.updateHeadings)();
    if (PREV instanceof HTMLElement && NEXT instanceof HTMLElement) {
        PREV.style.display = 'inline-block';
        NEXT.style.display = 'inline-block';
    }
    if (WIN_PREV instanceof HTMLElement && WIN_NEXT instanceof HTMLElement) {
        WIN_PREV.style.display = 'none';
        WIN_NEXT.style.display = 'none';
    }
};
exports.hideWinners = hideWinners;


/***/ }),

/***/ "./src/assets/flag.svg":
/*!*****************************!*\
  !*** ./src/assets/flag.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/flag.svg";

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map