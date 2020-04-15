webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/Sidebar/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.module.css */ "./components/Sidebar/Sidebar.module.css");
/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-auth0-hooks */ "./node_modules/use-auth0-hooks/dist/index.js");
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/lawrence_wakefield/Documents/Development/codeworks/final-project/blogging-platform/next/components/Sidebar/Sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Sidebar(_ref) {
  var _this = this;

  var tags = _ref.tags,
      getPostByTag = _ref.getPostByTag;
  var _auth = auth,
      user = _auth.user;
  var tagsList = new Set();
  tags.map(function (arr) {
    return arr.map(function (tag) {
      return tagsList.add(tag);
    });
  });
  var tagsArr = Array.from(tagsList);

  var clickHandler = function clickHandler(evt) {
    console.log('clickhandler says', evt.target.value);
    getPostByTag(evt.target.value);
  };

  return __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "Filter by tag"), __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, tagsArr.map(function (tag) {
    return __jsx("button", {
      className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_tag,
      value: tag,
      onClick: clickHandler,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }, "#".concat(tag.toLowerCase()));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_2__["withAuth"])(Sidebar));

/***/ })

})
//# sourceMappingURL=index.js.4516132f4494082d1072.hot-update.js.map