webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/assert/assert.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/browserify-zlib/lib/binding.js":
false,

/***/ "./node_modules/browserify-zlib/lib/index.js":
false,

/***/ "./node_modules/buffer/index.js":
false,

/***/ "./node_modules/core-util-is/lib/util.js":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/util/support/isBufferBrowser.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/util/util.js":
false,

/***/ "./node_modules/pako/lib/utils/common.js":
false,

/***/ "./node_modules/pako/lib/zlib/adler32.js":
false,

/***/ "./node_modules/pako/lib/zlib/constants.js":
false,

/***/ "./node_modules/pako/lib/zlib/crc32.js":
false,

/***/ "./node_modules/pako/lib/zlib/deflate.js":
false,

/***/ "./node_modules/pako/lib/zlib/inffast.js":
false,

/***/ "./node_modules/pako/lib/zlib/inflate.js":
false,

/***/ "./node_modules/pako/lib/zlib/inftrees.js":
false,

/***/ "./node_modules/pako/lib/zlib/messages.js":
false,

/***/ "./node_modules/pako/lib/zlib/trees.js":
false,

/***/ "./node_modules/pako/lib/zlib/zstream.js":
false,

/***/ "./node_modules/process-nextick-args/index.js":
false,

/***/ "./node_modules/readable-stream/duplex-browser.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/readable-stream/node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/readable-stream/passthrough.js":
false,

/***/ "./node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/readable-stream/transform.js":
false,

/***/ "./node_modules/readable-stream/writable-browser.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/stream-browserify/index.js":
false,

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/util-deprecate/browser.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dashboard/Dashboard */ "./components/Dashboard/Dashboard.js");

var _jsxFileName = "/Users/lawrence_wakefield/Documents/Development/codeworks/final-project/blogging-platform/next/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function App(_ref) {
  var postList = _ref.postList,
      tags = _ref.tags,
      auth = _ref.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('normal'),
      feed = _useState2[0],
      setFeed = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setPosts(postList);
    setFeed('normal');
  }, []);

  var getPostByTag = function getPostByTag(tag) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getPostByTag$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:3001/posts/".concat(tag)).then(function (data) {
              setPosts(data.data);
              setFeed('tags');
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var searchPosts = function searchPosts(term) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function searchPosts$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:3001/posts/search/".concat(term)).then(function (data) {
              setPosts(data.data);
              setFeed('search');
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var addToList = function addToList(user, post) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addToList$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(user.nickname, post);
            _context3.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:3001/users/".concat(user.nickname)).then(function (res) {
              if (res.data[0]) {
                axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("http://localhost:3001/users/".concat(user.nickname), {
                  reading: post
                });
              } else {
                createUser(user.nickname, post);
              }
            }));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var createUser = function createUser(name, post) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function createUser$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://localhost:3001/users", {
              name: name,
              reading: post
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var getReadingList = function getReadingList(user) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getReadingList$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:3001/users/".concat(user.nickname)).then(function (res) {
              var list = res.data[0].reading;
              listHelper(list);
            }));

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, null, Promise);
  }; //part of get reading list and delete from list


  var listHelper = function listHelper(list) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function listHelper$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:3001/list", {
              params: {
                list: list
              }
            }).then(function (res) {
              setPosts(res.data);
              setFeed('list');
            }));

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var deleteFromList = function deleteFromList(user, postid) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteFromList$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("http://localhost:3001/list/".concat(user.nickname), {
              reading: postid
            }).then(function (res) {
              var list = res.data.reading;
              listHelper(list);
            }));

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var checkReadingList = function checkReadingList(user, postId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function checkReadingList$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:3001/users/".concat(user.nickname)).then(function (res) {
              var list = res.data[0].reading;
              console.log('checked the list!', list.includes(postId) ? true : false);
              return list.includes(postId) ? true : false;
            }));

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    className: "app_body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(_components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    posts: posts,
    tags: tags,
    getPostByTag: getPostByTag,
    addToList: addToList,
    searchPosts: searchPosts,
    feedState: feed,
    getReadingList: getReadingList,
    deleteFromList: deleteFromList,
    checkReadingList: checkReadingList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }));
}

App.getInitialProps = function _callee(ctx) {
  var res, tags;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3001/posts'));

        case 2:
          res = _context9.sent;
          _context9.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3001/tags'));

        case 5:
          tags = _context9.sent;
          return _context9.abrupt("return", {
            postList: res.data,
            tags: tags.data
          });

        case 7:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
false,

/***/ 4:
false

})
//# sourceMappingURL=index.js.886ba8cb0fb019bbf1a3.hot-update.js.map