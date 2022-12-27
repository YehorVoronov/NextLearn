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
exports.id = "pages/docs/[[...params]]";
exports.ids = ["pages/docs/[[...params]]"];
exports.modules = {

/***/ "./pages/docs/[[...params]].js":
/*!*************************************!*\
  !*** ./pages/docs/[[...params]].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Doc() {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const securePage = async ()=>{\n            const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)();\n            if (!session) {\n                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)();\n            } else {\n                setLoading(false);\n            }\n        };\n        securePage();\n    }, []);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { params =[]  } = router.query;\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Loading... \"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\docs\\\\[[...params]].js\",\n            lineNumber: 22,\n            columnNumber: 16\n        }, this);\n    }\n    if (params.length === 2) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n            children: [\n                \"viewing docs for feature \",\n                params[0],\n                \" and concept \",\n                params[1]\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\docs\\\\[[...params]].js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, this);\n    } else if (params.length === 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n            children: [\n                \"viewing docs for feature \",\n                params[0]\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\docs\\\\[[...params]].js\",\n            lineNumber: 32,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Docs Home Page\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\docs\\\\[[...params]].js\",\n        lineNumber: 35,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Doc);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kb2NzL1tbLi4ucGFyYW1zXV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0M7QUFDeUI7QUFDdEI7QUFFekMsU0FBU00sTUFBSztJQUNWLE1BQU0sQ0FBQ0MsU0FBUUMsV0FBVyxHQUFDSiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3hDQyxnREFBU0EsQ0FBQyxJQUFJO1FBQ1YsTUFBTUksYUFBVyxVQUFVO1lBQ3ZCLE1BQU1DLFVBQVEsTUFBTVQsMkRBQVVBO1lBQzlCLElBQUksQ0FBQ1MsU0FBUTtnQkFDVFIsdURBQU1BO1lBQ1YsT0FBTztnQkFDSE0sV0FBVyxLQUFLO1lBQ3BCLENBQUM7UUFDTDtRQUNBQztJQUNKLEdBQUUsRUFBRTtJQUNKLE1BQU1FLFNBQU9YLHNEQUFTQTtJQUN0QixNQUFNLEVBQUNZLFFBQU8sRUFBRSxHQUFDLEdBQUNELE9BQU9FLEtBQUs7SUFFOUIsSUFBSU4sU0FBUTtRQUNSLHFCQUFPLDhEQUFDTztzQkFBRzs7Ozs7O0lBQ2YsQ0FBQztJQUVELElBQUlGLE9BQU9HLE1BQU0sS0FBRyxHQUFFO1FBQ2xCLHFCQUNJLDhEQUFDQzs7Z0JBQUc7Z0JBQzBCSixNQUFNLENBQUMsRUFBRTtnQkFBQztnQkFBY0EsTUFBTSxDQUFDLEVBQUU7Ozs7Ozs7SUFHdkUsT0FBTSxJQUFHQSxPQUFPRyxNQUFNLEtBQUcsR0FBRTtRQUN2QixxQkFBTyw4REFBQ0M7O2dCQUFHO2dCQUEwQkosTUFBTSxDQUFDLEVBQUU7Ozs7Ozs7SUFDbEQsQ0FBQztJQUVELHFCQUFPLDhEQUFDSztrQkFBRzs7Ozs7O0FBQ2Y7QUFFQSxpRUFBZVgsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvb2QtbmV4dC8uL3BhZ2VzL2RvY3MvW1suLi5wYXJhbXNdXS5qcz9lYThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtnZXRTZXNzaW9uLCBzaWduSW4sIHVzZVNlc3Npb259IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRG9jKCl7XHJcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXT11c2VTdGF0ZSh0cnVlKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3Qgc2VjdXJlUGFnZT1hc3luYyAoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uPWF3YWl0IGdldFNlc3Npb24oKVxyXG4gICAgICAgICAgICBpZiAoIXNlc3Npb24pe1xyXG4gICAgICAgICAgICAgICAgc2lnbkluKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VjdXJlUGFnZSgpXHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7cGFyYW1zPVtdfT1yb3V0ZXIucXVlcnlcclxuXHJcbiAgICBpZiAobG9hZGluZyl7XHJcbiAgICAgICAgcmV0dXJuIDxoMj5Mb2FkaW5nLi4uIDwvaDI+XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGg9PT0yKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICB2aWV3aW5nIGRvY3MgZm9yIGZlYXR1cmUge3BhcmFtc1swXX0gYW5kIGNvbmNlcHQge3BhcmFtc1sxXX1cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICApXHJcbiAgICB9ZWxzZSBpZihwYXJhbXMubGVuZ3RoPT09MSl7XHJcbiAgICAgICAgcmV0dXJuIDxoNj52aWV3aW5nIGRvY3MgZm9yIGZlYXR1cmUge3BhcmFtc1swXX08L2g2PlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8aDE+RG9jcyBIb21lIFBhZ2U8L2gxPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2M7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsImdldFNlc3Npb24iLCJzaWduSW4iLCJ1c2VTZXNzaW9uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEb2MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlY3VyZVBhZ2UiLCJzZXNzaW9uIiwicm91dGVyIiwicGFyYW1zIiwicXVlcnkiLCJoMiIsImxlbmd0aCIsImg2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/docs/[[...params]].js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/docs/[[...params]].js"));
module.exports = __webpack_exports__;

})();