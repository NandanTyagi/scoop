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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar LargeCard = function(param) {\n    var id = param.id, title = param.title, body = param.body, img = param.img;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), target = ref[0], setTarget = ref[1];\n    var articles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ArticleContext);\n    console.log('articles from lg card', articles);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"large-card\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\LargeCard.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    id: id,\n                    className: \"large-pic-container\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\LargeCard.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/img/image.jpg\",\n                            alt: \"\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\LargeCard.js\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"overlay\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\LargeCard.js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"large-text-container\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\LargeCard.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                            className: \"title\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\LargeCard.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: title\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: \"text\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\LargeCard.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: body\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(LargeCard, \"WScVcc2NkBmwNwZxLw7F0aEbXL0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = LargeCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LargeCard);\nvar _c;\n$RefreshReg$(_c, \"LargeCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhcmdlQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RDtBQUNsQztBQUNTOzs7QUFJckMsR0FBSyxDQUFDTSxTQUFTLEdBQUcsUUFBUSxRQUFvQixDQUFDO1FBQTNCQyxFQUFFLFNBQUZBLEVBQUUsRUFBRUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxHQUFHLFNBQUhBLEdBQUc7O0lBQ3RDLEdBQUssQ0FBdUJULEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQWhDVSxNQUFNLEdBQWVWLEdBQVksS0FBekJXLFNBQVMsR0FBSVgsR0FBWTtJQUN4QyxHQUFLLENBQUNZLFFBQVEsR0FBR1YsaURBQVUsQ0FBQ1csY0FBYztJQUMxQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBdUIsd0JBQUVILFFBQVE7SUFDN0MsR0FBSyxDQUFDSSxNQUFNLEdBQUdaLHNEQUFTO0lBRXhCLE1BQU07d0ZBR0RhLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7O3NGQUN4QkQsQ0FBRztvQkFBQ1gsRUFBRSxFQUFFQSxFQUFFO29CQUFFWSxTQUFTLEVBQUMsQ0FBcUI7Ozs7Ozs7OzZGQUN6Q1QsQ0FBRzs0QkFBQ1UsR0FBRyxFQUFDLENBQWdCOzRCQUFDQyxHQUFHLEVBQUMsQ0FBRTs7Ozs7Ozs7NkZBQy9CSCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7OztzRkFFekJELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFzQjs7Ozs7Ozs7NkZBQ2xDRyxDQUFFOzRCQUFDSCxTQUFTLEVBQUMsQ0FBTzs7Ozs7OztzQ0FBRVgsS0FBSzs7NkZBQzNCZSxDQUFDOzRCQUFDSixTQUFTLEVBQUMsQ0FBTTs7Ozs7OztzQ0FDakJWLElBQUk7Ozs7Ozs7QUFPaEIsQ0FBQztHQXhCS0gsU0FBUzs7UUFJRUQsa0RBQVM7OztLQUpwQkMsU0FBUztBQTBCZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGFyZ2VDYXJkLmpzPzU3NTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuXHJcbmNvbnN0IExhcmdlQ2FyZCA9ICh7aWQsIHRpdGxlLCBib2R5LCBpbWd9KSA9PiB7XHJcbiAgY29uc3QgW3RhcmdldCwgc2V0VGFyZ2V0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGFydGljbGVzID0gdXNlQ29udGV4dChBcnRpY2xlQ29udGV4dCk7XHJcbiAgY29uc29sZS5sb2coJ2FydGljbGVzIGZyb20gbGcgY2FyZCcsIGFydGljbGVzKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJsYXJnZS1waWMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaW1hZ2UuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXJnZUNhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiTGluayIsInVzZVJvdXRlciIsIkxhcmdlQ2FyZCIsImlkIiwidGl0bGUiLCJib2R5IiwiaW1nIiwidGFyZ2V0Iiwic2V0VGFyZ2V0IiwiYXJ0aWNsZXMiLCJBcnRpY2xlQ29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LargeCard.js\n");

/***/ })

});