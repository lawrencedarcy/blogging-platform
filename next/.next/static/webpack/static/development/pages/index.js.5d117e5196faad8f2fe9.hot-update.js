webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card/Card.js":
/*!*********************************!*\
  !*** ./components/Card/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
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
      login = _useAuth.login;

  var user = auth.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      isClicked = _useState[0],
      setIsClicked = _useState[1]; // checkReadingList(user, post._id);


  var checkList = function checkList() {
    var boo;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function checkList$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(user);

          case 2:
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(checkReadingList(user, post._id));

          case 4:
            boo = _context.sent;
            return _context.abrupt("return", boo);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

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
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.feed_card_inner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/post/".concat(post._id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_link_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 44
    }
  }, __jsx("img", {
    src: post.img_url,
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, post.title), post.tags.length > 0 && __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 14
    }
  }, post.tags.slice(0, 3).map(function (tag) {
    return __jsx("div", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 47
      }
    }, '#' + tag);
  })), __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_line,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, post.author, " "), __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_timestamp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_3___default.a, {
    format: "LL",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 20
    }
  }, post.timestamp))))))), __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_bottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/post/".concat(post._id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.votes_bottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 44
    }
  }, __jsx("img", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_upvote,
    src: "https://uploads.guim.co.uk/2020/04/15/culture.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_votes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 107
    }
  }, post.votes))), feedState === 'list' ? __jsx("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_btn,
    onClick: function onClick() {
      return deleteFromList(user, post._id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "\uD83D\uDCDA Remove") : __jsx("div", {
    className: isClicked ? _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_btn_clicked : _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card_btn,
    onClick: function onClick() {
      return clickHandler();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, isClicked ? '📚 Saved' : '📚 Save')));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_5__["withAuth"])(Card));

/***/ })

})
//# sourceMappingURL=index.js.5d117e5196faad8f2fe9.hot-update.js.map