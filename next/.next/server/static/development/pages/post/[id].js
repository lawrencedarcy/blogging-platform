module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Article/Footer/Footer.js":
/*!*********************************************!*\
  !*** ./components/Article/Footer/Footer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.css */ "./components/Article/Footer/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/lawrence_wakefield/Documents/Development/codeworks/final-project/blogging-platform/next/components/Article/Footer/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Footer({
  upVote,
  post
}) {
  const {
    0: vote,
    1: setVote
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getVote = localStorage.getItem(post._id);
    setVote(getVote);
  }, []);

  const clickHandler = () => {
    upVote(post._id);
    setVote(true);
    localStorage.setItem(post._id, true);
  };

  return __jsx("div", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: vote ? _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_upvote_clicked : _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_upvote,
    onClick: vote ? null : clickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, ' ', __jsx("img", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_logo,
    src: "https://uploads.guim.co.uk/2020/04/15/output-onlinepngtools.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_votes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, vote ? post.votes + 1 : post.votes)), __jsx("div", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_discuss,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#disqus",
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tweet_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, " ", __jsx("img", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_logo,
    src: "https://s3-eu-west-1.amazonaws.com/uploads-origin.guim.co.uk/2020/04/16/output-onlinepngtools_(1).png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 58
    }
  })), __jsx("a", {
    href: "#disqus",
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tweet_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Discuss"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Article/Footer/Footer.module.css":
/*!*****************************************************!*\
  !*** ./components/Article/Footer/Footer.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer_wrapper": "Footer_footer_wrapper__1jiLN",
	"footer": "Footer_footer__2hIWU",
	"footer_upvote": "Footer_footer_upvote__DJDup",
	"footer_upvote_clicked": "Footer_footer_upvote_clicked__1rtlm",
	"footer_share": "Footer_footer_share__v23DR",
	"footer_discuss": "Footer_footer_discuss__2vCCg",
	"tweet_link": "Footer_tweet_link__2PhHZ",
	"votes_wrapper": "Footer_votes_wrapper__2MqJa",
	"footer_votes": "Footer_footer_votes__1YFBn",
	"footer_logo": "Footer_footer_logo__1dJsI"
};

/***/ }),

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Article_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Article/Footer/Footer */ "./components/Article/Footer/Footer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "interweave");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(interweave__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! disqus-react */ "disqus-react");
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/lawrence_wakefield/Documents/Development/codeworks/final-project/blogging-platform/next/pages/post/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Post({
  post
}) {
  const upVote = id => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(`http://localhost:3001/posts/${id}/up`).then(function (res) {
      console.log(res.data);
    }).catch(function (error) {
      console.log(error);
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "whitespace",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "body_wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "article_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, post.title), __jsx("div", {
    className: "article_author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, post.author), __jsx("div", {
    className: "article_tags",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, post.tags.slice(0, 3).map(tag => __jsx("div", {
    className: "article_tag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "#", tag))), __jsx("div", {
    className: "article_body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
    content: post.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "article_disqus",
    id: "disqus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(disqus_react__WEBPACK_IMPORTED_MODULE_4__["DiscussionEmbed"], {
    shortname: "stagetime",
    config: ({
      url: post.id
    }, {
      identifier: post.id
    }, {
      title: post.title
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }))), __jsx(_components_Article_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    upVote: upVote,
    post: post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })));
}

Post.getInitialProps = async ({
  query
}) => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`http://localhost:3001/post/${query.id}`);
  const result = res.data;
  console.log(result);
  return {
    post: result
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/post/[id].js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lawrence_wakefield/Documents/Development/codeworks/final-project/blogging-platform/next/pages/post/[id].js */"./pages/post/[id].js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "disqus-react":
/*!*******************************!*\
  !*** external "disqus-react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("disqus-react");

/***/ }),

/***/ "interweave":
/*!*****************************!*\
  !*** external "interweave" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("interweave");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map