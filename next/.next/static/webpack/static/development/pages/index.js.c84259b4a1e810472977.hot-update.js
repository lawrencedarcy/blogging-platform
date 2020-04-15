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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-auth0-hooks */ "./node_modules/use-auth0-hooks/dist/index.js");
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/lawrence_wakefield/Documents/Development/codeworks/final-project/blogging-platform/next/components/Sidebar/Sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Sidebar(_ref) {
  var _this = this;

  var tags = _ref.tags,
      getPostByTag = _ref.getPostByTag,
      auth = _ref.auth;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      pathname = _useRouter.pathname,
      query = _useRouter.query;

  var _useAuth = Object(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3__["useAuth"])(),
      isLoading = _useAuth.isLoading,
      login = _useAuth.login,
      logout = _useAuth.logout;

  var user = auth.user; // handle tags - create a unique list to display

  var tagsList = new Set();
  tags.map(function (arr) {
    return arr.map(function (tag) {
      return tagsList.add(tag);
    });
  });
  var tagsArr = Array.from(tagsList); //handle search state 

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      term = _useState[0],
      setTerm = _useState[1];

  var clickHandler = function clickHandler(evt) {
    getPostByTag(evt.target.value);
  };

  var searchSubmit = function searchSubmit(e) {
    e.preventDefault();

    _this.props.searchMovies(_this.state.value);

    _this.setState({
      value: ''
    });

    return false;
  };

  return __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, user ? __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_img,
    src: user.picture,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, " ", user.name), __jsx("button", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_login,
    onClick: function onClick() {
      return logout({
        returnTo: 'http://localhost:3000'
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "Logout")) : __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_tagline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "Stagetime is a community of comedians."), __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 91
    }
  }, " Sign in below to write a post and join the discussion."), __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_login,
    onClick: function onClick() {
      return login({
        appState: {
          returnTo: {
            pathname: pathname,
            query: query
          }
        }
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Login")), __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("input", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_search_input,
    type: "text",
    placeholder: "Search posts...",
    onChange: function onChange() {
      return handleChange;
    },
    value: term,
    id: "searchPosts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "Filter feed by tag"), __jsx("div", {
    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
        lineNumber: 61,
        columnNumber: 25
      }
    }, "#".concat(tag.toLowerCase()));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3__["withAuth"])(Sidebar));

/***/ })

})
//# sourceMappingURL=index.js.c84259b4a1e810472977.hot-update.js.map