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
exports.id = "pages/blog/recent";
exports.ids = ["pages/blog/recent"];
exports.modules = {

/***/ "./pages/blog/recent.js":
/*!******************************!*\
  !*** ./pages/blog/recent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Recent = ()=>{\n    const [resentData, setResentData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [oneObj, setOneObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const fetchRecent = async ()=>{\n        const res = await fetch(\"/api/blog/recent/\");\n        const data = await res.json();\n        setResentData(data);\n    };\n    const addToApi = async ()=>{\n        const res = await fetch(\"/api/blog/recent/\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                oneObj\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await res.json();\n        console.log(data);\n    };\n    const deleteObj = async (recentObjId)=>{\n        const res = await fetch(\"/api/blog/\" + recentObjId, {\n            method: \"DELETE\"\n        });\n        const data = await res.json().then(fetchRecent());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: oneObj,\n                type: \"text\",\n                onChange: (e)=>setOneObj(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\blog\\\\recent.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addToApi,\n                children: \"add (post) to api\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\blog\\\\recent.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fetchRecent,\n                children: \"load recent api\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\blog\\\\recent.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            resentData.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: e.id,\n                    children: [\n                        \"id:\",\n                        e.id,\n                        \" text:\",\n                        e.text,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>deleteObj(e.id),\n                            children: \"delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\blog\\\\recent.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\blog\\\\recent.js\",\n                    lineNumber: 40,\n                    columnNumber: 32\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Yehor\\\\Desktop\\\\NEXTJS\\\\good-next\\\\pages\\\\blog\\\\recent.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL3JlY2VudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQStCO0FBRS9CLE1BQU1DLFNBQU8sSUFBSTtJQUNiLE1BQU0sQ0FBQ0MsWUFBV0MsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzlDLE1BQU0sQ0FBQ0ksUUFBT0MsVUFBVSxHQUFHTCwrQ0FBUUE7SUFFbkMsTUFBTU0sY0FBWSxVQUFVO1FBQ3hCLE1BQU1DLE1BQUksTUFBTUMsTUFBTTtRQUN0QixNQUFNQyxPQUFLLE1BQU1GLElBQUlHLElBQUk7UUFDekJQLGNBQWNNO0lBQ2xCO0lBRUEsTUFBTUUsV0FBUyxVQUFVO1FBQ3JCLE1BQU1KLE1BQUssTUFBTUMsTUFBTSxxQkFBb0I7WUFDdkNJLFFBQU87WUFDUEMsTUFBS0MsS0FBS0MsU0FBUyxDQUFDO2dCQUFDWDtZQUFNO1lBQzNCWSxTQUFRO2dCQUNKLGdCQUFlO1lBQ25CO1FBQ0o7UUFDQSxNQUFNUCxPQUFNLE1BQU1GLElBQUlHLElBQUk7UUFDMUJPLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFDaEI7SUFDQSxNQUFNVSxZQUFVLE9BQU9DLGNBQWM7UUFDakMsTUFBTWIsTUFBSyxNQUFNQyxNQUFNLGVBQWFZLGFBQVk7WUFDNUNSLFFBQU87UUFDWDtRQUNBLE1BQU1ILE9BQU0sTUFBTUYsSUFBSUcsSUFBSSxHQUFHVyxJQUFJLENBQUNmO0lBR3RDO0lBRUEscUJBQ0ksOERBQUNnQjs7MEJBQ0csOERBQUNDO2dCQUFNQyxPQUFPcEI7Z0JBQVFxQixNQUFLO2dCQUFPQyxVQUFVLENBQUNDLElBQUl0QixVQUFVc0IsRUFBRUMsTUFBTSxDQUFDSixLQUFLOzs7Ozs7MEJBRXpFLDhEQUFDSztnQkFBT0MsU0FBU25COzBCQUFVOzs7Ozs7MEJBRTNCLDhEQUFDa0I7Z0JBQU9DLFNBQVN4QjswQkFBYTs7Ozs7O1lBQzdCSixXQUFXNkIsR0FBRyxDQUFDSixDQUFBQSxrQkFBRyw4REFBQ0w7b0JBQUlVLElBQUlMLEVBQUVLLEVBQUU7O3dCQUFFO3dCQUFJTCxFQUFFSyxFQUFFO3dCQUFDO3dCQUFPTCxFQUFFTSxJQUFJO3NDQUN4RCw4REFBQ0o7NEJBQU9DLFNBQVMsSUFBSVgsVUFBVVEsRUFBRUssRUFBRTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxEO0FBQ0EsaUVBQWUvQixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29vZC1uZXh0Ly4vcGFnZXMvYmxvZy9yZWNlbnQuanM/OGVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFJlY2VudD0oKT0+e1xyXG4gICAgY29uc3QgW3Jlc2VudERhdGEsc2V0UmVzZW50RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvbmVPYmosc2V0T25lT2JqXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICBjb25zdCBmZXRjaFJlY2VudD1hc3luYyAoKT0+e1xyXG4gICAgICAgIGNvbnN0IHJlcz1hd2FpdCBmZXRjaChcIi9hcGkvYmxvZy9yZWNlbnQvXCIpXHJcbiAgICAgICAgY29uc3QgZGF0YT1hd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgc2V0UmVzZW50RGF0YShkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFRvQXBpPWFzeW5jICgpPT57XHJcbiAgICAgICAgY29uc3QgcmVzPSBhd2FpdCBmZXRjaChcIi9hcGkvYmxvZy9yZWNlbnQvXCIse1xyXG4gICAgICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe29uZU9ian0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBkYXRhPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1cclxuICAgIGNvbnN0IGRlbGV0ZU9iaj1hc3luYyAocmVjZW50T2JqSWQpPT57XHJcbiAgICAgICAgY29uc3QgcmVzPSBhd2FpdCBmZXRjaChcIi9hcGkvYmxvZy9cIityZWNlbnRPYmpJZCx7XHJcbiAgICAgICAgICAgIG1ldGhvZDpcIkRFTEVURVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgZGF0YT0gYXdhaXQgcmVzLmpzb24oKS50aGVuKGZldGNoUmVjZW50KCkpXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtvbmVPYmp9IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXsoZSk9PnNldE9uZU9iaihlLnRhcmdldC52YWx1ZSl9Lz5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkVG9BcGl9PmFkZCAocG9zdCkgdG8gYXBpPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoUmVjZW50fT5sb2FkIHJlY2VudCBhcGk8L2J1dHRvbj5cclxuICAgICAgICAgICAge3Jlc2VudERhdGEubWFwKGU9PjxkaXYgaWQ9e2UuaWR9PmlkOntlLmlkfSB0ZXh0OntlLnRleHR9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PmRlbGV0ZU9iaihlLmlkKX0+ZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVjZW50OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlY2VudCIsInJlc2VudERhdGEiLCJzZXRSZXNlbnREYXRhIiwib25lT2JqIiwic2V0T25lT2JqIiwiZmV0Y2hSZWNlbnQiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiYWRkVG9BcGkiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlT2JqIiwicmVjZW50T2JqSWQiLCJ0aGVuIiwiZGl2IiwiaW5wdXQiLCJ2YWx1ZSIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaWQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/recent.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/blog/recent.js"));
module.exports = __webpack_exports__;

})();