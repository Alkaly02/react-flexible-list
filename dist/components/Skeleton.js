"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./skeleton.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Skeleton = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "movie--isloading",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "loading-image"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "loading-content",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "loading-text-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "loading-main-text"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "loading-main-text"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "loading-sub-text"
        })]
      })
    })]
  });
};
var _default = Skeleton;
exports.default = _default;