webpackHotUpdate("static/development/pages/post/[id].js",{

/***/ "./components/Article/Footer/Footer.js":
/*!*********************************************!*\
  !*** ./components/Article/Footer/Footer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.css */ "./components/Article/Footer/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/lawrence_wakefield/Documents/Development/codeworks/final-project/blogging-platform/next/components/Article/Footer/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Footer(_ref) {
  var upVote = _ref.upVote,
      post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      vote = _useState[0],
      setVote = _useState[1];

  var clickHandler = function clickHandler() {
    setVote === false && upVote(post._id);
    setVote(true);
  };

  return __jsx("div", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: vote ? _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_upvote_clicked : _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_upvote,
    onClick: vote ? null : clickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, ' ', __jsx("img", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_logo,
    src: "https://uploads.guim.co.uk/2020/04/15/output-onlinepngtools.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_votes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, vote ? post.votes + 1 : post.votes)), __jsx("div", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_discuss,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#disqus",
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tweet_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, " ", __jsx("img", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_logo,
    src: "https://s3-eu-west-1.amazonaws.com/uploads-origin.guim.co.uk/2020/04/16/output-onlinepngtools_(1).png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 58
    }
  })), __jsx("a", {
    href: "#disqus",
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tweet_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Discuss"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=[id].js.208d2d6fdfa7084a882d.hot-update.js.map