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
exports.id = "pages/product/[productId]";
exports.ids = ["pages/product/[productId]"];
exports.modules = {

/***/ "./pages/product/[productId]/index.js":
/*!********************************************!*\
  !*** ./pages/product/[productId]/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductDetail = ({ post  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\product\\\\[productId]\\\\index.js\",\n            lineNumber: 7,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Product detail \",\n            post.body,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\product\\\\[productId]\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined),\n            \"id:\",\n            post.id,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\product\\\\[productId]\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 26\n            }, undefined),\n            \"title:\",\n            post.title\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\product\\\\[productId]\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetail);\nasync function getStaticPaths() {\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n    const data = await response.json();\n    const paths = data.map((product)=>{\n        return {\n            params: {\n                productId: `${product.id}`\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps(context) {\n    const { params  } = context;\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/posts/\" + params.productId.toString());\n    const data = await response.json();\n    return {\n        props: {\n            post: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1twcm9kdWN0SWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFzQztBQUV0QyxNQUFNQyxnQkFBYyxDQUFDLEVBQUNDLEtBQUksRUFBQyxHQUFHO0lBRTFCLE1BQU1DLFNBQU9ILHNEQUFTQTtJQUN0QixJQUFJRyxPQUFPQyxVQUFVLEVBQUM7UUFDbEIscUJBQU8sOERBQUNDO3NCQUFHOzs7Ozs7SUFDZixDQUFDO0lBRUQscUJBQ0ksOERBQUNDOztZQUFJO1lBQ2VKLEtBQUtLLElBQUk7MEJBQ3pCLDhEQUFDQzs7Ozs7WUFBSTtZQUNETixLQUFLTyxFQUFFO1lBQUM7MEJBQUMsOERBQUNEOzs7OztZQUFJO1lBQ1hOLEtBQUtRLEtBQUs7Ozs7Ozs7QUFHN0I7QUFFQSxpRUFBZVQsYUFBYUEsRUFBQztBQUV0QixlQUFlVSxpQkFBZ0I7SUFDbEMsTUFBTUMsV0FBVSxNQUFNQyxNQUFNO0lBQzVCLE1BQU1DLE9BQUssTUFBTUYsU0FBU0csSUFBSTtJQUU5QixNQUFNQyxRQUFNRixLQUFLRyxHQUFHLENBQUNDLENBQUFBLFVBQVM7UUFDMUIsT0FBTTtZQUNGQyxRQUFPO2dCQUNIQyxXQUFVLENBQUMsRUFBRUYsUUFBUVQsRUFBRSxDQUFDLENBQUM7WUFDN0I7UUFDSjtJQUNKO0lBRUEsT0FBTTtRQUNGTztRQUNBSyxVQUFTLEtBQUs7SUFDbEI7QUFDSixDQUFDO0FBRU0sZUFBZUMsZUFBZUMsT0FBTyxFQUFDO0lBQ3pDLE1BQU0sRUFBQ0osT0FBTSxFQUFDLEdBQUdJO0lBQ2pCLE1BQU1YLFdBQVUsTUFBTUMsTUFBTSxnREFBOENNLE9BQU9DLFNBQVMsQ0FBQ0ksUUFBUTtJQUNuRyxNQUFNVixPQUFLLE1BQU1GLFNBQVNHLElBQUk7SUFFOUIsT0FBTTtRQUNGVSxPQUFNO1lBQ0Z2QixNQUFLWTtRQUNUO0lBQ0o7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29vZC1uZXh0Ly4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdElkXS9pbmRleC5qcz83MmM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3REZXRhaWw9KHtwb3N0fSk9PntcclxuXHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKClcclxuICAgIGlmIChyb3V0ZXIuaXNGYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIDxoNj5Mb2FkaW5nLi4uPC9oNj5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgUHJvZHVjdCBkZXRhaWwge3Bvc3QuYm9keX1cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgaWQ6e3Bvc3QuaWR9IDxici8+XHJcbiAgICAgICAgICAgIHRpdGxlOntwb3N0LnRpdGxlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcbiAgICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIilcclxuICAgIGNvbnN0IGRhdGE9YXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgY29uc3QgcGF0aHM9ZGF0YS5tYXAocHJvZHVjdD0+e1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZDpgJHtwcm9kdWN0LmlkfWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOmZhbHNlLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCl7XHJcbiAgICBjb25zdCB7cGFyYW1zfSA9IGNvbnRleHRcclxuICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9cIitwYXJhbXMucHJvZHVjdElkLnRvU3RyaW5nKCkpXHJcbiAgICBjb25zdCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIHBvc3Q6ZGF0YSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUHJvZHVjdERldGFpbCIsInBvc3QiLCJyb3V0ZXIiLCJpc0ZhbGxiYWNrIiwiaDYiLCJkaXYiLCJib2R5IiwiYnIiLCJpZCIsInRpdGxlIiwiZ2V0U3RhdGljUGF0aHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwYXRocyIsIm1hcCIsInByb2R1Y3QiLCJwYXJhbXMiLCJwcm9kdWN0SWQiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInRvU3RyaW5nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[productId]/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/product/[productId]/index.js"));
module.exports = __webpack_exports__;

})();