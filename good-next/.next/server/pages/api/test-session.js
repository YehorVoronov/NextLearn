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
exports.id = "pages/api/test-session";
exports.ids = ["pages/api/test-session"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/test-session.js":
/*!***********************************!*\
  !*** ./pages/api/test-session.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (!session) {\n        res.status(401).json({\n            error: \"unauthenticated user\"\n        });\n    } else {\n        res.status(200).json({\n            message: \"success\",\n            session\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVzdC1zZXNzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUczQyxNQUFNQyxVQUFRLE9BQU9DLEtBQUlDLE1BQU07SUFDM0IsTUFBTUMsVUFBUSxNQUFNSiwyREFBVUEsQ0FBQztRQUFDRTtJQUFHO0lBQ25DLElBQUksQ0FBQ0UsU0FBUTtRQUNURCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLE9BQU07UUFBc0I7SUFDdEQsT0FBTTtRQUNGSixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNFLFNBQVE7WUFBVUo7UUFBTztJQUNuRCxDQUFDO0FBQ0w7QUFDQSxpRUFBZUgsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvb2QtbmV4dC8uL3BhZ2VzL2FwaS90ZXN0LXNlc3Npb24uanM/NWYzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFNlc3Npb259IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBoYW5kbGVyPWFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qgc2Vzc2lvbj1hd2FpdCBnZXRTZXNzaW9uKHtyZXF9KVxyXG4gICAgaWYgKCFzZXNzaW9uKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7ZXJyb3I6XCJ1bmF1dGhlbnRpY2F0ZWQgdXNlclwifSlcclxuICAgIH1lbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVzc2FnZTpcInN1Y2Nlc3NcIixzZXNzaW9ufSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/test-session.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/test-session.js"));
module.exports = __webpack_exports__;

})();