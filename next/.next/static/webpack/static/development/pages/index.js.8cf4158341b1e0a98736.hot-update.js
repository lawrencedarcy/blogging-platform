webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card/Card.js":
/*!*********************************!*\
  !*** ./components/Card/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.module.css */ "./components/Card/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-auth0-hooks */ "./node_modules/use-auth0-hooks/dist/index.js");
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/lawrence_wakefield/Documents/Development/codeworks/final-project/blogging-platform/next/components/Card/Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Card(_ref) {
  var _this = this;

  var post = _ref.post,
      addToList = _ref.addToList,
      auth = _ref.auth,
      feedState = _ref.feedState,
      deleteFromList = _ref.deleteFromList,
      checkReadingList = _ref.checkReadingList;

  var _useAuth = Object(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_5__["useAuth"])(),
      login = _useAuth.login,
      isLoading = _useAuth.isLoading;

  var user = auth.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isClicked = _useState[0],
      setIsClicked = _useState[1];

  var _setState = setState(),
      _setState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_setState, 2),
      onList = _setState2[0],
      setOnList = _setState2[1];

  var clickHandler = function clickHandler(e) {
    console.log(post._id);
    user ? addToList(user, post._id) : login();
    setIsClicked(true);
  };

  return __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_width,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.feed_card_inner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/post/".concat(post._id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_link_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: post.img_url,
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, post.title), post.tags.length > 0 && __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, post.tags.slice(0, 3).map(function (tag) {
    return __jsx("div", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }
    }, '#' + tag);
  })), __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_line,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, post.author, " "), __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_timestamp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_3___default.a, {
    format: "LL",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, post.timestamp))))))), __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_bottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/post/".concat(post._id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.votes_bottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_upvote,
    src: "https://uploads.guim.co.uk/2020/04/15/culture.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_votes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, post.votes))), feedState === 'list' ? __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_btn,
    onClick: function onClick() {
      return deleteFromList(user, post._id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "\uD83D\uDCDA Remove") : !isLoading && __jsx("div", {
    className: isClicked || checkReadingList(user, post._id) ? _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_btn_clicked : _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_btn,
    onClick: function onClick() {
      return clickHandler();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, isClicked && checkReadingList(user, post._id) ? '📚 Saved' : '📚 Save')));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_5__["withAuth"])(Card));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ })

})
//# sourceMappingURL=index.js.8cf4158341b1e0a98736.hot-update.js.map