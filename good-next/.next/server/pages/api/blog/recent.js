"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/blog/recent";
exports.ids = ["pages/api/blog/recent"];
exports.modules = {

/***/ "(api)/./data/blogRecentApi.js":
/*!*******************************!*\
  !*** ./data/blogRecentApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blogRecentApi\": () => (/* binding */ blogRecentApi)\n/* harmony export */ });\nconst blogRecentApi = [\n    {\n        id: \"1\",\n        text: \"first comment\"\n    },\n    {\n        id: \"2\",\n        text: \"2 comment\"\n    },\n    {\n        id: \"3\",\n        text: \"3 comment\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL2Jsb2dSZWNlbnRBcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGdCQUFjO0lBQ3ZCO1FBQ0FDLElBQUc7UUFDSEMsTUFBSztJQUNMO0lBQ0E7UUFDSUQsSUFBRztRQUNIQyxNQUFLO0lBQ1Q7SUFDQTtRQUNJRCxJQUFHO1FBQ0hDLE1BQUs7SUFDVDtDQUVIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29vZC1uZXh0Ly4vZGF0YS9ibG9nUmVjZW50QXBpLmpzPzQ2YmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJsb2dSZWNlbnRBcGk9W1xyXG4gICAge1xyXG4gICAgaWQ6XCIxXCIsXHJcbiAgICB0ZXh0OlwiZmlyc3QgY29tbWVudFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOlwiMlwiLFxyXG4gICAgICAgIHRleHQ6XCIyIGNvbW1lbnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcIjNcIixcclxuICAgICAgICB0ZXh0OlwiMyBjb21tZW50XCJcclxuICAgIH0sXHJcblxyXG5dIl0sIm5hbWVzIjpbImJsb2dSZWNlbnRBcGkiLCJpZCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./data/blogRecentApi.js\n");

/***/ }),

/***/ "(api)/./pages/api/blog/recent.js":
/*!**********************************!*\
  !*** ./pages/api/blog/recent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_blogRecentApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/blogRecentApi */ \"(api)/./data/blogRecentApi.js\");\n\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        res.status(200).json(_data_blogRecentApi__WEBPACK_IMPORTED_MODULE_0__.blogRecentApi);\n    } else if (req.method === \"POST\") {\n        res.status(200).json(_data_blogRecentApi__WEBPACK_IMPORTED_MODULE_0__.blogRecentApi);\n        const bodyObj = req.body.oneObj;\n        const newObj = {\n            id: Date.now().toString(),\n            text: bodyObj\n        };\n        _data_blogRecentApi__WEBPACK_IMPORTED_MODULE_0__.blogRecentApi.push(newObj);\n        res.status(201).json(newObj);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZy9yZWNlbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEQ7QUFFM0MsU0FBU0MsUUFBUUMsR0FBRyxFQUFDQyxHQUFHLEVBQUM7SUFDcEMsSUFBSUQsSUFBSUUsTUFBTSxLQUFHLE9BQU07UUFDbkJELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNOLDhEQUFhQTtJQUN0QyxPQUFNLElBQUlFLElBQUlFLE1BQU0sS0FBRyxRQUFPO1FBQzFCRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTiw4REFBYUE7UUFDbEMsTUFBTU8sVUFBUUwsSUFBSU0sSUFBSSxDQUFDQyxNQUFNO1FBQzdCLE1BQU1DLFNBQU87WUFDVEMsSUFBSUMsS0FBS0MsR0FBRyxHQUFHQyxRQUFRO1lBQ3ZCQyxNQUFLUjtRQUNUO1FBQ0FQLG1FQUFrQixDQUFDVTtRQUNuQlAsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0k7SUFDekIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb29kLW5leHQvLi9wYWdlcy9hcGkvYmxvZy9yZWNlbnQuanM/ZmY4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jsb2dSZWNlbnRBcGl9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2Jsb2dSZWNlbnRBcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLHJlcyl7XHJcbiAgICBpZiAocmVxLm1ldGhvZD09PSdHRVQnKXtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihibG9nUmVjZW50QXBpKVxyXG4gICAgfWVsc2UgaWYgKHJlcS5tZXRob2Q9PT0nUE9TVCcpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGJsb2dSZWNlbnRBcGkpXHJcbiAgICAgICAgY29uc3QgYm9keU9iaj1yZXEuYm9keS5vbmVPYmpcclxuICAgICAgICBjb25zdCBuZXdPYmo9e1xyXG4gICAgICAgICAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB0ZXh0OmJvZHlPYmpcclxuICAgICAgICB9XHJcbiAgICAgICAgYmxvZ1JlY2VudEFwaS5wdXNoKG5ld09iailcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihuZXdPYmopXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiYmxvZ1JlY2VudEFwaSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiYm9keU9iaiIsImJvZHkiLCJvbmVPYmoiLCJuZXdPYmoiLCJpZCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsInRleHQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/blog/recent.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blog/recent.js"));
module.exports = __webpack_exports__;

})();