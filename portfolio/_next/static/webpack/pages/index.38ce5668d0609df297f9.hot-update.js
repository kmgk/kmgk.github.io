webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LinkText.tsx":
/*!*********************************!*\
  !*** ./components/LinkText.tsx ***!
  \*********************************/
/*! exports provided: LinkText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkText", function() { return LinkText; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\projects\\kmgk.github.io\\portfolio_next\\components\\LinkText.tsx",
    _this = undefined;


var LinkText = function LinkText(_ref) {
  var text = _ref.text,
      link = _ref.link;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    href: link,
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, _this);
};
_c = LinkText;

var _c;

$RefreshReg$(_c, "LinkText");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LinkText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LinkText */ "./components/LinkText.tsx");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section */ "./components/Section.tsx");
/* harmony import */ var _components_SectionItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SectionItem */ "./components/SectionItem.tsx");


var _jsxFileName = "D:\\projects\\kmgk.github.io\\portfolio_next\\pages\\index.tsx",
    _this = undefined;






var Home = function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mx-auto px-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "title p-4",
        children: "Shuji Kamegaki"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Section__WEBPACK_IMPORTED_MODULE_3__["Section"], {
        title: "\u5B66\u6B74",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SectionItem__WEBPACK_IMPORTED_MODULE_4__["SectionItem"], {
          children: "\u6771\u4EAC\u5DE5\u696D\u5927\u5B66\u3000\u7269\u8CEA\u7406\u5DE5\u5B66\u9662\u6750\u6599\u7CFBB3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Section__WEBPACK_IMPORTED_MODULE_3__["Section"], {
        title: "\u8DA3\u5473",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SectionItem__WEBPACK_IMPORTED_MODULE_4__["SectionItem"], {
          children: ["\u30C8\u30E9\u30A4\u30A2\u30B9\u30ED\u30F3\uFF08", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LinkText__WEBPACK_IMPORTED_MODULE_2__["LinkText"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 30
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Section__WEBPACK_IMPORTED_MODULE_3__["Section"], {
        title: "\u5B66\u6B74",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SectionItem__WEBPACK_IMPORTED_MODULE_4__["SectionItem"], {
          children: "\u6771\u4EAC\u5DE5\u696D\u5927\u5B66\u3000\u7269\u8CEA\u7406\u5DE5\u5B66\u9662\u6750\u6599\u7CFBB3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Section__WEBPACK_IMPORTED_MODULE_3__["Section"], {
        title: "\u5B66\u6B74",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SectionItem__WEBPACK_IMPORTED_MODULE_4__["SectionItem"], {
          children: "\u6771\u4EAC\u5DE5\u696D\u5927\u5B66\u3000\u7269\u8CEA\u7406\u5DE5\u5B66\u9662\u6750\u6599\u7CFBB3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["- \u30C8\u30E9\u30A4\u30A2\u30B9\u30ED\u30F3\uFF08", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-blue-500",
          href: "https://tokyotechtri.wixsite.com/home",
          children: "\u6771\u4EAC\u5DE5\u696D\u5927\u5B66\u30C8\u30E9\u30A4\u30A2\u30B9\u30ED\u30F3\u90E8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }, _this), "\uFF09"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "- \u30BF\u30A4\u30D4\u30F3\u30B0\uFF08e-typing\u3001\u30BF\u30A4\u30D4\u30F3\u30B0\u901F\u5EA6\u6E2C\u5B9A\u3001Weather Typing\uFF09"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-teal-500 py-1 text-2xl",
        children: "\u30A4\u30F3\u30BF\u30FC\u30F3\u30B7\u30C3\u30D7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["- \u682A\u5F0F\u4F1A\u793E\u30A2\u30C3\u30C8\u30B2\u30FC\u30E0(2019/08~2020/07)\uFF1A \u30E2\u30D0\u30A4\u30EB\u30A2\u30D7\u30EA\u300C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-blue-500",
          href: "https://apps.apple.com/jp/app/%E3%82%B2%E3%83%BC%E3%83%A0%E5%8F%8B%E9%81%94%E5%8B%9F%E9%9B%86%E3%82%A2%E3%83%97%E3%83%AA-%E3%82%AB%E3%83%AB%E3%83%81%E3%83%A3/id1475195473",
          children: "\u30AB\u30EB\u30C1\u30E3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }, _this), "\u300D\u306E\u958B\u767A\u3002 \u4F7F\u7528\u6280\u8853\uFF1AFlutter, Firebase"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "- \u30AF\u30C3\u30AF\u30D1\u30C3\u30C9\u682A\u5F0F\u4F1A\u793E(2020/08/24~28)\uFF1A\u30B5\u30DE\u30FC\u30A4\u30F3\u30BF\u30FC\u30F3\u30B7\u30C3\u30D7\u3000Android\u30A2\u30D7\u30EA\u958B\u767A\u30B3\u30FC\u30B9\u306B\u53C2\u52A0\u3002"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["- \u682A\u5F0F\u4F1A\u793E\u30A8\u30A4\u30C1\u30FC\u30E0\u30D5\u30A3\u30CA\u30B8\u30FC(2020/10~\u73FE\u5728)\uFF1Aweb\u30B5\u30A4\u30C8\u300C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-blue-500",
          href: "https://a-cashing.com/",
          children: "\u30CA\u30D3\u30CA\u30D3\u30AD\u30E3\u30C3\u30B7\u30F3\u30B0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }, _this), "\u300D\u306E\u958B\u767A\u3002 \u4F7F\u7528\u6280\u8853\uFF1ARuby on Rails, typescript(React)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-teal-500 py-1 text-2xl",
        children: "\u30EA\u30F3\u30AF"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }, _this), "-", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "text-blue-500",
        href: "https://github.com/kmgk",
        children: "Github"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, _this);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5rVGV4dC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMaW5rVGV4dCIsInRleHQiLCJsaW5rIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPTyxJQUFNQSxRQUEyQixHQUFHLFNBQTlCQSxRQUE4QixPQUFvQjtBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDN0Qsc0JBQU87QUFBRyxRQUFJLEVBQUVBLElBQVQ7QUFBQSxjQUFnQkQ7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGTTtLQUFNRCxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1HLElBQVEsR0FBRyxTQUFYQSxJQUFXO0FBQUEsc0JBQ2Y7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQywyREFBRDtBQUFTLGFBQUssRUFBQyxjQUFmO0FBQUEsK0JBQ0UscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFLRSxxRUFBQywyREFBRDtBQUFTLGFBQUssRUFBQyxjQUFmO0FBQUEsK0JBQ0UscUVBQUMsbUVBQUQ7QUFBQSxzRkFBcUIscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBUUUscUVBQUMsMkRBQUQ7QUFBUyxhQUFLLEVBQUMsY0FBZjtBQUFBLCtCQUNFLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBV0UscUVBQUMsMkRBQUQ7QUFBUyxhQUFLLEVBQUMsY0FBZjtBQUFBLCtCQUNFLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLGVBY0U7QUFBQSxzRkFFRTtBQUFHLG1CQUFTLEVBQUMsZUFBYjtBQUE2QixjQUFJLEVBQUMsdUNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGLGVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJGLGVBc0JFO0FBQUcsaUJBQVMsRUFBQyw2QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRixlQXVCRTtBQUFBLDBLQUVFO0FBQ0UsbUJBQVMsRUFBQyxlQURaO0FBRUUsY0FBSSxFQUFDLDRLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCRixlQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRixlQXFDRTtBQUFBLGlMQUVFO0FBQUcsbUJBQVMsRUFBQyxlQUFiO0FBQTZCLGNBQUksRUFBQyx3QkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckNGLGVBNENFO0FBQUcsaUJBQVMsRUFBQyw2QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVDRixPQTRDc0QsR0E1Q3RELGVBNkNFO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQTZCLFlBQUksRUFBQyx5QkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURlO0FBQUEsQ0FBakI7O0tBQU1BLEk7QUFzRFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4Y2U1NjY4ZDA2MDlkZjI5N2Y5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgTGlua1RleHRQcm9wcyB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGxpbms6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtUZXh0OiBGQzxMaW5rVGV4dFByb3BzPiA9ICh7IHRleHQsIGxpbmsgfSkgPT4ge1xyXG4gIHJldHVybiA8YSBocmVmPXtsaW5rfT57dGV4dH08L2E+O1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rVGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGlua1RleHQnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbic7XG5pbXBvcnQgeyBTZWN0aW9uSXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbkl0ZW0nO1xuXG5jb25zdCBIb21lOiBGQyA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG14LWF1dG8gcHgtNCc+XG4gICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSBwLTQnPlNodWppIEthbWVnYWtpPC9oMT5cbiAgICAgIDxTZWN0aW9uIHRpdGxlPSflrabmrbQnPlxuICAgICAgICA8U2VjdGlvbkl0ZW0+5p2x5Lqs5bel5qWt5aSn5a2m44CA54mp6LOq55CG5bel5a2m6Zmi5p2Q5paZ57O7QjM8L1NlY3Rpb25JdGVtPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24gdGl0bGU9J+i2o+WRsyc+XG4gICAgICAgIDxTZWN0aW9uSXRlbT7jg4jjg6njgqTjgqLjgrnjg63jg7PvvIg8TGlua1RleHQ+PC9MaW5rVGV4dD48L1NlY3Rpb25JdGVtPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24gdGl0bGU9J+WtpuattCc+XG4gICAgICAgIDxTZWN0aW9uSXRlbT7mnbHkuqzlt6Xmpa3lpKflrabjgIDnianos6rnkIblt6XlrabpmaLmnZDmlpnns7tCMzwvU2VjdGlvbkl0ZW0+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbiB0aXRsZT0n5a2m5q20Jz5cbiAgICAgICAgPFNlY3Rpb25JdGVtPuadseS6rOW3pealreWkp+WtpuOAgOeJqeizqueQhuW3peWtpumZouadkOaWmeezu0IzPC9TZWN0aW9uSXRlbT5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxwPlxuICAgICAgICAtIOODiOODqeOCpOOCouOCueODreODs++8iFxuICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQtYmx1ZS01MDAnIGhyZWY9J2h0dHBzOi8vdG9reW90ZWNodHJpLndpeHNpdGUuY29tL2hvbWUnPlxuICAgICAgICAgIOadseS6rOW3pealreWkp+WtpuODiOODqeOCpOOCouOCueODreODs+mDqFxuICAgICAgICA8L2E+XG4gICAgICAgIO+8iVxuICAgICAgPC9wPlxuICAgICAgPHA+LSDjgr/jgqTjg5Tjg7PjgrDvvIhlLXR5cGluZ+OAgeOCv+OCpOODlOODs+OCsOmAn+W6pua4rOWumuOAgVdlYXRoZXIgVHlwaW5n77yJPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXRlYWwtNTAwIHB5LTEgdGV4dC0yeGwnPuOCpOODs+OCv+ODvOODs+OCt+ODg+ODlzwvcD5cbiAgICAgIDxwPlxuICAgICAgICAtIOagquW8j+S8muekvuOCouODg+ODiOOCsuODvOODoCgyMDE5LzA4fjIwMjAvMDcp77yaIOODouODkOOCpOODq+OCouODl+ODquOAjFxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ibHVlLTUwMCdcbiAgICAgICAgICBocmVmPSdodHRwczovL2FwcHMuYXBwbGUuY29tL2pwL2FwcC8lRTMlODIlQjIlRTMlODMlQkMlRTMlODMlQTAlRTUlOEYlOEIlRTklODElOTQlRTUlOEIlOUYlRTklOUIlODYlRTMlODIlQTIlRTMlODMlOTclRTMlODMlQUEtJUUzJTgyJUFCJUUzJTgzJUFCJUUzJTgzJTgxJUUzJTgzJUEzL2lkMTQ3NTE5NTQ3MydcbiAgICAgICAgPlxuICAgICAgICAgIOOCq+ODq+ODgeODo1xuICAgICAgICA8L2E+XG4gICAgICAgIOOAjeOBrumWi+eZuuOAgiDkvb/nlKjmioDooZPvvJpGbHV0dGVyLCBGaXJlYmFzZVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIC1cbiAgICAgICAg44Kv44OD44Kv44OR44OD44OJ5qCq5byP5Lya56S+KDIwMjAvMDgvMjR+Mjgp77ya44K144Oe44O844Kk44Oz44K/44O844Oz44K344OD44OX44CAQW5kcm9pZOOCouODl+ODqumWi+eZuuOCs+ODvOOCueOBq+WPguWKoOOAglxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIC0g5qCq5byP5Lya56S+44Ko44Kk44OB44O844Og44OV44Kj44OK44K444O8KDIwMjAvMTB+54++5ZyoKe+8mndlYuOCteOCpOODiOOAjFxuICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQtYmx1ZS01MDAnIGhyZWY9J2h0dHBzOi8vYS1jYXNoaW5nLmNvbS8nPlxuICAgICAgICAgIOODiuODk+ODiuODk+OCreODo+ODg+OCt+ODs+OCsFxuICAgICAgICA8L2E+XG4gICAgICAgIOOAjeOBrumWi+eZuuOAgiDkvb/nlKjmioDooZPvvJpSdWJ5IG9uIFJhaWxzLCB0eXBlc2NyaXB0KFJlYWN0KVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXRlYWwtNTAwIHB5LTEgdGV4dC0yeGwnPuODquODs+OCrzwvcD4teycgJ31cbiAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1ibHVlLTUwMCcgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2ttZ2snPlxuICAgICAgICBHaXRodWJcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==