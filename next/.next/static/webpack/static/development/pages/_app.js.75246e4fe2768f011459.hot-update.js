webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/NavBar/NavBar.js":
/*!*************************************!*\
  !*** ./components/NavBar/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar.module.css */ "./components/NavBar/NavBar.module.css");
/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-auth0-hooks */ "./node_modules/use-auth0-hooks/dist/index.js");
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/lawrence_wakefield/Documents/Development/codeworks/final-project/blogging-platform/next/components/NavBar/NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function NavBar() {
  var _useAuth = Object(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3__["useAuth"])(),
      isAuthenticated = _useAuth.isAuthenticated,
      isLoading = _useAuth.isLoading,
      login = _useAuth.login,
      logout = _useAuth.logout;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      pathname = _useRouter.pathname,
      query = _useRouter.query;

  return __jsx("div", {
    className: _NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nav_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 22
    }
  }, "  ", __jsx("img", {
    className: _NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo_png,
    src: "https://uploads.guim.co.uk/2020/04/15/culture.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: _NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbar_logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 60
    }
  }, "Stagetime"))), isAuthenticated && __jsx("div", {
    className: _NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbar_write,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/write",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 31
    }
  }, "Write a post"))), !isAuthenticated && __jsx("div", {
    className: _NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbar_write,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/write",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 31
    }
  }, "Write a post")))));
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=_app.js.75246e4fe2768f011459.hot-update.js.map