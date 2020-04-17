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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1Yx3":
/***/ (function(module, exports) {

module.exports = require("disqus-react");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("LxqN");


/***/ }),

/***/ "LxqN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Article/Footer/Footer.module.css
var Footer_module = __webpack_require__("xw4T");
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);

// CONCATENATED MODULE: ./components/Article/Footer/Footer.js
var __jsx = external_react_default.a.createElement;



function Footer({
  upVote,
  post
}) {
  const {
    0: vote,
    1: setVote
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    const getVote = localStorage.getItem(post._id);
    setVote(getVote);
  }, []);

  const clickHandler = () => {
    upVote(post._id);
    setVote(true);
    localStorage.setItem(post._id, true);
  };

  return __jsx("div", {
    className: Footer_module_default.a.footer_wrapper
  }, __jsx("div", {
    className: Footer_module_default.a.footer
  }, __jsx("div", {
    className: vote ? Footer_module_default.a.footer_upvote_clicked : Footer_module_default.a.footer_upvote,
    onClick: vote ? null : clickHandler
  }, ' ', __jsx("img", {
    className: Footer_module_default.a.footer_logo,
    src: "https://uploads.guim.co.uk/2020/04/15/output-onlinepngtools.png"
  }), __jsx("div", {
    className: Footer_module_default.a.footer_votes
  }, vote ? post.votes + 1 : post.votes)), __jsx("div", {
    className: Footer_module_default.a.footer_discuss
  }, __jsx("a", {
    href: "#disqus",
    className: Footer_module_default.a.tweet_link
  }, " ", __jsx("img", {
    className: Footer_module_default.a.footer_logo,
    src: "https://s3-eu-west-1.amazonaws.com/uploads-origin.guim.co.uk/2020/04/16/output-onlinepngtools_(1).png"
  })), __jsx("a", {
    href: "#disqus",
    className: Footer_module_default.a.tweet_link
  }, "Discuss"))));
}

/* harmony default export */ var Footer_Footer = (Footer);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "interweave"
var external_interweave_ = __webpack_require__("pRBW");

// EXTERNAL MODULE: external "disqus-react"
var external_disqus_react_ = __webpack_require__("1Yx3");

// CONCATENATED MODULE: ./pages/post/[id].js
var _id_jsx = external_react_default.a.createElement;






function Post({
  post
}) {
  const upVote = id => {
    external_axios_default.a.put(`http://localhost:3001/posts/${id}/up`).then(function (res) {
      console.log(res.data);
    }).catch(function (error) {
      console.log(error);
    });
  };

  return _id_jsx("div", null, _id_jsx("div", {
    className: "whitespace"
  }), _id_jsx("div", {
    className: "body_wrapper"
  }, _id_jsx("div", {
    className: "article_title"
  }, post.title), _id_jsx("div", {
    className: "article_author"
  }, post.author), _id_jsx("div", {
    className: "article_tags"
  }, post.tags.slice(0, 3).map(tag => _id_jsx("div", {
    className: "article_tag"
  }, "#", tag))), _id_jsx("div", {
    className: "article_body"
  }, _id_jsx(external_interweave_["Markup"], {
    content: post.body
  }), _id_jsx("div", {
    className: "article_disqus",
    id: "disqus"
  }, _id_jsx(external_disqus_react_["DiscussionEmbed"], {
    shortname: "stagetime",
    config: ({
      url: post.id
    }, {
      identifier: post.id
    }, {
      title: post.title
    })
  }))), _id_jsx(Footer_Footer, {
    upVote: upVote,
    post: post
  })));
}

Post.getInitialProps = async ({
  query
}) => {
  const res = await external_axios_default.a.get(`http://localhost:3001/post/${query.id}`);
  const result = res.data;
  console.log(result);
  return {
    post: result
  };
};

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "pRBW":
/***/ (function(module, exports) {

module.exports = require("interweave");

/***/ }),

/***/ "xw4T":
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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });