webpackHotUpdate("static/development/pages/write.js",{

/***/ "./pages/write/index.js":
/*!******************************!*\
  !*** ./pages/write/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-auth0-hooks */ "./node_modules/use-auth0-hooks/dist/index.js");
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/lawrence_wakefield/Documents/Development/codeworks/final-project/blogging-platform/next/pages/write/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* import ReactQuill from 'react-quill'; 
 */

var ReactQuill = true ? __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js") : undefined;
/* https://github.com/zenoamaro/react-quill
 */



function Create(_ref) {
  var auth = _ref.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      headline = _useState2[0],
      setHeadline = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      tags = _useState3[0],
      setTags = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      image = _useState4[0],
      setImage = _useState4[1];

  var createPost = function createPost(p) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:3001/posts', {
      p: p
    }).then(function (response) {
      console.log(response);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var submitHandler = function submitHandler() {
    var combinePost = {
      headline: headline,
      tags: tags,
      body: value,
      image: image
    };
    createPost(combinePost);
    setValue('');
    setHeadline('');
    setImage('');
  };

  var changeHandler = function changeHandler(e) {
    setHeadline(e.target.value);
  };

  var tagChangeHandler = function tagChangeHandler(e) {
    setTags(e.target.value);
  };

  var imageChangeHandler = function imageChangeHandler(e) {
    setTags(e.target.value);
  };

  return __jsx("div", {
    className: "create_wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "headline_span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, "Headline:"), __jsx("input", {
    className: "create_headline",
    value: headline,
    onChange: changeHandler,
    placeholder: "Title your piece...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: "headline_span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "Tags:"), __jsx("input", {
    className: "create_tags",
    value: tags,
    onChange: tagChangeHandler,
    placeholder: "Up to four key topics, comma separated...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: "headline_span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "Image:"), __jsx("input", {
    className: "create_tags",
    value: image,
    onChange: imageChangeHandler,
    placeholder: "Add an optional image url...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: "body_span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, "Body:"), __jsx(ReactQuill, {
    theme: "snow",
    value: value,
    onChange: setValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "btn_wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }
  }, __jsx("button", {
    className: "submit_btn",
    type: "submit",
    onClick: submitHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, " Publish ")));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_2__["withLoginRequired"])(Object(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_2__["withAuth"])(Create)));

/***/ })

})
//# sourceMappingURL=write.js.5c29d64f5628e03785d6.hot-update.js.map