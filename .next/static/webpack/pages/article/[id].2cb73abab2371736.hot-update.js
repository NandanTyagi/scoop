"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[id]",{

/***/ "./pages/article/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/article/[id]/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/NavLink */ \"./components/NavLink.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar article = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    var stnCss = \"text-black\";\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                rout: \"\",\n                text: \"< Back\",\n                css: stnCss,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\pages\\\\article\\\\[id]\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"text-black\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\tyana\\\\OneDrive\\\\Dokument\\\\Private\\\\Scoop\\\\ScoopRepoVS\\\\scoop\\\\pages\\\\article\\\\[id]\\\\index.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    \"This is article \",\n                    id\n                ]\n            })\n        ]\n    }));\n};\n_s(article, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (article);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlL1tpZF0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUNZO0FBQ1k7OztBQUVqRCxHQUFLLENBQUNHLE9BQU8sR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDbkIsR0FBSyxDQUFDQyxNQUFNLEdBQUdILHNEQUFTO0lBQ3hCLEdBQUssQ0FBRUksRUFBRSxHQUFJRCxNQUFNLENBQUNFLEtBQUssQ0FBbEJELEVBQUU7SUFDVCxHQUFHLENBQUNFLE1BQU0sR0FBRyxDQUFZO0lBQ3pCLE1BQU07O2lGQUVETCwyREFBTztnQkFBQ00sSUFBSSxFQUFDLENBQUU7Z0JBQUNDLElBQUksRUFBQyxDQUFRO2dCQUFDQyxHQUFHLEVBQUVILE1BQU07Ozs7Ozs7O2tGQUN6Q0ksQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7O29CQUFDLENBQWdCO29CQUFDUCxFQUFFOzs7OztBQUl2RCxDQUFDO0dBWEtGLE9BQU87O1FBQ01GLGtEQUFTOzs7QUFZNUIsK0RBQWVFLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS9baWRdL2luZGV4LmpzP2ZmNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBOYXZMaW5rIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTmF2TGluaydcclxuXHJcbmNvbnN0IGFydGljbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gICAgbGV0IHN0bkNzcyA9IFwidGV4dC1ibGFja1wiO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxOYXZMaW5rIHJvdXQ9XCJcIiB0ZXh0PVwiPCBCYWNrXCIgY3NzPXtzdG5Dc3N9Lz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibGFjayc+VGhpcyBpcyBhcnRpY2xlIHtpZH08L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJ0aWNsZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJOYXZMaW5rIiwiYXJ0aWNsZSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJzdG5Dc3MiLCJyb3V0IiwidGV4dCIsImNzcyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/article/[id]/index.js\n");

/***/ })

});