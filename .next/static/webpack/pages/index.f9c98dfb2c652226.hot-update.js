"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/LargeCard.js":
/*!*********************************!*\
  !*** ./components/LargeCard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar LargeCard = function(param) {\n    var image = param.image, title = param.title, text = param.text;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"large-card\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\LargeCard.js\",\n            lineNumber: 5,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"large-pic-container\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\LargeCard.js\",\n                    lineNumber: 6,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/img/image.jpg\",\n                        alt: \"\",\n                        srcset: \"\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\LargeCard.js\",\n                            lineNumber: 7,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"overlay\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\LargeCard.js\",\n                            lineNumber: 8,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"large-text-container\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\LargeCard.js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Text\"\n            })\n        ]\n    }));\n};\n_c = LargeCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LargeCard);\nvar _c;\n$RefreshReg$(_c, \"LargeCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhcmdlQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlCOztBQUV6QixHQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRLFFBQW9CLENBQUM7UUFBMUJDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsSUFBSSxTQUFKQSxJQUFJO0lBQ3JDLE1BQU0sdUVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7O2tGQUN4QkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXFCOzs7Ozs7Ozt5RkFDL0JDLENBQUc7d0JBQUNDLEdBQUcsRUFBQyxDQUFnQjt3QkFBQ0MsR0FBRyxFQUFDLENBQUU7d0JBQUNDLE1BQU0sRUFBQyxDQUFFOzs7Ozs7Ozt5RkFDM0NMLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7Ozs7O2lGQUV6QkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXNCOzs7Ozs7OzBCQUFDLENBQUk7Ozs7QUFHaEQsQ0FBQztLQVZLTCxTQUFTO0FBWWYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xhcmdlQ2FyZC5qcz81NzU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExhcmdlQ2FyZCA9ICh7IGltYWdlLCB0aXRsZSwgdGV4dCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLXBpYy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9pbWFnZS5qcGdcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS10ZXh0LWNvbnRhaW5lclwiPlRleHQ8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXJnZUNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxhcmdlQ2FyZCIsImltYWdlIiwidGl0bGUiLCJ0ZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0Iiwic3Jjc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LargeCard.js\n");

/***/ })

});