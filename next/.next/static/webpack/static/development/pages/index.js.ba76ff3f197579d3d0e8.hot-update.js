webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Dashboard/Dashboard.js":
/*!*******************************************!*\
  !*** ./components/Dashboard/Dashboard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Feed_Feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Feed/Feed */ "./components/Feed/Feed.js");
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sidebar/Sidebar */ "./components/Sidebar/Sidebar.js");
/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard.module.css */ "./components/Dashboard/Dashboard.module.css");
/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/lawrence_wakefield/Documents/Development/codeworks/final-project/blogging-platform/next/components/Dashboard/Dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Dashboard(_ref) {
  var posts = _ref.posts,
      upVote = _ref.upVote,
      tags = _ref.tags,
      getPostByTag = _ref.getPostByTag,
      searchPosts = _ref.searchPosts;
  return __jsx("div", {
    className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.body_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tags: tags,
    getPostByTag: getPostByTag,
    searchPosts: searchPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_Feed_Feed__WEBPACK_IMPORTED_MODULE_1__["default"], {
    posts: posts,
    upVote: upVote,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=index.js.ba76ff3f197579d3d0e8.hot-update.js.map