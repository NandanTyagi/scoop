"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/NavContainer.js":
/*!************************************!*\
  !*** ./components/NavContainer.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ \"./components/Nav.js\");\n/* harmony import */ var _UpperNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UpperNav */ \"./components/UpperNav.js\");\n/* harmony import */ var _LogSignBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogSignBtn */ \"./components/LogSignBtn.js\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/_app */ \"./pages/_app.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NavContainer = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_5__.MenuContext), menuOpen = ref[0], setMenuOpen = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log('menuOpen', menuOpen);\n    }, [\n        menuOpen\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: menuOpen ? 'nav-container expand' : 'nav-container',\n        __source: {\n            fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\NavContainer.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UpperNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\NavContainer.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LogSignBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\NavContainer.js\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\components\\\\NavContainer.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(NavContainer, \"fLVqO3p0FcvnEO4nGi6SNKkqK10=\");\n_c = NavContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavContainer);\nvar _c;\n$RefreshReg$(_c, \"NavContainer\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkNvbnRhaW5lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUM1QjtBQUNVO0FBQ0k7QUFDTTs7O0FBRzNDLEdBQUssQ0FBQ08sWUFBWSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUV4QixHQUFLLENBQTJCTixHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0ssbURBQVcsR0FBL0NFLFFBQVEsR0FBaUJQLEdBQXVCLEtBQXRDUSxXQUFXLEdBQUlSLEdBQXVCO0lBRXZEQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2JRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVUsV0FBQ0gsUUFBUTtJQUNuQyxDQUFDLEVBQUUsQ0FBQ0E7UUFBQUEsUUFBUTtJQUFBLENBQUM7SUFFYixNQUFNLHVFQUNESSxDQUFHO1FBQUNDLFNBQVMsRUFBRUwsUUFBUSxHQUFDLENBQXNCLHdCQUFDLENBQWU7Ozs7Ozs7O2lGQUMxREosaURBQVE7Ozs7Ozs7O2lGQUNSQyxtREFBVTs7Ozs7Ozs7aUZBQ1ZGLDRDQUFHOzs7Ozs7Ozs7O0FBR2hCLENBQUM7R0FmS0ksWUFBWTtLQUFaQSxZQUFZO0FBaUJsQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkNvbnRhaW5lci5qcz84YmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2J1xyXG5pbXBvcnQgVXBwZXJOYXYgZnJvbSAnLi9VcHBlck5hdidcclxuaW1wb3J0IExvZ1NpZ25CdG4gZnJvbSBcIi4vTG9nU2lnbkJ0blwiO1xyXG5pbXBvcnQgeyBNZW51Q29udGV4dCB9IGZyb20gXCIuLi9wYWdlcy9fYXBwXCI7XHJcblxyXG5cclxuY29uc3QgTmF2Q29udGFpbmVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlQ29udGV4dChNZW51Q29udGV4dCk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21lbnVPcGVuJyxtZW51T3BlbilcclxuICAgIH0sIFttZW51T3Blbl0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21lbnVPcGVuPyduYXYtY29udGFpbmVyIGV4cGFuZCc6J25hdi1jb250YWluZXInfT5cclxuICAgICAgICAgICAgPFVwcGVyTmF2Lz5cclxuICAgICAgICAgICAgPExvZ1NpZ25CdG4gLz5cclxuICAgICAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkNvbnRhaW5lclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiTmF2IiwiVXBwZXJOYXYiLCJMb2dTaWduQnRuIiwiTWVudUNvbnRleHQiLCJOYXZDb250YWluZXIiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavContainer.js\n");

/***/ })

});