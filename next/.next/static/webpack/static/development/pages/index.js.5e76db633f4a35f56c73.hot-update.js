webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Feed/Feed.js":
/*!*********************************!*\
  !*** ./components/Feed/Feed.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card/Card */ "./components/Card/Card.js");
/* harmony import */ var _Feed_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feed.module.css */ "./components/Feed/Feed.module.css");
/* harmony import */ var _Feed_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Feed_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FeedHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeedHeader */ "./components/Feed/FeedHeader.js");
var _jsxFileName = "/Users/lawrence_wakefield/Documents/Development/codeworks/final-project/blogging-platform/next/components/Feed/Feed.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Feed(_ref) {
  var _this = this;

  var posts = _ref.posts,
      feedState = _ref.feedState,
      addToList = _ref.addToList,
      deleteFromList = _ref.deleteFromList,
      checkReadingList = _ref.checkReadingList;
  var sortedList = posts.sort(function (a, b) {
    a = a.votes;
    b = b.votes;
    return a > b ? -1 : a < b ? 1 : 0;
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, feedState === 'tags' && __jsx(_FeedHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filter: 'tags',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 32
    }
  }), feedState === 'search' && __jsx(_FeedHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filter: 'search',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 34
    }
  }), feedState === 'list' && __jsx(_FeedHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filter: 'list',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 32
    }
  }), __jsx(InfiniteScroll, {
    dataLength: 20 //This is important field to render the next data
    ,
    next: fetchData,
    hasMore: true,
    loader: __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, "Loading..."),
    endMessage: __jsx("p", {
      style: {
        textAlign: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, "Yay! You have seen it all")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, sortedList.map(function (post) {
    return __jsx("div", {
      className: _Feed_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.feed_card,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, __jsx(_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: post.id,
      post: post,
      addToList: addToList,
      feedState: feedState,
      deleteFromList: deleteFromList,
      checkReadingList: checkReadingList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Feed);

/***/ })

})
//# sourceMappingURL=index.js.5e76db633f4a35f56c73.hot-update.js.map