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
exports.id = "pages/blog";
exports.ids = ["pages/blog"];
exports.modules = {

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst fetcher = async ()=>{\n    const response = await fetch(\"http://localhost:4000/posts\");\n    const data = await response.json();\n    return data;\n};\nfunction dataSWR() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"blogDataSwr\", fetcher);\n    if (error) return \"an arror has occured\";\n    if (!data) return \"Loading...\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Blog main\",\n            data.map((post)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"post.id :\",\n                        post.id,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\blog\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 35\n                        }, this),\n                        \"post.title :\",\n                        post.title,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\blog\\\\index.js\",\n                            lineNumber: 20,\n                            columnNumber: 41\n                        }, this),\n                        \"post.author :\",\n                        post.author,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\blog\\\\index.js\",\n                            lineNumber: 21,\n                            columnNumber: 43\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\blog\\\\index.js\",\n                    lineNumber: 18,\n                    columnNumber: 19\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\blog\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataSWR);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUd6QixNQUFNQyxVQUFRLFVBQVM7SUFDbkIsTUFBTUMsV0FBUyxNQUFPQyxNQUFNO0lBQzVCLE1BQU1DLE9BQUssTUFBTUYsU0FBU0csSUFBSTtJQUM5QixPQUFPRDtBQUNYO0FBQ0EsU0FBU0UsVUFBUztJQUNkLE1BQU0sRUFBQ0YsS0FBSSxFQUFDRyxNQUFLLEVBQUMsR0FBQ1AsK0NBQU1BLENBQUMsZUFBY0M7SUFFeEMsSUFBSU0sT0FBTyxPQUFPO0lBQ2xCLElBQUksQ0FBQ0gsTUFBTSxPQUFPO0lBRWxCLHFCQUFPLDhEQUFDSTs7WUFBSTtZQUVQSixLQUFLSyxHQUFHLENBQUNDLENBQUFBLE9BQU07Z0JBQ1oscUJBQU0sOERBQUNGOzt3QkFBSTt3QkFDR0UsS0FBS0MsRUFBRTtzQ0FBQyw4REFBQ0M7Ozs7O3dCQUFJO3dCQUNWRixLQUFLRyxLQUFLO3NDQUFDLDhEQUFDRDs7Ozs7d0JBQUk7d0JBQ2ZGLEtBQUtJLE1BQU07c0NBQUMsOERBQUNGOzs7Ozs7Ozs7OztZQUVuQzs7Ozs7OztBQUVSO0FBQ0EsaUVBQWVOLE9BQU9BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29vZC1uZXh0Ly4vcGFnZXMvYmxvZy9pbmRleC5qcz8xMWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuXHJcbmNvbnN0IGZldGNoZXI9YXN5bmMoKT0+e1xyXG4gICAgY29uc3QgcmVzcG9uc2U9YXdhaXQgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Bvc3RzXCIpXHJcbiAgICBjb25zdCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5mdW5jdGlvbiBkYXRhU1dSKCl7XHJcbiAgICBjb25zdCB7ZGF0YSxlcnJvcn09dXNlU1dSKCdibG9nRGF0YVN3cicsZmV0Y2hlcilcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiBcImFuIGFycm9yIGhhcyBvY2N1cmVkXCJcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIFwiTG9hZGluZy4uLlwiXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgQmxvZyBtYWluXHJcbiAgICAgICAge2RhdGEubWFwKHBvc3Q9PntcclxuICAgICAgICAgICAgcmV0dXJuPGRpdj5cclxuICAgICAgICAgICAgICAgIHBvc3QuaWQgOntwb3N0LmlkfTxici8+XHJcbiAgICAgICAgICAgICAgICBwb3N0LnRpdGxlIDp7cG9zdC50aXRsZX08YnIvPlxyXG4gICAgICAgICAgICAgICAgcG9zdC5hdXRob3IgOntwb3N0LmF1dGhvcn08YnIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGRhdGFTV1JcclxuLypjb25zdCBCbG9nPSh7cG9zdHN9KT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBCbG9nIG1haW5cclxuICAgICAgICAgICAge3Bvc3RzLm1hcChwb3N0PT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm48ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3QuaWQgOntwb3N0LmlkfTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdC50aXRsZSA6e3Bvc3QudGl0bGV9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICBwb3N0LmF1dGhvciA6e3Bvc3QuYXV0aG9yfTxici8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4gICAgY29uc3QgcmVzcG9uc2U9YXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvcG9zdHNcIilcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIHBvc3RzOmRhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6MzBcclxuICAgIH1cclxufSovXHJcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJmZXRjaGVyIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZGF0YVNXUiIsImVycm9yIiwiZGl2IiwibWFwIiwicG9zdCIsImlkIiwiYnIiLCJ0aXRsZSIsImF1dGhvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/index.js"));
module.exports = __webpack_exports__;

})();